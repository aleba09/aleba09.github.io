/**
 * Created by Dell on 10.08.2016.
 */


// SWIPER
///////////////////////////////
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 5,
    paginationClickable: true,
    spaceBetween: 10,
    breakpoints:{
        991:{
            slidesPerView: 3
        },
        767:{
            slidesPerView: 3
        },
        591:{
            slidesPerView: 2
        },
        420:{
            slidesPerView: 1
        }

    }
});


// PARALLAX
////////////////////////////////////////////////
;
$(document).ready(function () {
    $.RDParallax({}); // Additional options
});

// NAV BAR
////////////////////////////////////////////////////////
;
$(document).ready(function () {
    $('.rd-navbar').RDNavbar(); // Additional options
});
