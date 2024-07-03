import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import useCartItems from "../hooks/useCartItems";
// import { useEffect, useState } from "react";

function Shop({ products, loading, error }) {
  const navigate = useNavigate();
  const { cartItems, addToCart } = useCartItems();

  function handleBuy(product) {
    addToCart(product);
    navigate("cart");
    console.log("cart items", cartItems);
  }

  function handleAddCart(product) {
    addToCart(product);
    alert(`${product.title} added to the cart`);
    console.log("cart items", cartItems);
  }

  return (
    <div>
      <h1>The shop should appear here!</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <p>An error happened while trying to load the page: {error}</p>
      ) : (
        products.map((product) => {
          return (
            <div key={product.title} className="product-card">
              <h1>{product.title}</h1>
              <img src={product.image} alt={product.title} />
              <p>{product.description}</p>
              <p>{product.price}</p>
              <button onClick={() => handleBuy(product)}>Buy</button>
              <button onClick={() => handleAddCart(product)}>Add to Cart</button>
            </div>
          );
        })
      )}
      {!loading && <Link to="cart">Shopping Cart ({cartItems.length})</Link>}
    </div>
  );
}

Shop.propTypes = {
  products: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default Shop;
