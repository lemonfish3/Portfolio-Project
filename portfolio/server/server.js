// imports
require("dotenv").config()

const express = require('express');
const cors = require('cors');
const app = express();
const axios = require("axios");

app.use(cors());
app.use(express.json());

//routes
const queries = [
  "dog",
  "sunset",
  "mountain",
  "coffee",
  "ocean"
]

// random picker
function getRandomQuery() {
  return queries[Math.floor(Math.random() * queries.length)]
}

// get image from pexels
async function getImage(query) {
    const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${query}&per_page=1`,
        {
            headers: {
                Authorization: process.env.PEXELS_API_KEY
            }
        }
    )

    return response.data.photos[0].src.large
}

// Sample endpoint to test the server
app.get('/api/image/random', (req, res) => {
    try {
        const query = getRandomQuery()
        const imageUrl = getImage(query)

        res.json({
            imageUrl,
            caption: `Random query selected: ${query}`
    })
    } catch (error) {
        res.status(500).json({ error: "Something went wrong"})
    }
})

const Port = 5001;


app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
