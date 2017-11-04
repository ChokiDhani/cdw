$(document).ready(function () {
    $("#trigger-overlay").click(function () {
        $("#topbar").addClass('activeMenu');
        /* $('body').css('overflow-y', 'hidden');*/
    });
    $("#closeMenu").click(function () {
        $("#topbar").removeClass('activeMenu')
            /*$('body').css('overflow-y', 'visible');*/
    });
    $(".collapsible").click(function(){
        $('.collapsible').removeClass("collapsibleTrue");
       $(this).toggleClass("collapsibleTrue"); 
    });
    $("#open-modal").click(function(){
       $("body").css("overflow","hidden"); 
    });
    $(window).scroll(function(){
       if($(window).scrollTop()>480){
           $("#header_mobile .mobile-menu").css("background-color","#896633");
       } 
        else{
            $("#header_mobile .mobile-menu").css("background-color","transparent");
        }
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
/*popup*/
// Modal button
var openModal = document.getElementById('open-modal');
// Modal ID
var modal = document.getElementById('modal-demo');
// Close modal button
var closeModal = document.getElementsByClassName('close-modal')[0];
// Open modal event listener
openModal.addEventListener('click', function () {
    modal.classList.toggle('visible');
});
// Close modal event listener
closeModal.addEventListener('click', function () {
    modal.classList.remove('visible');
    $("body").css("overflow","scroll");
});