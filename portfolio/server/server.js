// Server that handles images and captions API requests 
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


// Sample endpoint to test the server
app.get('/', (req, res) => {
    res.send('Hello from the server!');
})

const Port = 5001;


app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
