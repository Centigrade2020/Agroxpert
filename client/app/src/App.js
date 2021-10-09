import "./App.css";

function App() {
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

  const crops = [
    "Groundnut",
    "Arecanut",
    "Jowar",
    "Urad",
    "Apple",
    "Guar seed",
    "Bhindi",
    "Peach",
    "Snak Guard",
    "Total foodgrain",
    "Jute",
    "Dry ginger",
    "Bajra",
    "Rapeseed &Mustard",
    "Tapioca",
    "Sunflower",
    "Redish",
    "Papaya",
    "Korra",
    "Drum Stick",
    "Mango",
    "Pome Granet",
    "Pineapple",
    "Coriander",
    "Orange",
    "Cucumber",
    "Beet Root",
    "Jack Fruit",
    "Water Melon",
    "Ber",
    "Tomato",
    "Sesamum",
    "Castor seed",
    "Other Cereals & Millets",
    "Other Fresh Fruits",
    "Pulses total",
    "Cotton(lint)",
    "Moong(Green Gram)",
    "Other Citrus Fruit",
    "Niger seed",
    "Yam",
    "Sugarcane",
    "Ash Gourd",
    "Horse-gram",
    "Dry chillies",
    "Potato",
    "Rice",
    "Cashewnut",
    "Small millets",
    "Ribed Guard",
    "Tobacco",
    "Pear",
    "Lab-Lab",
    "Plums",
    "Cabbage",
    "Sannhamp",
    "Maize",
    "Other Kharif pulses",
    "Coconut",
    "Samai",
    "Litchi",
    "Other Vegetables",
    "Soyabean",
    "Garlic",
    "Varagu",
    "Turnip",
    "Arhar/Tur",
    "Carrot",
    "Sweet potato",
    "Citrus Fruit",
    "Cauliflower",
    "Cardamom",
    "Bottle Gourd",
    "Gram",
    "Black pepper",
    "Pump Kin",
    "Turmeric",
    "Ragi",
    "Wheat",
    "Banana",
    "Bitter Gourd",
    "Mesta",
    "Grapes",
    "Pome Fruit",
    "Beans & Mutter(Vegetable)",
    "Brinjal",
    "Onion",
  ];

  const seasons = ["Kharif", "Rabi", "Whole Year"];

  return (
    <div className="App">
      <h1>AgroXpert</h1>
      <form>
        <select name="district">
          {districts.map((district, key) => (
            <option value={district} key={key}>
              {district.charAt(0) + district.toLocaleLowerCase().slice(1)}
            </option>
          ))}
        </select>

        <select name="season">
          {seasons.map((season, key) => (
            <option value={season} key={key}>
              {season}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default App;
