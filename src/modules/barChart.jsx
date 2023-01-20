import React from "react";
import ReactEcharts from "echarts-for-react";

export const SimpleChart = (props) => {
  const options = {
    grid: { top: 20, right: 40, bottom: 20, left: 40 },
    xAxis: {
      type: "category",
      data: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [400, 300, 350, 200, 280],
        // bar or line
        type: props.type,
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <ReactEcharts
      option={options}
      className={props.className}
      style={props.style}
    ></ReactEcharts>
  );
};