const express = require("express");
const orderController = require("../../controllers/api/orderController")
const router = express.Router();


// apis/users
router.get("/", orderController.listAll)
router.get("/:id", orderController.detail)

module.exports = router;
