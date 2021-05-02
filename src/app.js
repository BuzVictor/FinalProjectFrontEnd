import { http } from './http.js';
import { ui } from './ui.js';
// Get Products on DOM load
document.addEventListener('DOMContentLoaded', getProducts);

function getProducts() {
	// const http = new customHTTPMethods();
	http
		.get('http://localhost:3000/products')
		.then((data) => ui.showProducts(data));
}

export function initCart() {
	const cartList = JSON.parse(localStorage.getItem('cart'));
	if (!cartList) {
		localStorage.setItem('cart',JSON.stringify([]));
	}
}