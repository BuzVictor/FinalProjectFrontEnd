
import { ui } from './ui.js';
let cart = JSON.parse(localStorage.getItem('cart'));
window.onload= () => {
    ui.showCart(cart)
}
let removeCartItemsBtns = document.getElementsByClassName('removeBtn');
console.log (removeCartItemsBtns)
for (let i = 0 ; i <= removeCartItemsBtns.length; i++){
    let button = removeCartItemsBtns[i]
    console.log(button)
    button.addEventListener('click', function(){
    console.log('clicked')
    })
}

