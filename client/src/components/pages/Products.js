import React from 'react';
import {useState, useEffect} from "react";
import '../../App.css';
import Axios from "axios";
import { Container, Row, Col } from "../Grid";
import {ProductList, ProductListItems} from "../Cards"

export default function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadAllProducts()
  }, [])
  
  function loadAllProducts() {
    Axios.get("api/products") 
    .then(res =>{
      setProducts(res.data)
      console.log(res, "testing axios response")
    })
      .catch(error => console.log(error));
  };


  return(

    <ProductList>
      {products.map(product => {
        return(
          <ProductListItems
            key={product.title}
            title={product.title}
            description={product.description}
            thumbnail={product.image}
            price={product.price}
          />
          )
        })}
    </ProductList>

  );
}
