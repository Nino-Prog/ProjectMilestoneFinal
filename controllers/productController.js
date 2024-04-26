const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Endpoint to get all products
router.get('/products', productController.getAllProducts);

// Endpoint to get a single product by ID
router.get('/products/:id', productController.getProductById);

module.exports = router;

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).send({ message: "Error fetching products", error: error });
    }
};

// Get a single product by ID from the database
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).send({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).send({ message: "Error fetching product", error: error });
    }
};