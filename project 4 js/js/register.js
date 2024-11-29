let firstname = document.querySelector("#first");
let lastname = document.querySelector("#last");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let signupBtn = document.querySelector(".signup");
signupBtn.addEventListener("click", function () {
    if (email.value == "" || password.value == "" || firstname.value == "" || lastname.value == "") {
        alert("please fill data");
    }
    else {
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
        localStorage.setItem("firstname", firstname.value);
        localStorage.setItem("lastname", lastname.value);
        setTimeout(() => {
            window.location = "login.html"
        }, 1000)
    }
})
