import React from // , { Component }
"react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import FusionCharts from "fusioncharts";
// import Charts from "fusioncharts/fusioncharts.charts";
// import ReactFC from "react-fusioncharts";
// import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

// const chartConfigs = {
//   type: "column2d",
//   width: 600,
//   height: 400,
//   dataFormat: "json",
//   dataSource: {
//     /* see data tab */
//   },
// };

// class Chart extends Component {
//   render() {
//     return <ReactFC {...chartConfigs} />;
//   }
// }
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // <Chart />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
