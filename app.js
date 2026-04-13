const STORAGE_KEY = "helens-kitchen-cart-v3";
const DETAILS_KEY = "helens-kitchen-details-v2";
const WHATSAPP_NUMBER = "97471021381";

const categories = [
    { id: "all", label: "All dishes" },
    { id: "rice", label: "Rice dishes" },
    { id: "swallow", label: "Swallow & soups" },
    { id: "snacks", label: "Snacks" },
    { id: "proteins", label: "Proteins" },
    { id: "bowls", label: "Bowls" }
];

const commonAddons = {
    chicken: { name: "Chicken", price: 10, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken%20barbecue.jpg" },
    fish: { name: "Fish", price: 12, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fried%20fish%20-%20flickr%20-%20cyclonebill.jpg" },
    turkey: { name: "Turkey", price: 12, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Roast%20turkey.jpg" },
    beef: { name: "Beef", price: 9, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Beef%20steak.jpg" },
    egg: { name: "Boiled egg", price: 3, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Boiling%20Eggs.jpg" },
    water: { name: "Water", price: 2, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bottled%20Water%20%2851839803614%29.jpg" },
    malt: { name: "Malt drink", price: 5, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Soda%20bottle%20shelf.jpg" },
    extraStew: { name: "Extra stew", price: 4, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tomato%20stew.jpg" },
    extraSoup: { name: "Extra soup", price: 6, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pounded%20yam%20and%20Egusi%20soup.jpg" },
    plantain: { name: "Fried plantain", price: 7, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fried%20plantain.jpg" }
};

const menuItems = [
    {
        id: 1,
        name: "White Rice & Stew",
        category: "rice",
        basePrice: 20,
        emoji: "🍛",
        tag: "Flexible plate",
        description: "Simple rice meal that works well with extra chicken, fish, water, and extra stew.",
        addons: ["chicken", "fish", "beef", "egg", "water", "malt", "extraStew", "plantain"],
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jollof%20rice%20and%20chicken.jpg"
    },
    {
        id: 2,
        name: "Jollof Rice",
        category: "rice",
        basePrice: 22,
        emoji: "🍚",
        tag: "Party favorite",
        description: "Smoky jollof rice sold by portion with optional proteins and drinks.",
        addons: ["chicken", "fish", "turkey", "egg", "water", "malt", "plantain"],
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jollof%20rice%20and%20chicken.jpg"
    },
    {
        id: 3,
        name: "Fried Rice",
        category: "rice",
        basePrice: 24,
        emoji: "🥘",
        tag: "Popular",
        description: "Colorful fried rice that can be built with turkey, chicken, fish, and drinks.",
        addons: ["chicken", "fish", "turkey", "egg", "water", "malt", "plantain"],
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Simple%20fried%20rice.jpg"
    },
    {
        id: 4,
        name: "Ofada Rice & Sauce",
        category: "rice",
        basePrice: 26,
        emoji: "🍲",
        tag: "Spicy",
        description: "Traditional ofada rice with sauce. Add extra proteins or drinks as needed.",
        addons: ["chicken", "fish", "beef", "egg", "water", "malt", "extraStew"],
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ofada%20rice.jpg"
    },
    {
        id: 5,
        name: "Egusi & Pounded Yam",
        category: "swallow",
        basePrice: 30,
        emoji: "🥣",
        tag: "Best seller",
        description: "Egusi meal by portion with optional fish, beef, water, and extra soup.",
        addons: ["fish", "beef", "water", "malt", "extraSoup"],
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pounded%20yam%20and%20Egusi%20soup.jpg"
    },
    {
        id: 6,
        name: "Efo Riro & Amala",
        category: "swallow",
        basePrice: 28,
        emoji: "🍜",
        tag: "Comfort meal",
        description: "Spinach stew with amala. Add fish, beef, water, or extra soup.",
        addons: ["fish", "beef", "water", "malt", "extraSoup"],
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Efo%20riro.jpg"
    },
    {
        id: 7,
        name: "Ogbono & Eba",
        category: "swallow",
        basePrice: 28,
        emoji: "🍵",
        tag: "Hearty",
        description: "Ogbono soup meal with customizable extras per order.",
        addons: ["fish", "beef", "water", "malt", "extraSoup"],
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ogbono%20soup.jpg"
    },
    {
        id: 8,
        name: "Moi Moi",
        category: "snacks",
        basePrice: 8,
        emoji: "🫔",
        tag: "Side",
        description: "Order as single or multiple portions, with optional drinks.",
        addons: ["egg", "water", "malt"],
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Moin%20Moin.jpg"
    },
    {
        id: 9,
        name: "Akara",
        category: "snacks",
        basePrice: 7,
        emoji: "🥯",
        tag: "Quick bite",
        description: "Crispy akara by portion with optional drinks.",
        addons: ["water", "malt"],
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Akara.jpg"
    },
    {
        id: 10,
        name: "Suya Beef",
        category: "proteins",
        basePrice: 22,
        emoji: "🥩",
        tag: "Grilled",
        description: "Spiced grilled beef portion with optional drinks or extra beef.",
        addons: ["beef", "water", "malt"],
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Suya.jpg"
    },
    {
        id: 11,
        name: "Pepper Soup",
        category: "proteins",
        basePrice: 24,
        emoji: "🍲",
        tag: "Hot bowl",
        description: "Pepper soup by portion with optional fish, beef, and drinks.",
        addons: ["fish", "beef", "water", "malt"],
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pepper%20soup.jpg"
    },
    {
        id: 12,
        name: "Jollof Bowl",
        category: "bowls",
        basePrice: 16,
        emoji: "🍛",
        tag: "Single portion",
        description: "A lighter bowl meal with optional proteins and drinks.",
        addons: ["chicken", "fish", "water", "malt"],
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jollof%20rice%20and%20chicken.jpg"
    }
];

let activeCategory = "all";
let searchTerm = "";
let cart = loadCart();
let customerDetails = loadCustomerDetails();
let currentDish = null;
let currentPortions = 1;
let currentAddonCounts = {};
let toastTimer;

const searchInput = document.getElementById("searchInput");
const categoryRow = document.getElementById("categoryRow");
const menuGrid = document.getElementById("menuGrid");
const menuTitle = document.getElementById("menuTitle");
const menuSummary = document.getElementById("menuSummary");
const noResults = document.getElementById("noResults");
const cartList = document.getElementById("cartList");
const cartEmpty = document.getElementById("cartEmpty");
const cartTotal = document.getElementById("cartTotal");
const floatingCount = document.getElementById("floatingCount");
const cartPanel = document.getElementById("cartPanel");
const toast = document.getElementById("toast");

const modal = document.getElementById("customizeModal");
const modalDishName = document.getElementById("modalDishName");
const modalDishDesc = document.getElementById("modalDishDesc");
const modalDishHero = document.getElementById("modalDishHero");
const portionCount = document.getElementById("portionCount");
const addonsList = document.getElementById("addonsList");
const lineItemNotes = document.getElementById("lineItemNotes");
const modalTotal = document.getElementById("modalTotal");

const customerNameInput = document.getElementById("customerName");
const deliveryTypeInput = document.getElementById("deliveryType");
const orderNotesInput = document.getElementById("orderNotes");

customerNameInput.value = customerDetails.name || "";
deliveryTypeInput.value = customerDetails.deliveryType || "Delivery";
orderNotesInput.value = customerDetails.notes || "";

function loadCart() {
    try {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
        return Array.isArray(stored) ? stored : [];
    } catch {
        return [];
    }
}

function loadCustomerDetails() {
    try {
        return JSON.parse(localStorage.getItem(DETAILS_KEY)) || {};
    } catch {
        return {};
    }
}

function persistCart() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

function persistDetails() {
    customerDetails = {
        name: customerNameInput.value.trim(),
        deliveryType: deliveryTypeInput.value,
        notes: orderNotesInput.value.trim()
    };
    localStorage.setItem(DETAILS_KEY, JSON.stringify(customerDetails));
}

function formatCurrency(value) {
    return `QAR ${value.toFixed(0)}`;
}

function categoryLabel(id) {
    return categories.find((item) => item.id === id)?.label || id;
}

function getFilteredItems() {
    return menuItems.filter((item) => {
        const inCategory = activeCategory === "all" || item.category === activeCategory;
        const haystack = `${item.name} ${item.description} ${item.tag} ${item.addons.join(" ")}`.toLowerCase();
        const inSearch = !searchTerm || haystack.includes(searchTerm);
        return inCategory && inSearch;
    });
}

function renderSpotlight() {
    const featured = menuItems[0];
    document.getElementById("spotlightCard").innerHTML = `
        <img src="${featured.image}" alt="${featured.name}">
        <div class="spotlight-overlay">
                <span class="badge">Featured meal</span>
                <h2>${featured.name}</h2>
                <p>${featured.description}</p>
                <div class="spotlight-meta">
                    <span class="mini-pill">Base ${formatCurrency(featured.basePrice)}</span>
                    <span class="mini-pill">${featured.addons.length} add-on choices</span>
                    <span class="mini-pill">Prepared fresh</span>
                </div>
        </div>
    `;
}

function renderCategories() {
    categoryRow.innerHTML = categories.map((category) => `
        <button type="button" class="category-pill ${category.id === activeCategory ? "active" : ""}" data-category="${category.id}">
            ${category.label}
        </button>
    `).join("");
}

function renderMenu() {
    const filtered = getFilteredItems();
    menuTitle.textContent = categoryLabel(activeCategory);
    menuSummary.textContent = filtered.length
        ? `${filtered.length} dish${filtered.length === 1 ? "" : "es"} ready for customization.`
        : "No dishes available for this filter.";
    noResults.classList.toggle("hidden", filtered.length > 0);

    menuGrid.innerHTML = filtered.map((item) => `
        <article class="menu-card">
            <div class="dish-art">
                <img src="${item.image}" alt="${item.name}">
                <div class="dish-art-inner">
                    <span class="dish-emoji">${item.emoji}</span>
                    <span class="dish-chip">${item.tag}</span>
                    <strong class="dish-card-title">${item.name}</strong>
                    <small>Helen's Kitchen selection</small>
                </div>
            </div>
            <div class="menu-body">
                <div class="menu-topline">
                    <span class="menu-label">${categoryLabel(item.category)}</span>
                    <span class="protein-pill">Base ${formatCurrency(item.basePrice)}</span>
                </div>
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="item-meta">
                    <span>${item.addons.length} add-on choices</span>
                    <strong class="menu-price">From ${formatCurrency(item.basePrice)}</strong>
                </div>
                <div class="card-actions">
                    <span class="helper-note">Portions + extras inside</span>
                    <button class="btn btn-primary" type="button" data-customize="${item.id}">Customize</button>
                </div>
            </div>
        </article>
    `).join("");
}

function openCustomizer(dishId) {
    currentDish = menuItems.find((item) => item.id === dishId);
    if (!currentDish) return;

    currentPortions = 1;
    currentAddonCounts = Object.fromEntries(currentDish.addons.map((key) => [key, 0]));
    lineItemNotes.value = "";

    modalDishName.textContent = currentDish.name;
    modalDishDesc.textContent = currentDish.description;
    modalDishHero.innerHTML = `
        <div class="dish-art">
            <img src="${currentDish.image}" alt="${currentDish.name}">
            <div class="dish-art-inner">
                <span class="dish-emoji">${currentDish.emoji}</span>
                <span class="dish-chip">${currentDish.tag}</span>
                <h3>${currentDish.name}</h3>
                <small>Base price: ${formatCurrency(currentDish.basePrice)} per portion</small>
            </div>
        </div>
    `;

    renderAddonControls();
    updateCustomizerTotals();
    modal.classList.remove("hidden");
}

function closeCustomizer() {
    modal.classList.add("hidden");
    currentDish = null;
}

function renderAddonControls() {
    addonsList.innerHTML = currentDish.addons.map((addonKey) => {
        const addon = commonAddons[addonKey];
        return `
            <div class="addon-row">
                <div class="addon-copy-wrap">
                    <div class="addon-thumb">
                        <img src="${addon.image}" alt="${addon.name}">
                    </div>
                    <div class="addon-copy">
                        <strong>${addon.name}</strong>
                        <small>${formatCurrency(addon.price)} each</small>
                    </div>
                </div>
                <div class="qty-stepper">
                    <button class="qty-btn" type="button" data-addon-change="${addonKey}" data-delta="-1">−</button>
                    <span class="qty-value" id="addon-count-${addonKey}">${currentAddonCounts[addonKey]}</span>
                    <button class="qty-btn" type="button" data-addon-change="${addonKey}" data-delta="1">+</button>
                </div>
            </div>
        `;
    }).join("");
}

function updateCustomizerTotals() {
    portionCount.textContent = currentPortions;
    const addOnTotal = Object.entries(currentAddonCounts).reduce((sum, [key, qty]) => {
        return sum + (commonAddons[key]?.price || 0) * qty;
    }, 0);
    modalTotal.textContent = formatCurrency(currentDish.basePrice * currentPortions + addOnTotal);
}

function addCustomizedMealToCart() {
    if (!currentDish) return;

    const selectedAddons = Object.entries(currentAddonCounts)
        .filter(([, qty]) => qty > 0)
        .map(([key, qty]) => ({
            key,
            name: commonAddons[key].name,
            qty,
            price: commonAddons[key].price
        }));

    const lineTotal = currentDish.basePrice * currentPortions
        + selectedAddons.reduce((sum, addon) => sum + addon.price * addon.qty, 0);

    cart.push({
        id: `${currentDish.id}-${Date.now()}`,
        dishId: currentDish.id,
        name: currentDish.name,
        portions: currentPortions,
        basePrice: currentDish.basePrice,
        addons: selectedAddons,
        notes: lineItemNotes.value.trim(),
        lineTotal
    });

    persistCart();
    renderCart();
    closeCustomizer();
    showToast(`${currentDish.name} added to cart`);
}

function renderCart() {
    cartEmpty.classList.toggle("hidden", cart.length > 0);
    cartList.innerHTML = cart.map((item) => `
        <article class="cart-item">
            <div class="cart-item-head">
                <div>
                    <h3>${item.name}</h3>
                    <small>${item.portions} portion${item.portions > 1 ? "s" : ""} x ${formatCurrency(item.basePrice)}</small>
                </div>
                <strong>${formatCurrency(item.lineTotal)}</strong>
            </div>
            <ul>
                ${item.addons.length ? item.addons.map((addon) => `<li>${addon.qty} x ${addon.name}</li>`).join("") : "<li>No extras</li>"}
                ${item.notes ? `<li>Note: ${item.notes}</li>` : ""}
            </ul>
            <div class="cart-item-controls">
                <span class="helper-note">Customized line item</span>
                <button class="text-btn" type="button" data-remove="${item.id}">Remove</button>
            </div>
        </article>
    `).join("");

    const total = cart.reduce((sum, item) => sum + item.lineTotal, 0);
    cartTotal.textContent = formatCurrency(total);
    floatingCount.textContent = cart.length;
}

function buildWhatsAppMessage() {
    persistDetails();
    const total = cart.reduce((sum, item) => sum + item.lineTotal, 0);
    const lines = [
        "Hello Helen's Kitchen, I would like to place an order.",
        "",
        `Customer: ${customerDetails.name || "Not provided"}`,
        `Order type: ${customerDetails.deliveryType || "Delivery"}`,
        "",
        "Items:"
    ];

    cart.forEach((item, index) => {
        lines.push(`${index + 1}. ${item.name}`);
        lines.push(`   Portions: ${item.portions}`);
        if (item.addons.length) {
            item.addons.forEach((addon) => {
                lines.push(`   Add-on: ${addon.qty} x ${addon.name}`);
            });
        }
        if (item.notes) {
            lines.push(`   Note: ${item.notes}`);
        }
        lines.push(`   Subtotal: ${formatCurrency(item.lineTotal)}`);
    });

    lines.push("");
    lines.push(`Total: ${formatCurrency(total)}`);

    if (customerDetails.notes) {
        lines.push(`General notes: ${customerDetails.notes}`);
    }

    lines.push("");
    lines.push("Please confirm availability and delivery timing. Thank you.");
    return lines.join("\n");
}

function checkout() {
    if (!cart.length) {
        showToast("Add at least one customized meal before checkout.");
        return;
    }

    const message = buildWhatsAppMessage();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
}

function clearCart() {
    cart = [];
    persistCart();
    renderCart();
    showToast("Cart cleared");
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function toggleCart(open) {
    cartPanel.classList.toggle("open", open);
}

searchInput.addEventListener("input", (event) => {
    searchTerm = event.target.value.trim().toLowerCase();
    renderMenu();
});

customerNameInput.addEventListener("input", persistDetails);
deliveryTypeInput.addEventListener("change", persistDetails);
orderNotesInput.addEventListener("input", persistDetails);

document.addEventListener("click", (event) => {
    const category = event.target.closest("[data-category]")?.dataset.category;
    const customize = event.target.closest("[data-customize]")?.dataset.customize;
    const remove = event.target.closest("[data-remove]")?.dataset.remove;
    const addonButton = event.target.closest("[data-addon-change]");

    if (category) {
        activeCategory = category;
        renderCategories();
        renderMenu();
        return;
    }

    if (customize) {
        openCustomizer(Number(customize));
        return;
    }

    if (remove) {
        cart = cart.filter((item) => item.id !== remove);
        persistCart();
        renderCart();
        return;
    }

    if (addonButton && currentDish) {
        const key = addonButton.dataset.addonChange;
        const delta = Number(addonButton.dataset.delta);
        currentAddonCounts[key] = Math.max(0, (currentAddonCounts[key] || 0) + delta);
        document.getElementById(`addon-count-${key}`).textContent = currentAddonCounts[key];
        updateCustomizerTotals();
    }
});

document.getElementById("portionMinus").addEventListener("click", () => {
    if (!currentDish) return;
    currentPortions = Math.max(1, currentPortions - 1);
    updateCustomizerTotals();
});

document.getElementById("portionPlus").addEventListener("click", () => {
    if (!currentDish) return;
    currentPortions += 1;
    updateCustomizerTotals();
});

document.getElementById("confirmAddBtn").addEventListener("click", addCustomizedMealToCart);
document.getElementById("checkoutBtn").addEventListener("click", checkout);
document.getElementById("clearCartBtn").addEventListener("click", clearCart);
document.getElementById("floatingCart").addEventListener("click", () => toggleCart(true));
document.getElementById("openCartHero").addEventListener("click", () => toggleCart(true));
document.getElementById("openCartTop").addEventListener("click", () => toggleCart(true));
document.getElementById("closeCart").addEventListener("click", () => toggleCart(false));
document.getElementById("closeModal").addEventListener("click", closeCustomizer);
modal.addEventListener("click", (event) => {
    if (event.target === modal) closeCustomizer();
});

renderSpotlight();
renderCategories();
renderMenu();
renderCart();
