$(document).ready(function(){
	//Si on clique sur une image
	$('img').click(function(){
		if($(this).hasClass("focus")) // Si l'image est déja sélectionner
		{
			/*On lui enlève la classe qui la rend grande et on réactive la possibilité de scroller*/
			$(this).removeClass("focus"); 
			$(this).addClass("unfocus").addClass("image");
			$('body').css('overflow-y','visible');
		}
		else// Si l'image n'est pas déja sélectionner
		{
			/*On lui ajoute la classe qui la rend grande et on désactive la possibilité de scroller*/
			$(".focus").addClass("unfocus").removeClass("focus");
			$(this).removeClass("unfocus").removeClass("image").addClass("focus");
			$('body').css('overflow-y','hidden');
		}
	});


});