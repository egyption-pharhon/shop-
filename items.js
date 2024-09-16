fetch('product.json')
		.then(response => response.json())
		.then(data => {
			const products = document.querySelector('.content');
			data.forEach( product => {
				products.innerHTML += `
					<div class="box">
						<div class="image">
							<img src="${product.img}">
						</div>
						<div class="stars">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
						</div>
						<p>${product.name}</p>
						<span>${product.price}</span>
						<button type="" data-id=${product.id} onclick="openProduct(this.data-id)">Buy Now</button>
					</div>`
			})
			function openProduct(id) {
    window.location.href = `product.html?id=${id}`;
}



	});
