/* App JS - Smart Gadget Hub (SmartG) */

// ==========================================================================
// 1. Mock Gadget Database (Step 4 & Step 6)
// ==========================================================================
const GADGETS_DATABASE = [
  {
    id: "mob-1",
    name: "iPhone 15 Pro Max",
    category: "mobiles",
    price: 1199.00,
    rating: 4.8,
    reviewsCount: 1420,
    badge: "Hot Seller",
    image: "assets/products/mobile.jpg",
    specs: {
      "Processor": "Apple A17 Pro (3nm)",
      "Display": "6.7-inch Super Retina XDR OLED, 120Hz",
      "Camera": "Triple 48MP (Main) + 12MP (Telephoto) + 12MP (Ultra-Wide)",
      "Battery": "4441 mAh with 25W Fast Charging",
      "Storage": "256GB / 512GB / 1TB NVMe",
      "OS": "iOS 17 (upgradable to iOS 18)"
    },
    reviews: [
      { user: "Alex Mercer", rating: 5, comment: "Absolutely stellar performance. The titanium design feels premium and lightweight." },
      { user: "Sarah K.", rating: 4, comment: "Camera quality is out of this world, though battery life is similar to last year's." }
    ],
    amazonLink: "https://www.amazon.com/s?k=iPhone+15+Pro+Max",
    flipkartLink: "https://www.flipkart.com/search?q=iPhone+15+Pro+Max"
  },
  {
    id: "mob-2",
    name: "Samsung Galaxy S24 Ultra",
    category: "mobiles",
    price: 1299.00,
    rating: 4.9,
    reviewsCount: 980,
    badge: "AI Powered",
    image: "assets/products/mobile.jpg",
    specs: {
      "Processor": "Snapdragon 8 Gen 3 for Galaxy",
      "Display": "6.8-inch Dynamic AMOLED 2X, QHD+, 120Hz, Gorilla Armor",
      "Camera": "Quad 200MP + 50MP + 12MP + 10MP with 100x Space Zoom",
      "Battery": "5000 mAh with 45W Fast Charging",
      "Storage": "256GB / 512GB / 1TB UFS 4.0",
      "Stylus": "Embedded S-Pen with low latency"
    },
    reviews: [
      { user: "David Miller", rating: 5, comment: "The anti-reflective display is a game-changer! Galaxy AI features are actually useful." },
      { user: "Priya R.", rating: 5, comment: "Spectacular zoom photos. Best Android phone hands down." }
    ],
    amazonLink: "https://www.amazon.com/s?k=Samsung+Galaxy+S24+Ultra",
    flipkartLink: "https://www.flipkart.com/search?q=Samsung+Galaxy+S24+Ultra"
  },
  {
    id: "lap-1",
    name: "MacBook Pro M3 Max",
    category: "laptops",
    price: 2499.00,
    rating: 4.9,
    reviewsCount: 310,
    badge: "Pro Choice",
    image: "assets/products/laptop.jpg",
    specs: {
      "Processor": "Apple M3 Max (16-core CPU, 40-core GPU)",
      "Display": "16.2-inch Liquid Retina XDR, 3024x1964, 120Hz ProMotion",
      "Memory": "36GB Unified RAM (configurable up to 128GB)",
      "Storage": "1TB SSD Superfast",
      "Battery Life": "Up to 22 hours wireless web",
      "Keyboard": "Magic Keyboard with Touch ID"
    },
    reviews: [
      { user: "Linus T.", rating: 5, comment: "Compilation speeds are insane. Absolute beast of a machine for developers." },
      { user: "Marcus G.", rating: 4, comment: "Stunning display. Extremely expensive, but worth every penny if you need the horsepower." }
    ],
    amazonLink: "https://www.amazon.com/s?k=MacBook+Pro+M3+Max",
    flipkartLink: "https://www.flipkart.com/search?q=MacBook+Pro+M3+Max"
  },
  {
    id: "lap-2",
    name: "ASUS ROG Zephyrus G14",
    category: "laptops",
    price: 1599.00,
    rating: 4.7,
    reviewsCount: 450,
    badge: "120Hz OLED",
    image: "assets/products/laptop.jpg",
    specs: {
      "Processor": "AMD Ryzen 9 8945HS (8 Cores / 16 Threads)",
      "Graphics": "NVIDIA GeForce RTX 4070 Laptop GPU 8GB GDDR6",
      "Display": "14-inch 2.8K ROG Nebula Display OLED, 120Hz, 0.2ms",
      "Memory": "16GB LPDDR5X Dual Channel",
      "Storage": "1TB PCIe 4.0 NVMe M.2 SSD",
      "Weight": "1.50 Kg (Ultraportable gaming)"
    },
    reviews: [
      { user: "GamerPro99", rating: 5, comment: "Unbelievable battery life for a gaming laptop. The OLED panel looks gorgeous." },
      { user: "Elena S.", rating: 4, comment: "Runs a bit hot during long gaming sessions, but performance is exceptional." }
    ],
    amazonLink: "https://www.amazon.com/s?k=ASUS+ROG+Zephyrus+G14",
    flipkartLink: "https://www.flipkart.com/search?q=ASUS+ROG+Zephyrus+G14"
  },
  {
    id: "ear-1",
    name: "Apple AirPods Pro 2",
    category: "earbuds",
    price: 249.00,
    rating: 4.6,
    reviewsCount: 2880,
    badge: "Active ANC",
    image: "assets/products/earbuds.jpg",
    specs: {
      "Chipset": "Apple H2 Headphone Chip",
      "Audio": "Adaptive Audio, Active Noise Cancellation, Transparency Mode",
      "Sensors": "Dual beamforming microphones, skin-detect sensor",
      "Battery": "Up to 6 hours listening (ANC on) / 30 hours with MagSafe Case",
      "Water Resistance": "IP54 dust, sweat, and water resistant",
      "Connectivity": "Bluetooth 5.3"
    },
    reviews: [
      { user: "Emma Watson", rating: 5, comment: "Noise cancellation is twice as good as Gen 1. USB-C case charging is handy." },
      { user: "Chris H.", rating: 4, comment: "Fits perfectly, sound is balanced. Best ecosystem integration for iPhone users." }
    ],
    amazonLink: "https://www.amazon.com/s?k=AirPods+Pro+2",
    flipkartLink: "https://www.flipkart.com/search?q=AirPods+Pro+2"
  },
  {
    id: "ear-2",
    name: "Sony WF-1000XM5",
    category: "earbuds",
    price: 299.00,
    rating: 4.7,
    reviewsCount: 1650,
    badge: "Hi-Res Audio",
    image: "assets/products/earbuds.jpg",
    specs: {
      "Driver Unit": "Dynamic Driver X (8.4mm)",
      "Processors": "Integrated Processor V2 + HD Noise Cancelling Processor QN2e",
      "Audio Tech": "High-Resolution Audio Wireless, LDAC, DSEE Extreme",
      "Battery": "Up to 8 hours (ANC on) / 24 hours total with charging case",
      "Microphones": "6 mics total (3 per earbud) with bone conduction sensors",
      "Water Resistance": "IPX4 equivalent"
    },
    reviews: [
      { user: "Toby S.", rating: 5, comment: "LDAC audio streaming makes details pop. ANC is top tier, matching AirPods." },
      { user: "Michelle D.", rating: 4, comment: "Excellent sound stage, but the foam tips take some getting used to." }
    ],
    amazonLink: "https://www.amazon.com/s?k=Sony+WF-1000XM5",
    flipkartLink: "https://www.flipkart.com/search?q=Sony+WF-1000XM5"
  },
  {
    id: "tab-1",
    name: "iPad Pro M4",
    category: "tablets",
    price: 999.00,
    rating: 4.8,
    reviewsCount: 180,
    badge: "Ultra Thin",
    image: "assets/products/tablet.jpg",
    specs: {
      "Processor": "Apple M4 Chip (9-core CPU, 10-core GPU)",
      "Display": "11-inch Tandem OLED Ultra Retina XDR, ProMotion 120Hz",
      "Brightness": "1000 nits full-screen, 1600 nits peak HDR",
      "Storage": "256GB / 512GB / 1TB / 2TB",
      "Thickness": "5.3 mm (Thinnest Apple product ever)",
      "Compatibility": "Apple Pencil Pro and Magic Keyboard (M4)"
    },
    reviews: [
      { user: "Nate G.", rating: 5, comment: "The Tandem OLED screen is unbelievable. The black levels are OLED perfection." },
      { user: "Sophia L.", rating: 5, comment: "Insanely fast. Overkill for iPadOS, but the screen makes editing photos pure joy." }
    ],
    amazonLink: "https://www.amazon.com/s?k=iPad+Pro+M4",
    flipkartLink: "https://www.flipkart.com/search?q=iPad+Pro+M4"
  },
  {
    id: "tab-2",
    name: "Samsung Galaxy Tab S9 Ultra",
    category: "tablets",
    price: 1099.00,
    rating: 4.8,
    reviewsCount: 240,
    badge: "Giant Display",
    image: "assets/products/tablet.jpg",
    specs: {
      "Processor": "Snapdragon 8 Gen 2 for Galaxy",
      "Display": "14.6-inch Dynamic AMOLED 2X, 120Hz, HDR10+",
      "Stylus": "Low-latency S-Pen included in the box",
      "Water Resistance": "IP68 dust & water proof (Tablet and Stylus)",
      "Audio": "Quad Speakers by AKG, Dolby Atmos support",
      "Battery": "11,200 mAh with 45W Fast Charging"
    },
    reviews: [
      { user: "Carlos M.", rating: 5, comment: "14.6 inches is huge, makes it a perfect laptop replacement. Dex mode is very neat." },
      { user: "Jenny P.", rating: 4, comment: "Amazing tablet for drawing. A bit heavy to hold in hand for long periods." }
    ],
    amazonLink: "https://www.amazon.com/s?k=Samsung+Galaxy+Tab+S9+Ultra",
    flipkartLink: "https://www.flipkart.com/search?q=Samsung+Galaxy+Tab+S9+Ultra"
  }
];

// ==========================================================================
// 2. Application Core Class
// ==========================================================================
class SmartGadgetApp {
  constructor() {
    this.currentView = 'splash';
    this.currentUser = JSON.parse(localStorage.getItem('smartg_user')) || null;
    this.cart = JSON.parse(localStorage.getItem('smartg_cart')) || [];
    this.activeCategory = 'all';
    this.searchQuery = '';
    
    // View sections elements mapping
    this.views = {
      splash: document.getElementById('splash-screen'),
      auth: document.getElementById('view-auth'),
      home: document.getElementById('view-home'),
      details: document.getElementById('view-details'),
      cart: document.getElementById('view-cart')
    };

    this.init();
  }

  // Initialize application
  init() {
    // Set up event listeners
    this.setupEventListeners();
    
    // Start splash screen countdown
    this.runSplashLoader();

    // Set initial cart count badge
    this.updateCartBadge();
  }

  // Setup UI Interactions
  setupEventListeners() {
    // Header Search Input (Reactive Filtering - Step 5)
    const searchInput = document.getElementById('search-input');
    const clearSearchBtn = document.getElementById('clear-search-btn');

    searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.trim();
      
      if (this.searchQuery.length > 0) {
        clearSearchBtn.classList.remove('hidden');
      } else {
        clearSearchBtn.classList.add('hidden');
      }

      this.filterAndRenderProducts();
    });

    clearSearchBtn.addEventListener('click', () => {
      this.clearSearch();
    });

    // Close user dropdown if clicking outside
    window.addEventListener('click', (e) => {
      const userMenu = document.getElementById('user-dropdown');
      const userBtn = document.getElementById('user-profile-btn');
      
      if (userMenu && !userMenu.contains(e.target) && !userBtn.contains(e.target)) {
        userMenu.classList.add('hidden');
      }
    });
  }

  // Run Splash Loader Animation for 3 seconds (Step 2)
  runSplashLoader() {
    const fillEl = document.getElementById('progress-fill');
    let progress = 0;
    const intervalTime = 30; // 30ms intervals
    const totalDuration = 3000; // 3 seconds
    const increment = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      progress += increment;
      if (progress >= 100) {
        progress = 100;
        clearInterval(timer);
        this.completeSplashTransition();
      }
      fillEl.style.width = `${progress}%`;
    }, intervalTime);
  }

  completeSplashTransition() {
    const splash = this.views.splash;
    const appContainer = document.getElementById('app-container');

    splash.classList.add('fade-out');
    appContainer.classList.remove('hidden');
    
    // Slight timeout to let splash fade transition complete
    setTimeout(() => {
      splash.classList.add('hidden');
      appContainer.classList.add('show');
      
      // Navigate to Auth if not logged in, otherwise Home
      if (this.currentUser) {
        this.navigateTo('home');
        this.showToast(`Welcome back, ${this.currentUser.name}!`, 'success');
      } else {
        this.navigateTo('auth');
      }
    }, 800);
  }

  // Routing Handler (SPA View Switching)
  navigateTo(viewId, animate = true) {
    if (!this.views[viewId]) return;

    // Check auth guards
    if (viewId !== 'auth' && viewId !== 'splash' && !this.currentUser) {
      this.navigateTo('auth');
      return;
    }

    // Hide search bar if in login or cart view
    const searchContainer = document.getElementById('header-search-container');
    if (viewId === 'auth' || viewId === 'cart') {
      searchContainer.classList.add('hidden');
    } else {
      searchContainer.classList.remove('hidden');
    }

    // Toggle active screen
    Object.keys(this.views).forEach(key => {
      if (key === viewId) {
        this.views[key].classList.remove('hidden');
        if (animate) {
          this.views[key].style.animation = 'none';
          this.views[key].offsetHeight; // Trigger reflow
          this.views[key].style.animation = null;
        }
      } else {
        this.views[key].classList.add('hidden');
      }
    });

    this.currentView = viewId;
    window.scrollTo(0, 0);

    // Contextual renders
    if (viewId === 'home') {
      this.filterAndRenderProducts();
      this.updateProfileIcon();
    } else if (viewId === 'cart') {
      this.renderCart();
    }
  }

  // Toast System Wrapper
  showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.className = `toast show toast-${type}`;
    toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check' : type === 'error' ? 'fa-triangle-exclamation' : 'fa-circle-info'}"></i> ${message}`;

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // ==========================================================================
  // 3. User Authentication & Profile (Step 3)
  // ==========================================================================
  toggleAuthForm(mode) {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const tabLogin = document.getElementById('tab-login');
    const tabSignup = document.getElementById('tab-signup');

    if (mode === 'login') {
      loginForm.classList.remove('hidden');
      signupForm.classList.add('hidden');
      tabLogin.classList.add('active');
      tabSignup.classList.remove('active');
    } else {
      loginForm.classList.add('hidden');
      signupForm.classList.remove('hidden');
      tabLogin.classList.remove('active');
      tabSignup.classList.add('active');
    }
  }

  handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    // Simple validations
    if (!this.isValidEmail(email)) {
      this.showToast('Please enter a valid email address.', 'error');
      return;
    }
    if (password.length < 6) {
      this.showToast('Password must be at least 6 characters.', 'error');
      return;
    }

    // Mock Login (Extract name from email prefix)
    const name = email.split('@')[0];
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
    
    this.currentUser = { name: formattedName, email: email };
    localStorage.setItem('smartg_user', JSON.stringify(this.currentUser));
    
    this.showToast(`Login successful. Welcome, ${formattedName}!`, 'success');
    this.navigateTo('home');
  }

  handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;

    // Signup Validations
    if (name.length < 3) {
      this.showToast('Name must be at least 3 characters long.', 'error');
      return;
    }
    if (!this.isValidEmail(email)) {
      this.showToast('Please enter a valid email address.', 'error');
      return;
    }
    if (password.length < 6) {
      this.showToast('Password must be at least 6 characters.', 'error');
      return;
    }

    // Mock register
    this.currentUser = { name, email };
    localStorage.setItem('smartg_user', JSON.stringify(this.currentUser));

    this.showToast(`Account created successfully. Welcome, ${name}!`, 'success');
    this.navigateTo('home');
  }

  handleGoogleLogin() {
    // Google Mock OAuth Integration
    this.currentUser = { name: "Google Techie", email: "techie.google@gmail.com" };
    localStorage.setItem('smartg_user', JSON.stringify(this.currentUser));
    this.showToast("Signed in successfully with Google!", "success");
    this.navigateTo('home');
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('smartg_user');
    this.cart = [];
    localStorage.removeItem('smartg_cart');
    this.updateCartBadge();
    document.getElementById('user-dropdown').classList.add('hidden');
    this.showToast("Logged out successfully.", "info");
    this.navigateTo('auth');
  }

  toggleUserMenu() {
    const dropdown = document.getElementById('user-dropdown');
    dropdown.classList.toggle('hidden');
  }

  updateProfileIcon() {
    if (this.currentUser) {
      document.getElementById('display-user-name').innerText = this.currentUser.name;
      document.getElementById('display-user-email').innerText = this.currentUser.email;
    }
  }

  isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // ==========================================================================
  // 4. Products Catalog - Filter, Search & Display (Step 4 & Step 5)
  // ==========================================================================
  scrollToProducts() {
    document.getElementById('products-catalog-section').scrollIntoView({ behavior: 'smooth' });
  }

  filterByCategory(category) {
    this.activeCategory = category;
    
    // Update Tab UI active states
    const tabs = document.querySelectorAll('.category-tab-btn');
    tabs.forEach(tab => {
      if (tab.getAttribute('data-category') === category) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    this.filterAndRenderProducts();
  }

  clearSearch() {
    this.searchQuery = '';
    document.getElementById('search-input').value = '';
    document.getElementById('clear-search-btn').classList.add('hidden');
    this.filterAndRenderProducts();
  }

  filterAndRenderProducts() {
    const grid = document.getElementById('products-grid-container');
    const emptyState = document.getElementById('search-empty-state');
    const countDisplay = document.getElementById('product-count-display');
    const searchInfoStrip = document.getElementById('search-query-info');
    const keywordDisplay = document.getElementById('search-keyword');

    // Filter products list based on category and search query
    let filteredList = GADGETS_DATABASE;

    // Apply category filter
    if (this.activeCategory !== 'all') {
      filteredList = filteredList.filter(item => item.category === this.activeCategory);
    }

    // Apply search filter (name, brand, or specifications)
    if (this.searchQuery.length > 0) {
      const query = this.searchQuery.toLowerCase();
      filteredList = filteredList.filter(item => {
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        const matchesSpecs = Object.values(item.specs).some(val => val.toLowerCase().includes(query));
        return matchesName || matchesCategory || matchesSpecs;
      });

      // Show search info strip
      searchInfoStrip.classList.remove('hidden');
      keywordDisplay.innerText = this.searchQuery;
    } else {
      searchInfoStrip.classList.add('hidden');
    }

    // Render counts
    countDisplay.innerText = `Showing ${filteredList.length} item${filteredList.length === 1 ? '' : 's'}`;

    // Handle empty states
    if (filteredList.length === 0) {
      grid.classList.add('hidden');
      emptyState.classList.remove('hidden');
      return;
    } else {
      grid.classList.remove('hidden');
      emptyState.classList.add('hidden');
    }

    // Build Product Cards (Premium Details - Step 8)
    grid.innerHTML = filteredList.map(product => {
      const starsHTML = this.generateStarsHTML(product.rating);
      return `
        <article class="product-card">
          ${product.badge ? `<span class="product-card-badge">${product.badge}</span>` : ''}
          <button class="product-card-wishlist" onclick="app.toggleWishlist('${product.id}')" aria-label="Add to Wishlist">
            <i class="fa-regular fa-heart"></i>
          </button>
          
          <div class="product-card-img-container" onclick="app.viewProductDetails('${product.id}')">
            <img src="${product.image}" alt="${product.name}" class="product-card-img" onerror="this.src='https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=400&q=80'">
          </div>

          <div class="product-card-details">
            <span class="product-card-category">${product.category}</span>
            <h3 class="product-card-title" onclick="app.viewProductDetails('${product.id}')">${product.name}</h3>
            
            <div class="product-card-rating">
              <div class="rating-stars">
                ${starsHTML}
              </div>
              <span class="rating-count">(${product.reviewsCount})</span>
            </div>

            <div class="product-card-footer">
              <div class="product-card-price">$${product.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
              <button class="btn-card-details" onclick="app.viewProductDetails('${product.id}')">View Details</button>
              <button class="btn-card-action" onclick="app.addToCart('${product.id}')" aria-label="Add to Cart">
                <i class="fa-solid fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  generateStarsHTML(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    
    let html = '';
    for (let i = 0; i < fullStars; i++) html += '<i class="fa-solid fa-star"></i>';
    if (halfStar) html += '<i class="fa-solid fa-star-half-stroke"></i>';
    for (let i = 0; i < emptyStars; i++) html += '<i class="fa-regular fa-star"></i>';
    return html;
  }

  toggleWishlist(productId) {
    this.showToast("Added to wishlist!", "success");
  }

  // ==========================================================================
  // 5. Product Details View Manager (Step 6)
  // ==========================================================================
  viewProductDetails(productId) {
    const product = GADGETS_DATABASE.find(item => item.id === productId);
    if (!product) return;

    const detailsContainer = document.getElementById('product-details-content');
    const starsHTML = this.generateStarsHTML(product.rating);

    // Build specs elements
    const specsHTML = Object.entries(product.specs).map(([key, val]) => `
      <div class="spec-item">
        <span class="spec-name">${key}</span>
        <span class="spec-value">${val}</span>
      </div>
    `).join('');

    // Build reviews elements
    const reviewsHTML = product.reviews.map(review => `
      <div class="review-card">
        <div class="review-header">
          <span class="review-user">${review.user}</span>
          <div class="review-stars">${this.generateStarsHTML(review.rating)}</div>
        </div>
        <p class="review-comment">"${review.comment}"</p>
      </div>
    `).join('');

    // Inject into DOM
    detailsContainer.innerHTML = `
      <div class="details-gallery">
        <div class="details-main-img-wrap">
          <img src="${product.image}" alt="${product.name}" class="details-main-img" id="main-details-image" onerror="this.src='https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80'">
        </div>
      </div>

      <div class="details-info">
        <span class="details-category">${product.category}</span>
        <h1 class="details-title">${product.name}</h1>
        
        <div class="details-meta-row">
          <div class="details-rating">
            <span class="rating-stars">${starsHTML}</span>
            <span class="rating-count">(${product.rating} / 5 out of ${product.reviewsCount} reviews)</span>
          </div>
          <span class="details-stock-status">In Stock</span>
        </div>

        <div class="details-price-card">
          <div class="price-box">
            <span class="price-label">Special Launch Price</span>
            <span class="price-val">$${product.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
            <span class="price-sub">Free Delivery & GST included</span>
          </div>
        </div>

        <div class="details-actions-grid">
          <button class="btn btn-outline" onclick="app.addToCart('${product.id}')">
            <i class="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
          <button class="btn btn-primary" onclick="app.buyNowRedirect('${product.id}')">
            <i class="fa-solid fa-bolt-lightning"></i> Buy Now
          </button>
        </div>

        <!-- Spec Tabs & Reviews -->
        <div class="details-tabs">
          <div class="details-tabs-header">
            <button class="details-tab-header-btn active" id="btn-tab-specs" onclick="app.toggleDetailsTab('specs')">Specifications</button>
            <button class="details-tab-header-btn" id="btn-tab-reviews" onclick="app.toggleDetailsTab('reviews')">Customer Reviews</button>
          </div>
          
          <div class="details-tab-content" id="details-specs-content">
            <div class="specs-grid">
              ${specsHTML}
            </div>
          </div>

          <div class="details-tab-content hidden" id="details-reviews-content">
            <div class="reviews-container">
              ${reviewsHTML}
            </div>
          </div>
        </div>
      </div>
    `;

    this.navigateTo('details');
  }

  toggleDetailsTab(tabName) {
    const specsTabBtn = document.getElementById('btn-tab-specs');
    const reviewsTabBtn = document.getElementById('btn-tab-reviews');
    const specsContent = document.getElementById('details-specs-content');
    const reviewsContent = document.getElementById('details-reviews-content');

    if (tabName === 'specs') {
      specsTabBtn.classList.add('active');
      reviewsTabBtn.classList.remove('active');
      specsContent.classList.remove('hidden');
      reviewsContent.classList.add('hidden');
    } else {
      specsTabBtn.classList.remove('active');
      reviewsTabBtn.classList.add('active');
      specsContent.classList.add('hidden');
      reviewsContent.classList.remove('hidden');
    }
  }

  navigateBackToHome() {
    this.navigateTo('home');
  }

  // Redirect to official external stores for demo (Step 6)
  buyNowRedirect(productId) {
    const product = GADGETS_DATABASE.find(item => item.id === productId);
    if (!product) return;

    this.showToast("Redirecting to official product distributor page...", "info");
    
    // Random choice between Amazon/Flipkart for demo
    const destination = Math.random() > 0.5 ? product.amazonLink : product.flipkartLink;
    
    setTimeout(() => {
      window.open(destination, '_blank');
    }, 1000);
  }

  // ==========================================================================
  // 6. Shopping Cart Operations (Step 7)
  // ==========================================================================
  addToCart(productId) {
    const product = GADGETS_DATABASE.find(item => item.id === productId);
    if (!product) return;

    // Check if product already exists in cart
    const cartItemIndex = this.cart.findIndex(item => item.id === productId);

    if (cartItemIndex > -1) {
      this.cart[cartItemIndex].quantity += 1;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        image: product.image,
        quantity: 1
      });
    }

    this.saveCart();
    this.updateCartBadge();
    this.showToast(`"${product.name}" added to cart!`, 'success');
  }

  updateCartBadge() {
    const badge = document.getElementById('cart-badge-count');
    const totalItemsCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.innerText = totalItemsCount;

    if (totalItemsCount === 0) {
      badge.classList.add('hidden');
    } else {
      badge.classList.remove('hidden');
    }
  }

  saveCart() {
    localStorage.setItem('smartg_cart', JSON.stringify(this.cart));
  }

  changeQuantity(productId, delta) {
    const itemIndex = this.cart.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;

    this.cart[itemIndex].quantity += delta;

    if (this.cart[itemIndex].quantity <= 0) {
      this.cart.splice(itemIndex, 1);
      this.showToast("Item removed from cart.", "info");
    }

    this.saveCart();
    this.updateCartBadge();
    this.renderCart();
  }

  removeFromCart(productId) {
    const itemIndex = this.cart.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;

    const itemName = this.cart[itemIndex].name;
    this.cart.splice(itemIndex, 1);
    this.saveCart();
    this.updateCartBadge();
    this.renderCart();
    this.showToast(`"${itemName}" removed from cart.`, 'info');
  }

  renderCart() {
    const cartList = document.getElementById('cart-items-list-container');
    const cartEmpty = document.getElementById('cart-empty-state');
    const cartSummary = document.getElementById('cart-summary-container');
    
    if (this.cart.length === 0) {
      cartList.classList.add('hidden');
      cartSummary.classList.add('hidden');
      cartEmpty.classList.remove('hidden');
      return;
    }

    cartList.classList.remove('hidden');
    cartSummary.classList.remove('hidden');
    cartEmpty.classList.add('hidden');

    // Build Cart Items list HTML
    cartList.innerHTML = this.cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-img-wrap">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=150&q=80'">
        </div>
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>${item.category}</p>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="app.changeQuantity('${item.id}', -1)" aria-label="Decrease quantity"><i class="fa-solid fa-minus"></i></button>
          <span class="qty-val">${item.quantity}</span>
          <button class="qty-btn" onclick="app.changeQuantity('${item.id}', 1)" aria-label="Increase quantity"><i class="fa-solid fa-plus"></i></button>
        </div>
        <div class="cart-item-price">$${(item.price * item.quantity).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
        <button class="btn-remove-item" onclick="app.removeFromCart('${item.id}')" aria-label="Remove item"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    `).join('');

    // Compute Totals
    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.18; // GST 18%
    const total = subtotal + tax;

    document.getElementById('cart-subtotal').innerText = `$${subtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById('cart-tax').innerText = `$${tax.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById('cart-total').innerText = `$${total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  }

  triggerCheckout() {
    this.showToast("Order initiated. Redirecting to Amazon for checkout demo...", "success");
    
    // In a real e-commerce scenario, we redirect them to an aggregated cart or official store pages.
    // For demo, we open search results for the first item in the cart on Amazon.
    if (this.cart.length > 0) {
      const searchTarget = encodeURIComponent(this.cart[0].name);
      setTimeout(() => {
        window.open(`https://www.amazon.com/s?k=${searchTarget}`, '_blank');
      }, 1200);
    }
  }
}

// Instantiate the App
const app = new SmartGadgetApp();
// SEARCH FUNCTION
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", function () {
  let value = this.value.toLowerCase();

  let products = document.querySelectorAll(".product-card");

  products.forEach(card => {
    let title = card.querySelector(".product-card-title").innerText.toLowerCase();

    if (title.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
function updateCartView(cartItems) {

  const list = document.getElementById("cart-items-list-container");
  const empty = document.getElementById("cart-empty-state");
  const summary = document.getElementById("cart-summary-container");

  if (!cartItems || cartItems.length === 0) {
    list.innerHTML = "";
    empty.classList.remove("hidden");
    summary.style.display = "none";
    return;
  }

  empty.classList.add("hidden");
  summary.style.display = "block";

}
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");

  if (!searchInput) return;

  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();

    const products = document.querySelectorAll(".product-card");

    let hasVisible = false;

    products.forEach(card => {
      const text = card.textContent.toLowerCase();

      if (text.includes(keyword)) {
        card.style.display = "block";
        hasVisible = true;
      } else {
        card.style.display = "none";
      }
    });

    // optional empty state (if you have it)
    const emptyState = document.getElementById("search-empty-state");

    if (emptyState) {
      if (hasVisible) {
        emptyState.classList.add("hidden");
      } else {
        emptyState.classList.remove("hidden");
      }
    }
  });
});