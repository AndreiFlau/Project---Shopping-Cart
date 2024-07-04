import { Link } from "react-router-dom";
import useCartItems from "../hooks/useCartItems";

function ShoppingCart() {
  const { cartItems, removeFromCart } = useCartItems();

  function handleRemoval(productUuid) {
    removeFromCart(productUuid);
  }

  function handleCheckout(cartItems) {
    alert(`You bought ${cartItems.length} items!`);
    cartItems.forEach((product) => {
      removeFromCart(product.uuid);
    });
  }

  console.log("Rendering cart items:", cartItems);

  return (
    <div>
      <h1>The shopping cart should appear here!</h1>
      {cartItems.length !== 0 ? (
        <>
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
          <button onClick={() => handleCheckout(cartItems)}>Checkout</button>
        </>
      ) : (
        <h2>
          Your cart is empty! Buy something here: <Link to={"/shop"}>Shop</Link>
        </h2>
      )}
    </div>
  );
}

export default ShoppingCart;
