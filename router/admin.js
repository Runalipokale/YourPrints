const express = require('express');

const router = express.Router();

const adminController = require('../controller/adminController');

router.get('/admin/adminpannel',adminController.getAdminPannel);

router.get('/admin/products',adminController.getAllProducts);

module.exports = router;