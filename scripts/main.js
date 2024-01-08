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

// Otvaranje i zatvaranje hamburgera
const hamburgerImg = document.querySelector('#hamburgerImg');
const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        if (nav.classList.contains('flex-column')) {
            nav.classList.replace('flex-column', 'd-none')
            hamburgerImg.classList.replace('hamburgerX', 'hamburgerHam')
            hamburgerImg.innerHTML = '&equiv;'
        } else {
            nav.classList.replace('' +
                'd-none', 'flex-column');
            hamburgerImg.classList.replace('hamburgerHam', 'hamburgerX')
            hamburgerImg.innerHTML = 'x'
        }
    })
}

// Otvaranje i zatvaranje podmenija u navigaciji za mobilni
const padajuciMeni = document.querySelectorAll('#uslugeStrelica, #selidbeBgStrelica, #prevozStrelica, #onamaStrelica');
const padajuciMeniLista = document.querySelectorAll('#uslugeMenu, #selidbeBgMenu, #prevozMenu, #onamaMenu');
if (padajuciMeni) {
    padajuciMeni.forEach(item => {
        item.addEventListener('click', () => {
            const index = Array.prototype.indexOf.call(padajuciMeni, item)
            if (padajuciMeniLista[index].classList.contains('show-nav-menu')) {
                padajuciMeniLista[index].classList.remove('show-nav-menu')
            } else {
                padajuciMeniLista[index].classList.add('show-nav-menu');
            }
        })
    })
}