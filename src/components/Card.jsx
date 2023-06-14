import { Link } from "react-router-dom";
import "./Card.css";
import { useCart } from "../hooks/useCart";
export const Card = ({ product }) => {

  const { addToCart} = useCart()



  return (
    <>
      <div className="product-card" >
        <Link to={`/products/${product.id}`} className="item-data"/>
        <div className="product-tumb">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="product-details">
          <span className="product-category">{product.category}</span>
          <div className="product-title-rating">
            <h4>{product.title}</h4>
            <p>{product.rating}⭐</p>
          </div>
          <p>{product.description}</p>
        </div>
        <div className="product-bottom-details">
          <div className="product-price">
            <p>${product.price}</p>
            <button className="product-button" onClick={()=>addToCart(product)}>BUY</button>
          </div>
        </div>
      </div>
    </>
  );
};
