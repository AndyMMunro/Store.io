const router = require("express").Router();
const productRoutes = require("./products");


// Book routes end points what how in the URL
router.use("/products", productRoutes);

module.exports = router;

