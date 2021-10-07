from flask import Flask, jsonify, request
import pandas as pd

app = Flask(__name__)


# def readDisplay():
#     data = pd.read_csv(
#         "datasets/area_and_production_of_crops_kkm_2018_19.csv")
#     df = pd.DataFrame(data)
#     print(f"For climate Hot and Humid ", end=" = ")
#     for index, row in df.iterrows():
#         if 'Hot' in row["Climate"]:
#             print(
#                 f"{row['Name of the Crop']} ")


@app.route("/", methods=["GET"])
def index():
    return jsonify({
        "Centigrade": "Agroxpert",
        "Developed by": ["Dharundds", "DharunVS", "Ramya", "HrithikMJ"]
    })


if __name__ == "__main__":
    # app.run(debug=True, port=6900)
    readDisplay()
