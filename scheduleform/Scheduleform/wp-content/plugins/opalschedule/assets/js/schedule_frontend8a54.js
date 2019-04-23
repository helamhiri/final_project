(function($) {
	"use strict";
	$(document).ready(function() {

	    var form = $(".schedule_post_form");
	    $.validator.addMethod("time24", function(value, element) { 
            if (!/^\d{2}:\d{2}$/.test(value)) return false;
            var parts = value.split(':');
            if (parts[0] > 23 || parts[1] > 59) return false;
            return true;
        }, "Invalid time format.");
	    /**
	    * Validate Form in Page  
	    */
	    form.validate({
            submitHandler: function(form) {

            $('.modal').addClass('loading');
            var data = $(form).serialize();
                $.ajax({
                url: ajaxurl,
                type:'POST',
                dataType: 'json',
                data:  'action=schedule_post_form&' + data
            }).done(function(reponse) {
                    $('.modal').removeClass("loading");
                    if (reponse.status == "success") {
                    window.location.replace(comfirmurl);
                    $(".contact-info input, .schedule_post_form textarea, .opal_schedule_date, .opal_schedule_time").val('');
                    $(".schedule_post_form :checkbox").prop('checked', false);
                    removeActive();
                }else{
                    $('.modal').removeClass("loading");
                    $('#schedule-message').html( reponse.msg );
                    $('#schedule-message').addClass("alert alert-danger");
                    $('#schedule-message').focus();
                }  
            });
          
          },
			errorPlacement: function errorPlacement(error, element) { element.before(error); },
			errorContainer: ".mesagetooltips",
			  errorLabelContainer: ".mesagetooltips",
			rules: {
                'opal_schedule_type[]': {
                  required: true,
                  minlength: 1
                },
                opal_schedule_timeofday: {
                  required: true,
                },
				opal_schedule_date: {
				  required: true,
				  date: true
				},
                opal_schedule_time: {
                  required: true,
                  time24: true
                },
                opal_schedule_name: {
                  required: true,
                },
				opal_schedule_email: {
				  required: true,
				  email: true,
				},
				opal_schedule_phone: {
				  required: true,
				  number: true
				},
                opal_schedule_zip: {
                  required: true,
                  number: true
                }
				
			}, // end Rule
			messages: {
			   opal_schedule_name: "Please specify your name",
			   opal_schedule_email: {
			      required: "We need your email address to contact you",
			      email: "Your email address must be in the format of name@domain.com"
			   },
			   opal_schedule_phone: {
			      required: "We need your phone number to contact you",
			      number: "Required is number"
			   },

			}
	       
	    });

	//========= Process checked
	/**
    * func get list checkbox is checked
    */
    function getListCheckedInput(){
        var selected = [];
        $(".item-type input:checked").each(function() {
            selected.push($(this).parent().data('value'));
        });
        return selected;
    }


    /**
    * func get list checkbox is checked
    */
    function removeActive(){
        $(".item-timeofday, .item-type").each(function() {
            $(this).removeClass("itemactive");
            $(this).find('.icon-checkbox').hide();
        });
    }

    /**
    * func get list checkbox is checked
    */
    function checkActiveRadio(){
        $(".item-timeofday").each(function() {
            if($(this).find('input').is(':checked')){
            	$(this).addClass("itemactive");
            	$(this).find('.icon-checkbox').show();
            }else{
            	$(this).removeClass("itemactive");
            	$(this).find('.icon-checkbox').hide();
            }
        });
    }

    $(".item-type").each(function() {

        $(this).click(function(e){
            var checkbox = $(this).find('input');
            if(checkbox.is(':checked')){
                checkbox.prop('checked', false);
                $(this).removeClass("itemactive");
                $(this).find('.icon-checkbox').hide();
            }else{
                checkbox.prop('checked', true);
                $(this).addClass("itemactive");
                $(this).find('.icon-checkbox').show();
            }

            return false;
        });
    });

    $(".item-timeofday").each(function() {

        $(this).click(function(e){

            var checkbox = $(this).find('input');
            if(!checkbox.is(':checked')){
                checkbox.prop('checked', true);
            }
            checkActiveRadio();
            return false;
        });
    });
	   
	}); // end Jquery
}(jQuery));