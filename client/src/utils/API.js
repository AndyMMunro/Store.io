import axios from "axios";

// const baseURL =" https://www.googleapis.com/books/v1/volumes?q="
export default {
  // Gets all books and search them
  getProducts: function() {
    return axios.get("/api/products" );
  },
  // Gets the book with the given id
  getProductsId: function(id) {
    return axios.get("/api/products" + id);
  },
  // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/products", productData);
  // }
};
