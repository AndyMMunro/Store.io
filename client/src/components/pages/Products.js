import React from 'react';
import {useState, useEffect} from "react";
import '../../App.css';
import Axios from "axios";
import ProductsCard from "../ProductsCard"
// import { Link } from "react-router-dom";
// import API from "../../utils/API.js"

export default function Products() {

  const [products, setProducts] = useState([]);
  // const [error, setError] = useState("");
  // console.log(products, "testing state array");


  useEffect(() => {
    loadAllProducts()
  }, [])
  
  function loadAllProducts() {
    Axios.get("api/products") 
    .then(res =>{
      setProducts(res.data)
      // console.log(res, "testing axios response")
    })
      .catch(error => console.log(error));
  };


  return(
    
    <div>
      
      <h1 className='products' results={products}>PRODUCTS</h1>
      <ProductsCard 
            results={products} 
            />
    </div>
  ) 
}