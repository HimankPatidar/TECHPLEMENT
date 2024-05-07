


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Quote.css'; // Import custom CSS file for styling

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
        <div className="containerQuote">
            <div className="quote-card">
                <h1 className="quote-heading">{randomMode ? 'Random Quote' : 'Quote of the Day'}</h1>
                <div className="quote-content">
                    <p className="quote-text">"{quote.quote}"</p>
                    <p className="author-name">- {quote.author}</p>
                </div>
                <button className="random-button" onClick={fetchRandomQuote}>Random Quote</button>
            </div>
        </div>
    );
}

export default Quote;
