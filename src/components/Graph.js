"use client";
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    date: "28/4",
    pv: 92,
  },
  {
    date: "30/4",

    pv: 100,
  },
  {
    date: "02/5",

    pv: 98,
  },
  {
    date: "05/5",

    pv: 90,
  },
  {
    date: "11/5",

    pv: 84,
  },
  {
    date: "15/5",

    pv: 82,
  },
  {
    date: "16/5",
    pv: 80,
  },
  {
    date: "22/5",
    pv: 80,
  },
];

const Graph = () => {
  return (
    <div className="flex justify-center items-center mt-6">
      <div className="graphContainer">
        <ResponsiveContainer width={'100%'}>
          <BarChart data={data}>
            <XAxis dataKey="date" tickCount={10} />
            <YAxis unit={"%"}/>
            <Bar
              dataKey="pv"
              fill="#5A92CB"
              maxBarSize={12}
              activeBar={<Rectangle fill="pink" stroke="blue" />}
          
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Graph;
