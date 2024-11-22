class Product  {

    constructor(mugId, name, altText, price, imgUrl, description)  {
        this.mugId = mugId
        this.name = name
        this.altText = altText
        this.price = price
        this.imgUrl = imgUrl
        this.description = description
    }


createHtml ()  {
    let formattedPrice = this.price.toLocaleString();

    return  `
    <article class="product" onclick="seeDetail(${this.mugId})">
                <img src="${this.imgUrl}" alt="${this.altText}">
                <h2>${this.name}</h2>
                <p>$${formattedPrice}</p>
                <h3>${this.description}</h3>
                <i class="fa-solid fa-shopping-cart"></i> <!-- Ícono de carrito -->
            </article>
    `;
}
}

