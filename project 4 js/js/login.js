let email = document.querySelector("#email1");
let password = document.querySelector("#password1");
let checkbox = document.querySelector(".checkbox");
let signBtn = document.querySelector(".signin");
let getEmail = localStorage.getItem("email");
let getPassword = localStorage.getItem("password");
signBtn.addEventListener("click", function () {
    if (email.value == "" || password.value == "") {
        alert("please fill data");
    }
    else {
        if (getEmail == "" || getPassword == "") {
            alert("You do not have any accounts you must register first");
        }
        else if ((getPassword == password.value && getEmail == email.value) &&(getPassword == password.value.trim() && getEmail == email.value.trim())) {
            setTimeout(() => {
                window.location = "insert.html"
            }, 1000)
        }
        else {
            alert("the password is wrong");
        }
    }
})