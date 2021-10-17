import React, { Component } from "react";
import CanvasJSReact from "../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class LineChart extends Component {
  constructor(props) {
    super(props);
    this.cropObj = props.obj;
    // console.log(this.cropObj);
    this.dataPoints = [];

    for (var i in props.obj) {
      this.dataPoints.push({ x: parseInt(i), y: props.obj[i] });
    }
    // console.log(this.dataPoints);
  }
  render() {
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2", // "light1", "dark1", "dark2"
      // title: {
      //   text: "Bounce Rate by Week of Year",
      // },
      axisY: {
        title: "Yield",
        includeZero: true,
        // suffix: "%",
      },
      axisX: {
        title: "Year",
        // prefix: "W",
        includeZero: true,
        interval: 2,
      },
      data: [
        {
          type: "line",
          // toolTipContent: "Week {x}: {y}%",
          dataPoints: this.dataPoints,
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default LineChart;
