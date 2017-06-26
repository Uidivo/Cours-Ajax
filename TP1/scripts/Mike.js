$(function(){


	/************************* Exercice 1 *************************/

	let index = 0; // L'index permettra de parcourir le tableau d'image

	setInterval(function(){ // Permet d'effectuer une fonction toute les x seconde

		let image = ["http://www.baskettiamo.com/baskettiamo/wp-content/uploads/2014/01/sfondo-prova21-e1399624024267.jpg", "https://dl.kaskus.id/ncrsport.com/img/upload/nike.jpg", "http://s1.narvii.com/image/wmyzke2u5qawrkh6ddomku6saaafdk2b_hq.jpg"]; // Varible qui stocke nos images

		if(index == image.length) // Condition pour revenir à la premiere image
			index = 0;

		$("#slider-Mike").attr("src", image[index]); // Modifier la source de l'image

		index++;


	}, 3000);

	/************************* Exercice 2 *************************/

	$(".one_third").one("click", function(){	// Function se declanche au click sur l'id imagesMike1 une seul fois
		$("#imagesMike1").attr("src", "http://www.ilmostardino.it/wp-content/uploads/2017/06/EnriqueRamosGergati2-290x180.jpg"); // Modifier la source de l'image
		$("#imagesMike2").attr("src", "http://www.ilmostardino.it/wp-content/uploads/2016/04/EnriqueRamosDiBella5-290x180.jpg"); // Modifier la source de l'image
		$("#imagesMike3").attr("src", "https://www.westpointaog.org/image/CDT-Tanner-Plomb-16-4.jpg"); // Modifier la source de l'image
	});


	/************************* Exercice 3 *************************/
	$(".one_third").click(function(){ // Function se declanche au click sur la class one_third
		let image = $("#imagesMike1").attr("src"); // Je stock la valeur src de la premiere image dans la variable image
		$("#imagesMike1").attr("src", $("#imagesMike3").attr("src")); // Je modifie le src de la premiere image par le src de la troisieme
		$("#imagesMike3").attr("src", $("#imagesMike2").attr("src")); // Je modifie le src de la troisieme image par le src de la deuxieme
		$("#imagesMike2").attr("src", image);// Je modifie le src de la deuxieme image par le src stoker dans la variable image
	});


	$("#imagesMike1").attr("src", $("#imagesMike2").attr("src")); // Je modifie le src de la premiere image par le src de la troisieme
	$("#imagesMike2").attr("src", $("#imagesMike3").attr("src")); // Je modifie le src de la troisieme image par le src de la deuxieme
	$("#imagesMike3").attr("src", $("#imagesMike1").attr("src"));


	// Exercice 4 Bouton Read More & Read Less


	$(".more > a").click(function(){ // Function se declanche au clock sur la balise a qui se trouve dans la class more
		event.preventDefault(); // Annuler l'element par defaut

		console.log($(this)) // Balise a selectionné
		console.log($(this).parent()) // Balise p class more
		console.log($(this).parent().parent()) // Balise article classe one_quater
		console.log($(this).parent().parent().children("p")) // Balise p

		$(this).parent().parent().children("p").eq(0).append("Long  vie au roi Mike façon Game of Throne !!! Long vie au roi Mike façon Game of Throne !!! Long vie au roi Mike façon Game of Throne !!! Long vie au roi Mike façon Game of Throne !!! Long vie au roi Mike façon Game of Throne !!!") // eq(0) = selectionner le premier p avec le text
		console.log($(".more > a"))

	});

	// exercice 5

	var request = $.ajax({
  url: "https://jsonplaceholder.typicode.com/users",
  method: "GET",
  dataType: "json"
});
 
request.done(function( users ) {
  $( "#log" ).html( users );
});
 
request.fail(function( jqXHR, textStatus ) {
  alert( "Request failed: " + textStatus );
});


/*
	$(".clear .more span.text").click(function(){
 	var moreAndLess = $(".more1").is(':visible') ? 'Read More' : 'Read Less';
	$(this).text(moreAndLess);

 	$(".more1").slideToggle();
 	});

 $(".clear .less a").click(function(event) {
event.preventDefault();
$('<div/>')
.append('default ' + event.type + ' prevented')
.appendTo('#log');
});
*/
});

