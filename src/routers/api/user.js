const express = require("express");
const userController = require("../../controllers/api/userController")
const router = express.Router();


// apis/users
router.get("/", userController.listAll)
router.get("/:id", userController.detail)

module.exports = router;
