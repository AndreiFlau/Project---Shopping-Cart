import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import useCartItems from "../hooks/useCartItems";
import { useState } from "react";
import styles from "./Shop.module.css";
// import { useEffect, useState } from "react";

function Shop({ products, loading, error }) {
  const navigate = useNavigate();
  const { cartItems, addToCart } = useCartItems();
  const [quantities, setQuantities] = useState({});

  async function handleBuy(product) {
    const quantity = quantities[product.title];
    if (quantity < 0) {
      alert("You can only buy 1 or more products.");
    } else {
      if (!quantity) {
        await addToCart(product);
      } else {
        for (let index = 0; index < quantity; index++) {
          await addToCart(product);
        }
      }
      navigate("cart");
    }
    console.log("cart items", cartItems);
  }

  function handleAddCart(product) {
    const quantity = quantities[product.title];
    if (quantity < 0) {
      alert("You can only buy 1 or more products.");
    } else {
      if (quantity <= 1 || !quantity) {
        addToCart(product);
        alert(`${product.title} added to the cart`);
      } else {
        for (let index = 0; index < quantity; index++) {
          addToCart(product);
        }
        alert(`${product.title} added ${quantity} times to the cart`);
      }
      console.log("cart items", cartItems);
    }
  }

  function handleQuantityChange(productTitle, quantity) {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productTitle]: quantity,
    }));
  }

  return (
    <div className={styles.shop}>
      <h1>Shop</h1>
      {!loading && <Link to="cart">Shopping Cart ({cartItems.length})</Link>}
      <div className={styles.products}>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <p>An error happened while trying to load the page: {error}</p>
        ) : (
          products.map((product) => {
            return (
              <div key={product.title} className={styles.productCard}>
                <img src={product.image} alt={product.title} />
                <div className={styles.content}>
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                </div>
                <form>
                  <label htmlFor="quantity">Quantity: </label>
                  <input
                    type="number"
                    id="quantity"
                    min={0}
                    onChange={(e) => handleQuantityChange(product.title, parseInt(e.target.value))}
                  />
                </form>
                <div className={styles.buy}>
                  <p>${product.price}</p>
                  <button onClick={() => handleBuy(product)}>Buy</button>
                  <button onClick={() => handleAddCart(product)}>Add to Cart</button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

Shop.propTypes = {
  products: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default Shop;
