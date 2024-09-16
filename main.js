// open list items @ media 767px

function openNavList(){
	let navlist = document.querySelector('nav');
	navlist.classList.toggle("show");
}
// change color of t-shirt
let actaulImage = document.querySelector('.actaul') 

let smallImages =document.querySelectorAll('.color-product img')
smallImages.forEach((image) => changeImage(image));

function changeImage(image){
	image.addEventListener('click',function(){
		actaulImage.src = image.src
	})
}




























