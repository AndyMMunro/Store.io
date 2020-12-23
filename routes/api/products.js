const router = require("express").Router();
const utilsAPI = require("../../utils/API.js");

// Matches with "/api/books"
router.route("/")
// creates are route to the utils/API folder so data can be accessed. 
  .get(product.getAllProducts)
  // router.get('/',product.getAllProducts)

  // .post(utilsAPI.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
