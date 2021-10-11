from flask import Flask, json, jsonify, request
import pandas as pd
import requests

app = Flask(__name__)

data = pd.read_csv("datasets/TN_data.csv")
df = pd.DataFrame(data)


def get_distinct(col):   #param : col
     li = list(set(df[col].to_list()))
     group = df.groupby(["District_Name","Season"])
     df2 = group.apply(lambda x: x['Crop'].unique())
     return df2


def get_yield(district):
    
    df2 = get_distinct("District_Name")
    crops = df2[district]

    for crop in crops:
        area = df.loc[(df['District_Name'] == district) & (df['Crop'] == crop) & (df["Area"].notnull() )& (df["Production"].notnull() )] ["Area"].to_list()
        production = df.loc[(df['District_Name'] == district) & (df['Crop'] == crop)  & (df["Area"].notnull()) & (df["Production"].notnull())]["Production"].to_list()
        crop_yield = sum(production)/sum(area)
        
        print(crop, crop_yield)

def get_crops(district, season):

    df2 = get_distinct("District_Name")
    df2 = df2[district][season]

    crops = df2.tolist()


        
    return crops


@app.route('/getcrop',methods=["POST","GET"])
def getCrop():
    content = request.get_json()
    season = content['season']
    district = content['district']
    
    crops = get_crops(district, season)

    return jsonify({"crops": crops})
    

@app.route("/", methods=["GET"])
def index():
    return jsonify({
        "Centigrade": "Agroxpert",
        "Developed by": ["Dharundds", "DharunVS", "Ramya", "HrithikMJ"]
    })


if __name__ == "__main__":
    app.run(debug=True, port=6900)


