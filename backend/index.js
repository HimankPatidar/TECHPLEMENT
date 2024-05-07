const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

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

app.get('/api/quotes/random', async (req, res) => {
    try {
        const response = await axios.get('https://zenquotes.io/api/random');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching random quote:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get("/api/quotes/by-author", async (req, res) => {
    try {
        const { author } = req.query;
        const response = await axios.get(`https://api.quotable.io/authors?name=${author}`);
        const data = response.data;
        console.log(data);
        if (data && data.results && data.results.length > 0) {
            const authorId = data.results[0]._id;
            const quotesResponse = await axios.get(`https://api.quotable.io/quotes?authorId=${authorId}`);
            const quotesData = quotesResponse.data;
            res.json(quotesData.results);
        } else {
            console.error('Error: Unable to fetch quotes by author.');
            res.status(404).json({ error: 'Quotes not found for this author' });
        }
    } catch (error) {
        console.error('Error fetching quotes by author:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

