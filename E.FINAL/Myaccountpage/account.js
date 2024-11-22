let listOfProducts = []

function createAllProducts () {
    let object7 = data[7];
    let object11 = data[11];

    let product7 = new Product(object7.mugId, object7.name, object7.altText, object7.price, object7.imgUrl, object7.description)

    let product11 = new Product(object11.mugId, object11.name, object11.altText, object11.price, object11.imgUrl, object11.description)

    listOfProducts.push(product7, product11);
}

function fillScreenWithProducts ()  {
    const container = document.getElementById("seccion-productos")
    container.innerHTML = ""; 
    for(let i = 0; i < listOfProducts.length; i++)  {
        const product = listOfProducts[i].createHtml()
        container.innerHTML += product;
        console.log(product);
    }
}


 createAllProducts()
 fillScreenWithProducts()

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
function redirectToRecommendatios() {
    window.location.href = "../recommendations/recommend.html";
}
function redirectToFavorite() {
    window.location.href = "../Favoritepage/favorite.html";
}
function redirectToLogin() {
    window.location.href = "../Login/login.html";
}
function redirectToMyAccount() {
    window.location.href = "account.html";
}

