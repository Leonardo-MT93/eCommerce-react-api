import { useState } from "react";
import "./CartItem.css";
import { TrashIcon } from "./Icons";

export const CartItem = ({ thumbnail, price, title, addToCart }) => {
  const [value, setValue] = useState(1)

  const handleClick = () =>  {
    setValue(value+1)
    addToCart()
  }
  return (
    <li className="item-cart">
      <img className="img-cart" src={thumbnail} alt={title} />
      <div className="container-info">
        <strong>{title}</strong>
        <div className="container-quantity">
          <input className="input-cart" type="number" value={value} />
          <button onClick={handleClick}>+</button>
        </div>
      </div>
      <div className="container-price">
        <TrashIcon />
        <span className="price-item">${price}</span>
      </div>
    </li>
  );
};
