const express = require('express');
const router = express.Router();
const productController = require('../controllers/productcontroller');

router.get('/products', productController.getProducts);
router.get('/products/:productId', productController.getProduct);
router.post('/products', productController.saveProduct);
router.put('/products/:productId',productController.updateProduct);
router.delete('/products/:productId', productController.deleteProduct);

module.exports = router;
