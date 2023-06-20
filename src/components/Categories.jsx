import { useEffect, useState } from "react";
import "./Categories.css";
export const Categories = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    const getItem = async () => {
      const response = await fetch("https://dummyjson.com/products/categories");
      const json = await response.json();
      setCategories(json);
    };
    getItem();
  }, []);

  return (
    <div className="categories-container">
      <ul className="list-categories">
        {categories ? (
          categories.map((category, id) => (
            <li key={id} className="categories">{category}</li>
          ))
        ) : (
          <p>No se encontraron categorías</p>
        )}
      </ul>
    </div>
  );
};