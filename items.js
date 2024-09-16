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
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    let allProducts = [...data.children];
    let element = allProducts[id];
    
    const allIdForProducts = document.querySelector('.product');
    allIdForProducts.innerHTML = `<div class="container">
        <div class="images">
            <img src="${element.img}" class="actaul">
            <div class="color-product">
                <img src="${element.productColors[0]}">
                <img src="${element.productColors[1]}">
                <img src="${element.productColors[2]}">
                <img src="${element.productColors[3]}">
            </div>
        </div>
        <div class="info">
            <span>${element.featured}</span>
            <h3>${element.name}</h3>
            <span class="price">$${element.price}</span>
            <select>
                <option>Select Size</option>
                <option>XL</option>
                <option>XXL</option>
                <option>Small</option>
                <option>Large</option>
            </select>
            <input type="number" value="1">
            <button>Add to Cart</button>
            <h4>Product Details</h4>
            <p>The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq.
            yd, fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides
            unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless
            double- needle collar, and available in a range of colors,
            it offers it all in the ultimate head-tuming package.</p>
        </div>
    </div>`;
});



	});
