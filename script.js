// Product Data
const products = [
    // Butter
    {
        id: 1,
        name: "Homemade Apple Butter",
        category: "butter",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400",
        description: "Smooth and spiced apple butter, slow-cooked to perfection"
    },
    {
        id: 2,
        name: "Pumpkin Butter",
        category: "butter",
        price: 9.49,
        image: "https://images.unsplash.com/photo-1509005084666-3cbc75184cbb?w=400",
        description: "Seasonal pumpkin butter with warm spices"
    },
    
    // Fruit
    {
        id: 3,
        name: "Mixed Fruit Preserves",
        category: "fruit",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400",
        description: "Delicious blend of seasonal fruits preserved at peak ripeness"
    },
    
    // Garlic
    {
        id: 4,
        name: "Roasted Garlic Spread",
        category: "garlic",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1553024535-5e8a4e9e3af5?w=400",
        description: "Rich roasted garlic spread perfect for bread or cooking"
    },
    
    // Jams
    {
        id: 5,
        name: "Strawberry Jam",
        category: "jams",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400",
        description: "Sweet and delicious strawberry jam made with fresh berries"
    },
    {
        id: 6,
        name: "Blueberry Jam",
        category: "jams",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784acc?w=400",
        description: "Rich blueberry jam bursting with flavor"
    },
    {
        id: 7,
        name: "Raspberry Jam",
        category: "jams",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?w=400",
        description: "Tart and sweet raspberry jam with whole berries"
    },
    {
        id: 8,
        name: "Peach Jam",
        category: "jams",
        price: 9.49,
        image: "https://images.unsplash.com/photo-1629828874514-944d8c4e2c1b?w=400",
        description: "Summer peaches preserved to perfection"
    },
    
    // Ketchup
    {
        id: 9,
        name: "Homemade Tomato Ketchup",
        category: "ketchup",
        price: 7.49,
        image: "https://images.unsplash.com/photo-1598166615297-bbcbc10e6d1b?w=400",
        description: "Classic ketchup made from fresh tomatoes, no preservatives"
    },
    
    // Misc
    {
        id: 10,
        name: "Honey",
        category: "misc",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784acc?w=400",
        description: "Pure local honey from nearby farms"
    },
    
    // Nuts
    {
        id: 11,
        name: "Candied Pecans",
        category: "nuts",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400",
        description: "Sweet and crunchy candied pecans"
    },
    {
        id: 12,
        name: "Spiced Almonds",
        category: "nuts",
        price: 11.49,
        image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=400",
        description: "Roasted almonds with secret spice blend"
    },
    
    // Olives
    {
        id: 13,
        name: "Marinated Olives",
        category: "olives",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1452847121524-3d3141b4e8f4?w=400",
        description: "Mediterranean olives in herb-infused oil"
    },
    
    // Pasta Sauce
    {
        id: 14,
        name: "Marinara Sauce",
        category: "pasta sauce",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400",
        description: "Classic Italian marinara with fresh herbs"
    },
    {
        id: 15,
        name: "Roasted Garlic Tomato Sauce",
        category: "pasta sauce",
        price: 9.49,
        image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=400",
        description: "Rich tomato sauce with roasted garlic"
    },
    
    // Pickles
    {
        id: 16,
        name: "Dill Pickles",
        category: "pickles",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1589621316382-008455b857cd?w=400",
        description: "Crispy dill pickles with garlic and herbs"
    },
    {
        id: 17,
        name: "Bread & Butter Pickles",
        category: "pickles",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1548690596-b8b4329c0dcc?w=400",
        description: "Sweet and tangy bread & butter pickles"
    },
    {
        id: 18,
        name: "Spicy Pickle Spears",
        category: "pickles",
        price: 8.49,
        image: "https://images.unsplash.com/photo-1589621316382-008455b857cd?w=400",
        description: "Hot and spicy pickle spears with jalapeños"
    },
    
    // Quail Eggs
    {
        id: 19,
        name: "Pickled Quail Eggs",
        category: "quail eggs",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400",
        description: "Delicate pickled quail eggs"
    },
    
    // Queso
    {
        id: 20,
        name: "Jalapeño Queso Dip",
        category: "queso",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?w=400",
        description: "Creamy cheese dip with jalapeños"
    },
    
    // Relish
    {
        id: 21,
        name: "Sweet Pickle Relish",
        category: "relish",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1571490843194-2f59d64e5dc7?w=400",
        description: "Classic sweet pickle relish for hot dogs and burgers"
    },
    {
        id: 22,
        name: "Corn Relish",
        category: "relish",
        price: 7.49,
        image: "https://images.unsplash.com/photo-1551462147-37ec033a2dd5?w=400",
        description: "Sweet corn relish with peppers"
    },
    
    // Salad Dressings
    {
        id: 23,
        name: "Ranch Dressing",
        category: "salad dressings",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        description: "Creamy homemade ranch dressing"
    },
    {
        id: 24,
        name: "Balsamic Vinaigrette",
        category: "salad dressings",
        price: 8.49,
        image: "https://images.unsplash.com/photo-1604909052429-e136f8b0877b?w=400",
        description: "Tangy balsamic vinaigrette with herbs"
    },
    
    // Salsa
    {
        id: 25,
        name: "Mild Salsa",
        category: "salsa",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1599270656720-ae4d1380aab8?w=400",
        description: "Fresh tomato salsa, mild heat"
    },
    {
        id: 26,
        name: "Hot Salsa",
        category: "salsa",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1527976746453-f4a26f5b2c37?w=400",
        description: "Spicy salsa with habanero peppers"
    },
    {
        id: 27,
        name: "Peach Salsa",
        category: "salsa",
        price: 8.49,
        image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400",
        description: "Sweet peach salsa with a hint of heat"
    },
    
    // Sauces
    {
        id: 28,
        name: "BBQ Sauce",
        category: "sauces",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400",
        description: "Smoky and tangy BBQ sauce perfect for grilling"
    },
    {
        id: 29,
        name: "Hot Sauce",
        category: "sauces",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=400",
        description: "Fiery hot sauce made with fresh peppers"
    },
    {
        id: 30,
        name: "Sweet Chili Sauce",
        category: "sauces",
        price: 8.49,
        image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400",
        description: "Asian-inspired sweet and spicy chili sauce"
    },
    
    // Sauerkraut
    {
        id: 31,
        name: "Traditional Sauerkraut",
        category: "sauerkraut",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1621947081720-86970823b77e?w=400",
        description: "Fermented sauerkraut, traditional recipe"
    },
    
    // Seasoning
    {
        id: 32,
        name: "All-Purpose Seasoning Blend",
        category: "seasoning",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1596040033229-a0b8f7b6e56c?w=400",
        description: "Versatile seasoning blend for any dish"
    },
    {
        id: 33,
        name: "Cajun Spice Mix",
        category: "seasoning",
        price: 7.49,
        image: "https://images.unsplash.com/photo-1599909533003-d0480d5f0632?w=400",
        description: "Bold Cajun spice blend with heat"
    },
    
    // Syrup
    {
        id: 34,
        name: "Blueberry Syrup",
        category: "syrup",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1551218372-8c9e61a9e060?w=400",
        description: "Pure blueberry syrup for pancakes and waffles"
    },
    {
        id: 35,
        name: "Maple Syrup",
        category: "syrup",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1582450267616-254ad22fc3ba?w=400",
        description: "Pure maple syrup, Grade A"
    },
    
    // Veggies
    {
        id: 36,
        name: "Pickled Vegetables",
        category: "veggies",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1548690596-b8b4329c0dcc?w=400",
        description: "Crisp pickled vegetables with herbs and spices"
    },
    {
        id: 37,
        name: "Canned Green Beans",
        category: "veggies",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=400",
        description: "Fresh green beans canned at peak freshness"
    }
];

// Shopping Cart
let cart = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    setupFilters();
    setupCart();
    setupModals();
    setupForms();
    setupNavigation();
    loadCartFromStorage();
});

// Load Products
function loadProducts(filter = 'all') {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <span class="product-category">${getCategoryName(product.category)}</span>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <span class="product-price">$${product.price.toFixed(2)}</span>
                <button class="add-to-cart-btn" data-id="${product.id}">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
    
    card.querySelector('.add-to-cart-btn').addEventListener('click', () => {
        addToCart(product);
    });
    
    return card;
}

// Get Category Name
function getCategoryName(category) {
    const names = {
        'butter': 'Butter',
        'fruit': 'Fruit',
        'garlic': 'Garlic',
        'jams': 'Jams',
        'ketchup': 'Ketchup',
        'misc': 'Miscellaneous',
        'nuts': 'Nuts',
        'olives': 'Olives',
        'pasta sauce': 'Pasta Sauce',
        'pickles': 'Pickles',
        'quail eggs': 'Quail Eggs',
        'queso': 'Queso',
        'relish': 'Relish',
        'salad dressings': 'Salad Dressings',
        'salsa': 'Salsa',
        'sauces': 'Sauces',
        'sauerkraut': 'Sauerkraut',
        'seasoning': 'Seasoning',
        'syrup': 'Syrup',
        'veggies': 'Veggies'
    };
    return names[category] || category;
}

// Setup Filters
function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            loadProducts(filter);
        });
    });
}

// Add to Cart
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartUI();
    saveCartToStorage();
    showNotification(`${product.name} added to cart!`);
}

// Update Cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart"><i class="fas fa-shopping-cart"></i><p>Your cart is empty</p></div>';
        cartTotal.textContent = '$0.00';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" data-id="${item.id}" data-action="decrease">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" data-id="${item.id}" data-action="increase">+</button>
                </div>
            </div>
            <button class="remove-btn" data-id="${item.id}">Remove</button>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = `$${total.toFixed(2)}`;
