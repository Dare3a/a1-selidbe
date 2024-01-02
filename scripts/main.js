"use strict";

// SCROLL TO TOP
document.addEventListener("DOMContentLoaded", function (event) {

    const button = document.querySelector('#scroll-top');

    button.addEventListener('click', function () {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    });

    // window.addEventListener('scroll', function () {
    //     if (window.scrollY < 200) {
    //         button.style.opacity = "0";
    //     } else {
    //         button.style.opacity = "1";
    //     }
    // });

});