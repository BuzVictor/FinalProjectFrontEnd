class UI {
	constructor() {
		this.productsDiv = document.getElementById('main');
		this.title = document.getElementById('productName');
		this.price = document.getElementById('price');
		this.image = document.getElementById('image');
		this.detailsPage= document.getElementById('detailsPage');
		this.id = document.getElementById('id');
		this.brand = document.getElementById('brand');
		this.size = document.getElementById('size');
	}
	showProducts(products) {
		let output = '';
		products.forEach((product) => {
			output = `
			<div class="productCard">
				<img src="${product.image}" alt="skate_img">
				<div class="cardDetails"> 
					<p class="productName">${product.name}</p><br>
					<p>${product.price} $ <button onclick="window.location.href='details.html?id=${product.id}'"type="button" class="detailsBtn" >Details</button></p> 
				</div>
         `;
			this.productsDiv.innerHTML += output;
		});
	}
	showProductDetails(product){
		let output='';
		output= `
		<div class="addProductCard">
    <img src=${product.image} alt="Skateboard">
    <div class="addProductCard-text">
        <p> ${product.brand}</p> 
        <p> ${product.name}</p> 
        <p> ${product.size}</p> 
        <p> ${product.price}$</p>
        <p class="fade_x1"> ${product.brand}</p> 
        <p class="fade_x1"> ${product.name}</p> 
        <p class="fade_x1"> ${product.size}</p> 
        <p class="fade_x1"> ${product.price}$</p>
        <p class="fade_x2"> ${product.brand}</p> 
        <p class="fade_x2"> ${product.name}</p> 
        <p class="fade_x2"> ${product.size}</p> 
        <p class="fade_x2"> ${product.price}$</p>
        <button onclick="window.location.href='cart.html?id=${product.id}'"type="button" class="addToCartBtn">Add to cart</button>
    </div>
    <img src=${product.image} alt="Skateboard">
</div>
		`
		this.detailsPage.innerHTML += output;
	}
}

export const ui = new UI();
