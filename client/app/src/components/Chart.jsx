import { useEffect, useState } from "react";
import ChartBar from "./ChartBar";

function Chart({ list }) {
  const [max, setMax] = useState(0);

  useEffect(() => {
    if (list.length > 0) {
      setMax(list[0][1]);
    }
  }, [list]);

  return (
    <div className="Chart">
      {list.length > 0 &&
        list.map((val, key) => {
          return (
            <div className="ChartElement" key={`c${key}`}>
              <p>{val[0]}</p> <ChartBar len={val[1]} max={max} />
            </div>
          );
        })}
    </div>
  );
}

export default Chart;
