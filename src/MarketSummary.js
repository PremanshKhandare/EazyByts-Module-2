import React from "react";

const indices = [
  { name: "S&P 500", value: 5464.61, change: -0.16, color: "red", flag: "🇺🇸" },
  { name: "Nasdaq 100", value: 19700.43, change: -0.26, color: "red", flag: "🇺🇸" },
  { name: "Dow 30", value: 39150.34, change: 0.04, color: "green", flag: "🇺🇸" },
  { name: "Nikkei 225", value: 38596.40, change: -0.09, color: "red", flag: "🇯🇵" },
];

const MarketSummary = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-blue-600">Market Summary</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {indices.map((index) => (
          <div key={index.name} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600 flex items-center">
                <span className="mr-2 text-lg">{index.flag}</span>
                {index.name}
              </span>
              <span className={`text-xs px-2 py-1 rounded ${index.color === "green" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                {index.change > 0 ? "+" : ""}
                {index.change}%
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-800">{index.value.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketSummary;
