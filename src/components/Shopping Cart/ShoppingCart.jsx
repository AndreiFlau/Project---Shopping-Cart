import useCartItems from "../hooks/useCartItems";

function ShoppingCart() {
  const { cartItems, removeFromCart } = useCartItems();

  function handleRemoval(productUuid) {
    removeFromCart(productUuid);
  }

  console.log("Rendering cart items:", cartItems);

  return (
    <div>
      <h1>The shopping cart should appear here!</h1>
      <ul>
        {cartItems.map((product) => (
          <div key={product.uuid} className="cart-card">
            <li>
              {product.title}
              <button onClick={() => handleRemoval(product.uuid)}>Remove Item</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
