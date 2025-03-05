import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointVals = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointVals); //spread operator will add n vals of dataPointVals arr as n args to the max function

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
