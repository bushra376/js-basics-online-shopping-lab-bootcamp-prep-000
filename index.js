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
 var priceOfItem = ((Math.random() * 100)+1);
 var purchasedItems = {};
 purchasedItems[item] = priceOfItem;
 console.log(`${item} has been added to your cart.`)
 return 
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
