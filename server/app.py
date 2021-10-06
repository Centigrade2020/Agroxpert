from flask import Flask, jsonify, request, render_template

app = Flask(__name__)

@app.route("/getdata", methods=["GET"])
def index():
    # return jsonify({
    #     "Centigrade": "Agroxpert",
    #     "Developed by": ["Dharundds", "DharunVS","Ramya", "HrithikMJ"]
    # })

    return jsonify({"crops": ["rice", "wheat"]})



if __name__ == "__main__":
    app.run(debug=True, port=6900)

