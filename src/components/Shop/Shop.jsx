import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Shop({ products, loading, error }) {
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
            </div>
          );
        })
      )}
      <Link to="cart">Shopping Cart</Link>
    </div>
  );
}

Shop.propTypes = {
  products: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default Shop;
