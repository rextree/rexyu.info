$(document).ready(function () {

    /* For the sticky navigation bar */
    $('.js--aboutMe').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '70px;'
    });

    /* Animation on scroll */
    $('.js--panelText').waypoint(function (direction) {
        $('.js--panelText').addClass('animated fadeIn');
    }, {
        offset: '70%;'

    });

    $('.js--nav--icon').click(function () {
        var nav = $('.js--mainNav');
        nav.toggle();
    });


    var leftPanel = $('.leftPanel');
    $('.rightPanel').css({
        height: leftPanel.height()
    });


});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
