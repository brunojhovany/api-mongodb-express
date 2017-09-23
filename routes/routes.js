const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const productController = require('../controllers/productcontroller');
const userCtrl = require('../controllers/users');


router.get('/products',productController.getProducts);
router.get('/products/:productId', productController.getProduct);
router.post('/products', productController.saveProduct);
router.put('/products/:productId',productController.updateProduct);
router.delete('/products/:productId', productController.deleteProduct);
router.post('/signup', userCtrl.signUp);
router.post('/signin',userCtrl.sigIn);
router.get('/private', auth,(req, res)=>{
  res.status(200).send({message: 'Tiene accseso'});
});

module.exports = router;
