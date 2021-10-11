import { useState } from "react";
import "./App.css";

function App() {

  const sendData = () =>{
    fetch("/getcrop", {method =["POST"],
    body: JSON.stringify({ 
    district,
    season
  }),
}

  const districts = [
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

  const seasons = ["Kharif", "Rabi", "Whole Year"];

  return (
    <div className="App">
      <h1>AgroXpert</h1>
      <form>
        <select name="district">
          onChange={(e)=>{
            setDistrict(e.target.value);
          }}
          {districts.map((district, key) => (
            <option value={district} key={key}>
              {district}
         
            </option>
          ))}
        </select>
        
        <select name ="season">
          {seasons.map((season,key) => (<option value = {season} key={key}>
            {season}
            </option>
          ))}
        </select>
        <button>Search Crops</button>
      </form>
    </div>
  );
}


export default App;
