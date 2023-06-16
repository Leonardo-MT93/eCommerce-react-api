import { useId } from "react";
import { CartIcon } from "./Icons";
import './Cart.css'
import { useCart } from "../hooks/useCart";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const cartCheckboxId = useId();
  const {cart, addToCart} = useCart()
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon/>
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <aside className="cart">
        <ul className="list-items">
          
    {cart.map(product => (
      <CartItem key={product.id}
      addToCart={()=> addToCart(product)}
      {...product}/>
    ))}

        </ul>
        <button>❌</button>
      </aside>
    </>
  );
};
