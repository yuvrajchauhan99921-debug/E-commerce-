// Extensive Product Database (Mega Softel Pvt. Ltd. - Networking Gear)
const products = [
    // Routers & WiFi
    {
        id: 1,
        name: "Tenda AC6 AC1200 Smart Dual-Band WiFi Router",
        category: "Routers",
        price: 1850,
        rating: 5,
        image: "images/products/1.jpg",
        description: "Dual-band WiFi router offering up to 1200Mbps, perfect for 4K streaming and gaming."
    },
    {
        id: 2,
        name: "Tenda MW3 AC1200 Whole Home Mesh WiFi System",
        category: "Routers",
        price: 4500,
        rating: 5,
        image: "images/products/2.jpg",
        description: "Covers up to 3500 sq.ft. with seamless, blazing-fast Mesh WiFi network."
    },
    {
        id: 3,
        name: "Tenda F3 300Mbps Wireless Router",
        category: "Routers",
        price: 999,
        rating: 4,
        image: "images/products/3.jpg",
        description: "3 external antennas boost Wi-Fi throughout your house to enjoy ultimate surfing fun."
    },
    {
        id: 4,
        name: "Tenda AC10 Smart Gigabit Wi-Fi Router",
        category: "Routers",
        price: 2450,
        rating: 5,
        image: "images/products/4.jpg",
        description: "Equipped with Gigabit ports, providing smooth internet access for high-bandwidth activities."
    },
    {
        id: 5,
        name: "Tenda 4G680 4G LTE Router",
        category: "Routers",
        price: 3800,
        rating: 4,
        image: "images/products/5.jpg",
        description: "Just pop in your 4G SIM card and share your 4G LTE network with multiple devices."
    },
    {
        id: 6,
        name: "Tenda RX9 Pro AX3000 Wi-Fi 6 Router",
        category: "Routers",
        price: 4999,
        rating: 5,
        image: "images/products/6.jpg",
        description: "Next-gen Wi-Fi 6 technology with speeds up to 2976Mbps and lower latency."
    },
    {
        id: 7,
        name: "Tenda MW5G AC1200 Mesh WiFi System (3-pack)",
        category: "Routers",
        price: 6500,
        rating: 5,
        image: "images/products/7.jpg",
        description: "Gigabit ports and advanced wall-penetration routing for large homes."
    },
    {
        id: 8,
        name: "Tenda TX3 AX1800 Wi-Fi 6 Router",
        category: "Routers",
        price: 3200,
        rating: 4,
        image: "images/products/8.jpg",
        description: "Dual-band Wi-Fi 6 router providing up to 1775Mbps speed."
    },
    {
        id: 9,
        name: "Enterprise Dual-WAN VPN Router",
        category: "Routers",
        price: 8500,
        rating: 5,
        image: "images/products/9.jpg",
        description: "Advanced VPN router with load balancing for enterprise and small businesses."
    },

    // Switches & Hubs
    {
        id: 10,
        name: "Tenda 8-Port Fast Ethernet Switch (S108)",
        category: "Switches",
        price: 499,
        rating: 4,
        image: "images/products/10.jpg",
        description: "Desktop switch provides 8 10/100M ports for easy expansion of your network."
    },
    {
        id: 11,
        name: "Tenda 16-Port Fast Ethernet Switch",
        category: "Switches",
        price: 1250,
        rating: 4,
        image: "images/products/11.jpg",
        description: "Rack-mountable 16-port switch, ideal for medium-sized office networks."
    },
    {
        id: 12,
        name: "Tenda 24-Port Gigabit Ethernet Switch (TEG1024D)",
        category: "Switches",
        price: 3500,
        rating: 5,
        image: "images/products/12.jpg",
        description: "Provides 24 10/100/1000Mbps auto-negotiation RJ45 ports."
    },
    {
        id: 13,
        name: "Tenda 9-Port Unmanaged PoE Switch",
        category: "Switches",
        price: 2800,
        rating: 5,
        image: "images/products/13.jpg",
        description: "8 PoE ports for IP cameras and access points. Excellent for CCTV installations."
    },
    {
        id: 14,
        name: "Tenda 5-Port Gigabit Desktop Switch",
        category: "Switches",
        price: 750,
        rating: 4,
        image: "images/products/14.jpg",
        description: "Plug and play 5-port gigabit switch for ultra-fast local networking."
    },
    {
        id: 15,
        name: "Tenda 24-Port PoE+ Managed Switch",
        category: "Switches",
        price: 12500,
        rating: 5,
        image: "images/products/15.jpg",
        description: "Advanced L2 managed PoE switch with SFP slots for enterprise networks."
    },
    {
        id: 16,
        name: "8-Port Gigabit PoE Switch",
        category: "Switches",
        price: 3200,
        rating: 5,
        image: "images/products/16.jpg",
        description: "Delivers data and power over a single cable up to 250 meters."
    },

    // Adapters & Extenders
    {
        id: 17,
        name: "Tenda Wireless N150 Pico USB Adapter",
        category: "Adapters",
        price: 350,
        rating: 4,
        image: "images/products/17.jpg",
        description: "Ultra-compact USB adapter providing 150Mbps wireless connection."
    },
    {
        id: 18,
        name: "Tenda N300 Wireless Universal Range Extender (A9)",
        category: "Adapters",
        price: 850,
        rating: 4,
        image: "images/products/18.jpg",
        description: "Wall-plug range extender designed to optimize and extend your existing Wi-Fi."
    },
    {
        id: 19,
        name: "Tenda AC650 Dual Band USB Wi-Fi Adapter",
        category: "Adapters",
        price: 650,
        rating: 4,
        image: "images/products/19.jpg",
        description: "Upgrades your PC to 802.11ac Wi-Fi for faster streaming and gaming."
    },
    {
        id: 20,
        name: "Tenda AC1200 Dual Band Wi-Fi Range Extender",
        category: "Adapters",
        price: 1800,
        rating: 5,
        image: "images/products/20.jpg",
        description: "Eliminates Wi-Fi dead zones and delivers speeds up to 1200Mbps."
    },
    {
        id: 21,
        name: "PCIe Gigabit Network Interface Card",
        category: "Adapters",
        price: 950,
        rating: 4,
        image: "images/products/21.jpg",
        description: "Add a high-speed Gigabit Ethernet port to any desktop PC."
    },
    {
        id: 22,
        name: "Tenda U12 AC1900 USB 3.0 Adapter",
        category: "Adapters",
        price: 1400,
        rating: 5,
        image: "images/products/22.jpg",
        description: "Super-speed USB 3.0 Wi-Fi adapter for VR gaming and 4K streaming."
    },
    {
        id: 23,
        name: "Powerline AV1000 Gigabit Adapter Kit",
        category: "Adapters",
        price: 2800,
        rating: 5,
        image: "images/products/23.jpg",
        description: "Use your home's existing electrical wiring to extend internet access."
    },

    // Networking Cables
    {
        id: 24,
        name: "Cat6 Ethernet Patch Cable - 5 Meter",
        category: "Cables",
        price: 250,
        rating: 4,
        image: "images/products/24.jpg",
        description: "High-performance Cat6 RJ45 network cable for gigabit speeds."
    },
    {
        id: 25,
        name: "Cat6 Ethernet Bulk Cable Roll - 305 Meter",
        category: "Cables",
        price: 3500,
        rating: 5,
        image: "images/products/25.jpg",
        description: "Premium pure copper Cat6 UTP cable roll for professional installations."
    },
    {
        id: 26,
        name: "Cat5e Outdoor Waterproof Cable - 100 Meter",
        category: "Cables",
        price: 1800,
        rating: 4,
        image: "images/products/26.jpg",
        description: "Weather-resistant outdoor ethernet cable with UV protection."
    },
    {
        id: 27,
        name: "Fiber Optic LC to SC Patch Cord - 3 Meter",
        category: "Cables",
        price: 450,
        rating: 5,
        image: "images/products/27.jpg",
        description: "Single-mode fiber patch cord for high-speed fiber networks."
    },
    {
        id: 28,
        name: "RJ45 Gold Plated Connectors (Pack of 100)",
        category: "Cables",
        price: 350,
        rating: 4,
        image: "images/products/28.jpg",
        description: "Premium gold-plated crimp connectors for Cat5e/Cat6 cables."
    },
    {
        id: 29,
        name: "Cat7 Shielded Ethernet Cable - 10 Meter",
        category: "Cables",
        price: 650,
        rating: 5,
        image: "images/products/29.jpg",
        description: "10Gbps flat SSTP ethernet cable for modern data centers and gaming."
    },
    {
        id: 30,
        name: "Network Cable Tester & Crimping Tool Kit",
        category: "Cables",
        price: 950,
        rating: 5,
        image: "images/products/30.jpg",
        description: "Complete toolkit for creating, crimping, and testing network cables."
    }
];

let cart = [];
let currentCategory = 'all';

// DOM Elements
const productGrid = document.getElementById('product-grid');
const noProductsMsg = document.getElementById('no-products');
const productCount = document.getElementById('product-count');

const categoryNavLinks = document.querySelectorAll('.category-nav .nav-links a');
const categoryCheckboxes = document.querySelectorAll('.category-checkbox');
const priceRange = document.getElementById('price-range');
const priceValue = document.getElementById('price-value');
const ratingRadios = document.querySelectorAll('.filter-radio');
const sortSelect = document.getElementById('sort-select');
const searchInput = document.getElementById('search-input');
const clearFiltersBtn = document.getElementById('clear-filters');

const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCartBtn = document.getElementById('close-cart');
const overlay = document.getElementById('overlay');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    if(productGrid) {
        filterAndRenderProducts();
        setupFilters();
    }
    updateCartUI();
});

// Generate Star Rating HTML
function generateStars(rating) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHtml += '<i class="fas fa-star"></i>';
        } else {
            starsHtml += '<i class="far fa-star"></i>';
        }
    }
    return starsHtml;
}

// Render Products function
function renderProducts(productsToRender) {
    productGrid.innerHTML = '';
    productCount.innerText = productsToRender.length;

    if (productsToRender.length === 0) {
        productGrid.classList.add('hidden');
        noProductsMsg.classList.remove('hidden');
        return;
    }

    productGrid.classList.remove('hidden');
    noProductsMsg.classList.add('hidden');

    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        productCard.innerHTML = `
            <div class="product-image">
                <span class="badge">${product.category}</span>
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description" style="font-size: 0.85rem; color: var(--text-light); margin-bottom: 12px; flex: 1;">${product.description}</p>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span>(${product.rating}.0)</span>
                </div>
                <div class="product-bottom">
                    <span class="product-price">₹${product.price.toLocaleString()}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})" title="Add to Cart">
                        <i class="fas fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Filter Logic
function filterAndRenderProducts() {
    let filtered = [...products];

    // 1. Search Filter
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm) || p.description.toLowerCase().includes(searchTerm));
    }

    // 2. Navigation Category Filter
    if (currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentCategory);
    }

    // 3. Sidebar Category Checkboxes (Only apply if currentCategory is 'all')
    const selectedCats = Array.from(categoryCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
    if (selectedCats.length > 0 && currentCategory === 'all') {
        filtered = filtered.filter(p => selectedCats.includes(p.category));
    }

    // 4. Price Filter
    const maxPrice = parseInt(priceRange.value);
    filtered = filtered.filter(p => p.price <= maxPrice);

    // 5. Rating Filter
    let selectedRating = 0;
    ratingRadios.forEach(radio => {
        if (radio.checked) selectedRating = parseInt(radio.value);
    });
    if (selectedRating > 0) {
        filtered = filtered.filter(p => p.rating >= selectedRating);
    }

    // 6. Sorting
    const sortValue = sortSelect.value;
    if (sortValue === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    renderProducts(filtered);
}

// Setup Event Listeners for Filters
function setupFilters() {
    // Top Navigation Categories
    categoryNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            categoryNavLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            currentCategory = link.dataset.category;
            
            // Uncheck sidebar if using top nav
            categoryCheckboxes.forEach(cb => cb.checked = false);
            
            filterAndRenderProducts();
        });
    });

    // Sidebar Category Checkboxes
    categoryCheckboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            // Reset top nav to 'All'
            categoryNavLinks.forEach(l => l.classList.remove('active'));
            document.querySelector('[data-category="all"]').classList.add('active');
            currentCategory = 'all';
            filterAndRenderProducts();
        });
    });

    // Price Slider
    priceRange.addEventListener('input', (e) => {
        priceValue.innerText = `₹${parseInt(e.target.value).toLocaleString()}+`;
        filterAndRenderProducts();
    });

    // Rating Radios
    ratingRadios.forEach(radio => {
        radio.addEventListener('change', filterAndRenderProducts);
    });

    // Sorting
    sortSelect.addEventListener('change', filterAndRenderProducts);

    // Search
    searchInput.addEventListener('input', filterAndRenderProducts);

    // Clear Filters
    clearFiltersBtn.addEventListener('click', () => {
        searchInput.value = '';
        currentCategory = 'all';
        categoryNavLinks.forEach(l => l.classList.remove('active'));
        document.querySelector('[data-category="all"]').classList.add('active');
        categoryCheckboxes.forEach(cb => cb.checked = false);
        priceRange.value = 15000;
        priceValue.innerText = '₹15,000+';
        document.querySelector('input[name="rating"][value="0"]').checked = true;
        sortSelect.value = 'featured';
        filterAndRenderProducts();
    });
}

// CART LOGIC
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    openCart();
}

function updateQuantity(productId, change) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        cart[itemIndex].quantity += change;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
        updateCartUI();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.innerText = totalItems;
    
    // Add ping animation class
    cartCount.classList.add('pulse');
    setTimeout(() => cartCount.classList.remove('pulse'), 300);

    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div style="text-align: center; padding: 40px 0; color: #64748b;"><i class="fas fa-shopping-basket" style="font-size: 3rem; margin-bottom: 15px; opacity: 0.5;"></i><p>Your cart is empty.</p></div>';
    }

    cart.forEach(item => {
        total += item.price * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                <div class="qty-controls">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-item" onclick="removeFromCart(${item.id})" style="margin-left: auto;">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    cartTotal.innerText = total.toLocaleString();
}

// Cart Sidebar Toggles
function openCart() {
    cartSidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeCart() {
    cartSidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Cart Event Listeners
if(cartIcon) cartIcon.addEventListener('click', openCart);
if(closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
if(overlay) overlay.addEventListener('click', closeCart);


