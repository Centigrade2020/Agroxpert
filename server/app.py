from flask import Flask, jsonify, request
import pandas as pd
import requests

app = Flask(__name__)

data = pd.read_csv("server/datasets/TN_data.csv")
df = pd.DataFrame(data)


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

