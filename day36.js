// Promises Made me Broken https://www.codewars.com/kata/587593285448632b8d000143
async function submitOrder(user) {
  // Get the current user's shopping cart
  const shoppingCart = await OrderAPI.getShoppingCartAsync(user);

  // Also look up the ZIP code from their profile
  const zipCode = (await CustomerAPI.getProfileAsync(user)).zipCode;

  const shippingRate = await calculateShipping(shoppingCart, zipCode);

  // Submit the order
  const orderSuccessful = await OrderAPI.placeOrderAsync(
    shoppingCart,
    shippingRate
  );
  console.log(
    `Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`
  );
}
// [JEDI LEVEL] This isn't what you think! https://www.codewars.com/kata/5876a9f6b09010b1b4000191/train/javascript
