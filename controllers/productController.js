const Product = require('../models/Product.model')

//ALL PRODUCTS ✅
exports.products = async (req, res, next) => {
    const all = await Product.find({})
    res.json({all})
}

//DETAIL PRODUCT ✅
exports.detailProduct = async (req, res, next) => {
    const id = req.params.id
    const detailProduct = await Product.findById({_id: id})
    res.json({detailProduct})
}

//EDIT PRODUCT ✅
exports.editProduct = async (req, res, next) => {
    const id = req.params.id
    const editProduct = await Product.findByIdAndUpdate({_id: id}, { $set: { ...req.body }}, { new: true })
    res.json({editProduct})
}

//DELETE PRODUCT
exports.deleteProduct = async (req, res, next) => {
    const id = req.params.id
    const deleteProduct = await Product.findByIdAndDelete({_id: id},{ $set: { ...req.body }}, { new: true })
    res.json({deleteProduct})
}