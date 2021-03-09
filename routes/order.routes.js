const router = require('express').Router();

const {
 makeOrder, orders, updateOrder, editOrder, deleteOrder
} = require('../controllers/orderController')

router.post('/makeorder', makeOrder);

router.get('/orders', orders);

router.patch('/update/:id', updateOrder);

router.patch('/edit/:id', editOrder)

router.delete('/delete/:id', deleteOrder)

module.exports = router;