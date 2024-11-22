let listOfProducts = []

function createAllProducts ()  {
    for(let i = 0; i < data.length; i++)  {
        let object = data [i]
        
        let mugId = object.mugId
        console.log(mugId);
        
        let name = object.name
        let price = object.price
        let imgUrl = object.imgUrl
        let altText = object.altText
        let description = object.description
        let product = new Product (mugId, name, price, description, imgUrl, altText)
        listOfProducts.push(product)
    }
}

function fillScreenWithProducts ()  {
    const container = document.getElementById("seccion-productos")
    container.innerHTML = ""; 
    for(let i = 0; i < listOfProducts.length; i++)  {
        const product = listOfProducts[i].createHtml()
        container.innerHTML += product;
    }
}


 createAllProducts()
 fillScreenWithProducts()

 function seeDetail(ref) {
    
    window.location.href = "../Detalle/detalle.html?id="+ref
}
function redirectToIndex() {
    window.location.href = "../index.html";
}

 function redirectToMain() {
    window.location.href = "./main.html";
}
function redirectToModerns() {
    window.location.href = "../Moderns/moderns.html";
}
function redirectToFantasy() {
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
function redirectToFavorite() {
    window.location.href = "../Favoritepage/favorite.html";
}
function redirectToLogin() {
    window.location.href = "../Login/login.html";
}
