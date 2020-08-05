$(document).ready(function(){
    $('.header-button').click(function() {
        $('.icon').toggleClass('fa-times');
        $('.icon').toggleClass('fa-bars');
    });

    $('.messenger').click(function() {
        $('.toggle-class').toggle();
    });
    
    $('.close').click(function() {
        $('.toggle-class').hide();
    });

    $('[data-toggle="tooltip"]').tooltip();

    $('.slide-block').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
});

