const router = require('express').Router();

const { products, detailProduct, updateProduct, deleteProduct } = require('../controllers/productController');

router.get('/product/products', products);

router.get('/product/detailProduct/:id', detailProduct);

router.patch('/product/updateProduct/:id', updateProduct);

router.delete('/product/deleteProduct/:id', deleteProduct);

//EXPORTS
module.exports = router;