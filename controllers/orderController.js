const Order = require('../models/Order.model')
const User = require('../models/User.model')

//CREATE AN ORDER ✅
exports.makeOrder = async (req, res, next) => {
    const {products, total, quantity, user, shippingAddress, paid, size, orders} = req.body

    const makeOrder = await Order.create({ products, total, quantity, user, shippingAddress, paid, size, orders })

    res.json({ makeOrder })
}

//ALL ORDERS ✅ ⭕️
exports.orders = async (req, res, next) => {
    const orders = await Order.find({})
    res.json({ orders })
}

//UPDATE ORDER
exports.updateOrder = async (req, res, next) => {

    // const order = new Order(req.body)
    // order.user = req.user.id
    // order.save()

    const order = new Order(req.body)
    order.user = req.user.id
    order.save()

    // const update = await User.findByIdAndUpdate(req.user.id, {$addToSet: {orders: order._id}}, {new: true}).populate('orders')
    // console.log(update)

    const updateOrder = await Order.findByIdAndUpdate({user: req.user.id}).populate('user')
    res.json({ updateOrder })
}

//EDIT AN ORDER ID ORDER ✅
exports.editOrder = async (req, res, next) => {
    const { id } = req.params
    const editOrder = await Order.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true })
    res.json({ editOrder })
}

//DELETE ORDER ID ORDER✅
exports.deleteOrder = async (req, res, next) => {
    const { id } = req.params
    const deleteOrder = await Order.findByIdAndDelete(id)
    res.json({ deleteOrder })
}