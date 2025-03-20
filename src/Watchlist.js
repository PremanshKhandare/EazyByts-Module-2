import { TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

const watchlistItems = [
  { symbol: "NIFTY", price: 23467, change: -0.53, color: "red" },
  { symbol: "BANKNIFTY", price: 51613.35, change: -0.27, color: "red" },
  { symbol: "SPX", price: 5464.61, change: -0.16, color: "red" },
  { symbol: "BTCUSD", price: 64444, change: 0.33, color: "green" },
];

const Watchlist = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4 rounded-lg overflow-y-auto shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-blue-600">Watchlist</h3>
      <ul className="space-y-2">
        {watchlistItems.map((item) => (
          <li key={item.symbol} className="flex justify-between items-center p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-200">
            <div>
              <span className="font-medium text-gray-800">{item.symbol}</span>
              <span className="block text-sm text-gray-600">{item.price.toLocaleString()}</span>
            </div>
            <div className={`flex items-center ${item.color === "green" ? "text-green-600" : "text-red-600"}`}>
              {item.color === "green" ? <TrendingUp size={16} className="mr-1" /> : <TrendingDown size={16} className="mr-1" />}
              <span>{item.change > 0 ? "+" : ""}{item.change}%</span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Watchlist;
