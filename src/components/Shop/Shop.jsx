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
      {!loading && (
        <Link to="cart">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>cart-outline</title>
            <path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
          </svg>{" "}
          <p>{cartItems.length}</p>
        </Link>
      )}
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
