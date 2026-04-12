/* ============================================================
   HELEN'S KITCHEN — App Logic
   Menu data, search, filters, cart, and interactivity
   ============================================================ */

// ==================== MENU DATA ====================
const menuItems = [
    // ---------- RICE DISHES ----------
    {
        id: 1,
        name: "Jollof Rice with Chicken",
        category: "rice",
        categoryLabel: "Rice Dishes",
        description: "Smoky, tomato-rich Nigerian jollof rice with perfectly seasoned grilled chicken — party-style.",
        protein: "32g",
        tags: [],
        image: "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?w=600&h=400&fit=crop&q=80"
    },
    {
        id: 2,
        name: "Fried Rice with Turkey",
        category: "rice",
        categoryLabel: "Rice Dishes",
        description: "Colourful Nigerian fried rice loaded with vegetables, liver and tender turkey pieces.",
        protein: "28g",
        tags: [{ text: "Popular", type: "popular" }],
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop&q=80"
    },
    {
        id: 3,
        name: "Ofada Rice with Sauce",
        category: "rice",
        categoryLabel: "Rice Dishes",
        description: "Local unpolished short-grain rice served with spicy green pepper ofada sauce and assorted meat.",
        protein: "22g",
        tags: [],
        image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=600&h=400&fit=crop&q=80"
    },
    {
        id: 4,
        name: "White Rice and Stew",
        category: "rice",
        categoryLabel: "Rice Dishes",
        description: "Fluffy white rice drizzled with rich, pepper-infused tomato stew and your choice of protein.",
        protein: "20g",
        tags: [],
        image: "https://images.unsplash.com/photo-1536304993881-460346235895?w=600&h=400&fit=crop&q=80"
    },

    // ---------- SWALLOW & SOUPS ----------
    {
        id: 5,
        name: "Egusi Soup with Pounded Yam",
        category: "swallow",
        categoryLabel: "Swallow & Soups",
        description: "Thick melon seed soup with spinach, stockfish and assorted meat paired with smooth pounded yam.",
        protein: "35g",
        tags: [{ text: "Popular", type: "popular" }],
        image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&h=400&fit=crop&q=80"
    },
    {
        id: 6,
        name: "Efo Riro with Amala",
        category: "swallow",
        categoryLabel: "Swallow & Soups",
        description: "Rich Yoruba-style spinach stew cooked with palm oil, locust beans and assorted meat. Served with smooth amala.",
        protein: "30g",
        tags: [],
        image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&h=400&fit=crop&q=80"
    },
    {
        id: 7,
        name: "Ogbono Soup with Garri",
        category: "swallow",
        categoryLabel: "Swallow & Soups",
        description: "Draw soup made from ground ogbono seeds with okra, stockfish and beef. Served with smooth eba.",
        protein: "28g",
        tags: [],
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=400&fit=crop&q=80"
    },
    {
        id: 8,
        name: "White Melon Soup (Egusi Traditional)",
        category: "swallow",
        categoryLabel: "Swallow & Soups",
        description: "Traditional variation of egusi with white melon seeds, ugu leaves and palm oil. Rich and authentic.",
        protein: "33g",
        tags: [],
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&h=400&fit=crop&q=80"
    },

    // ---------- SNACKS & STREET FOOD ----------
    {
        id: 9,
        name: "Moi Moi",
        category: "snacks",
        categoryLabel: "Snacks & Street Food",
        description: "Steamed bean pudding seasoned with peppers, onions and garnished with boiled egg and mackerel.",
        protein: "18g",
        tags: [],
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop&q=80"
    },
    {
        id: 10,
        name: "Akara",
        category: "snacks",
        categoryLabel: "Snacks & Street Food",
        description: "Crispy deep-fried bean cakes — golden on the outside, fluffy inside. A beloved Nigerian street snack.",
        protein: "14g",
        tags: [{ text: "Popular", type: "popular" }],
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop&q=80"
    },

    // ---------- PROTEINS ----------
    {
        id: 11,
        name: "Suya (Beef)",
        category: "proteins",
        categoryLabel: "Proteins",
        description: "Spicy skewered beef coated in yaji seasoning, grilled over open flame. Served with sliced onions and tomatoes.",
        protein: "42g",
        tags: [{ text: "Popular", type: "popular" }],
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop&q=80"
    },
    {
        id: 12,
        name: "Pepper Soup (Goat Meat)",
        category: "proteins",
        categoryLabel: "Proteins",
        description: "Aromatic, peppery broth with tender goat meat, uziza and scent leaves. Perfect comfort food.",
        protein: "38g",
        tags: [],
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop&q=80"
    },

    // ---------- BOWL SPECIALS — SOUPS ----------
    {
        id: 13,
        name: "Egusi Soup (Bowl Only)",
        category: "bowls",
        categoryLabel: "Bowl Specials",
        description: "A generous bowl of our rich egusi soup with assorted meat and stockfish. No swallow included.",
        protein: "30g",
        tags: [{ text: "Bowl Only", type: "bowl" }, { text: "No Swallow", type: "no-swallow" }],
        image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&h=400&fit=crop&q=80"
    },
    {
        id: 14,
        name: "Efo Riro (Bowl Only)",
        category: "bowls",
        categoryLabel: "Bowl Specials",
        description: "Bowl of luxurious spinach stew with palm oil, locust beans and assorted meat. Single portion, no swallow.",
        protein: "26g",
        tags: [{ text: "Bowl Only", type: "bowl" }, { text: "No Swallow", type: "no-swallow" }],
        image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&h=400&fit=crop&q=80"
    },
    {
        id: 15,
        name: "Ogbono Soup (Bowl Only)",
        category: "bowls",
        categoryLabel: "Bowl Specials",
        description: "Draw soup in a bowl with okra, stockfish and beef. Perfect for a light, protein-packed meal.",
        protein: "25g",
        tags: [{ text: "Bowl Only", type: "bowl" }, { text: "No Swallow", type: "no-swallow" }],
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=400&fit=crop&q=80"
    },
    {
        id: 16,
        name: "White Melon Soup (Bowl Only)",
        category: "bowls",
        categoryLabel: "Bowl Specials",
        description: "Traditional white egusi in a generous single-serve bowl. Rich, hearty and full of flavour.",
        protein: "28g",
        tags: [{ text: "Bowl Only", type: "bowl" }, { text: "Single Portion", type: "single" }],
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&h=400&fit=crop&q=80"
    },
    {
        id: 17,
        name: "Goat Meat Pepper Soup (Bowl)",
        category: "bowls",
        categoryLabel: "Bowl Specials",
        description: "Steaming bowl of aromatic goat meat pepper soup with uziza and scent leaves.",
        protein: "35g",
        tags: [{ text: "Bowl Only", type: "bowl" }],
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop&q=80"
    },
    {
        id: 18,
        name: "Chicken Pepper Soup (Bowl)",
        category: "bowls",
        categoryLabel: "Bowl Specials",
        description: "Light, spicy chicken broth with herbs and whole pepper. Great for cold days or after a long day.",
        protein: "30g",
        tags: [{ text: "Bowl Only", type: "bowl" }, { text: "Single Portion", type: "single" }],
        image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&h=400&fit=crop&q=80"
    },

    // ---------- BOWL SPECIALS — RICE ----------
    {
        id: 19,
        name: "Bowl of Jollof Rice",
        category: "bowls",
        categoryLabel: "Bowl Specials",
        description: "Single-portion bowl of our signature party jollof rice. Smoky, rich and perfectly seasoned.",
        protein: "18g",
        tags: [{ text: "Bowl Only", type: "bowl" }, { text: "Single Portion", type: "single" }],
        image: "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?w=600&h=400&fit=crop&q=80"
    },
    {
        id: 20,
        name: "Bowl of Fried Rice",
        category: "bowls",
        categoryLabel: "Bowl Specials",
        description: "A quick single bowl of colourful Nigerian fried rice with vegetables, liver and seasoning.",
        protein: "15g",
        tags: [{ text: "Bowl Only", type: "bowl" }, { text: "Single Portion", type: "single" }],
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop&q=80"
    },

    // ---------- BOWL SPECIALS — STEW ----------
    {
        id: 21,
        name: "Bowl of Tomato Stew (No Rice)",
        category: "bowls",
        categoryLabel: "Bowl Specials",
        description: "Rich, pepper-infused tomato stew served solo in a bowl. Perfect as a sauce or light meal base.",
        protein: "8g",
        tags: [{ text: "Bowl Only", type: "bowl" }, { text: "No Swallow", type: "no-swallow" }],
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&h=400&fit=crop&q=80"
    }
];

// ==================== CATEGORY DEFINITIONS ====================
const categoryMeta = {
    rice: { emoji: "🍚", title: "Rice Dishes" },
    swallow: { emoji: "🥣", title: "Swallow & Soups" },
    snacks: { emoji: "🫓", title: "Snacks & Street Food" },
    proteins: { emoji: "🥩", title: "Proteins" },
    bowls: { emoji: "⭐", title: "Bowl Specials" }
};

// ==================== STATE ====================
let cart = [];
let activeCategory = "all";
let searchTerm = "";

// ==================== DOM REFERENCES ====================
const menuContainer = document.getElementById("menuContainer");
const searchInput = document.getElementById("searchInput");
const searchClear = document.getElementById("searchClear");
const categoryTabs = document.querySelectorAll(".cat-tab");
const cartBtn = document.getElementById("cartBtn");
const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const cartClose = document.getElementById("cartClose");
const cartItemsEl = document.getElementById("cartItems");
const cartFooter = document.getElementById("cartFooter");
const cartCount = document.getElementById("cartCount");
const cartTotalEl = document.getElementById("cartTotal");
const noResults = document.getElementById("noResults");
const toastEl = document.getElementById("toast");

// ==================== RENDER MENU ====================
function renderMenu() {
    // Filter items
    let filtered = menuItems.filter(item => {
        const matchCat = activeCategory === "all" || item.category === activeCategory;
        const matchSearch = searchTerm === "" ||
            item.name.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm) ||
            item.categoryLabel.toLowerCase().includes(searchTerm);
        return matchCat && matchSearch;
    });

    // Show/hide no results
    noResults.style.display = filtered.length === 0 ? "block" : "none";

    // Group by category
    const groups = {};
    filtered.forEach(item => {
        if (!groups[item.category]) groups[item.category] = [];
        groups[item.category].push(item);
    });

    // Render order
    const catOrder = ["rice", "swallow", "snacks", "proteins", "bowls"];
    let html = "";

    catOrder.forEach(cat => {
        if (!groups[cat]) return;
        const meta = categoryMeta[cat];
        const isFeatured = cat === "bowls";

        html += `
        <section class="menu-section" data-section="${cat}">
            <div class="section-header ${isFeatured ? 'featured' : ''}">
                <span class="section-emoji">${meta.emoji}</span>
                <h2>${meta.title}</h2>
                <span class="section-count">${groups[cat].length} items</span>
            </div>
            <div class="food-grid">
                ${groups[cat].map(item => renderCard(item, isFeatured)).join("")}
            </div>
        </section>`;
    });

    menuContainer.innerHTML = html;

    // Attach event listeners to new buttons
    document.querySelectorAll(".add-cart-btn").forEach(btn => {
        btn.addEventListener("click", handleAddToCart);
    });
}

// ==================== RENDER A SINGLE CARD ====================
function renderCard(item, isBowl) {
    const tagsHTML = item.tags.map(tag =>
        `<span class="tag tag-${tag.type}">${tag.text}</span>`
    ).join("");

    return `
    <article class="food-card ${isBowl ? 'bowl-card' : ''}" data-id="${item.id}">
        <div class="card-img-wrap">
            <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop&q=80'">
            ${tagsHTML ? `<div class="card-tags">${tagsHTML}</div>` : ""}
        </div>
        <div class="card-body">
            <span class="card-category-label">${item.categoryLabel}</span>
            <h3>${item.name}</h3>
            <p class="card-desc">${item.description}</p>
            <div class="protein-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                Protein: ${item.protein}
            </div>
            <div class="card-footer">
                <input type="text" class="price-input" placeholder="QAR 0.00" data-id="${item.id}" aria-label="Enter price for ${item.name}">
                <button class="add-cart-btn" data-id="${item.id}" aria-label="Add ${item.name} to cart">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    Add
                </button>
            </div>
        </div>
    </article>`;
}

// ==================== SEARCH ====================
searchInput.addEventListener("input", (e) => {
    searchTerm = e.target.value.toLowerCase().trim();
    searchClear.style.display = searchTerm ? "flex" : "none";
    renderMenu();
});

searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchTerm = "";
    searchClear.style.display = "none";
    renderMenu();
    searchInput.focus();
});

// ==================== CATEGORY FILTER ====================
categoryTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        categoryTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        activeCategory = tab.dataset.category;
        renderMenu();

        // Scroll to top of menu smoothly
        menuContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

// ==================== CART LOGIC ====================
function handleAddToCart(e) {
    const id = parseInt(e.currentTarget.dataset.id);
    const item = menuItems.find(i => i.id === id);
    if (!item) return;

    // Get price from the input field on the same card
    const card = e.currentTarget.closest(".food-card");
    const priceInput = card.querySelector(".price-input");
    const priceVal = priceInput.value.trim();

    // Add to cart
    cart.push({
        id: item.id,
        name: item.name,
        image: item.image,
        price: priceVal || "—",
    });

    updateCart();
    showToast(`${item.name} added to cart! 🎉`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    cartCount.textContent = cart.length;

    if (cart.length === 0) {
        cartItemsEl.innerHTML = `<div class="cart-empty"><span>🛒</span><p>Your cart is empty</p></div>`;
        cartFooter.style.display = "none";
        return;
    }

    cartFooter.style.display = "block";

    let total = 0;
    cartItemsEl.innerHTML = cart.map((item, i) => {
        // Try to parse price as number
        const numPrice = parseFloat(item.price.replace(/[^0-9.]/g, ""));
        if (!isNaN(numPrice)) total += numPrice;

        return `
        <div class="cart-item">
            <img class="cart-item-img" src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=60&h=60&fit=crop&q=60'">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <span class="cart-item-price">${item.price === "—" ? "Price TBD" : item.price}</span>
            </div>
            <button class="cart-item-remove" data-index="${i}" aria-label="Remove ${item.name}">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
        </div>`;
    }).join("");

    cartTotalEl.textContent = total > 0 ? `QAR ${total.toFixed(2)}` : "Prices TBD";

    // Attach remove handlers
    document.querySelectorAll(".cart-item-remove").forEach(btn => {
        btn.addEventListener("click", () => {
            removeFromCart(parseInt(btn.dataset.index));
        });
    });
}

// Cart open/close
cartBtn.addEventListener("click", () => {
    cartSidebar.classList.add("open");
    cartOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
});

function closeCart() {
    cartSidebar.classList.remove("open");
    cartOverlay.classList.remove("open");
    document.body.style.overflow = "";
}

cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

// ==================== TOAST ====================
let toastTimer;
function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2200);
}

// ==================== STICKY NAV SHADOW ====================
const categoryNav = document.getElementById("categoryNav");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        categoryNav.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
    } else {
        categoryNav.style.boxShadow = "none";
    }
});

// ==================== INIT ====================
renderMenu();
