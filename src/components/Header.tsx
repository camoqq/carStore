import { useState } from "react";

import Cart from "./Cart.tsx";
import { useCartSelector } from "../hooks.ts";

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const cartQty = useCartSelector((state) =>
    state.cart.items.reduce((prev, nextElement) => prev + nextElement.qty, 0)
  );
  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header id="main-header">
        <div id="main-title">
          <h1>Car Collection</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQty})</button>
        </p>
      </header>
    </>
  );
}
