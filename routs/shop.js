const path = require('path');
const express = require('express');
const router = express.Router();
const adminData = require('./admin');
const shopController  = require('../controler/shop')


router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/checkout', shopController.getCheckout);


module.exports = router;