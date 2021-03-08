const Order = require('../models/Order.model')

//CREATE AN ORDER
exports.makeOrder = async (req, res, next) => {
    const {products, total, quantity, user} = req.body
    user = req.user._id
    const order = await Order.create({ id, products, total, quantity, user })
    res.json({ order })
}

//ALL ORDERS
exports.orders = async (req, res, next) => {
    const orders = await Order.find({})
    res.json({ orders })
}

//DETAIL ORDER
exports.detailOrder = async (req, res, next) => {
    const { id } = req.params
    const detailOrder = await Order.findById(id).populate('user')
    resjson({ detailOrder })
}

//USER ORDER
exports.ordersUser = async (req, res, next) => {
    const { _id } = req.user
    const ordersUser = await Order.find({ user: _id })
    resjson({ ordersUser })
}

//EDIT AN ORDER
exports.updateOrder = async (req, res, next) => {
    const { id } = req.params
    const updateOrder = await Order.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true })
    res.json({ updateOrder })
}

//DELETE ORDER
exports.deleteOrder = async (req, res, next) => {
    const { id } = req.params
    const deleteOrder = await Order.findByIdAndDelete(id)
    resjson({ deleteOrder })
}