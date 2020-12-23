
const axios = require("axios");

// this calls the api and gets the data asked for thorough the query variable

module.exports = {
  findAll: function(req, res) {
    const { query } = req;
    
    console.log(query);

    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

    // axios
    //   .get("https://fakestoreapi.com/products" + query,
    //   )
    //   .then(results => results.json().then(data => res.send(data)))
  
    //   .catch(error => res.status(422)) 
   }
}