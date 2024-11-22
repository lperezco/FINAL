let listOfProducts = []

function createAllProducts () {
    let map0 = data[0];
    let map1 = data[1];

    let imgtazaUrl0 = map0.imgUrl
    let price0 = map0.price;
    let name0 = map0.name;
    let product0 = new Product(imgtazaUrl0,price0, name0);

    let imgtazaUrl1 = map1.imgUrl
    let price1 = map1.price;
    let name1 = map1.name;
    let product1 = new Product(imgtazaUrl1,price1, name1);

    listOfProducts.push(product0, product1);
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
    window.location.href = "index.html";
}

 function redirectToMain() {
    window.location.href = "../Mainpage/main.html";
}
function redirectToModerns() {
    window.location.href = "./Moderns/moderns.html";
}
function redirectFantasy() {
    window.location.href = "./Fantasy/Fantasy.html";
}
function redirectToNews() {
    window.location.href = "./News/news.html";
}
function redirectToOffers() {
    window.location.href = "./Offers/offers.html";
}
function redirectToTrendings() {
    window.location.href = "./Trending/trending.html";
}
function redirectToRecommendatios() {
    window.location.href = "./recommendations/recommend.html";
}
function redirectToFavorite() {
    window.location.href = "./Favoritepage/favorite.html";
}
function redirectToLogin() {
    window.location.href = "./Login/login.html";
}
function redirectToMain() {
    window.location.href = "./Mainpage/main.html";
}


document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById("submitBtn");
    const input = document.getElementById("forminpt");
    const form = document.getElementById("newsletterForm");
    const successMessage = document.getElementById("successMessage"); 
    submitBtn.addEventListener("click", function(e) {
        e.preventDefault();
        if (validateEmail(input.value)) { 
            successMessage.style.display = "block"; 
            input.value = ''; 
        }
    });

    input.addEventListener("keypress", function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (validateEmail(input.value)) { 
                successMessage.style.display = "block"; 
                input.value = ''; 
            }
        }
    });
    
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        if (validateEmail(input.value)) { 
            successMessage.style.display = "block"; 
            input.value = ''; 
        }
    });

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});