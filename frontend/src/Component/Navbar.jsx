import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./NavBar.css";

function NavBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    onSearch(searchTerm);
    setSearchTerm("");
    navigate(`/quote-of-the-day?author=${searchTerm}`); // Dynamic URL with author query param
  };

  const goToQuoteOfTheDay = () => {
    navigate("/quote-of-the-day");
  };

  return (
    <nav className="navbar bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-4 flex justify-between items-center">
      <div className="flex items-center text-white" onClick={goToQuoteOfTheDay}>
        <span className="text-xl font-semibold mr-4 cursor-pointer">
          <span className="logo-text">Quote</span>
          <span className="text-yellow-400">Of</span>TheDay
        </span>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by author"
          className="border border-gray-300 px-12 py-2 rounded-md ml-2 w-96"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch
          className="search-icon text-black cursor-pointer mr-2"
          onClick={handleSearch}
        />
      </div>

      <div className="sidebar"></div>
    </nav>
  );
}

export default NavBar;
