let elHeader = document.querySelector(".header");
let elHeaderHamburgBtn = document.querySelector(".header__button");

elHeaderHamburgBtn.addEventListener('click', function(){
    elHeader.classList.toggle("header--active");
})
function myFunction(x) {
   x.classList.toggle("change");
 }