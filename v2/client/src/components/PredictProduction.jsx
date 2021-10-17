import { useState } from "react";
import statik from "../assets";

function PredictProduction() {
  const [district, setDistrict] = useState("ARIYALUR");
  const [units, setUnits] = useState("Acres");
  const [crop, setCrop] = useState("Apple");
  const [area, setArea] = useState(0);

  const [result, setResult] = useState(0);

  const seasons = {
    "October-March": "Rabi",
    "July-October": "Kharif",
    "Whole Year": "Whole Year",
  };

  const areaUnits = ["Acres", "Hectares", "Sq. Miles", "Sq. Kilometers"];

  const submitForm = () => {
    const content = {
      district,
      area,
      units,
      crop,
    };

    fetch("/getproduction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    })
      .then((res) => res.json())
      .then((res) => setResult(res["result"]));
  };

  return (
    <div className="PredictProduction">
      <h1>Predict Productions</h1>

      <form
        className="tform"
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
      >
        <label>
          <p>District</p>
          <select
            name="district"
            onChange={(e) => {
              setDistrict(e.target.value);
            }}
            value={district}
          >
            {statik.districts.map((district, key) => (
              <option value={district} key={key}>
                {district.charAt(0) + district.slice(1).toLowerCase()}
              </option>
            ))}
          </select>
        </label>

        <div>
          <label>
            <p>Area</p>
            <input
              type="text"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="Area"
            />
          </label>
          <label>
            <p>Unit</p>
            <select
              name="unit"
              onChange={(e) => {
                setUnits(e.target.value);
              }}
              value={units}
            >
              {areaUnits.map((district, key) => (
                <option value={district} key={key}>
                  {district.charAt(0) + district.slice(1).toLowerCase()}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label>
          <p>Crop</p>
          <select
            name="crop"
            onChange={(e) => {
              setCrop(e.target.value);
            }}
            value={crop}
          >
            {statik.crops.map((Crop, key) => (
              <option value={Crop} key={key}>
                {Crop.charAt(0) + Crop.slice(1).toLowerCase()}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
      {result > 0 && (
        <div className="result">
          <h1>
            Predicted production <span>{result}</span>
          </h1>
        </div>
      )}
    </div>
  );
}

export default PredictProduction;
