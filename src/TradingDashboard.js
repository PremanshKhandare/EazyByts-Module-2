import React from "react";
import ChartComponent from "./ChartComponent";
import Header from "./Header";
import MarketSummary from "./MarketSummary";
import Watchlist from "./Watchlist";

const TradingDashboard = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans flex flex-col">
      <Header />
      <main className="flex-grow p-6 overflow-hidden flex">
        <div className="flex-grow mr-4">
          <MarketSummary />
          <ChartComponent />
        </div>
        <Watchlist />
      </main>
    </div>
  );
};

export default TradingDashboard;
