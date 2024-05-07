import React, { useState } from "react";
import "./App.css";
import NavBar from "./Component/Navbar";
import Quote from "./Component/Quote";
import axios from "axios";
import Author from "./Component/Author";

function App() {
  const [authorQuotes, setAuthorQuotes] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchTerm) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/quotes/by-author?author=${searchTerm}`
      );
      setAuthorQuotes(response.data);
      setSelectedAuthor(searchTerm);
    } catch (error) {
      console.error("Error searching for quotes:", error);
      setError(
        "An error occurred while searching for quotes. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar onSearch={handleSearch} />
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
      {error && <div>Error: {error}</div>}
      {!loading && !error && (
        <>
          {selectedAuthor ? (
            <Author author={selectedAuthor} quotes={authorQuotes} />
          ) : (
            <Quote />
          )}
        </>
      )}
    </>
  );
}

export default App;
