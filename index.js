var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var priceOfItem = Math.floor((Math.random() * 100));
 //var purchasedItems = {};
 cart[item] = priceOfItem;
 console.log(`${item} has been added to your cart.`)
 //setCart(purchasedItems);
 //cart = purchasedItems;
 return cart;
 //{[item] : [priceOfItem]};
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
