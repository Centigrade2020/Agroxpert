from flask import Flask, jsonify, request
import pandas as pd

app = Flask(__name__)


data = pd.read_csv("datasets/TN_data.csv")
df = pd.DataFrame(data)


@app.route('/getcrop/<district>/<name>')
def getCrop(district, name):
    # content = request.get_json()
    # season = content['season']
    li = []
    dist = []
    for i, rows in df.iterrows():
        if (name in rows['Season']) and (district in rows['District_Name']):
            li.append(rows["Crop"])
            dist.append(rows["District_Name"])
    return {'Crop': li, 'District': dist}


@app.route("/", methods=["GET"])
def index():
    return jsonify({
        "Centigrade": "Agroxpert",
        "Developed by": ["Dharundds", "DharunVS", "Ramya", "HrithikMJ"]
    })


if __name__ == "__main__":
    app.run(debug=True, port=6900)
