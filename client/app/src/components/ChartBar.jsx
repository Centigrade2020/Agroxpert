function ChartBar({ len, max }) {
  const percent = (len / max) * 100;
  return (
    <div className="ChartBar">
      <div
        className="Bar"
        style={{
          width: `${percent}%`,
          maxWidth: `calc(100% - 100px)`,
          backgroundColor: `rgb(${
            Math.round((255 * (100 - percent)) / 100) + 50
          }, ${Math.round((200 * percent) / 100) + 50}, ${
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
