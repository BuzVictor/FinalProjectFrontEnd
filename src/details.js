import { http } from './http.js';
import { ui } from './ui.js';
import {initCart} from './app.js'
let id=window.location.search.split('=')[1];
window.onload = () => {
    if(window.location.search !== ''){
        http
            .get(`http://localhost:3000/products/${id}`)
            .then((data)=> {
            ui.showProductDetails(data)
            initCart()
            console.log(data)
        });
    }
}
export function addToCartBtn() {
    document.getElementById(`${id}`).addEventListener('click',(e)=> {
        if(e.target.id == id) {
            addToCart(id)
            alert('Product added')
        }
        
    },{once:true}) 
    
}
function addToCart(item){
   http
    .get(`http://localhost:3000/products/${id}`)
    .then((data)=> {
        let item = {
            name:data.name,
            id:data.id,
            brand:data.brand,
            size:data.size,
            price:data.price,
            image:data.image
        } 
        let cartList = JSON.parse(localStorage.getItem('cart'));
        cartList.push(item);
        localStorage.setItem('cart',JSON.stringify(cartList))  
    });
    
}


