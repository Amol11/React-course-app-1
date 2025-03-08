import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValsArr = props.dataPoints.map((dataPoint) => dataPoint.value); //extract just val from props.datapoint & put inside an arr
  const totalMax = Math.max(...dataPointValsArr); //spread operator will add n vals of dataPointVals arr as n args to the max function

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
