from flask import Flask, jsonify, request
import pandas as pd

app = Flask(__name__)


def readDisplay():
    data = pd.read_csv(
        "datasets/areaProduction.csv")
    df = pd.DataFrame(data)
    for index, row in df.iterrows():
        if 'Hot' in row["Climate"]:
            print(row.str.get('CropName'))
            break
    # print(df['Soil'])


@app.route("/", methods=["GET"])
def index():
    return jsonify({
        "Centigrade": "Agroxpert",
        "Developed by": ["Dharundds", "DharunVS", "Ramya", "HrithikMJ"]
    })


if __name__ == "__main__":
    # app.run(debug=True, port=6900)
    readDisplay()
