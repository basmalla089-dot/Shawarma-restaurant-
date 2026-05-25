let cart = [];

function addToCart(name, price) {
  cart.push({
    name,
    price,
  });

  updateCart();
}

function updateCart() {
  document.getElementById("cartCount").innerText = cart.length;
}

function toggleCart() {
  const modal = document.getElementById("cartModal");

  modal.style.display = modal.style.display === "block" ? "none" : "block";

  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {
    total += item.price;

    cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>${item.price} دج</span>
            </div>
        `;
  });

  document.getElementById("totalPrice").innerText = `المجموع: ${total} دج`;
}

function checkoutWhatsApp() {
  let message = "مرحبا، أريد طلب:%0A";

  cart.forEach((item) => {
    message += `- ${item.name} (${item.price} دج)%0A`;
  });

  window.open(`https://wa.me/213000000000?text=${message}`, "_blank");
}
