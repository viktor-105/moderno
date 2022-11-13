// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";
const bascetBox = document.querySelector('.bascet__box');

window.addEventListener("load", function (e) {
    
    bascetBox.addEventListener('click', function () {
        bascetBox.classList.toggle("active");
        
    });
});