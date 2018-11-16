
$('.mob').on('click', function(){

	$('.mobile-tab').slideToggle();

})

$(window).on('scroll', function(){

	if($(window).scrollTop() >= 20) {
		$('.btn-top').fadeIn(800);
	}
	else {
		$('.btn-top').fadeOut();
	}

});

$('.btn-top').on('click', function(){

	$('html,body').animate({scrollTop:0}, 900)

});


$(document).ready(function() {
 
    var windowWidth = $(window).width();

    if(windowWidth <= 576) {
    	$('.footer-block-3').css("display", "none");
    	$('.hidden-block').css("display", "block");
    }	
  });
