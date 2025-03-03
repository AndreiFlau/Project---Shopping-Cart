import { Link } from "react-router-dom";
import useCartItems from "../hooks/useCartItems";
import styles from "./ShoppingCart.module.css";
import { useMemo } from "react";

function ShoppingCart() {
  const { cartItems, removeFromCart } = useCartItems();

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, product) => total + product.price, 0);
  }, [cartItems]);

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
    <div className={styles.cart}>
      <h1>Your shopping cart</h1>
      {cartItems.length !== 0 ? (
        <>
          <ul>
            {cartItems.map((product) => (
              <div key={product.uuid} className={styles.cartCard}>
                <li>
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                  <img src={product.image} />
                  <button onClick={() => handleRemoval(product.uuid)}>Remove Item</button>
                </li>
              </div>
            ))}
          </ul>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
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
