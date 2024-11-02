<script>
    function performSearch() {
        const searchTerm = document.getElementById('search-input').value;
        if (searchTerm) {
            alert("Searching for: " + searchTerm);
            // Add search functionality here, like filtering items or redirecting to a search page
        } else {
            alert("Please enter a search term.");
        }
    }
</script>


const cart = [];

document.getElementById('addToCart').addEventListener('click', function() {
    const productName = document.querySelector('.product h2').innerText;
    const productPrice = document.getElementById('price').innerText;

    const product = {
        name: productName,
        price: productPrice
    };

    cart.push(product);
    updateCart();
});

function updateCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = ''; // Clear previous cart items
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerText = `${item.name} - $${item.price}`;
        cartDiv.appendChild(itemDiv);
    });
}


// Assuming cart data is stored in localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartDiv = document.getElementById('cart');
const totalPriceDiv = document.getElementById('totalPrice');

function displayCart() {
    cartDiv.innerHTML = ''; // Clear previous cart items
    let total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerText = `${item.name} - $${item.price}`;
        cartDiv.appendChild(itemDiv);
        total += parseFloat(item.price);
    });

    totalPriceDiv.innerText = `Total Price: $${total.toFixed(2)}`;
}

// Call displayCart to show the items
displayCart();


document.getElementById('addToCart').addEventListener('click', function() {
    const productName = document.querySelector('.product h2').innerText;
    const productPrice = document.getElementById('price').innerText;

    const product = {
        name: productName,
        price: productPrice
    };

    // Retrieve cart from localStorage or initialize it
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);

    // Save updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    updateCart();
});
