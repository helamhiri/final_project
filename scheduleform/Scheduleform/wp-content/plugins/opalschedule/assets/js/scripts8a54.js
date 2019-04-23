(function($) {
  "use strict";
  $(document).ready(function() {
    var short_form = $(".schedule_short_form");
      /**
      * Validate Short form 
      */
      short_form.validate({
      errorPlacement: function errorPlacement(error, element) { element.before(error); },
      errorContainer: ".mesagetooltips",
        errorLabelContainer: ".mesagetooltips",
      rules: {
        opal_schedule_movingon: {
          required: true,
          date: true
        },
        opal_schedule_type: {
          required: true,
        }
      }, // end Rule
      });

    // load datetime picker
    $('.opal_schedule_date').each(function(){
      $(this).datetimepicker({
          timepicker:false,
          format:'m/d/Y'
        });
    });

    $('.opal_schedule_time').each(function(){
      $(this).datetimepicker({
          datepicker:false,
          format:'H:i'
      });
    });

    /**
    * Light Box for Video
    */
    $('.popup-youtube').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    });

  });
}(jQuery));