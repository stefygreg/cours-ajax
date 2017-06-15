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