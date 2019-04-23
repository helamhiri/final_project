(function () {

    "use strict";

    jQuery(document).ready( function( $ ){

        $('#opallostpasswordform').hide();
        $('#modalLoginForm form .btn-cancel').on('click', function(){
            $('#modalLoginForm').modal( 'hide' );
            $('#modalLoginForm .alert').remove();
        } );

        // sign in proccess
        $('form.login-form').on('submit', function(){
                var $this= $(this);
                $('.alert', this).remove();
                $.ajax({
                  url: etroAjax.ajaxurl,
                  type:'POST',
                  dataType: 'json',
                  data:  $(this).serialize()+"&action=opalajaxlogin"
                }).done(function(data) {
                    if( data.loggedin ){
                        $this.prepend( '<div class="alert alert-info">'+data.message+'</div>' );
                        location.reload();
                    }else {
                        $this.prepend( '<div class="alert alert-warning">'+data.message+'</div>' );
                    }
                });
                return false;
         } );


        $('form#opalrgtRegisterForm').on('submit', function(){
                var $this= $(this);
                $('.alert', this).remove();
                $.ajax({
                  url: etroAjax.ajaxurl,
                  type:'POST',
                  dataType: 'json',
                  data:  $(this).serialize()+"&action=opalajaxregister"
                }).done(function(data) {
                    if ( data.status == 1 ) {
                        $this.prepend( '<div class="alert alert-info">'+data.msg+'</div>' );
                        location.reload();
                    } else {
                        $this.prepend( '<div class="alert alert-warning">'+data.msg+'</div>' );
                    }
                });
                return false;
        });


        $('form .toggle-links').on('click', function(){
            $('.form-wrapper').hide();
            $($(this).attr('href')).show();
            return false;
        } );

         // sign in proccess
        $('form.lostpassword-form').on('submit', function(){
                var $this= $(this);
                $('.alert', this).remove();
                $.ajax({
                  url: etroAjax.ajaxurl,
                  type:'POST',
                  dataType: 'json',
                  data:  $(this).serialize()+"&action=opalajaxlostpass"
                }).done(function(data) {
                    if( data.loggedin ){
                        $this.prepend( '<div class="alert alert-info">'+data.message+'</div>' );
                        location.reload();
                    }else {
                        $this.prepend( '<div class="alert alert-warning">'+data.message+'</div>' );
                    }
                });
                return false;
        } );

        //fix map
        if( $('.wpb_map_wraper').length > 0 ){
            $('.wpb_map_wraper').on('click', function () {
                $('.wpb_map_wraper iframe').css("pointer-events", "auto");
            });

            $( ".wpb_map_wraper" ).mouseleave(function() {
              $('.wpb_map_wraper iframe').css("pointer-events", "none");
            });
        }

        /**
         * Scroll To Top
         */
        jQuery(window).scroll(function(){
            if (jQuery(this).scrollTop() > 200) {
                jQuery('.scrollup').fadeIn();
            } else {
                jQuery('.scrollup').fadeOut();
            }
        });

        jQuery('.scrollup').on('click', function(){
            jQuery("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

         //Offcanvas Menu

        $('[data-toggle="offcanvas"], .btn-offcanvas').on('click', function () {
            $('.row-offcanvas').toggleClass('active')
        });

        //mobile click
            $('#main-menu-offcanvas .caret').on('click', function () {
                var $a = jQuery(this);
                $a.parent().find('> .dropdown-menu').slideToggle();
                if ($a.parent().hasClass('level-0')) {
                    if($a.parent().hasClass('show')){
                        $a.parent().removeClass('show');
                    }else{
                        $a.parents('li').siblings('li').find('ul:visible').slideUp().parent().removeClass('show');
                        $a.parent().addClass('show');
                    }
                }
            });

        $('.showright').on('click', function(){
             $('.offcanvas-showright').toggleClass('active');
        } );

        //Gallery photo
        $("a[rel^='prettyPhoto[pp_gal]']").prettyPhoto({
            animation_speed:'normal',
            theme:'light_square',
            social_tools: false,
        });


        /*----------------------------------------------
         *    Apply Filter
         *----------------------------------------------*/
        jQuery('.isotope-filter li a').click(function(){

            var parentul = jQuery(this).parents('ul.isotope-filter').data('related-grid');
            jQuery(this).parents('ul.isotope-filter').find('li a').removeClass('active');
            jQuery(this).addClass('active');
            var selector = jQuery(this).attr('data-option-value');
            jQuery('#'+parentul).isotope({ filter: selector }, function(){ });

            return(false);
        });

        /**
         *
         */
        $(".dropdown-toggle-overlay").on('click', function(){
               $($(this).data( 'target' )).addClass("active");
        } );

         $(".dropdown-toggle-button").on('click', function(){
               $($(this).data( 'target' )).removeClass("active");
               return false;
        } );

	    /**
         *
         * Automatic apply  OWL carousel
         */
        $(".owl-carousel-play .owl-carousel").each( function(){

            var config = {
                navigation : false, // Show next and prev buttons
                slideSpeed : 300,
                paginationSpeed : 400,
                pagination : $(this).data( 'pagination' ),
                autoHeight: true,
                afterAction : function(el){
                   //remove class active
                   this
                   .$owlItems
                   .removeClass('active')

                   //add class active
                   this
                   .$owlItems //owl internal $ object containing items
                   .eq(this.currentItem)
                   .addClass('active')    
                } 
             };

           

            var owl = $(this);
            if( $(this).data('slide') == 1 ){
                config.singleItem = true;
            }else {
                config.items = $(this).data( 'slide' );
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

            if( $(this).data('jumpto') ){
                owl.trigger('owl.jumpTo', $(this).data('jumpto') )
            }
            $('.left',$(this).parent()).on('click', function(){
                  owl.trigger('owl.prev');
                  return false;
            });
            $('.right',$(this).parent()).on('click', function(){
                owl.trigger('owl.next');
                return false;
            });
         });

        /**
         *
         */
        if( $('.page-static-left') ){
            $('.page-static-left .button-action').on('click', function(){
                $('.page-static-left').toggleClass('active');
            } );
        }

        // menu home 3
        $('.menu-button').on( 'click', function(){
            $(this).toggleClass('menu-close');
            $('.wrapper').toggleClass('active');
        });

        /**
         * Static Right Sidebar
         */
        jQuery('.open-bar').click(function(){
            jQuery(this).parents( "body" ).find('.static-right-sidebar').toggleClass('active');
            jQuery(this).parents( "body" ).find('.toggle-overlay').toggleClass('active');
        });

        jQuery('.toggle-overlay').click(function(){
            jQuery(this).parents( "body" ).find('.static-right-sidebar').removeClass('active');
            jQuery(this).removeClass('active');
        });

        jQuery('.static-right-sidebar .close').click(function(){
            jQuery(this).parents( "body" ).find('.static-right-sidebar').removeClass('active');
            jQuery(this).parents( "body" ).find('.toggle-overlay').removeClass('active');
        });

        /**
         * Add class for site use header-v1
         */
        if ($("header.header-v1").length > 0) {
            $("body").addClass("is-header-v1");
        }
    
          if ($('.keep-header').length > 0) {
            var _menu_action = $('.keep-header').offset().top;

            var OC_Menu_Fixed = function(){
                "use strict";

                var $mainmenu = $('.keep-header');

                if( $(document).scrollTop() > _menu_action ){
                  $mainmenu.addClass('header_fixed');
                }else{
                  $mainmenu.removeClass('header_fixed');
                }
            }
            $(window).scroll(function(event) {
                OC_Menu_Fixed();
            });
          }

        $('.sidebar-wrapper .sidebar').stick_in_parent({
            'parent': $('.row'),
            'offset_top': 10
        }).on('sticky_kit:bottom', function(e) {
            $(this).parent().css('position', 'static');
        }).on('sticky_kit:unbottom', function(e) {
            $(this).parent().css('position', 'relative');
        });

        var f_height = jQuery('.fix-footer .footer-wrapper').height();
        jQuery('.fix-footer .site-main').css("margin-bottom", f_height);



         $('.popup-youtube, .popup-video .kc-cta-button a').each(function() { // the containers for all your galleries
            $(this).magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        });

        /**
        *   Light Box for single image
        */
        $('.zoom-img').each(function(){
            $(this).magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                mainClass: 'mfp-img-mobile',
                image: {
                    verticalFit: true
                }
            });
        });
    });
} )( jQuery );

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
