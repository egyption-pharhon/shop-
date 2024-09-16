// open list items @ media 767px

function openNavList(){
	let navlist = document.querySelector('nav');
	navlist.classList.toggle("show");
}

// action of t-shirt

function openProduct(){
	window.open("product.html", "_self")
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




























