import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function useCartItems() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(product) {
    const productWithId = { ...product, uuid: uuidv4() };
    setCartItems((prevItems) => [...prevItems, productWithId]);
  }

  function removeFromCart(productUuid) {
    setCartItems((prevItems) => prevItems.filter((item) => item.uuid !== productUuid));
  }

  return { cartItems, addToCart, removeFromCart };
}

export default useCartItems;
