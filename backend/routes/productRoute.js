const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct } = require("../controllers/productController");

const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/product/new").post(createProduct);

// as URL of update and delete is same, hence attaching here only // PUT for update, DELETE request to delete
router.route("/product/:id").put(updateProduct).delete(deleteProduct);

module.exports = router