class Product  {

    constructor(mugId, name, price, description, imgTazaUrl, altText)  {
        this.mugId = mugId
        this.name = name
        this.price = price
        this.description = description
        this.imgTazaUrl = imgTazaUrl
        this.altText = altText
    }
 

createHtmlDetalle ()  {
    let formattedPrice = this.price.toLocaleString();
    let formattedIva = (this.price * 0.19).toLocaleString();
    let formattedTotalPrice = (this.price+(this.price * 0.19)).toLocaleString();

    return  `
    <div class= "info-prodt">
        <div class="imagen">
            <img src="${this.imgTazaUrl}" alt="${this.altText}">
        </div>
        <div class="descripcion-producto">
            <h2>${this.name}</h2>
            <p id="description">Description:</p>
            <p id="descript">${this.description}</p>
            <p id="ref">PRODUCT REF: ${this.mugId}</p>
        </div>
    </div>
    <div class="contenedor-info">
        <div class="infor">
            <div class="infor-2">
                <svg id="basura" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                </svg>
                <div id="titulo">
                    <h2>Trolley</h2>
                </div>
                <div class="STANDARD">
                    <h3>FREE STANDARD SHIPPING!</h3>
                </div>
                <div class="Boleyn">
                    <h5 id="the">${this.name}              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Add</h5>
                </div>
                    <h4 class="Subtotal ">Subtotal: $${formattedPrice}</h4>
                    <h2 class="IVA">(Incluinding IVA):  $${formattedIva}</h2>                       
                    <h2 class="total">Total: $${formattedTotalPrice}</h2> 
                <div class="boton">
                    <input onclick= "showNoticeSuccessfulPurchase()"id="compra-boton" type="button" value="Confirm Purchase">
                </div>  
        </div>
        </div>
        <div id="aviso-compra" class="aviso-compra-oculto"></div>
    </div>
    
    `;
}
            
}