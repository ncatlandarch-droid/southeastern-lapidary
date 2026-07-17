window.SHOP = {
    cart: [],
    STORAGE_KEY: 'sla-cart',
    
    init() {
        this.loadCart();
        this.renderProducts('all');
        this.updateCartUI();
        this.bindEvents();
    },

    loadCart() {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        if (stored) {
            try {
                this.cart = JSON.parse(stored);
            } catch (e) {
                this.cart = [];
            }
        }
    },

    saveCart() {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.cart));
    },

    renderProducts(filter = 'all') {
        const grid = document.getElementById('shop-grid');
        if (!grid || !window.PRODUCT_DATA || !window.PRODUCT_DATA.PRODUCTS) return;

        let filtered = window.PRODUCT_DATA.PRODUCTS;
        if (filter !== 'all') {
            filtered = filtered.filter(p => p.category === filter);
        }

        grid.innerHTML = filtered.map(p => this.createProductCard(p)).join('');
    },

    createProductCard(product) {
        const iconSvg = window.ICONS && window.ICONS.getIcon ? window.ICONS.getIcon(product.stone.toLowerCase(), 80) : '';
        const iconStyle = product.color ? `background-color: ${product.color}20; color: ${product.color};` : '';
        const price = typeof product.price === 'number' ? `$${product.price.toFixed(2)}` : product.price;
        const stockStatus = product.inStock ? '' : '<div class="out-of-stock-badge">Out of Stock</div>';
        
        return `
            <div class="product-card ${product.inStock ? '' : 'out-of-stock'}" data-id="${product.id}">
                <div class="product-image-container" style="${iconStyle}">
                    ${iconSvg}
                    ${stockStatus}
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-details">
                        <span class="detail-label">Stone:</span> ${product.stone}<br>
                        <span class="detail-label">Origin:</span> ${product.origin}<br>
                        <span class="detail-label">Weight:</span> ${product.weight}<br>
                        <span class="detail-label">Size:</span> ${product.dimensions}
                    </p>
                    <div class="product-footer">
                        <span class="product-price">${price}</span>
                        <button class="add-to-cart-btn btn-primary" data-product-id="${product.id}" ${product.inStock ? '' : 'disabled'}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    addToCart(productId) {
        if (!window.PRODUCT_DATA || !window.PRODUCT_DATA.PRODUCTS) return;
        const product = window.PRODUCT_DATA.PRODUCTS.find(p => p.id === productId);
        if (!product || !product.inStock) return;

        const existingItem = this.cart.find(item => item.product.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({ product, quantity: 1 });
        }

        this.saveCart();
        this.updateCartUI();
        this.openCart();
    },

    removeFromCart(index) {
        this.cart.splice(index, 1);
        this.saveCart();
        this.updateCartUI();
    },

    updateCartUI() {
        const cartCount = document.getElementById('cart-count');
        const cartItems = document.getElementById('cart-items');
        const cartSubtotal = document.getElementById('cart-subtotal');
        
        if (cartCount) cartCount.textContent = this.getCartCount();
        
        if (cartItems) {
            if (this.cart.length === 0) {
                cartItems.innerHTML = '<div class="empty-cart">Your cart is empty.</div>';
            } else {
                cartItems.innerHTML = this.cart.map((item, index) => {
                    const price = typeof item.product.price === 'number' ? item.product.price : 0;
                    return `
                        <div class="cart-item">
                            <div class="cart-item-info">
                                <h4>${item.product.name}</h4>
                                <span>${item.quantity} x $${price.toFixed(2)}</span>
                            </div>
                            <button class="remove-item-btn" data-index="${index}">&times;</button>
                        </div>
                    `;
                }).join('');
            }
        }
        
        if (cartSubtotal) {
            cartSubtotal.textContent = `$${this.getCartTotal().toFixed(2)}`;
        }
    },

    openCart() {
        const panel = document.getElementById('cart-panel');
        if (panel) panel.classList.add('cart-open');
    },

    closeCart() {
        const panel = document.getElementById('cart-panel');
        if (panel) panel.classList.remove('cart-open');
    },

    checkout() {
        const modal = document.getElementById('checkout-modal');
        if (modal) modal.classList.add('active');
        this.closeCart();
    },

    getCartTotal() {
        return this.cart.reduce((total, item) => {
            const price = typeof item.product.price === 'number' ? item.product.price : 0;
            return total + (price * item.quantity);
        }, 0);
    },

    getCartCount() {
        return this.cart.reduce((count, item) => count + item.quantity, 0);
    },

    setFilter(category) {
        this.renderProducts(category);
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === category);
        });
    },

    bindEvents() {
        document.addEventListener('click', e => {
            if (e.target.closest('.add-to-cart-btn')) {
                const btn = e.target.closest('.add-to-cart-btn');
                this.addToCart(btn.dataset.productId);
            }
            if (e.target.closest('.remove-item-btn')) {
                const btn = e.target.closest('.remove-item-btn');
                this.removeFromCart(parseInt(btn.dataset.index, 10));
            }
            if (e.target.closest('.filter-btn')) {
                const btn = e.target.closest('.filter-btn');
                this.setFilter(btn.dataset.filter);
            }
            if (e.target.closest('#cart-close-btn')) {
                this.closeCart();
            }
            if (e.target.closest('#cart-toggle-btn')) {
                this.openCart();
            }
            if (e.target.closest('#checkout-btn') || e.target.closest('.buy-now-btn')) {
                this.checkout();
            }
            if (e.target.closest('.modal-close')) {
                const modal = e.target.closest('.modal');
                if (modal) modal.classList.remove('active');
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    window.SHOP.init();
});
