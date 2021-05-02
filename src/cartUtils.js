
function getCartStorage(){
    return JSON.parse(localStorage.getItem('cart'));
 }
function setCartStorage(){
    return localStorage.setItem('cart',JSON.stringify(cart))
 }
 function addCartProduct(productId, productPrice) {
    let cart = setCartStorage();
    if (!cart) {
        cart = [];
    }

    let productExists = 0;
    cart.forEach((element, key) => {
        if (element.id == productId) {
            let newQty = element.qty + 1;
            cart[key] = { id: productId, qty: newQty, price: productPrice * newQty };
            productExists = 1;
        }
    });

    if (!productExists) {
        cart.push({ id: productId, qty: 1, price: productPrice });
    }

    setCartStorage(cart);

    // changeCartQuantity();
}
 function deleteCartProduct(productId) {
    let cart = getCartStorage();
    if (!cart) {
        return false;
    }

    cart.forEach((element, key) => {
        if (element.id == productId) {
            cart.splice(key, 1);
        }
    });

    setCartStorage(cart);
    // changeCartQuantity();
}
// function updateCartItemQuantity(productId, qty, productPrice) {
//     let cart = getCartItems();

//     let newPrice = 0;
//     cart.forEach((element, key) => {
//         if (element.id == productId) {
//             newPrice = qty * productPrice;
//             cart[key] = { id: productId, qty: parseInt(qty,10), price: newPrice };
//         }
//     });

//     setCartItems(cart);

//     document.getElementById(`total-price-${productId}`).innerHTML = newPrice + " RON";
    
//     let cartTotal = calculateCartTotal();
//     document.getElementById("cart-total").innerHTML = cartTotal + " RON";
//     document.getElementById("cart-subtotal").innerHTML = (cartTotal - getCartTax())+ " RON";

//     changeCartQuantity();
// }

// function calculateCartTotal() {
//     let cart = getCartItems();

//     let totalPrice = 0;
//     cart.forEach((element) => {
//         totalPrice += element.price;
//     });

//     return totalPrice + getCartTax();
// }
// From Andreea Postovaru to Everyone:  07:15 AM
// function calculateCartQuantity() {
//     let cart = getCartItems();

//     let totalQty = 0;
//     cart.forEach((element) => {
//         totalQty += element.qty;
//     });

//     return totalQty;
// }

// function changeCartQuantity() {
//     document.getElementById("cart-menu-qty").innerHTML = calculateCartQuantity();
// }

// function getCartTax() {
//     return 50;
// }

// function proceedToCheckout() {
//     localStorage.removeItem("cart");
// }
