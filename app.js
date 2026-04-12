/* ============================================================
   HELEN'S KITCHEN — App Logic
   Menu data, search, filters, cart, portion selector
   ============================================================ */

// ==================== MENU DATA ====================
// Images from Wikimedia Commons (Creative Commons licensed)
const menuItems = [
    // ---------- RICE DISHES ----------
    {
        id: 1,
        name: "Jollof Rice with Chicken",
        category: "rice",
        categoryLabel: "Rice Dishes",
        description: "Smoky, tomato-rich Nigerian jollof rice with perfectly seasoned grilled chicken — party-style.",
        protein: "32g",
        tags: [{ text: "Popular", type: "popular" }],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jollof_Rice_with_Stew_and_Chicken.jpg/640px-Jollof_Rice_with_Stew_and_Chicken.jpg"
    },
    {
        id: 2,
        name: "Fried Rice with Turkey",
        category: "rice",
        categoryLabel: "Rice Dishes",
        description: "Colourful Nigerian fried rice loaded with vegetables, liver and tender turkey pieces.",
        protein: "28g",
        tags: [],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Nigerian_Fried_Rice.jpg/640px-Nigerian_Fried_Rice.jpg"
    },
    {
        id: 3,
        name: "Ofada Rice with Sauce",
        category: "rice",
        categoryLabel: "Rice Dishes",
        description: "Local unpolished short-grain rice served with spicy green pepper ofada sauce and assorted meat.",
        protein: "22g",
        tags: [],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Ofada_Rice_and_Jollof_Rice.jpg/640px-Ofada_Rice_and_Jollof_Rice.jpg"
    },
    {
        id: 4,
        name: "White Rice and Stew",
        category: "rice",
        categoryLabel: "Rice Dishes",
        description: "Fluffy white rice drizzled with rich, pepper-infused tomato stew and your choice of protein.",
        protein: "20g",
        tags: [],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Jollof_rice_and_tomato_stew.jpg/640px-Jollof_rice_and_tomato_stew.jpg"
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Egusi_Soup_and_Pounded_Yam.jpg/640px-Egusi_Soup_and_Pounded_Yam.jpg"
    },
    {
        id: 6,
        name: "Efo Riro with Amala",
        category: "swallow",
        categoryLabel: "Swallow & Soups",
        description: "Rich Yoruba-style spinach stew cooked with palm oil, locust beans and assorted meat. Served with smooth amala.",
        protein: "30g",
        tags: [],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Eba_Eforiro_and_asoorted_meat.png/640px-Eba_Eforiro_and_asoorted_meat.png"
    },
    {
        id: 7,
        name: "Ogbono Soup with Garri",
        category: "swallow",
        categoryLabel: "Swallow & Soups",
        description: "Draw soup made from ground ogbono seeds with okra, stockfish and beef. Served with smooth eba.",
        protein: "28g",
        tags: [],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Eba_and_vegetable_soup.jpg/640px-Eba_and_vegetable_soup.jpg"
    },
    {
        id: 8,
        name: "White Melon Soup (Egusi Traditional)",
        category: "swallow",
        categoryLabel: "Swallow & Soups",
        description: "Traditional variation of egusi with white melon seeds, ugu leaves and palm oil. Rich and authentic.",
        protein: "33g",
        tags: [],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Egusi_soup_1.jpg/640px-Egusi_soup_1.jpg"
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Moin-Moin.jpg/640px-Moin-Moin.jpg"
    },
    {
        id: 10,
        name: "Akara",
        category: "snacks",
        categoryLabel: "Snacks & Street Food",
        description: "Crispy deep-fried bean cakes — golden on the outside, fluffy inside. A beloved Nigerian street snack.",
        protein: "14g",
        tags: [{ text: "Popular", type: "popular" }],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Akara_%28food%29.jpg/640px-Akara_%28food%29.jpg"
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Suya_in_Abuja.jpg/640px-Suya_in_Abuja.jpg"
    },
    {
        id: 12,
        name: "Pepper Soup (Goat Meat)",
        category: "proteins",
        categoryLabel: "Proteins",
        description: "Aromatic, peppery broth with tender goat meat, uziza and scent leaves. Perfect comfort food.",
        protein: "38g",
        tags: [],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Pepper_soup_with_goat_meat.jpg/640px-Pepper_soup_with_goat_meat.jpg"
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Egusi_soup_1.jpg/640px-Egusi_soup_1.jpg"
    },
    {
        id: 14,
        name: "Efo Riro (Bowl Only)",
        category: "bowls",
        categoryLabel: "Bowl Specials",
        description: "Bowl of luxurious spinach stew with palm oil, locust beans and assorted meat. Single portion, no swallow.",
        protein: "26g",
        tags: [{ text: "Bowl Only", type: "bowl" }, { text: "No Swallow", type: "no-swallow" }],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Eba_Eforiro_and_asoorted_meat.png/640px-Eba_Eforiro_and_asoorted_meat.png"
    },
    {
        id: 15,
        name: "Ogbono Soup (Bowl Only)",
        category: "bowls",
        categoryLabel: "Bowl Specials",
        description: "Draw soup in a bowl with okra, stockfish and beef. Perfect for a light, protein-packed meal.",
        protein: "25g",
        tags: [{ text: "Bowl Only", type: "bowl" }, { text: "No Swallow", type: "no-swallow" }],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Eba_and_vegetable_soup.jpg/640px-Eba_and_vegetable_soup.jpg"
    },
    {
        id: 16,
        name: "White Melon Soup (Bowl Only)",
        category: "bowls",
        categoryLabel: "Bowl Specials",
        description: "Traditional white egusi in a generous single-serve bowl. Rich, hearty and full of flavour.",
        protein: "28g",
        tags: [{ text: "Bowl Only", type: "bowl" }, { text: "Single Portion", type: "single" }],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Egusi_Soup_and_Pounded_Yam.jpg/640px-Egusi_Soup_and_Pounded_Yam.jpg"
    },
    {
        id: 17,
        name: "Goat Meat Pepper Soup (Bowl)",
        category: "bowls",
        categoryLabel: "Bowl Specials",
        description: "Steaming bowl of aromatic goat meat pepper soup with uziza and scent leaves.",
        protein: "35g",
        tags: [{ text: "Bowl Only", type: "bowl" }],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Pepper_soup_with_goat_meat.jpg/640px-Pepper_soup_with_goat_meat.jpg"
    },
    {
        id: 18,
        name: "Chicken Pepper Soup (Bowl)",
        category: "bowls",
        categoryLabel: "Bowl Specials",
        description: "Light, spicy chicken broth with herbs and whole pepper. Great for cold days or after a long day.",
        protein: "30g",
        tags: [{ text: "Bowl Only", type: "bowl" }, { text: "Single Portion", type: "single" }],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Chicken_pepper_soup.jpg/640px-Chicken_pepper_soup.jpg"
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jollof_Rice_with_Stew_and_Chicken.jpg/640px-Jollof_Rice_with_Stew_and_Chicken.jpg"
    },
    {
        id: 20,
        name: "Bowl of Fried Rice",
        category: "bowls",
        categoryLabel: "Bowl Specials",
        description: "A quick single bowl of colourful Nigerian fried rice with vegetables, liver and seasoning.",
        protein: "15g",
        tags: [{ text: "Bowl Only", type: "bowl" }, { text: "Single Portion", type: "single" }],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Nigerian_Fried_Rice.jpg/640px-Nigerian_Fried_Rice.jpg"
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Nigerian_stew.jpg/640px-Nigerian_stew.jpg"
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

const FALLBACK_IMG = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg";

// ==================== RENDER MENU ====================
function renderMenu() {
    let filtered = menuItems.filter(item => {
        const matchCat = activeCategory === "all" || item.category === activeCategory;
        const matchSearch = searchTerm === "" ||
            item.name.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm) ||
            item.categoryLabel.toLowerCase().includes(searchTerm);
        return matchCat && matchSearch;
    });

    noResults.style.display = filtered.length === 0 ? "block" : "none";

    const groups = {};
    filtered.forEach(item => {
        if (!groups[item.category]) groups[item.category] = [];
        groups[item.category].push(item);
    });

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

    // Attach event listeners
    document.querySelectorAll(".add-cart-btn").forEach(btn => {
        btn.addEventListener("click", handleAddToCart);
    });
    document.querySelectorAll(".qty-minus").forEach(btn => {
        btn.addEventListener("click", () => {
            const v = btn.parentElement.querySelector(".qty-value");
            let n = parseInt(v.textContent);
            if (n > 1) v.textContent = n - 1;
        });
    });
    document.querySelectorAll(".qty-plus").forEach(btn => {
        btn.addEventListener("click", () => {
            const v = btn.parentElement.querySelector(".qty-value");
            let n = parseInt(v.textContent);
            if (n < 20) v.textContent = n + 1;
        });
    });
}

// ==================== RENDER CARD ====================
function renderCard(item, isBowl) {
    const tagsHTML = item.tags.map(tag =>
        `<span class="tag tag-${tag.type}">${tag.text}</span>`
    ).join("");

    return `
    <article class="food-card ${isBowl ? 'bowl-card' : ''}" data-id="${item.id}">
        <div class="card-img-wrap">
            <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';">
            ${tagsHTML ? `<div class="card-tags">${tagsHTML}</div>` : ""}
        </div>
        <div class="card-body">
            <span class="card-category-label">${item.categoryLabel}</span>
            <h3>${item.name}</h3>
            <p class="card-desc">${item.description}</p>
            <div class="protein-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>
                Protein: ${item.protein}
            </div>
            <div class="portion-row">
                <label class="portion-label">How many portions?</label>
                <div class="qty-control">
                    <button class="qty-minus" aria-label="Decrease">−</button>
                    <span class="qty-value" data-id="${item.id}">1</span>
                    <button class="qty-plus" aria-label="Increase">+</button>
                </div>
            </div>
            <div class="card-footer">
                <input type="text" class="price-input" placeholder="QAR 0.00" data-id="${item.id}" aria-label="Enter price for ${item.name}">
                <button class="add-cart-btn" data-id="${item.id}" aria-label="Add ${item.name} to cart">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    Add to Cart
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
        menuContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

// ==================== CART ====================
function handleAddToCart(e) {
    const id = parseInt(e.currentTarget.dataset.id);
    const item = menuItems.find(i => i.id === id);
    if (!item) return;

    const card = e.currentTarget.closest(".food-card");
    const priceInput = card.querySelector(".price-input");
    const qtyEl = card.querySelector(".qty-value");
    const qty = parseInt(qtyEl.textContent) || 1;
    const priceVal = priceInput.value.trim();

    cart.push({
        id: item.id,
        name: item.name,
        image: item.image,
        price: priceVal || "—",
        qty: qty,
    });

    updateCart();
    showToast(`${qty}× ${item.name} added! 🎉`);
    cartBtn.classList.add("pulse");
    setTimeout(() => cartBtn.classList.remove("pulse"), 400);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const totalItems = cart.reduce((s, i) => s + i.qty, 0);
    cartCount.textContent = totalItems;

    if (cart.length === 0) {
        cartItemsEl.innerHTML = `<div class="cart-empty"><span>🛒</span><p>Your cart is empty</p></div>`;
        cartFooter.style.display = "none";
        return;
    }

    cartFooter.style.display = "block";
    let total = 0;

    cartItemsEl.innerHTML = cart.map((item, i) => {
        const numPrice = parseFloat(item.price.replace(/[^0-9.]/g, ""));
        if (!isNaN(numPrice)) total += numPrice * item.qty;

        return `
        <div class="cart-item">
            <img class="cart-item-img" src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <span class="cart-item-qty">${item.qty} portion${item.qty > 1 ? 's' : ''}</span>
                <span class="cart-item-price">${item.price === "—" ? "Price TBD" : item.price}</span>
            </div>
            <button class="cart-item-remove" data-index="${i}" aria-label="Remove ${item.name}">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
        </div>`;
    }).join("");

    cartTotalEl.textContent = total > 0 ? `QAR ${total.toFixed(2)}` : "Prices TBD";

    document.querySelectorAll(".cart-item-remove").forEach(btn => {
        btn.addEventListener("click", () => removeFromCart(parseInt(btn.dataset.index)));
    });
}

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
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2500);
}

// ==================== STICKY NAV ====================
const categoryNav = document.getElementById("categoryNav");
window.addEventListener("scroll", () => {
    categoryNav.style.boxShadow = window.scrollY > 300 ? "0 2px 12px rgba(0,0,0,0.06)" : "none";
});

// ==================== INIT ====================
renderMenu();
