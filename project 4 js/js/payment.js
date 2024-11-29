let security_code = document.querySelector("#code");
let email = document.querySelector("#email");
let ID = document.querySelector("#ID");
let address = document.querySelector("#address");
let phone = document.querySelector("#phone");
let check_out_btn = document.querySelector(".check_out");
check_out_btn.addEventListener("click", function () {
    if (email.value == "" || phone.value == "" || security_code.value == "" || ID.value == ""||address.value=="") {
        alert("please fill data");
    }
    else {
        localStorage.setItem("email", email.value);
        localStorage.setItem("address", address.value);
        localStorage.setItem("security_code", security_code.value);
        localStorage.setItem("ID", ID.value);
        localStorage.setItem("phone", phone.value);
        window.location = "successfully.html";

    }
})