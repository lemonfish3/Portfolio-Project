// imports
require("dotenv").config()

const express = require('express');
const cors = require('cors');
const app = express();
const axios = require("axios");

const allowedOrigins = [
    'http://localhost:3000', 
    'http://localhost:5173',
    'https://joy-yang.netlify.app',
    'https://joy-yang.netlify.app/#image_api'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
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

app.post('/api/caption', async (req, res) => {
  try {
    const { imageUrl } = req.body;
    if (!imageUrl) {
      return res.status(400).json({ error: 'imageUrl is required' });
    }

    const caption = await getCaption(imageUrl); // your existing OpenAI function
    res.json({ caption });
  } catch (error) {
    console.error("Caption error:", error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to generate caption' });
  }
});

app.get('/api/image/random', async (req, res) => {
    try {
        const query = getRandomQuery()
        // calling async to get image url
        const imageUrl = await getImage(query)
        console.log(`Fetched image for query: ${query}, URL: ${imageUrl}`)
        // calling async to get caption
        // const caption = await getCaption(imageUrl)
        //console.log(`Fetched caption for image URL: ${imageUrl}, Caption: ${caption}`)

        // console.log(`Fetched image for query: ${query}, URL: ${imageUrl}`)

        res.json({
            imageUrl,
            caption: null // or omit this line entirely
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



// gemini
// const { GoogleGenerativeAI } = require("@google/generative-ai");


// async function getCaption(imageUrl) {
//     const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
//     const model = ai.getGenerativeModel({ model: "gemini-3-flash-preview" });
//     const response = await fetch(imageUrl);
//     const imageArrayBuffer = await response.arrayBuffer();
//     const base64ImageData = Buffer.from(imageArrayBuffer).toString('base64');

//     const result = await model.generateContent({
//         contents: [
//         {
//         inlineData: {
//             mimeType: 'image/jpeg',
//             data: base64ImageData,
//         },
//         },
//         { text: "Caption this image." }
//     ],
//     });

//     return result.response.text();
// }

