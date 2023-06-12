import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

export const ProductDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  const [imageSelected, setImageSelected] = useState()
  useEffect(() => {
    const getItem = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const json = await response.json();
      setItem(json);
    };
    getItem();
  }, [id]);

  const handleClick= (image) => {
    setImageSelected(image)
  }
  return (
    <div className="item-info-detailed">
      <div className="item-info-container">
        {item ? (
          <div className="item-info">
            <div className="item-images">
              <ul className="container-imgs">
                {item.images.slice(0,4).map((image) => {
              return (
                <li className="img-selection"  key={image.id}>
                  <img className="img-selected" src={image} onClick={()=> handleClick(image)} />
                </li>
              );
            })}
              </ul>
              <div className="main-image">
                {imageSelected?
                <img
                className="item-img"
                src={imageSelected}
              />
              :<img
              className="item-img"
              src={item.images[0]}
              alt={item.title}
            />
              }
                
              </div>
            </div>
            <div className="item-datainfo">
              <h2>{item.title}</h2>
              <h3>{item.brand}</h3>
              <h2>{item.category}</h2>
              <h3>{item.rating}</h3>
              <p>{item.price}</p>
              <p>{item.description}</p>
              <p>{item.stock}</p>
              <input type="text" placeholder="Qty" />
              <button>BUY</button>
            </div>
          </div>
        ) : (
          <div>cargando..</div>
        )}
      </div>

      <div className="related-items"></div>
    </div>
  );
};
