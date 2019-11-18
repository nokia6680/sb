$(document).ready(function() {

	$(".grid-item__pic").click(function(){
	  	var img = $(this);
		var src = img.attr('src');
		$("body").append("<div class='popup-image'>"+
						 "<div class='popup-image__bg'></div>"+
						 "<img src="+src+" class='popup-image__pic' />"+
						 "</div>");
		$(".popup-image").fadeIn(800);
		$(".popup-image__bg").click(function(){
			$(".popup-image").fadeOut(800);
			setTimeout(function() {
			  $(".popup-image").remove();
			}, 800);
		});
	});
});
