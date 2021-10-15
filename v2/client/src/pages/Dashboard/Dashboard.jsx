import { useState } from "react";
import { CropSuggestion } from "../../components";

function Dashboard() {
  const [tab, setTab] = useState("Your Trackings");

  const staticTabs = [
    "Your Trackings",
    "Crop Suggestions",
    "Predict Production",
  ];
  return (
    <div className="Dashboard">
      <section className="tabs">
        <ul>
          {staticTabs.map((value, key) => (
            <li
              key={key}
              onClick={() => {
                setTab(value);
              }}
              value={value}
              className={tab === value ? "active" : ""}
            >
              {value}
            </li>
          ))}
        </ul>
      </section>
      <section className="right">
        {tab === "Crop Suggestions" ? (
          <CropSuggestion />
        ) : (
          <h1>Your Trackings</h1>
        )}
      </section>
    </div>
  );
}

export default Dashboard;
