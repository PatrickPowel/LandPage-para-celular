$(document).ready(function(){
 /* use slicknav if bootstrap defult mobile nav not use */


 	$(".single-package-wraper").hover(function(){
    	$(".single-package-wraper").removeClass("active");
    	$(this).addClass("active");
	});	

	$(".container").hover(function(){
    	$(".single-package-wraper").removeClass("active"); 
    	$(".highlight").addClass("active");
	});



 /***************** slider-screen-wraper ******************/

	$("#slider-screen-wraper").owlCarousel({

		items : 3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,3],
		itemsTabletSmall: [600,1],
		autoPlay : true,
		pagination : true
 	 });


 /***************** jquery scrool spy ******************/



 /***************** prallax with scrolly ******************/

  	$('.parallax_bg').scrolly({bgParallax: true});

 /***************** wow animation activation ******************/


 /***************** bootstrap mobile menu coustomized ******************/





});





