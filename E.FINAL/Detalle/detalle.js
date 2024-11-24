const params = new URLSearchParams(window.location.search);
const idFromUrl = params.get('id');

async function searchProduct() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/lperezco/FINAL/refs/heads/main/E.FINAL/data.json");
        if (!response.ok) throw new Error('Error en la red');

        const data = await response.json();
        const productObj = data.find(obj => obj.mugId == idFromUrl);
        if (productObj) {
            return new Product(
                productObj.mugId,
                productObj.name,
                productObj.price,
                productObj.description,
                productObj.imgUrl,
                productObj.altText
            );
        }
        return null;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

async function createView() {
    const product = await searchProduct();
    if (product) {
        const container = document.getElementById("contenedor-imagen-info")
        
        container.innerHTML = product.createHtmlDetalle();
    } else {
        alert(`No hay coincidencias para el producto con ID: ${idFromUrl}`);
    }
}

createView();

function saveProductToLocalStorage(product, key) {
    const products = JSON.parse(localStorage.getItem(key)) || [];
    if (!products.find(p => p.mugId === product.mugId)) {
        products.push(product);
        localStorage.setItem(key, JSON.stringify(products));
    }
}

function handlePurchase(product) {
    const user = JSON.parse(localStorage.getItem('login_success'));
    if (!user) {
        alert("Por favor, inicie sesión.");
        return;
    }

    const emailUser = user.email;
    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = Users.find(u => u.email === emailUser);

    if (isUserRegistered) {
        const avisoCompra = document.getElementById("aviso-compra");
        avisoCompra.textContent = "¡Purchase made successfully!";
        avisoCompra.classList.remove("aviso-compra-oculto");
        avisoCompra.classList.add("aviso-compra-visible");

        setTimeout(() => {
            avisoCompra.classList.remove("aviso-compra-visible");
            avisoCompra.classList.add("aviso-compra-oculto");
        }, 4000);

        saveProductToLocalStorage(product, `buy_${emailUser}`);
    }
}

function handleAddToCart(product) {
    const user = JSON.parse(localStorage.getItem('login_success'));
    if (!user) {
        alert("Por favor, inicie sesión.");
        return;
    }
    
    const emailUser = user.email;
    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = Users.find(u => u.email === emailUser);
    
    if (isUserRegistered) {
        const avisoCompra = document.getElementById("aviso-compra");
        const buyProduct = JSON.parse(localStorage.getItem(`favorites_${emailUser}`)) || [];
        
        const productInCart = buyProduct.find(p => p.mugId === product.mugId); // Buscar el producto
        
        if (!productInCart) {
            // Producto no encontrado, lo agregamos
            buyProduct.push({
                mugId: product.mugId,
                name: product.name,
                altText: product.altText,
                price: product.price,
                description: product.description,
                imgUrl: product.imgUrl
            });
            localStorage.setItem(`favorites_${emailUser}`, JSON.stringify(buyProduct));
            
            avisoCompra.textContent = "¡The product has been added to the shopping cart!";
        } else {
            const updatedProducts = buyProduct.filter(p => p.mugId !== product.mugId);
            localStorage.setItem(`favorites_${emailUser}`, JSON.stringify(updatedProducts));
            avisoCompra.textContent = "¡The product has been eliminated to the shopping cart!";
        }

        avisoCompra.classList.remove("aviso-compra-oculto");
        avisoCompra.classList.add("aviso-compra-visible");

        setTimeout(() => {
            avisoCompra.classList.remove("aviso-compra-visible");
            avisoCompra.classList.add("aviso-compra-oculto");
        }, 4000);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const product = await searchProduct();

    const compraBoton = document.getElementById("compra-boton");
    if (compraBoton) {
        compraBoton.addEventListener("click", () => handlePurchase(product));
    }

    const addShoppingCar = document.getElementById("basura");
    if (addShoppingCar) {
        addShoppingCar.addEventListener("click", () => handleAddToCart(product));
    }
});

function redirectToIndex() {
    window.location.href = "../index.html";
}

function redirectToMain() {
    window.location.href = "../Mainpage/main.html";
}

function redirectToModerns() {
    window.location.href = "../Moderns/moderns.html";
}

function redirectFantasy() {
    window.location.href = "../Fantasy/fantasy.html";
}

function redirectToNews() {
    window.location.href = "../News/news.html";
}

function redirectToOffers() {
    window.location.href = "../Offers/offers.html";
}

function redirectToTrendings() {
    window.location.href = "../Trending/trending.html";
}

function redirectToRecommendations() {
    window.location.href = "../recommendations/recommend.html";
}

function redirectToFavorite() {
    window.location.href = "../Favoritepage/favorite.html";
}

function redirectToMyAccount() {
    window.location.href = "../Myaccountpage/account.html";
}
