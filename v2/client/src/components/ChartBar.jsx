import { CropDetails } from "../components";

function ChartBar({ len, max, val, dis }) {
  const percent = (len / max) * 100;

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
}

export default ChartBar;
