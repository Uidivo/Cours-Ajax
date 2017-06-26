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

	// exercice 5**************************************************

	var request = $.ajax({ // Envoi d'un request sur une url avec la methode : DEMANDE
 	 	url: "https://jsonplaceholder.typicode.com/users",
	 	method: "GET",
	 	dataType: "json" // optionnel : Definie le type de donnée reçu par le serveur 
	});
 
	request.done(function( users ) { // Code à effectuer en cas de reusite. 
		var content ="";
		console.log( users);
		for (var i = 0; i < users.length; i++) {
			content += '<li><a href="#">'+users[i].name+'</a></li>'
		}
		$("#right_column ul").html(content) // Evenement du DOM : Modification de  l'HTML dans la balise ul qui se trouve dans la balise qui a pour l'id right_colum
	});
 
request.fail(function( jqXHR, textStatus ) { // fauil = echec : Code à effectuer en cas d'echec.
  alert( "Request failed: " + textStatus );
});

// EXO 6 *****************************************

$.ajax({ // Envoi d'un request sur une url avec la methode : DEMANDE
 	 	url: "https://jsonplaceholder.typicode.com/photos",
	 	method: "GET",
	 	dataType: "json" // optionnel : Definie le type de donnée reçu par le serveur 
	})

	.done(function( photos ) {
		console.log($("#posts img"))
		for (var i = 0; i < 2; i++){
			$("#posts img").eq(i).attr("src", photos[i].url)
		}

		// ou sans boucle en direct mais pas conseillé 
		//$("#posts img").eq(0).attr("src", photos[0].url)
		//$("#posts img").eq(1).attr("src", photos[1].url)
	});
 
request.fail(function( jqXHR, textStatus ) { // fauil = echec : Code à effectuer en cas d'echec.
  alert( "Request failed: " + textStatus );
});


$(".posts .more > a").click(function(){ // Function se declanche au clock sur la balise a qui se trouve dans la class more
		event.preventDefault(); // Annuler l'element par defaut

		console.log($(this)) // Balise a selectionné
		console.log($(this).parent()) // Balise footer class more
		console.log($(this).parent().parent()) // Balise figcaption
		console.log($(this).parent().parent().children()) // Balise figure
		console.log($(this).parent().parent().parent().children("img")) // Balise img

		for (var i = 0; i < 2; i++) {
			if (photos[i].url == $(this).parent().parent().parent().children("img").attr("src")){
				$(this).parent().parent().parent().children("p").append("photos[i].title"); // la fonction eq() permet de parcourir le tableau jQuery
			}
		}		
	});


// Exo 7 *****************************
// Lors de la selection d'un utilisateur(click) dans la liste "Category" afficher un console.log de l'email de l'utilisateur
$("#right_column a").click(function(){
	event.preventDefault();
	console.log(users[this].email);
})



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

