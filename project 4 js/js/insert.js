let userInfo = document.querySelector(".user-info");
let userData = document.querySelector("#user");
let links = document.querySelector("#links");
if (localStorage.getItem("firstname")) {
    links.remove();
    userInfo.style.display = "flex";
    userData.innerHTML = "Welcome" + " " + localStorage.getItem("firstname");
    userInfo.style.listStyle = "none"
    userInfo.style.textAlign = "center"
}
// /////////////////////////////////////////////////////////////////
let allproducts = document.querySelector(".products");
const products = [
    { id:0, product: "T-shirt Defacto", category: "Men fashion", price:2000, imageUrl: "images/1 (7).jpg" },
    { id:1, product: "Hoodie Defacto", category: "Men fashion", price:2499, imageUrl: "images/1 (6).jpg" },
    { id:2, product: "Woven Dress Defacto", category: "Women fashion", price:1189, imageUrl: "images/1 (1).jpg" },
    { id:3, product: "Knitted T-Shirt", category: "Men fashion", price:1299, imageUrl: "images/1 (5).jpg" },
    { id:4, product: "Skinny Trousers", category: "Women fashion", price:380, imageUrl: "images/1.jpg" },
    { id:5, product: "knitted Dress Defacto", category: "Women fashion", price:699, imageUrl: "images/1 (2).jpg"},
    { id:6, product: "Sneaker for women", category: "Women fashion", price:289, imageUrl: "images/1 (3).jpg" },
    { id:7, product: "Slim Trousers", category: "Women fashion", price:650, imageUrl: "images/1 (10).jpg" },
    { id:8, product: "Sneakers For Women", category: "Women fashion", price:699, imageUrl: "images/1 (4).jpg"}
]
function drawItems() {
    let y = products.map((item) => {
        return `
           <div class="items col-xl-4 col-lg-4 col-md-4 col-sm-4" >
                <img class="image" src="${item.imageUrl}">
                <p  class="product"> Product : ${item.product}</p>
                <p class="price_paragraph" >Price :${item.price} </p>
                <p data-category="Men" class="category"> Category : ${item.category}</p>
                <input class="addtocart btn btn-primary" type="button" price="${item.price}" value="Add to cart" id="${item.id}">
                <i class=" icon fa-solid fa-heart" ></i>
            </div>
  
        `
    }).join(' ');

    allproducts.innerHTML = y;
}
drawItems();
// //  /////////////////////////////////////////////////////////////
let btnCart = document.querySelectorAll(".addtocart");
let carts_product_div =document.querySelector(".carts-product-div");
let linkProduct=document.querySelector(".viewAllProducts");
let pageOfProducts = document.querySelector(".contOfProducts");
let contOfcarts_product=document.querySelector(".carts-product");
let shopping_cart=document.querySelector(".cart-icon");
let counter=document.querySelector(".counter");
let x;
if(carts_product_div.innerHTML==""){
    contOfcarts_product.style.display="none";
}
shopping_cart.addEventListener("click",up);
function up(){
    if(carts_product_div.innerHTML!=""){
       if(contOfcarts_product.style.display=="block") {
        contOfcarts_product.style.display="none";
     }
       else{
        contOfcarts_product.style.display="block";
       }

    }
 }
// let price_div=document.querySelector(".price_paragraph")
let addItem=[];//ده array عشان اخزن البيانات فيه 
let totalPrice = 0;
btnCart.forEach(function (button,id) {
    button.onclick = function () {
        if (localStorage.getItem("firstname")) {
            if(button.style.backgroundColor != "red" && button.value != "Remove from cart"){
                button.style.backgroundColor = "red";
                button.value = "Remove from cart";        
                let choosenItem = products.find((item)=>item.id==id);
                carts_product_div.innerHTML+=`<p id="product-${choosenItem.id}">${choosenItem.product}</p>`; 
                counter.style.display="block"; 
                counter.style.backgroundColor="white";
                let cartLength=document.querySelectorAll(".carts-product-div p");
                counter.innerHTML=cartLength.length;
                addItem=[...addItem,choosenItem];   //دي معناها المنتج الجديد هاتو و حطو في ال addItem
                localStorage.setItem("productsInProductPage", JSON.stringify(addItem));    //احنا عارفين ان local storage بتطبع الحاجة في صورة string مش object ودلوقتي الdata في شكل objects 
                //طب عشان نحول من object لstring عن طريق (JSON.sringify(addITem)) 
                let container = Number(this.getAttribute("price"));
                totalPrice += +(container);
                localStorage.setItem("TOTALPRICE",totalPrice);
            }
            else if(button.style.backgroundColor == "red"){
                button.style.backgroundColor = "blue"
                button.value = "Add to cart"
                let choosenItem = products.find((item)=>item.id==id);
                addItem = JSON.parse(localStorage.getItem("productsInProductPage"))
                let removeaddItem = addItem.filter((item) => item.id != id)
                localStorage.setItem("productsInProductPage", JSON.stringify(removeaddItem))
                //لحذف العنصر من product page
                //////////////////////////////////
                let removeItem = document.querySelector(`#product-${choosenItem.id}`);
                if (removeItem) {
                    removeItem.remove();
                
                  // إزالة العنصر من القائمة من droplist
                  //////////////////////////////
                totalPrice = localStorage.getItem("TOTALPRICE")
                totalPrice -= +(this.getAttribute("price"))
                localStorage.setItem("TOTALPRICE",totalPrice);
                //لتعديل السعر 
                  addItem = JSON.parse(localStorage.getItem("productsInProductPage"));
                  let updatedAddItem = addItem.filter((item) => item.id != id);
                  localStorage.setItem("productsInProductPage", JSON.stringify(updatedAddItem));
                  //لتحديث صفحة product }
                
                  let cartLength = document.querySelectorAll(".carts-product-div p")
                if (cartLength.length > 0) {
                    counter.innerHTML=cartLength.length;
                } else {
                    counter.style.display = "none";
                }
                
            }
           
        }
        else {
            window.location = "login.html";
        }

    }
}
})

let faddItem = []
let icon = document.querySelectorAll(".icon")
icon.forEach(function (icon_heart,id) {
    icon_heart.onclick = function () {
        if (localStorage.getItem("firstname")) {
            if(icon_heart.style.color != "red"){
                icon_heart.style.color = "red";
                let fchoosenItem = products.find((item)=>item.id==id);
                faddItem = [...faddItem,fchoosenItem];   //دي معناها المنتج الجديد هاتو و حطو في ال addItem
                localStorage.setItem("fproductsInProductPage", JSON.stringify(faddItem));    //احنا عارفين ان local storage بتطبع الحاجة في صورة string مش object ودلوقتي الdata في شكل objects 
                //طب عشان نحول من object لstring عن طريق (JSON.sringify(addITem))
            }
            else{
                icon_heart.style.color = "gray";
                faddItem = JSON.parse(localStorage.getItem("fproductsInProductPage"))
                let fremoveaddItem = faddItem.filter((item) => item.id !== id)
                localStorage.setItem("fproductsInProductPage", JSON.stringify(fremoveaddItem))    
            }
        }
        else {
            window.location = "login.html";
        }
    }
})
// // ///////////////////////////////////////////////////////////////////////////


let logOutBtn = document.querySelector("#logout")
logOutBtn.addEventListener("click", function (){
    localStorage.clear();
    setTimeout(() => {
        window.location = "register.html";
    } , 1500)
})
//   //////////////////////////////////////////////////////////////////////////
function search() {
    let searchInput = document.querySelector("#searchInput").value.toUpperCase();
    let selectedOption = document.querySelector("#options").value;  
    let products = document.querySelectorAll(".items");
    let names = document.querySelectorAll(".product"); 
    let categories = document.querySelectorAll(".category"); 
    let price = document.querySelectorAll(".price"); 
    for (let i = 0; i < products.length; i++) {
        let productName = names[i].innerHTML.toUpperCase();
        let productCategory = categories[i].innerHTML.toUpperCase();
        let productPrice = price[i].innerHTML.toUpperCase();
        if ((selectedOption == "search by name" && productName.indexOf(searchInput) >= 0) || (selectedOption == "search by category" && productCategory.indexOf(searchInput) >= 0)||(selectedOption == "search by price" && productPrice.indexOf(searchInput) >= 0)
        ) {
            products[i].style.display = ""; 
        } else {
            products[i].style.display = "none"; 
        }
    }
} 

