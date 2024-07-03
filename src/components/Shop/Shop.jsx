import { Link } from "react-router-dom";

function Shop({ title, description, price, image }) {
  return (
    <div>
      <h1>The shop should appear here!</h1>
      <Link to="cart">Shopping Cart</Link>
    </div>
  );
}

export default Shop;
