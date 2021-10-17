import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { CropSuggestion, Tracking } from "../../components";
import { useAuth0 } from "@auth0/auth0-react";

function Dashboard() {
  const { isAuthenticated } = useAuth0();

  const history = useHistory();

  useEffect(() => {
    if (!isAuthenticated) {
      history.push("/");
    }
  });

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
