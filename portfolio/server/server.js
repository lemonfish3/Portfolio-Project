// imports
require("dotenv").config()

const express = require('express');
const cors = require('cors');
const app = express();
const axios = require("axios");

app.use(cors());
app.use(express.json());

// routes
const queries = [
  "dog",
  "sunset",
  "mountain",
  "coffee",
  "ocean"
]

const AI_PROMPT = "Write image caption for the following image:"

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

// get image caption from openai
async function getCaption(imageUrl) {
    const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
            model: "gpt-4o-mini",
            messages: [
                {
                    "role": "user",
                    "content": [
                    {
                        "type": "text",
                        "text": AI_PROMPT
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                        "url": imageUrl
                        }
                    }
                    ]
                }
            ],
            max_tokens: 50
        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
            }
        }
    )

    return response.data.choices[0].message.content
}



app.get('/api/image/random', async (req, res) => {
    try {
        const query = getRandomQuery()
        // calling async to get image url
        const imageUrl = await getImage(query)
        console.log(`Fetched image for query: ${query}, URL: ${imageUrl}`)
        // calling async to get caption
        const caption = await getCaption(imageUrl)
        console.log(`Fetched caption for image URL: ${imageUrl}, Caption: ${caption}`)

        // console.log(`Fetched image for query: ${query}, URL: ${imageUrl}`)

        res.json({
            imageUrl,
            caption
        })
    } catch (error) {
        console.error("FULL ERROR:", error.response?.data || error.message)
        res.status(500).json({ error: "Something went wrong" })
    }
})

const Port = 5001;


app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
