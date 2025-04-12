import React from "react";
import Chart, { Props } from "react-apexcharts";

const generateData = () => {
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const todayEnd = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
  );
  const data = [];

  for (let i = 0; i < 5; i++) {
    const start = new Date(
      todayStart.getTime() -
        Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
    );
    const end = new Date(
      start.getTime() + Math.floor(Math.random() * 5) * 24 * 60 * 60 * 1000,
    );
    data.push({
      x: `Task ${i + 1}`,
      y: [start.getTime(), end.getTime()],
    });
  }
  return data;
};

const data = generateData();
const today = new Date().getTime();

const state: Props["series"] = [
  {
    data: data,
  },
];

const options: Props["options"] = {
  chart: {
    type: "rangeBar",
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  xaxis: {
    type: "datetime",
  },
  annotations: {
    xaxis: [
      {
        x: today,
        borderColor: "#00E396",
        label: {
          borderColor: "#00E396",
          style: {
            color: "#fff",
            background: "#00E396",
          },
          text: "Today",
        },
      },
    ],
  },
  tooltip: {
    x: {
      formatter: function (val) {
        return new Date(val).toLocaleDateString();
      },
    },
  },
};

export const Steam = () => {
  return (
    <>
      <div className="w-full z-20">
        <div id="chart">
          <Chart
            options={options}
            series={state}
            type="rangeBar"
            height={425}
          />
        </div>
      </div>
    </>
  );
};
