// script caroussel

$(function(){
	let images = [
	'http://www.rabaisvoyages.com/image/bg.jpg',
	'http://mozaikvoyages.com/sites/default/files/Banner-Mozaik-Voyages-02.jpg',
	'http://www.rabaisvoyages.com/image/bg.jpg'];

	let index = 0;

	setInterval(function(){

		if (index == images.length) // verification dernière image
			index = 0;
		
		$("#slider_image").attr("src", images[index]); // modification source image via array

		index++;

		console.log(images.length)

	},3000);

});

var request = $.ajax({
	url: "http://jsonplaceholder.typicode.com/users",
	method: "GET",
	dataType: "json" // optionnel

});

request.done(function(data){ //donnees renvoyés par serveur
	var content ="";
	data.forEach(function(element){
		content +='<li id="Mike-"+element.id><a href="#">'+element.name+'</a></li>' // dans les donnees renvoyées on demande le name uniquement

		});
	
	$("#right_column ul").html(content); // dans html <aside id='right_column ul'>

//----------------------------------DEBUT CODE-----------/	
	$("#right_column ul > li").click(function(e){
		e.preventDefault();

		// recuperation de notre id
		var idUser = $(this).attr("id");
		console.log(idUser.split("-")); // split = couper chaine de caractère pour avoir 1/2...
		idUser = idUser.split("-");

		// requete ajax
		var ficheUser = $.ajax({
					url: "http://jsonplaceholder.typicode.com/users",
					method: "GET",
					data: {id: idUser[1] },
					dataType: "json"
		});

		ficheUser.done(function(dataUser){
			console.info(dataUser[0].username+" "+dataUser[0].email);

		});

	});

	/*******************END NEWS********************/

});

request.fail(function(jqXHR, textStatus){
	alert("Request failed: " + textStatus)
});












