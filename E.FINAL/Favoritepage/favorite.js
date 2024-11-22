let listOfProducts = []

function createAllProducts () {
    let object2 = data[2];
    let object7 = data[7];
    let object11 = data[11];
    let object12 = data[12];

    let product2 = new Product(object2.mugId, object2.name, object2.altText, object2.price, object2.imgUrl, object2.description)
   
    let product7 = new Product(object7.mugId, object7.name, object7.altText, object7.price, object7.imgUrl, object7.description)

    let product11 = new Product(object11.mugId, object11.name, object11.altText, object11.price, object11.imgUrl, object11.description)

    let product12 = new Product(object12.mugId, object12.name, object12.altText, object12.price, object12.imgUrl, object12.description)

    listOfProducts.push(product2, product7, product11, product12);
}


function fillScreenWithProducts ()  {
    const container = document.getElementById("seccion-productos")
    container.innerHTML = ""; 
    for(let i = 0; i < listOfProducts.length; i++)  {
        const product = listOfProducts[i].createHtml();
        container.innerHTML += product;
        console.log(product);
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
function redirectToFavorite() {
    window.location.href = "./favorite.html";
}