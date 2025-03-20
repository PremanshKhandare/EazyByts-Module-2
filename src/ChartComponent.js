import React from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { time: "19:00", value: 5458 },
  { time: "20:00", value: 5462 },
  { time: "21:00", value: 5470 },
  { time: "22:00", value: 5460 },
  { time: "23:00", value: 5468 },
];

const ChartComponent = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md h-64 sm:h-96">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="time" stroke="#6B7280" />
          <YAxis domain={["dataMin - 5", "dataMax + 5"]} stroke="#6B7280" />
          <Tooltip contentStyle={{ backgroundColor: "#F9FAFB", border: "none", color: "#1F2937" }} />
          <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
