const products = [
    { id:1, name:"iPhone 17 Pro Max Silver", price:20700000, oldPrice:22500000, category:"iphone", brand:"Apple", rating:4.7, img:"./imgg/enJqv2OKgJ3P21uliSSvfsnmjk7tZpX1gF0zlGdGl9BIJWAO2KZIVk7oNXdu.jpg" },

    { id:2, name:"iPhone 17 Pro Max Deep Blue", price:20700000, category:"iphone", brand:"Apple", rating:4.8, img:"./imgg/iphone blue.png" },

    { id:3, name:"iPhone 16 Pro Max Desert", price:16990000, oldPrice:18500000, category:"iphone", brand:"Apple", rating:4.6, img:"./imgg/16 desert.jpg" },

    { id:4, name:"iPhone 15 Black 128GB", price:10009000, category:"iphone", brand:"Apple", rating:4.5, img:"./imgg/15blach.webp" },

    { id:5, name:"iPhone 14 Pro", price:8500000, oldPrice:10000000, category:"iphone", brand:"Apple", rating:4.7, img:"https://minapi.beemarket.uz/prod-media/productImages/1718282588ZeIthwdGSsx2.webp" },

    { id:6, name:"iPhone 13 Pro", price:7500000, oldPrice:9000000, category:"iphone", brand:"Apple", rating:4.7, img:"https://asset.openshop.uz/storage/uploads/products/photos/202212/KhNwOK21mQ61IFW3DpFgfhXnZviqs2gd3UNU98da.jpg" },

    { id:7, name:"Samsung S24 Ultra", price:15990000, category:"samsung", brand:"Samsung", rating:4.9, img:"https://assets.chakana.uz/product/items/desktop/65ae69a90db0e.png" },

    { id:8, name:"Samsung S23 Ultra", price:12400000, category:"samsung", brand:"Samsung", rating:4.7, img:"./imgg/s23.webp" },

    { id:9, name:"Xiaomi 14 Ultra", price:14999000, category:"xiaomi", brand:"Xiaomi", rating:4.6, img:"https://castore.uz/upload/iblock/1b3/o8rjamypk5w4xi446d450ui8u6godr60/smartfon-xiaomi-14-ultra-16-512gb-black.jpg" },

    { id:10, name:"Xiaomi 13 Pro", price:11990000, category:"xiaomi", brand:"Xiaomi", rating:4.4, img:"https://joybox.uz/wp-content/uploads/2023/07/f3ccdd27d2000e3f9255a7e3e2c48800_071923121701.jpeg" },

    { id:11, name:"MacBook Air M2", price:12990000, category:"macbook", brand:"Apple", rating:4.8, img:"https://olcha.uz/image/675x900/products/2022-08-26/macbook-air-m2-13-2022-space-gray-256gb-ssd-16-gb-102151-0.jpeg" },

    { id:12, name:"MacBook Pro 14 M3", price:21990000, category:"macbook", brand:"Apple", rating:4.9, img:"https://joybox.uz/wp-content/uploads/2024/08/planshet-apple-macbook-pro-14.2-inch-m3-8512gb-ssd-serebristyj.jpg" },

    { id:13, name:"ASUS ROG Strix G16", price:18990000, category:"gaming", brand:"Asus", rating:4.7, img:"https://texnostar.uz/upload/iblock/9b9/ncnjeczr317xm5hhxhxucuyfc5o8se1d.webp" },

    { id:14, name:"Lenovo Legion 5", price:15990000, category:"gaming", brand:"Lenovo", rating:4.6, img:"https://technochain.uz/api/app/project_files/product_img/a5c67816-Lenovo%20Legion%205%2015IRX10%20(5).jpg" },

    { id:15, name:"Apple Watch S9", price:5499000, category:"watch", brand:"Apple", rating:4.7, img:"https://macbro.uz/cdn/shop/files/5_ba9422bc-3d60-4036-9874-92519e36cecb_345x_crop_center.png?v=1730728393" },

    { id:16, name:"Samsung Galaxy Watch6", price:3999000, category:"watch", brand:"Samsung", rating:4.5, img:"https://castore.uz/upload/iblock/0cb/lowcnyh504l4ymshvb0iyr160yi1486u/smart-chasy-samsung-galaxy-watch-6-44mm-graphite.webp" },

    { id:17, name:"AirPods Pro 2", price:3299000, category:"earphones", brand:"Apple", rating:4.8, img:"https://castore.uz/upload/iblock/21f/n3ik5lagbxqzk61n9g3a05juic2tvl65/besprovodnye-naushniki-airpods-pro-2nd-generation-mtjv3ru-a.webp" },

    { id:18, name:"Xiaomi Buds 4 Pro", price:1299000, category:"earphones", brand:"Xiaomi", rating:4.3, img:"https://olcha.uz/image/700x700/products/jlNyzDzGBGtaEyDxtFgjZxxdgboUPJCpj4R7X5GNPVaam56EaCvE5iMwQNWj.jpg" },

    { id:19, name:"iPhone 16 Pro", price:14500000, category:"iphone", brand:"Apple", rating:4.8, img:"https://olcha.uz/image/675x900/products/cdn_1/supplier/stores/1/2025-04-23/DyWtkdpJ4XBxTPEr4XULl5b0mjFx6d0UBi0sVrXnNtRvg5UzT6ZhJjb70t2L.jpg" },

    { id:20, name:"iPhone 15 Pro", price:12200000, category:"iphone", brand:"Apple", rating:4.7, img:"https://minapi.beemarket.uz/prod-media/productImages/1718105109xgDX7sgqbmat.webp" },
    { id:23, name:"iPhone SE (2022)", price:6500000, category:"iphone", brand:"Apple", rating:4.2, img:"https://univershop.uz/wp-content/uploads/2022/05/11_0eb7-wz.jpg" },
    { id:24, name:"iPhone 14 Plus", price:9500000, category:"iphone", brand:"Apple", rating:4.6, img:"https://www.prom.uz/_ipx/f_webp/https://devel.prom.uz/upload/product_logos/a6/01/a60139e45d762511574d33995ec75849.webp" },
    { id:25, name:"iPhone 13 mini", price:7000000, category:"iphone", brand:"Apple", rating:4.5, img:"https://olcha.uz/image/675x900/products/2021-10-16/apple-iphone-13-mini-128gb-25916-0.jpeg" },

    { id:21, name:"Samsung Galaxy S24", price:10800000, category:"samsung", brand:"Samsung", rating:4.7, img:"https://minapi.beemarket.uz/prod-media/productImages/1718258882as9YWzM39cgj.webp" },

    { id:22, name:"Samsung Galaxy A55", price:5200000, category:"samsung", brand:"Samsung", rating:4.5, img:"https://joybox.uz/wp-content/uploads/2024/03/samsung-galaxy-a55-5g-8128gb-awesome-lilac.jpg" },
    { id:26, name:"Samsung Galaxy Z Flip5", price:13500000, category:"samsung", brand:"Samsung", rating:4.6, img:"https://olcha.uz/image/675x900/products/cdn_1/supplier/stores/1/2024-04-29/oIMV6DPyEeCKyQvOw59dTWTVvVtPlRVxc5sOtWn1tJnx3Oz9auYy2pVE8gXu.JPG" },
    { id:27, name:"Samsung Galaxy Tab S9 Ultra", price:11000000, category:"samsung", brand:"Samsung", rating:4.8, img:"https://assets.asaxiy.uz/product/items/desktop/28dd2c7955ce926456240b2ff0100bde20231004173925279856jQvhlZQVH.png.webp" },
    { id:28, name:"Samsung Galaxy Watch 7", price:4500000, category:"watch", brand:"Samsung", rating:4.7, img:"https://images.samsung.com/is/image/samsung/p6pim/uz_ru/2407/gallery/uz-ru-galaxy-watch7-l300-sm-l300nzgacis-542513757?$1164_776_PNG$" },

    { id:29, name:"Xiaomi Redmi Note 13 Pro", price:3500000, category:"xiaomi", brand:"Xiaomi", rating:4.5, img:"https://mini-io-api.texnomart.uz/catalog/product/3566/356656/204391/4a22cc5e-71d5-44b9-9b21-e66d4ba45098.webp" },
    { id:30, name:"Xiaomi Poco X6 Pro", price:4800000, category:"xiaomi", brand:"Xiaomi", rating:4.7, img:"https://minapi.beemarket.uz/prod-media/productImages/1733896444mcWKpEkBhzU3.webp" },
    { id:31, name:"Apple Watch Ultra 2", price:10500000, category:"watch", brand:"Apple", rating:4.9, img:"https://olcha.uz/image/600x600/products/2023-09-23/apple-watch-ultra-2-49mm-titanium-case-with-blue-ocean-band-218245-0.jpg" },
    { id:32, name:"Samsung Galaxy Watch Ultra", price:7500000, category:"watch", brand:"Samsung", rating:4.8, img:"https://olcha.uz/image/600x600/products/2024-07-10/samsung-galaxy-watch-ultra-47mm-titanium-gray-280437-0.jpg" },
    { id:33, name:"Samsung Galaxy A34", price:3100000, category:"samsung", brand:"Samsung", rating:4.4, img:"https://olcha.uz/image/600x600/products/2023-03-22/samsung-galaxy-a34-5g-6128gb-awesome-graphite-155502-0.jpg" },
];

let cart = [];
let currentCategory = "all";
let promoApplied = false;
let promoDiscount = 0;

// render products
function renderProducts() {
    let filtered = [...products];
    if(currentCategory !== "all") filtered = filtered.filter(p => p.category === currentCategory);
    // narx filtri
    const minVal = parseFloat(document.getElementById("minPrice").value);
    const maxVal = parseFloat(document.getElementById("maxPrice").value);
    if(!isNaN(minVal)) filtered = filtered.filter(p => p.price >= minVal);
    if(!isNaN(maxVal)) filtered = filtered.filter(p => p.price <= maxVal);
    // rating
    const ratingVal = parseFloat(document.getElementById("ratingFilter").value);
    if(ratingVal > 0) filtered = filtered.filter(p => p.rating >= ratingVal);
    // brand filtri
    const brandVal = document.getElementById("brandFilter").value;
    if(brandVal !== "all") filtered = filtered.filter(p => p.brand === brandVal);
    // global search
    const searchTerm = document.getElementById("globalSearch").value.toLowerCase();
    if(searchTerm) filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm));
    
    // sort
    const sortType = document.getElementById("sortSelect").value;
    if(sortType === "priceAsc") filtered.sort((a,b)=> a.price - b.price);
    if(sortType === "priceDesc") filtered.sort((a,b)=> b.price - a.price);
    if(sortType === "rating") filtered.sort((a,b)=> b.rating - a.rating);
    
    const container = document.getElementById("productsGrid");
    container.innerHTML = filtered.map(p => `
        <div class="product-card" data-id="${p.id}" data-name="${p.name}" data-price="${p.price}" data-img="${p.img}">
            <img src="${p.img}" onerror="this.src='https://placehold.co/300x200'">
            <h4>${p.name}</h4>
            <div class="rating">⭐ ${p.rating} / 5</div>
            <div class="price">${p.price.toLocaleString()} so'm ${p.oldPrice ? `<span class="old-price">${p.oldPrice.toLocaleString()} so'm</span>` : ''}</div>
            <button class="btn-add add-to-cart-btn"><i class="fas fa-cart-plus"></i> Savatga</button>
        </div>
    `).join('');
    attachCartEvents();
}

function attachCartEvents() {
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = btn.closest('.product-card');
            const id = parseInt(card.dataset.id);
            const name = card.dataset.name;
            const price = parseInt(card.dataset.price);
            const img = card.dataset.img;
            addToCart(id, name, price, img);
        });
    });
}

function addToCart(id, name, price, img) {
    const existing = cart.find(i => i.id === id);
    if(existing) existing.quantity++;
    else cart.push({ id, name, price, img, quantity: 1 });
    updateCartUI();
    saveCart();
    showToast(`${name} qo'shildi`);
}

function updateCartUI() {
    const cartCountSpan = document.getElementById("cartCount");
    const cartItemsDiv = document.getElementById("cartItemsList");
    let total = 0;
    cartItemsDiv.innerHTML = '';
    cart.forEach((item, idx) => {
        total += item.price * item.quantity;
        cartItemsDiv.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}" width="50" height="50" style="object-fit:contain">
                <div style="flex:1"><strong>${item.name}</strong><br>${item.price.toLocaleString()} so'm<br>x ${item.quantity}</div>
                <div><i class="fas fa-trash remove-item" data-index="${idx}" style="color:#ff3b30; cursor:pointer;"></i></div>
            </div>
        `;
    });
    if(promoApplied && promoDiscount > 0) {
        const discountAmount = total * (promoDiscount/100);
        total = total - discountAmount;
        document.getElementById("cartTotalAmount").innerHTML = `${Math.floor(total).toLocaleString()} so'm <span style="font-size:12px;color:green;">(-${promoDiscount}%)</span>`;
    } else {
        document.getElementById("cartTotalAmount").innerText = total.toLocaleString() + " so'm";
    }
    cartCountSpan.innerText = cart.reduce((acc,i)=>acc+i.quantity,0);
    document.querySelectorAll('.remove-item').forEach(el => {
        el.addEventListener('click', (e) => {
            const idx = parseInt(el.dataset.index);
            cart.splice(idx,1);
            updateCartUI();
            saveCart();
            showToast("Mahsulot olib tashlandi");
        });
    });
}

function saveCart() { localStorage.setItem("product_cart", JSON.stringify(cart)); }
function loadCart() { const saved = localStorage.getItem("product_cart"); if(saved) { cart = JSON.parse(saved); updateCartUI(); } }
function showToast(msg) { const toast = document.getElementById("toastMsg"); toast.innerText = msg; toast.style.opacity = "1"; setTimeout(() => toast.style.opacity = "0", 1800); }

// kategoriya click
document.querySelectorAll(".category-list li").forEach(li => {
    li.addEventListener("click", () => {
        document.querySelectorAll(".category-list li").forEach(l => l.classList.remove("active"));
        li.classList.add("active");
        currentCategory = li.dataset.cat;
        document.getElementById("categoryTitle").innerText = currentCategory === "all" ? "Barcha mahsulotlar" : li.innerText.trim();
        renderProducts();
    });
});

document.getElementById("applyFiltersBtn").addEventListener("click", () => renderProducts());
document.getElementById("sortSelect").addEventListener("change", () => renderProducts());
document.getElementById("globalSearch").addEventListener("input", () => renderProducts());

// promokod
document.getElementById("applyPromoBtn").addEventListener("click", () => {
    const code = document.getElementById("promoInput").value.trim();
    if(code === "APPSTORE10") { promoApplied = true; promoDiscount = 10; updateCartUI(); document.getElementById("promoMsg").innerText = "✅ 10% chegirma qo'shildi!"; }
    else if(code === "TECH5") { promoApplied = true; promoDiscount = 5; updateCartUI(); document.getElementById("promoMsg").innerText = "✅ 5% chegirma!"; }
    else { document.getElementById("promoMsg").innerText = "❌ Noto'g'ri promokod"; setTimeout(()=>document.getElementById("promoMsg").innerText="",2000); }
});

// cart modal
const cartIcon = document.getElementById('cartIcon');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
cartIcon.addEventListener('click', () => cartModal.classList.add('open'));
closeCart.addEventListener('click', () => cartModal.classList.remove('open'));
document.getElementById('checkoutBtn').addEventListener('click', () => {
    if(cart.length===0) { showToast("Savatcha bo'sh"); return; }
    alert(`Buyurtma qabul qilindi! Jami: ${document.getElementById('cartTotalAmount').innerText}`);
    cart = [];
    updateCartUI();
    saveCart();
    cartModal.classList.remove('open');
});

loadCart();
renderProducts();