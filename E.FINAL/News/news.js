let listOfProducts = []

async function fetchAndCreateAllProducts() {
    await fetch('https://raw.githubusercontent.com/lperezco/EntregaMain/main/ENTREGA%20FINAL/data.js') 
        .then(response => { 
            if (!response.ok) {
                throw new Error('Error en la red');
              }
              return response.json()})
        .then(data => {

    for(let i = 0; i < data.length; i++)  {
        if (data[i].trending) {
            let object = data [i]
            let mugId = object.mugId
            let name = object.name
            let altText = object.altText
            let price = object.price
            let description = object.description
            let imgUrl = object.imgUrl
            let product = new Product(mugId, name, altText, price, imgUrl, description)
            listOfProducts.push(product)
        }
        fillScreenWithProducts(); 
    }
})
.catch(error => console.error('Error fetching data:', error));
    }

function fillScreenWithProducts ()  {
    const container = document.getElementById("seccion-productos")
    container.innerHTML = ""; 
    for(let i = 0; i < listOfProducts.length; i++)  {
        const product = listOfProducts[i]
        container.innerHTML += product.createHtml();
    }
}


 fetchAndCreateAllProducts()
 fillScreenWithProducts()

 function seeDetail(ref) {
    
    window.location.href = "../Detalle/detalle.html?id="+ref
}
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
    window.location.href = "../Fantasy/Fantasy.html";
}
function redirectToNews() {
    window.location.href = "./news.html";
}
function redirectToOffers() {
    window.location.href = "../Offers/offers.html";
}
function redirectToTrendings() {
    window.location.href = "../Trending/trending.html";
}
function redirectToRecommendatios() {
    window.location.href = "../recommendations/recommend.html";
}
function redirectToFavorite() {
    window.location.href = "../Favoritepage/favorite.html";
}
function redirectToLogin() {
    window.location.href = "../Login/login.html";
}
function redirectToAccount() {
    window.location.href = "../Myacountpage/account.html";
}
if (loginSuccess) {
    const user = JSON.parse(localStorage.getItem('login_success')) || [];
    let userFavorites = JSON.parse(localStorage.getItem(`favorites_${user.email}`)) || [];
    let count = 0
   
    const numberCount = document.getElementById("carroContador")
    numberCount.innerHTML =  
    `<div class="circulo">
        <p id="numero">${userFavorites.length}</p>
    </div> `
}