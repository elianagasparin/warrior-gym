'use strict'

let menuBtn = document.querySelector(".menu");
let lista = document.querySelector(".opciones");

menuBtn.addEventListener('click', function() {
    if (lista.style.display === 'none') {
        lista.style.display = 'flex'
    } else {
        lista.style.display = 'none'
    }
})