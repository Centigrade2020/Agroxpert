import { useEffect, useState } from "react";
import { CropDetails } from ".";
import ChartBar from "./ChartBar";

function Chart({ dis, list }) {
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
        district: dis,
        crop,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(crop, res));
  };

  return (
    <>
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
                <ChartBar val={val[0]} dis={dis} len={val[1]} max={max} />
              </div>
            );
          })}
      </div>
      <CropDetails />
    </>
  );
}

export default Chart;
