import React from "react";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Patrick",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Línguas",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Fisica",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Quimica",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Matematica",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "Geografia",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

function GraficoRecharts() {
  return (
    <div className="w-120 h-100">
      <h1>GraficoRecharts</h1>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GraficoRecharts;
