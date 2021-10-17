import React, { useState } from "react";
import statik from "../assets";

function Tracking() {
  const [tstate, setTstate] = useState(false);
  const [district, setDistrict] = useState("ARIYALUR");
  const [title, setTitle] = useState("Untitled");
  const [units, setUnits] = useState("Acres");
  const [crop, setCrop] = useState("Apple");
  const [area, setArea] = useState(0);

  const areaUnits = ["Acres", "Hectares", "Sq. Miles", "Sq. Kilometers"];

  const AddTrackingForm = () => {
    return (
      <div className="AddTrackingForm">
        <div className="tContainer">
          <div
            className="cross"
            onClick={() => {
              setTstate(false);
            }}
          >
            <div className="line1"></div>
            <div className="line2"></div>
          </div>
          <h1>{}</h1>

          <form className="tform">
            <label>
              <p>Title</p>
              <input
                type="text"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                // value={title}
                placeholder="Title"
              />
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

            <label>
              <p>Crop</p>
              <select
                name="crop"
                onChange={(e) => {
                  setCrop(e.target.value);
                }}
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
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="Tracking">
        <button onClick={() => setTstate(true)}>Plus</button>
      </div>
      {tstate && <AddTrackingForm />}
    </>
  );
}

export default Tracking;
