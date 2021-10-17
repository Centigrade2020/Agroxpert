import React, { useEffect, useState } from "react";
import statik from "../assets";
import { useAuth0 } from "@auth0/auth0-react";

function Tracking() {
  const { user, isAuthenticated } = useAuth0();

  const [tstate, setTstate] = useState(false);
  const [tracks, setTracks] = useState([]);

  function getTracks() {
    fetch("/gettracks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        auth_id: user.sub,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.tracks);
        setTracks(res.tracks);
      });
  }

  useEffect(() => {
    if (isAuthenticated) {
      getTracks();
    }
  }, [isAuthenticated, user]);

  const areaUnits = ["Acres", "Hectares", "Sq. Miles", "Sq. Kilometers"];

  const Tracks = () => {
    const deleteTrack = (trackId) => {
      fetch("/deletetrack", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: trackId,
          auth_id: user.sub,
        }),
      });
    };
    return (
      <div className="Tracks">
        {tracks.map((track, key) => (
          <div className="track" key={key}>
            <label>
              <p>Title</p>
              <h2>{track["title"]}</h2>
            </label>
            <label>
              <p>Crop</p>
              <h2>{track["crop"]}</h2>
            </label>
            <label>
              <p>District</p>
              <h2>
                {track["district"].charAt(0) +
                  track["district"].slice(1).toLowerCase()}
              </h2>
            </label>
            <label>
              <p>Area</p>
              <h2>
                {track["area"]} {track["units"]}
              </h2>
            </label>

            <button>View</button>
            <button onClick={() => deleteTrack(track["_id"])}>Delete</button>
          </div>
        ))}
      </div>
    );
  };

  const AddTrackingForm = () => {
    const [district, setDistrict] = useState("ARIYALUR");
    const [title, setTitle] = useState("Untitled");
    const [units, setUnits] = useState("Acres");
    const [crop, setCrop] = useState("Apple");
    const [area, setArea] = useState(0);

    const submitForm = () => {
      const content = {
        auth_id: user.sub,
        district,
        crop,
        title,
        area,
        units,
      };
      fetch("/addtracking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res.res);
          setTstate(false);
        });
    };

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

          <form
            className="tform"
            onSubmit={(e) => {
              e.preventDefault();
              submitForm();
            }}
          >
            <label>
              <p>Title</p>
              <input
                type="text"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
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
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="Tracking">
        <button onClick={() => setTstate(true)}>Add Track</button>

        <Tracks />
      </div>
      {tstate && <AddTrackingForm />}
    </>
  );
}

export default Tracking;
