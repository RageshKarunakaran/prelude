// Mobile menu
$('.hamburger').on( 'click', function (event) {
    $(this).toggleClass('h-active');
    $('.main-nav').toggleClass('slidenav');
});
$('.header-home .main-nav ul li  a').on( 'click', function (event) {
    $('.hamburger').removeClass('h-active');
    $('.main-nav').removeClass('slidenav');
});

