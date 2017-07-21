/* ====================================================== 

                      SERVICES 

/* ====================================================== */

$(function () {

    //animate on scroll
    new WOW().init();
});

/* ====================================================== 

                      WORK

/* ====================================================== */

$(function () {
    $("#work").magnificPopup({
        delegate: 'a', //child item selector, by clicking on it popup will open
        type: 'image',
        //other options
        gallery: {
            enabled: true
        }
    });
});

/* ====================================================== 

                      TEAM

/* ====================================================== */

$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
		responsive: {
		  0: {
			items: 1
		  },
		  480: {
			items: 2
		  },
		  768: {
			items: 3
		  }
		}
    });
});

/* ====================================================== 

                      TESTIMONIALS

/* ====================================================== */

$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/* ====================================================== 

                      STATS

/* ====================================================== */

$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/* ====================================================== 

                      CLIENTS

/* ====================================================== */

$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
		responsive: {
		  0: {
			items: 1
		  },
		  480: {
			items: 3
		  },
		  768: {
			items: 5
		  },
		  992: {
			items: 6
		  }
		}
    });
});

/*======================================================= 
                    NAVIGATION
/*======================================================= */
//show/hide transparent black navigation

$(function(){
    
    $(window).scroll(function(){
        if($(this).scrollTop() < 50){
               //hide
            $("nav").removeClass("litco-top-nav");
            $("#back-to-top").fadeOut();
            
        }else{
               //show
            $("nav").addClass("litco-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
    
});

//smooth scrolling

$(function(){
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();
        
        // get/return id like "about, #work if they were clicked
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop:$(section).offset().top - 64
        },1250, "easeInOutExpo");
    });
});


// Close mobile menu on click
$(function(){
    
    $(".navbar-collapse ul li a").on("click touch", function(){
       
        $(".navbar-toggle").click();
    });
});


