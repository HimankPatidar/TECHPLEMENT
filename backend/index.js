    const express = require('express');
    const axios = require('axios');
    const cors = require('cors');

    const app = express();
    const PORT =  5000;

    app.use(cors());

    app.get('/api/quotes/today', async (req, res) => {
        try {
            const response = await axios.get('https://zenquotes.io/api/today');
            res.json(response.data);
        } catch (error) {
            console.error('Error fetching quote of the day:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    });
    // app.get('/api/quotes/today', async (req, res) => {
    //     try {
    //         const response = await axios.get('https://zenquotes.io/api/today');
    //         const quoteOfTheDay = response.data[0].q; // Extracting just the quote from the response data
    //         res.json({ quote: quoteOfTheDay }); // Sending only the quote in the response
    //     } catch (error) {
    //         console.error('Error fetching quote of the day:', error);
    //         res.status(500).json({ message: 'Internal Server Error' });
    //     }
    // });
    

    app.get('/api/quotes/random', async (req, res) => {
        try {
            const response = await axios.get('https://zenquotes.io/api/random');
            res.json(response.data);
        } catch (error) {
            console.error('Error fetching random quote:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    });

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
