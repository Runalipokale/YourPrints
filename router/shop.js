
const express = require('express');

const shopController = require('../controller/shopController');

const router = express.Router();

router.get('/',shopController.getIndex);

router.get('/login',shopController.getLogin)

router.get('/product',shopController.getProducts);

//wishlist
router.get('/wishlist',shopController.getwishlist);

router.get('/contact',shopController.getContact);

//postcontactpage for sending query to admin email

//payment gateway

module.exports = router;