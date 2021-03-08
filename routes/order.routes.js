const router = require('express').Router();

// const { isLogged } = require('../middlewares/middlewares')

const {
 makeOrder, orders, ordersUser, detailOrder, updateOrder, deleOrder
} = require('../controllers/orderController')

router.post('/order/makeOrder', makeOrder);

router.get('/order/orders', orders);

router.get('/order/detailOrder/:id', detailOrder);

router.get('/order/orders/ordersUser', ordersUser)

router.patch('/order/update/:id', updateOrder)

router.delete('/order/delete/:id', deleteOrder)

module.exports = router;