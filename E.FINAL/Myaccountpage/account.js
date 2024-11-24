let listOfProducts = []

function createAllProducts () {
    const user = JSON.parse(localStorage.getItem('login_success')) || [];

    const userbuy = JSON.parse(localStorage.getItem(`buy_${user.email}`)) || [];

    if (user) {
        
        for(let i = 0; i < userbuy.length; i++)  {
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
        const product = listOfProducts[i].createHtml()
        container.innerHTML += product;
        console.log(product);
    }
}

const user = JSON.parse(localStorage.getItem('login_success'));
if (user != null) {
    const nameHTML = document.getElementById("nombre")
    const emailHTML = document.getElementById("email")

    const nameUser = user.firstName
    const emailUser = user.email
    nameHTML.innerHTML = nameUser
    emailHTML.innerHTML = emailUser

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

