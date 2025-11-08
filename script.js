// Product Data
const products = [
    {
        id: 1,
        name: "Strawberry Preserves",
        category: "jams",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400",
        description: "Sweet and delicious strawberry preserves made with fresh berries"
    },
    {
        id: 2,
        name: "Blueberry Jam",
        category: "jams",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784acc?w=400",
        description: "Rich blueberry jam bursting with flavor"
    },
    {
        id: 3,
        name: "Peach Preserves",
        category: "jams",
        price: 9.49,
        image: "https://images.unsplash.com/photo-1629828874514-944d8c4e2c1b?w=400",
        description: "Summer peaches preserved to perfection"
    },
    {
        id: 4,
        name: "Raspberry Jam",
        category: "jams",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?w=400",
        description: "Tart and sweet raspberry jam with whole berries"
    },
    {
        id: 5,
        name: "Homemade Apple Pie",
        category: "baked",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=400",
        description: "Classic apple pie with a flaky, buttery crust"
    },
    {
        id: 6,
        name: "Chocolate Chip Cookies (Dozen)",
        category: "baked",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400",
        description: "Soft and chewy cookies loaded with chocolate chips"
    },
    {
        id: 7,
        name: "Banana Bread",
        category: "baked",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400",
        description: "Moist banana bread with a hint of cinnamon"
    },
    {
        id: 8,
        name: "Cinnamon Rolls (6-pack)",
        category: "baked",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
        description: "Fresh-baked cinnamon rolls with cream cheese frosting"
    },
    {
        id: 9,
        name: "BBQ Sauce",
        category: "sauces",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400",
        description: "Smoky and tangy BBQ sauce perfect for grilling"
    },
    {
        id: 10,
        name: "Hot Pepper Jelly",
        category: "sauces",
        price: 8.49,
        image: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=400",
        description: "Sweet heat with a kick - perfect with cheese"
    },
    {
        id: 11,
        name: "Pickled Vegetables",
        category: "sauces",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1548690596-b8b4329c0dcc?w=400",
        description: "Crisp pickled vegetables with herbs and spices"
    },
    {
        id: 12,
        name: "Pumpkin Pie",
        category: "seasonal",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1571722008286-d2f8c281f649?w=400",
        description: "Seasonal favorite - creamy pumpkin pie with spices"
    },
    {
        id: 13,
        name: "Holiday Gift Basket",
        category: "seasonal",
        price: 45.99,
        image: "https://images.unsplash.com/photo-1544913657-71662d9e9a7d?w=400",
        description: "Assorted jams, baked goods, and treats in a beautiful basket"
    },
    {
        id: 14,
        name: "Apple Butter",
        category: "jams",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400",
        description: "Smooth and spiced apple butter, slow-cooked to perfection"
    },
    {
        id: 15,
        name: "Sourdough Bread",
        category: "baked",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400",
        description: "Traditional sourdough with a perfect crust"
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
        'jams': 'Jams & Preserves',
        'baked': 'Baked Goods',
        'sauces': 'Sauces & Condiments',
        'seasonal': 'Seasonal Specials'
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
    
    // Setup cart item controls
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            const action = e.target.getAttribute('data-action');
            updateQuantity(id, action);
        });
    });
    
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            removeFromCart(id);
        });
    });
}

// Update Quantity
function updateQuantity(id, action) {
    const item = cart.find(item => item.id === id);
    if (!item) return;
    
    if (action === 'increase') {
        item.quantity++;
    } else if (action === 'decrease') {
        item.quantity--;
        if (item.quantity === 0) {
            removeFromCart(id);
            return;
        }
    }
    
    updateCartUI();
    saveCartToStorage();
}

// Remove from Cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
    saveCartToStorage();
}

// Setup Cart Modal
function setupCart() {
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeCartBtn = document.getElementById('closeCartBtn');
    
    cartBtn.addEventListener('click', () => {
        cartModal.classList.add('active');
        updateCartUI();
    });
    
    closeCartBtn.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });
    
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });
}

// Setup Modals
function setupModals() {
    const checkoutBtn = document.getElementById('checkoutBtn');
    const checkoutModal = document.getElementById('checkoutModal');
    const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
    const cartModal = document.getElementById('cartModal');
    
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('Your cart is empty!');
            return;
        }
        cartModal.classList.remove('active');
        checkoutModal.classList.add('active');
        updateCheckoutSummary();
    });
    
    closeCheckoutBtn.addEventListener('click', () => {
        checkoutModal.classList.remove('active');
    });
    
    checkoutModal.addEventListener('click', (e) => {
        if (e.target === checkoutModal) {
            checkoutModal.classList.remove('active');
        }
    });
}

// Update Checkout Summary
function updateCheckoutSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 5.99;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = `$${shipping.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('finalTotal').textContent = `$${total.toFixed(2)}`;
}

// Setup Forms
function setupForms() {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Thank you for your message! We\'ll get back to you soon.');
        contactForm.reset();
    });
    
    const checkoutForm = document.getElementById('checkoutForm');
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        processOrder();
    });
}

// Process Order
function processOrder() {
    // In a real application, this would send the order to a server
    showNotification('Order placed successfully! Thank you for your purchase.');
    cart = [];
    updateCartUI();
    saveCartToStorage();
    document.getElementById('checkoutModal').classList.remove('active');
    document.getElementById('checkoutForm').reset();
}

// Show Notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: #2F5233;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Setup Navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });
    
    // Highlight active section on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Local Storage Functions
function saveCartToStorage() {
    localStorage.setItem('katiebugs-cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('katiebugs-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}
