import { useState, useEffect } from "react";
import { CropDetails } from "../components";
import LineChart from "./LineChart";

function CropSuggestion() {
  const [district, setDistrict] = useState("TIRUPPUR"); //removed district
  const [season, setSeason] = useState("Kharif");

  const [tabState, setTabState] = useState(false);

  const [crops, setCrops] = useState([]);

  const [crop, setCrop] = useState("");
  const [cropObj, setCropObj] = useState({});

  const sendData = async () => {
    await fetch("/getcrops", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        district,
        season,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCrops(res);
      });
  };

  const districts0 = [
    "TIRUPPUR",
    "TIRUVANNAMALAI",
    "TIRUCHIRAPPALLI",
    "PUDUKKOTTAI",
    "SALEM",
    "ARIYALUR",
    "KANCHIPURAM",
    "NAGAPATTINAM",
    "TIRUNELVELI",
    "PERAMBALUR",
    "KRISHNAGIRI",
    "THE NILGIRIS",
    "COIMBATORE",
    "THIRUVARUR",
    "VELLORE",
    "DINDIGUL",
    "MADURAI",
    "KARUR",
    "SIVAGANGA",
    "CUDDALORE",
    "THENI",
    "KANNIYAKUMARI",
    "RAMANATHAPURAM",
    "DHARMAPURI",
    "NAMAKKAL",
    "THIRUVALLUR",
    "ERODE",
    "TUTICORIN",
    "THANJAVUR",
    "VIRUDHUNAGAR",
    "VILLUPURAM",
  ];

  const districts = districts0.sort();

  const seasons = ["Kharif", "Rabi", "Whole Year"];

  const Chart = ({ district, list }) => {
    const [max, setMax] = useState(0);

    useEffect(() => {
      if (list.length > 0) {
        setMax(list[0][1]);
      }
    }, [list]);

    const getCrop = async (crop) => {
      await fetch("/getcrop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          district,
          crop,
        }),
      })
        .then((res) => res.json())
        .then((res) => console.log(crop, res));
    };

    return (
      <div className="Chart">
        {list.length > 0 &&
          list.map((val, key) => {
            return (
              <div className="ChartElement" key={`c${key}`}>
                <p
                  onClick={() => {
                    getCrop(val[0]);
                  }}
                >
                  {val[0]}
                </p>
                <ChartBar
                  val={val[0]}
                  district={district}
                  len={val[1]}
                  max={max}
                />
              </div>
            );
          })}
      </div>
    );
  };

  const ChartBar = ({ len, max, val, district }) => {
    const percent = (len / max) * 100;

    const getCrop = async (crop) => {
      await fetch("/getcrop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          district,
          crop,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(crop, res);
          setCrop(crop);
          setCropObj(res);
          setTabState(true);
        });
    };

    return (
      <div
        className="ChartBar"
        onClick={() => {
          getCrop(val);
        }}
      >
        <div
          className="Bar"
          style={{
            width: `${percent}%`,
            maxWidth: `calc(100% - 100px)`,
            backgroundColor: `rgb(${
              Math.round((255 * (100 - percent)) / 100) + 50
            }, ${Math.round((255 * percent) / 100) + 50}, ${
              Math.round((0 * percent) / 100) + 50
            })`,
          }}
        >
          <p>
            {Math.round(len * 100) / 100}
            {/* {percent} */}
          </p>
        </div>
      </div>
    );
  };

  const CropDetails = () => {
    return (
      <div className="CropDetails">
        <div className="cdContainer">
          <div className="cross" onClick={() => setTabState(false)}>
            <div className="line1"></div>
            <div className="line2"></div>
          </div>
          <h1>{crop}</h1>

          <div className="cdContent">
            <p style={{ color: "whitesmoke" }}>{JSON.stringify(cropObj)}</p>
            <LineChart />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="CropSuggestion">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendData();
        }}
      >
        <select
          name="district"
          onChange={(e) => {
            setDistrict(e.target.value);
          }}
        >
          {districts.map((district, key) => (
            <option value={district} key={key}>
              {district.charAt(0) + district.slice(1).toLowerCase()}
            </option>
          ))}
        </select>

        <select
          name="season"
          onChange={(e) => {
            setSeason(e.target.value);
          }}
        >
          {seasons.map((season, key) => (
            <option value={season} key={key}>
              {season}
            </option>
          ))}
        </select>
        <button>Search Crops</button>
      </form>

      <Chart district={district} list={crops} />
      {tabState && <CropDetails />}
    </div>
  );
}

export default CropSuggestion;
