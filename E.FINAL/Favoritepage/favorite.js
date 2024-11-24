let listOfProducts = []

const user = JSON.parse(localStorage.getItem('login_success'));
function createAllProducts () {

    if (user) {
        const favProducts = JSON.parse(localStorage.getItem(`favorites_${user.email}`)) || [];
        
        for(let i = 0; i < favProducts.length; i++)  {
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
    }
}


function fillScreenWithProducts ()  {
    const container = document.getElementById("seccion-productos")
    container.innerHTML = ""; 
    for(let i = 0; i < listOfProducts.length; i++)  {
        const product = listOfProducts[i].createHtml();
        container.innerHTML += product;
    }
}


 createAllProducts()
 fillScreenWithProducts()

 function seeDetail(ref) {
    
    window.location.href = "../Detalle/detalle.html?id=" + ref;
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
    window.location.href = "../News/news.html";
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

const loginSuccess = JSON.parse(localStorage.getItem('login_success'));

function redirectToFavorite(refFromUrl) {
    if (loginSuccess) {
    window.location.href = "../Favoritepage/favorite.html";
    }
    else { 
        window.location.href = "../Login/login.html";
    }
}
function redirectToLogin() {
    if (loginSuccess) {
        window.location.href = "../Myaccountpage/account.html";
        }
        else { 
            window.location.href = "../Login/login.html";
        }
}
if (loginSuccess) {
    let userFavorites = JSON.parse(localStorage.getItem(`favorites_${user.email}`)) || [];
    const numberCount = document.getElementById("carroContador")
    numberCount.innerHTML =  
    `<div class="circulo">
        <p id="numero">${userFavorites.length}</p>
    </div> `
}