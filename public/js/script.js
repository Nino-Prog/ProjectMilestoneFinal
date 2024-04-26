document.addEventListener('DOMContentLoaded', function() {
    fetchProducts();
    setupCart();
});

function fetchProducts() {
    fetch('/api/products') // Adjust the URL to match your API endpoint
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(products => {
            const productsContainer = document.querySelector('.product-list .container');
            productsContainer.innerHTML = ''; // Clear out any existing content
            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'product-item';
                productElement.innerHTML = `
                    <div class="product-image">
                        <img src="${product.imagePath}" alt="${product.name}">
                    </div>
                    <div class="product-details">
                        <h3>${product.name}</h3>
                        <p class="price">$${product.price}</p>
                        <button class="btn add-to-cart" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
                    </div>
                `;
                productsContainer.appendChild(productElement);
            });
            attachAddToCartEventListeners();
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}

function attachAddToCartEventListeners() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const name = this.dataset.name;
            const price = this.dataset.price;
            addItemToCart(name, price);
            updateTotal();
        });
    });
}

function addItemToCart(name, price) {
    const cartBody = document.querySelector('.cart-items tbody');
    const cartRow = document.createElement('tr');
    cartRow.innerHTML = `
        <td>${name}</td>
        <td>$${price}</td>
        <td><button class="btn remove-item">Remove</button></td>
    `;
    cartBody.appendChild(cartRow);

    cartRow.querySelector('.remove-item').addEventListener('click', function() {
        removeItemFromCart(cartRow);
    });
}

function updateTotal() {
    const totalDisplay = document.querySelector('.cart-total p');
    let total = 0;
    document.querySelectorAll('.cart-items tbody tr').forEach(row => {
        const price = parseFloat(row.cells[1].textContent.replace('$', ''));
        total += price;
    });
    totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}

function removeItemFromCart(row) {
    row.remove();
    updateTotal();
}

function setupCart() {
    
}






