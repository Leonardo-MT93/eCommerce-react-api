import { useId } from "react";
import { CartIcon } from "./Icons";
import './Cart.css'
import { useCart } from "../hooks/useCart";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const cartCheckboxId = useId();
  const {cart, addToCart, deleteItemInCart} = useCart()
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon/>
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <aside className="cart">
        <ul className="list-items">
          
    {cart.map(product => (
      <CartItem key={product.id} deleteItemInCart={()=> deleteItemInCart(product)}
      addToCart={()=> addToCart(product)}
      {...product}/>
    ))}
        <button className="bnt-delete-allitems">Eliminar todos los productos del carrito 🗑</button>
        </ul>
        <div>
        <h2>Subtotal: <span>XXX</span></h2>
          <h2>Total: <span>XXX</span></h2>
          <label>Codigo de descuento: </label>
          <input type="text"/>
        </div>
        <button className="">Iniciar Pago</button>
        <button className="">Ir al Carrito</button>
      </aside>
    </>
  );
};
