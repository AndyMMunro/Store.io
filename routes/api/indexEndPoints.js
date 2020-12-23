const router = require("express").Router();
// const bookRoutes = require("./books");
const productRoutes = require("./productsApi");
// const { query } = require("express");

// Book routes end points what how in the URL
router.use("/productsApi", productRoutes);
// router.use("/books", bookRoutes);
// router.use("/bookApiQuery" + query, bookApiQuery)
module.exports = router;

