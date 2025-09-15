
import React, { useEffect, useState } from "react";
import Product from "./product";
import { useNavigate } from "react-router-dom";

function Productss() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products || data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);


  const goToCakes = () => {
    navigate("/cakes");
  };

  return (
    <>
       
        {products.map((pro) => (
          <Product pro={pro} key={pro.id} />
        ))}
      
     
    </>
  );
}

export default Productss;