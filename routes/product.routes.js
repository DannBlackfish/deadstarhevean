const router = require('express').Router();

const { products, detailProduct, editProduct, deleteProduct } = require('../controllers/productController');

router.get('/all', products);

router.get('/detail/:id', detailProduct);

router.put('/edit/:id', editProduct);

router.delete('/delete/:id', deleteProduct);

//EXPORTS
module.exports = router;