document.addEventListener('DOMContentLoaded', function() {
    var parent = document.querySelector('.splitview'),
        topPanel = parent.querySelector('.top'),
        handle = parent.querySelector('.handle'),
        skewHack = 0,
        delta = 0;

    // If the parent has .skewed class, set the skewHack var.
    if (parent.className.indexOf('skewed') != -1) {
        skewHack = 1000;
    }

    parent.addEventListener('mousemove', function(event) {
        // Get the delta between the mouse position and center point.
        delta = (event.clientX - window.innerWidth / 2) * 0.5;

        // Move the handle.
        handle.style.left = event.clientX + delta + 'px';

        // Adjust the top panel width.
        topPanel.style.width = event.clientX + skewHack + delta + 'px';
    });
});

$(document).ready(function(){
    $(".signinForm .trigger").on('click',function(){
        $(".signupForm").addClass("active");
        setTimeout(function(){
            $(".signinForm").removeClass("active");
        },600);
    });
    $(".signupForm .trigger").on('click',function(){
        $(".signinForm").addClass("active");
        setTimeout(function(){
            $(".signupForm").removeClass("active");
        },600);
    });
});



//animate the white box 
$(document).ready(function(){
    $("#signup-btn").click(function(){
        $("#main").animate({left:"22.5%"},400); 
        $("#main").animate({left:"30%"},500); 
        $("#loginform").css("visibility","hidden");
        $("#loginform").animate({left:"25%"},400);
        
        $("#signupform").animate({left:"17%"},400);
        $("#signupform").animate({left:"30%"},500);
        $("#signupform").css("visibility","visible");
    }); 
    
    $("#login-btn").click(function(){
        $("#main").animate({left:"77.5%"},400); 
        $("#main").animate({left:"70%"},500);
        $("#signupform").css("visibility","hidden");
        $("#signupform").animate({left:"75%"},400);
        
        $("#loginform").animate({left:"83.5%"},400);
        $("#loginform").animate({left:"70%"},500);
        $("#loginform").css("visibility","visible");
    });
});

//close the popup
document.getElementById('clickMe').addEventListener('click',function(){
  document.querySelector('#handyman').style.display='flex';
});

document.querySelector(".close").addEventListener('click',function(){
   document.querySelector('#handyman').style.display='none';
});
//btns in the home section
function owner_form(){
    window.location="scheduleform/Scheduleform/schedule-service/index.html"
}

function job(){
  window.location='offers.html'  
}


