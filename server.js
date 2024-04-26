// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();

// Define the port number
const PORT = process.env.PORT || 3000;

// Set up middleware to serve static files
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
