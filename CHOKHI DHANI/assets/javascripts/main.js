$(document).ready(function () {
    $("#trigger-overlay").click(function () {
        $("#topbar").addClass('activeMenu');
        $('body').css('overflow-y', 'hidden');
    });
    $("#closeMenu").click(function () {
        $("#topbar").removeClass('activeMenu')
        $('body').css('overflow-y', 'visible');
    });
     $('.lightBox').lightBox();
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 3
        , loop: true
        , nav: true
        , autoplay: true
        , autoplayTimeout: 5000
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 768: {
                items: 2
            , }
            , 992: {
                items: 3
            , }
        }
    }); 
});
 var disappear = function () {
    document.getElementById('close').onclick = function () {
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
        return false;
    };
};