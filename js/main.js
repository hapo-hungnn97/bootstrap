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
});

