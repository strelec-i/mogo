$(function(){
    
    /* Fixed Header */
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");


    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function(){

        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);

    });

    function checkScroll (scrollPos, introH){

        if(scrollPos > introH){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event){

        event.preventDefault();
        let elementId = $(this).data("scroll");
        let elementOffSet = $(elementId).offset().top;

        nav.removeClass("active");

        $("html, body").animate({
            scrollTop: elementOffSet + 5
        }, 700);

    });


    /* Nav Toggle */
    
    // let nav = $("#nav");
    // let navToggle = $("#navToggle");

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("active");
    });


    /* Accordion */
    $("[data-collapse]").on("click", function(){

        // let elementId = $(this).data("collapse");

        $(this).toggleClass("active");
        // $(elementId).slideToggle();

    })


    /* Slider */

    $("[data-slider]").slick({

        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1

    })


});