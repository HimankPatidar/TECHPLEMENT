import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quote() {
    const [quote, setQuote] = useState({});
    const [type, setType] = useState('today'); 
    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = async () => {
        let url = '';

        if (type === 'today') {
            url = 'http://localhost:5000/api/quotes/today';
        } else if (type === 'random') {
            url = 'http://localhost:5000/api/quotes/random';
        }

        try {
            const response = await axios.get(url);
            setQuote(response.data);
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    };

    const handleRandomClick = () => {
        setType('random'); 
        fetchQuote(); 
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">{type === 'today' ? 'Quote of the Day' : 'Random Quote'}</h1>
            <div className="bg-gray-100 p-4 rounded-md shadow-md mb-4">
                <p className="text-lg">{quote.quote} - {quote.author}</p>
            </div>
            {type !== 'random' && (
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md" onClick={handleRandomClick}>
                    Get Random Quote
                </button>
            )}
        </div>
    );
}

export default Quote;
