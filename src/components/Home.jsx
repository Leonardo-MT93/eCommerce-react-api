import { useEffect, useState } from "react";
import { Card } from "./Card";

export const Home = () => {
  const [allproducts, setProducts] = useState();
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const res = await response.json();
      const { products } = res;
      console.log(products)
      setProducts(products);
    };
    getProducts();
  }, []);

  return (
    <div className="main-products">

      {
      allproducts?
      allproducts.map((product) => (
        <Card key={product.id} product={product} />
      ))
    :<h1>no hay articulos</h1>}
    </div>
  );
};
