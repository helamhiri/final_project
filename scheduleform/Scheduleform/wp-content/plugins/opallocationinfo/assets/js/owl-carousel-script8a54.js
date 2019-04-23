jQuery(document).ready(function($){

$(".owl-carousel-play .owl-carousel").each( function(){
        var config = {
            navigationText: ["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"],
            autoHeight: true,
            responsive: true,
            paginationSpeed : 400,
        }; 

        var owl = $(this);
        if( $(this).data('slide') == 1 ){
            config.singleItem = true;
        }else {
            config.items = $(this).data( 'slide' );
        }

        if ($(this).data('autoplay')) {
            config.autoPlay = $(this).data('autoplay');
        }

        if ($(this).data('speed')) {
            config.slideSpeed = $(this).data('speed');
        }
        if ($(this).data('slideby')) {
            config.slideBy = $(this).data('slideby');
        }
        if ($(this).data('loop')) {
            config.loop = $(this).data('loop');
        }
        if ($(this).data('margin')) {
            config.margin = $(this).data('margin');
        }
        if ($(this).data('navigation')) {
            config.navigation = $(this).data('navigation');
        }

        if ($(this).data('pagination')) {
            config.pagination = $(this).data('pagination');
        }

        if ($(this).data('rtl')) {
            config.rtl = $(this).data('rtl');
        }
        if ($(this).data('mousedrag')) {
            config.mouseDrag = $(this).data('mousedrag');
        }
        if ($(this).data('touchdrag')) {
            config.touchDrag = $(this).data('touchdrag');
        }
        if ($(this).data('customitem')) {
            config.itemsCustom = $(this).data('customitem');
        }
        if ($(this).data('desktop')) {
            config.itemsDesktop = [1199,$(this).data('desktop')];
        }
        if ($(this).data('desktopsmall')) {
            config.itemsDesktopSmall = [979,$(this).data('desktopsmall')];
        }
        if ($(this).data('tablet')) {
            config.itemsTablet = [768,$(this).data('tablet')];
        }
        if ($(this).data('tabletsmall')) {
            config.itemsTabletSmall = [640,$(this).data('tabletsmall')];
        }
        if ($(this).data('mobile')) {
            config.itemsMobile = [479,$(this).data('mobile')];
        }
        $(this).owlCarousel( config );
        $('.opallocationinfo-left',$(this).parent()).click(function(){
          owl.trigger('owl.prev');
          return false; 
        });
        $('.opallocationinfo-right',$(this).parent()).click(function(){
            owl.trigger('owl.next');
            return false; 
        });
    } );

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");

    $("#sync2").on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync1.trigger("owl.goTo",number);
    });

});