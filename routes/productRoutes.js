const products = [
    { id: 1, name: "Eagle & Letter Print Quarter Zip Sweatshirt", description: "Comfortable and stylish.", category: "Clothing", image_path: "images/Eagle-_-Letter-Print-Quarter-Zip-Sweatshirt.jpg", price: 50.00 },
    { id: 2, name: "Men's Stylish Loose Alphabets Pattern Knitted Sweater", description: "Ideal for winter.", category: "Clothing", image_path: "Images/Men_s-Stylish-Loose-Alphabets-Pattern-Knitted-Sweater.jpg", price: 40.00 },
    { id: 3, name: "Trendy Goose Pattern Knitted Sweater", description: "Perfect for a casual day out.", category: "Clothing", image_path: "images/Men_s-Trendy-Goose-Pattern-Knitted-Sweater.jpg", price: 45.00 },
    { id: 4, name: "Painting Pattern Knitted Sweater", description: "Artistic and cozy.", category: "Clothing", image_path: "images/Painting-Pattern-Knitted-Sweater.jpg", price: 55.00 },
    { id: 5, name: "Retro Knitted Color Block Sweater", description: "Retro vibes with modern fit.", category: "Clothing", image_path: "images/Retro-Knitted-Color-Block-Sweater.jpg", price: 60.00 }
];

// Function to get all products
exports.getAllProducts = (req, res) => {
    console.log("Fetching all products");
    res.json(products);  // Sending JSON response containing all products
};

// Function to get a single product by ID
exports.getProductById = (req, res) => {
    console.log(`Fetching product with ID: ${req.params.id}`);
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (product) {
        res.json(product);  // Sending JSON response containing the product
    } else {
        res.status(404).send({ message: "Product not found" });  // Sending a 404 response if no product is found
    }
};
