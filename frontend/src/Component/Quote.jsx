

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quote() {
    const [quote, setQuote] = useState({});
    const [randomMode, setRandomMode] = useState(false);

    useEffect(() => {
        fetchQuoteOfTheDay();
    }, []);

    const fetchQuoteOfTheDay = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/quotes/today');
            if (response.data && response.data.length > 0) {
                const { q: quoteText, a: authorName } = response.data[0];
                setQuote({ quote: quoteText, author: authorName });
            } else {
                console.error('Unexpected response format:', response.data);
            }
        } catch (error) {
            console.error('Error fetching quote of the day:', error);
        }
    };

    const fetchRandomQuote = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/quotes/random');
            if (response.data && response.data.length > 0) {
                const { q: quoteText, a: authorName } = response.data[0];
                setQuote({ quote: quoteText, author: authorName });
                setRandomMode(true);
            } else {
                console.error('Unexpected response format:', response.data);
            }
        } catch (error) {
            console.error('Error fetching random quote:', error);
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">{randomMode ? 'Random Quote' : 'Quote of the Day'}</h1>
            <div className="bg-gray-100 p-4 rounded-md shadow-md mb-4">
                <p className="text-lg">"{quote.quote}"</p>
                <p className="text-lg">- {quote.author}</p>
            </div>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={fetchRandomQuote}
            >
                Random Quote
            </button>
        </div>
    );
}

export default Quote;
