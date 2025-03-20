import { Menu, Search } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 flex items-center justify-between text-white">
      <div className="flex items-center space-x-6">
        <span className="text-2xl font-bold">StarGem</span>
        <nav className="hidden md:flex">
          <a href="/educational-resources" className="hover:text-yellow-300 transition-colors duration-200">
            Educational Resources
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-200 text-gray-800 rounded-full py-2 px-4 pl-10 w-40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
        </div>
        <button className="bg-yellow-500 rounded-full p-2 hover:bg-yellow-600 transition-colors duration-200">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
