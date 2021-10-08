from flask import Flask, jsonify, request
import pandas as pd
import requests

app = Flask(__name__)

data = pd.read_csv("server/datasets/TN_data.csv")
df = pd.DataFrame(data)


def get_distinct():   #param : col
    #li = list(set(df[col].to_list()))
    group = df.groupby('District_Name')
    df2 = group.apply(lambda x: x['Crop'].unique())
    return df2
"""
@app.route('/getcrop/<district>/<name>')
def getCrop(district, name):
    # content = request.get_json()
    # season = content['season']
    li = []
    for i, rows in df.iterrows():
        if (name in rows['Season']) and (district in rows['District_Name']):
            li.append(rows["Crop"])
    return {f'For district,{district}, plant Crops': li}
    

@app.route("/", methods=["GET"])
def index():
    return jsonify({
        "Centigrade": "Agroxpert",
        "Developed by": ["Dharundds", "DharunVS", "Ramya", "HrithikMJ"]
    })


if __name__ == "__main__":
    app.run(debug=True, port=6900)
"""
print(get_distinct())


