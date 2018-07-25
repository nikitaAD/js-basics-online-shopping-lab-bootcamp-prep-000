var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(100*(Math.random()));
  var itemObj = {[item]: price};
  cart.push(itemObj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var cartItems = [];
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')

  } else if (cart.length === 1) {
    var printOneItem = `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`
    console.log(printOneItem)

  } else if (cart.length === 2) {
    var printTwoItems = `In your cart, you have ${Object.keys(cart[cart.length-2])} at $${cart[cart.length-2][Object.keys(cart[cart.length-2])]} and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`
    console.log(printTwoItems)
  
    
  } else {
      for (var i = 0; i < cart.length-1; i++) {
      cartItems.push(` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
          }
          var printThreeOrMoreItems = `In your cart, you have${cartItems}, and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`
          console.log(printThreeOrMoreItems)
  }
}

function total() {
  let t = 0
  for (var i = 0, l = cart.length; i < l; i++) {
     for (var item in cart[i]) {
       t += cart[i][item]
     }
   }
   return t
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  var emptyArray = [];
  if (cardNumber === undefined) {
    console.log('We don\'t have a credit card on file for you to place your order.')
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)    
    setCart(emptyArray)
  }
}
