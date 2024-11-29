let pageOfProducts = document.querySelector(".showProducts");
let fpageOfProducts = document.querySelector(".fshowProducts");
let contOFFavourite = document.querySelector(".conOfFavourites");
let productsInProductPage = localStorage.getItem("productsInProductPage");
let fproductsInProductPage = localStorage.getItem("fproductsInProductPage");
let totalPrice_div = document.querySelector(".totalPrice");
let totalPrice = +(localStorage.getItem("TOTALPRICE")) || 0;
totalPrice_div.innerHTML = totalPrice;

if (productsInProductPage) {
    let item = JSON.parse(productsInProductPage);
    drawproductsInProductPage(item);
}
if (fproductsInProductPage) {
    let fitem = JSON.parse(fproductsInProductPage);
    fdrawproductsInProductPage(fitem);
}

function drawproductsInProductPage(products) {
    let y = products.map((item) => {
        return `
           <div class="items col-xl-4 col-lg-4 col-md-4 col-sm-4" >
                <img class="image" src="${item.imageUrl}">
                <p class="product"> Product : ${item.product}</p>
                <p class="price_paragraph" > Price : ${item.price} </p>
                <p category="Men" class="category"> Category : ${item.category}</p>
                <input class="Removefromcart btn btn-danger" type="button" price="${item.price}" value="remove from cart" id="${item.id}">
            </div>
        `;
    }).join(' ');

    pageOfProducts.innerHTML = y;

    // تحديث المتغير btnRemove بعد تحديث المحتوى
    let btnRemove = document.querySelectorAll(".Removefromcart");
    remove(btnRemove);
}

function fdrawproductsInProductPage(fproducts) {
    let x = fproducts.map((fitem) => {
        return `
           <div class="items col-xl-4 col-lg-4 col-md-4 col-sm-4" >
                <img class="image" src="${fitem.imageUrl}">
                <p class="product"> Product : ${fitem.product}</p>
                <p data-category="Men" class="category"> Category : ${fitem.category}</p>
                <i class="icon fa-solid fa-heart"></i>
            </div>
        `;
    }).join(' ');

    fpageOfProducts.innerHTML = x;
}

let btnOfPayment = document.querySelector(".payment");
btnOfPayment.addEventListener("click", function () {
    window.location = "payment.html";
});

function remove(btnRemove) {
    btnRemove.forEach(function (button) {
        button.onclick = function () {
            let productID = this.getAttribute("id");
            let allproducts = JSON.parse(localStorage.getItem("productsInProductPage"));
            allproducts = allproducts.filter(item => item.id != productID);
            localStorage.setItem("productsInProductPage", JSON.stringify(allproducts));
            drawproductsInProductPage(allproducts);

            let currentTotalPrice = +(localStorage.getItem("TOTALPRICE"));
            let productPrice = +(this.getAttribute("price"));
            let updatedTotalPrice = currentTotalPrice - productPrice;
            localStorage.setItem("TOTALPRICE", updatedTotalPrice);
            totalPrice_div.innerHTML = updatedTotalPrice;
        };
    });
}
