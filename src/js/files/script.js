// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";
const btnMenu = document.querySelector('.header__btn-menu');
const headerBox = document.querySelector('.header__top-box')
window.addEventListener("load", function (e) {
    
    btnMenu.addEventListener('click', function () {
        headerBox.classList.toggle("active");
        
    });
});