function addToFavorites(product) {
    let favorites = JSON.parse(localStorage.getItem("Favoritos")) || [];

    if (favorites.some(fav => fav.id === product.id)) {
        alert("Este producto ya esta en tus favoritos!")
        return;
    }

    favorites.push(product)

    localStorage.setItem("favoritos", JSON.stringify(favorites))

    alert("Producto añadido a Favoritos!")
}

function handleFavoriteButtonClick(productId) {
    const product = products.find(p => p.id === productId)
    if (!product) {
        console.error("Producto no encontrado!")
        return;
    }
    addToFavorites(product)
}