const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the public directory
app.use(express.static('public'));

// Mount the product routes at the '/api' path
app.use('/api', productRoutes);

// Home route (can redirect to an actual HTML file in public, if needed)
app.get('/', (req, res) => {
    res.send("Welcome to the Vintage Treasures API");
});

// Set the server to listen on a port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Error handling middleware (optional, for better error responses)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
