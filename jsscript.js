function addToCart() {
  const size = document.getElementById('size').value;
  const quantity = document.getElementById('quantity').value;
  alert(`Added ${quantity} item(s) of size ${size} to cart!`);
}


function removeItem(button) {
  const item = button.closest('.cart-item');
  item.remove();
  alert('Item removed from cart!');
  // Later, you can update total price dynamically here
}


document.querySelector('.checkout-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Order placed successfully!');
});


document.querySelector('.login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Login functionality can be added here.');
});


document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Your message has been sent!');
});

