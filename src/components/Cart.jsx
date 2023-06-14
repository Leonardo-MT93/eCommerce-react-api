import { useId } from "react";
import { CartIcon } from "./Icons";
import './Cart.css'

export const Cart = () => {
  const cartCheckboxId = useId()
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon/>
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <aside className="cart">
        {/* <ul>
    {cart.map(product => (
      <CartItem key={product.id}
      addToCart={()=> addToCart(product)}
      {...product}/>
    ))}

        </ul> */}
        {/* <button>❌</button> */}
      </aside>
    </>
  );
};
