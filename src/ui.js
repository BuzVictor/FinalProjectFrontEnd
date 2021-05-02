import {addToCartBtn} from './details.js'
class UI {
	constructor() {
		this.productsDiv = document.getElementById('main');
		this.detailsPage = document.getElementById('detailsPage');
		this.cartContainer = document.getElementById('cart-container');
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
	showProductDetails(product) {
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
        <button id="${product.id}" type="button" class="addToCartBtn">Add to cart</button>
    </div>
    <img src=${product.image} alt="Skateboard">
</div>
		`
		this.detailsPage.innerHTML += output;
		addToCartBtn(product.id);
	}

	showCart (products) {
		products.forEach((product)=> {
		let output = 
		`
		<div class="cartProducts">
        <p>${product.brand} ${product.name}</p>
    </div>
    <div class="cartProducts-price">
        <p>${product.price}$</p>
    </div>
    <div class="cartProducts-quantity">
        <div class="cartProducts-quantity-style">
        <input type="number" value="1"> 
        <a href="#" onclick="deleteCartProduct(${product.id});" class="removeBtn">X</a>
        </div>
    </div>
		`
		this.cartContainer.innerHTML += output;
	   });
    }

}

export const ui = new UI();





