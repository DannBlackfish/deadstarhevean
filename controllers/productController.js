const Product = require('../models/Product.model')

//ALL PRODUCTS
exports.products = async (req, res, next) => {
    const products = await Product.find({})
    res.json({products})
}

//DETAIL PRODUCT
exports.detailProduct = async (req, res, next) => {
    const id = req.params.id
    const detailProduct = await Product.findById({_id: id})
    res.json({detailProduct})
}

//EDIT PRODUCT
exports.updateProduct = async (req, res, next) => {
    const id = req.params.id
    const updateProduct = await Product.findByIdAndUpdate({_id: id}, { $set: { ...req.body }}, { new: true })
    res.json({updateProduct})
}

//DELTE PRODUCT
exports.deleteProduct = async (req, res, next) => {
    const id = req.params.id
    const deleteProduct = await Product.findByIdAndDelete({_id: id},{ $set: { ...req.body }}, { new: true })
    res.json({deleteProduct})
}