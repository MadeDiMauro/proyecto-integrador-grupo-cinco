const express = require('express');
const router = express.Router();
const cartController = requiere("../controllers/cartController.js")

router.get('/cart1', cartController.cart1);
router.get('/cart2', cartController.cart2);
router.get('/cart3', cartController.cart3);

module.exports = router;