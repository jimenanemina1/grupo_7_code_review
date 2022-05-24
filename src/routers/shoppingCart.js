const express = require('express');

<<<<<<< HEAD
=======

>>>>>>> 30feedb498e3d22f75dc226b1e5284bd32860e71
const shoppingCartController = require('../controllers/shoppingCartController');

const router = express.Router();

<<<<<<< Updated upstream
<<<<<<< HEAD
router.get("/shoppingCart", shoppingCartController.cart);
=======
router.get("/", shoppingCartController.shoppingCart);

>>>>>>> 30feedb498e3d22f75dc226b1e5284bd32860e71
=======
router.get("/", shoppingCartController.shoppingCart);

>>>>>>> Stashed changes

module.exports = router;