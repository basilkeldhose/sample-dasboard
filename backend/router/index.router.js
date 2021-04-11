const express =require('express')
const router =express.Router();
const createProducts =require('../controllers/product.controller')

router.post('/product',createProducts.product);
router.get('/products',createProducts.productlist);
router.get('/:id',createProducts.singleproduct);
router.put('/:id',createProducts.updatelist);
router.delete('/:id',createProducts.delete);

module.exports= router;