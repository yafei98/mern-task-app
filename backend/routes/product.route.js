const express = require('express');
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller');

const router = express.Router();

router.get("/", getProducts).post("/", createProduct);
router.put("/:id", updateProduct).delete("/:id", deleteProduct);

module.exports = router;

