'use strict'

const modal = document.querySelector(".modal");
const enter = document.querySelectorAll('.enter');

enter.forEach(function(button) {
    button.addEventListener('click', function() {
    modal.style.display = "flex";
    })
})

const loginForm = document.querySelector("#login")
const registerForm = document.querySelector("#registro");
const registerBtn = document.querySelector(".registrar");

registerBtn.onclick = function() {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
}

const closeBtn = document.querySelectorAll('.close');

closeBtn.forEach(function(button) {
    button.addEventListener('click' , function() {
        if (modal.style.display === "flex") {
            modal.style.display = "none";
        }
    })
});