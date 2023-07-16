/*const path = require('path');
const express = require('express');
const router = express.Router();
const adminData = require('./admin');
const shopController  = require('../controler/shop')


router.get('/', shopController.getProducts);

router.get('/products', shopController.getIndex);

router.get('/cart', shopController.getCart);

router.get('/checkout', shopController.getCheckout);

router.get('/orders', shopController.getOrders);*/
const path = require('path');

const express = require('express');

const shopController = require('../controler/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;

