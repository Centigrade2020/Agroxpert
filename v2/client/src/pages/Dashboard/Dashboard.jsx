import { useState } from "react";
import { CropSuggestion, Tracking } from "../../components";

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
        ) : tab === "Predict Production" ? (
          <h1>Predict Productions</h1>
        ) : (
          <Tracking />
        )}
      </section>
    </div>
  );
}

export default Dashboard;
