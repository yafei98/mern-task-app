const Product = require('../models/product.model');
const mongoose = require('mongoose');
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    } catch (err) {
        console.log("Error in fetching products:", err.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

const createProduct = async (req, res) => {
    const product = req.body;// user will send this data

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all fields." })
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct })
    } catch (err) {
        console.log("Error in create product:", err.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params;

    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product Id" })
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true })
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error" });
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted" })
    } catch (err) {
        console.log("Error in deleting product:", err.message);
        res.status(400).json({ success: false, message: "Product not found" });
    }
}
module.exports = { getProducts, createProduct, updateProduct, deleteProduct }
