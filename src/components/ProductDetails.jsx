import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { Loader } from "./Loader";
import './Loader.css'
import { useCart } from "../hooks/useCart";

export const ProductDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  const [imageSelected, setImageSelected] = useState();
  const {addToCart} = useCart()
  useEffect(() => {
    const getItem = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const json = await response.json();
      setItem(json);
    };
    getItem();
  }, [id]);

  const handleClick = (image) => {
    setImageSelected(image);
  };

  const handleChange = (e) => {
    parseInt(e.target.value);
  };
  return (
    <div className="item-info-detailed">
      <div className="item-info-container">
        {item ? (
          <div className="item-info">
            <div className="item-images">
              <ul className="container-imgs">
                {item.images.slice(0, 4).map((image, index) => {
                  return (
                    <li className="img-selection" key={index}>
                      <img
                        className="img-selected"
                        src={image}
                        onClick={() => handleClick(image)}
                      />
                    </li>
                  );
                })}
              </ul>
              <div className="main-image">
                {imageSelected ? (
                  <img className="item-img" src={imageSelected} />
                ) : (
                  <img
                    className="item-img"
                    src={item.images[0]}
                    alt={item.title}
                  />
                )}
              </div>
            </div>
            <div className="item-datainfo">
              <div className="category-data">
                <Link
                  className="category-link"
                  to={`category/${item.category}`}
                >
                  <h2>{item.category}</h2>
                </Link>
              </div>
              <div className="title-data">
                <h2 className="title-data-styles">{item.title}</h2>
                <h3>{item.rating}⭐</h3>
              </div>
              <h3 className="title-data-brand">{item.brand}</h3>
              <div className="details-data">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <div className="title-data">
                  <p className="item-price">${item.price},00</p>
                  <p>Stock: {item.stock}units.</p>
                </div>
              </div>
              <div className="selector-quantity">
                <input
                  className="input-quantity"
                  type="number"
                  min={1}
                  max={item.stock}
                  onChange={(e) => handleChange(e)}
                  placeholder="Quantity"
                />

                <button className="product-button" onClick={() => addToCart(item)}>BUY</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="loader-overlay">
            <Loader />
          </div>
        )}
      </div>

      <div className="related-items">
        <h4>Productos relacionados</h4>
      </div>
    </div>
  );
};
