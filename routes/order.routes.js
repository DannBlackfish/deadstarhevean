const router = require('express').Router();

const {
 makeOrder, orders, editOrder, deleteOrder
} = require('../controllers/orderController')

router.post('/makeorder', makeOrder);

router.get('/orders', orders);

// router.put('/update/:id', updateOrder);

router.put('/edit/:id', editOrder)

router.delete('/delete/:id', deleteOrder)

module.exports = router;