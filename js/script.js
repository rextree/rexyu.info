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

});
