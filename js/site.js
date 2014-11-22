$(document).ready(function() {
   $('a[href*=#]').bind('click', function(e) {
	e.preventDefault(); //prevent the "normal" behaviour which would be a "hard" jump
    
    if ($(window).width() < 786) {
    	var topHeight = 0
    } else {
    	var topHeight = $('header').height();   
	}	
	var target = $(this).attr("href"); //Get the target	
	// perform animated scrolling by getting top-position of target-element and set it as scroll target
	$('html, body').stop().animate({ scrollTop: $(target).offset().top - topHeight}, 500, function() {
	     location.hash = target;  //attach the hash (#jumptarget) to the pageurl
	});
			
	return false;
   });

   toTop();
});

function toTop() {
	$(window).scroll(function() {
	if ($(window).width() < 786) {
    	if ($(this).scrollTop() >= 50) {    
        	$('#top').fadeIn("fast");      
    	} else {
        	$('#top').fadeOut("fast");     
    	}
    }
});
	$('#top').click(function() {            
    	$('body,html').animate({scrollTop : 0}, 500);
});
}