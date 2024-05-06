

import React, { useState } from 'react'
import './App.css'
import  NavBar  from './Component/Navbar'
import Quote from './Component/Quote'
import axios from 'axios'

function App() {
  const [authorQuotes, setAuthorQuotes] = useState([]);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/quotes/author/${searchTerm}`);
      setAuthorQuotes(response.data);
    } catch (error) {
      console.error('Error searching for quotes:', error);
    }
  };

  return (
    <>
     <NavBar onSearch={handleSearch}/>
     {authorQuotes.length > 0 ? (
       <div className="container mx-auto mt-8">
         <h1 className="text-3xl font-bold mb-4">Quotes by {authorQuotes[0].author}</h1>
         {authorQuotes.map((quote, index) => (
           <div key={index} className="bg-gray-100 p-4 rounded-md shadow-md mb-4">
             <p className="text-lg">"{quote.quote}"</p>
             <p className="text-lg">- {quote.author}</p>
           </div>
         ))}
       </div>
     ) : (
       <Quote />
     )}
    </>
  )
}

export default App
