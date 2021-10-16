from flask import Flask, json, jsonify, request
import pandas as pd

app = Flask(__name__)



data = pd.read_csv("datasets/data.csv")
df = pd.DataFrame(data)


def get_distinct(col):  # param : col
    li = list(set(df[col].to_list()))
    group = df.groupby(["District_Name", "Season"])
    df2 = group.apply(lambda x: x['Crop'].unique())
    return df2


def get_yield(district, crops):

    df2 = get_distinct("District_Name")
    dict1 = {}

    for crop in crops:
        area = df.loc[(df["District_Name"] == district) & (df["Crop"] == crop) & (
            df["Area"].notnull()) & (df["Production"].notnull())]["Area"].to_list()
        production = df.loc[(df["District_Name"] == district) & (df["Crop"] == crop) & (
            df["Area"].notnull()) & (df["Production"].notnull())]["Production"].to_list()
        if len(area) != 0:
            crop_yield = sum(production)/sum(area)
            if crop_yield > 0:
                dict1[crop] = crop_yield

    dict2 = sorted(dict1.items(), key=lambda item: item[1], reverse=True)
    return (dict2)


def get_yield_yearwise(district, crop):
    years = [1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004,
             2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013]
    yld_yearwise = {}
    for year in years:
        area = df.loc[(df["District_Name"] == district) & (df["Crop"] == crop) & (
            df["Area"].notnull()) & (df["Production"].notnull()) & (df["Crop_Year"] == year)]["Area"].to_list()
        production = df.loc[(df["District_Name"] == district) & (df["Crop"] == crop) & (
            df["Area"].notnull()) & (df["Production"].notnull()) & (df["Crop_Year"] == year)]["Production"].to_list()
        if len(area) != 0:
            crop_yield = production[0]/area[0]
            yld_yearwise[year] = crop_yield
    return yld_yearwise


def get_crops(district, season):

    df2 = get_distinct("District_Name")
    df2 = df2[district][season]
    crops = df2.tolist()
    return crops


@app.route('/getcrops', methods=["POST", "GET"])
def getCrops():
    content = request.get_json()
    season = content['season']
    district = content['district']
    crops = get_crops(district, season)
    yld = get_yield(district, crops)
    return jsonify(yld)


@app.route('/getcrop', methods=["POST", "GET"])
def getCrop():
    content = request.get_json()
    district = content['district']
    crop = content['crop']
    yld = get_yield_yearwise(district, crop)

    return jsonify(yld)


@app.route("/", methods=["GET"])
def index():
    return jsonify({
        "Centigrade": "Agroxpert",
        "Developed by": ["DharunC << VS", "DharunLEGEND", "Ramya", "HrithikMJ"]
    })


if __name__ == "__main__":
    app.run(debug=True, port=6900)
