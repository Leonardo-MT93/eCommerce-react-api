import { useEffect, useState,  } from "react";
import { Card } from "./Card";

export const Home = () => {

  const [allproducts, setProducts] = useState()
  useEffect(() => {

    const getProducts = async() => {
      const response = await fetch("https://dummyjson.com/products")
      const res = await response.json()
      const {products} = res
      setProducts(products)
    }
    getProducts()
  }, []);

  return <div className="main-products">

      {allproducts?
      allproducts.map((product) => (
        
        <Card key={product.id} product={product}/>
      ))
    :<h3>No existen productos</h3>}
  </div>;
};
                                                                