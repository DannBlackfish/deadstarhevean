const Product = require('../models/Product.model')

//ALL PRODUCTS ✅
exports.products = async (req, res, next) => {
    const all = await Product.find({})
    res.json(all)
}

//CATEGORY PRODUCTS 
exports.categoryProducts = async (req, res, next) => {
    const data = req.query
    const categories = req.body
    console.log(categories)
    console.log(data)
    const categoryProduct = await Product.find({data: categories})
    res.json(categoryProduct)
}

//DETAIL PRODUCT ✅
exports.detailProduct = async (req, res, next) => {
    console.log(req.params)
    const id = req.params.id
    const detailProduct = await Product.findById({_id: id})
    console.log(detailProduct)
    res.status(200).json(detailProduct)
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