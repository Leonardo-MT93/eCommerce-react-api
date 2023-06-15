import './CartItem.css'

export const CartItem = ({ thumbnail, price, title, addToCart }) => {
  return (
    <li className='item-cart'>
      <img className="img-cart" src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - {price}
      </div>
      <footer>
        <small>Qty: </small>
        <button onClick={addToCart}>+</button>
        <button>-</button>
      </footer>
    </li>
  );
};
