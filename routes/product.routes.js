const router = require('express').Router();

const { products, categoryProducts, detailProduct, editProduct, deleteProduct } = require('../controllers/productController');

router.get('/all', products);

router.get('/category/:categoria', categoryProducts);

router.get('/detail/:id', detailProduct);

router.put('/edit/:id', editProduct);

router.delete('/delete/:id', deleteProduct);

//EXPORTS
module.exports = router;