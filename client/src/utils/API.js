import axios from "axios";

export default {
  getProducts: function() {
    return axios.get("/api/products" );
  },
  // Gets the product with the given id
  getProductsId: function(id) {
    return axios.get("/api/products" + id);
  },
  // Saves a product to the database
  // saveBook: function(bookData) {
  //   return axios.post("/products", productData);
  // }
};
