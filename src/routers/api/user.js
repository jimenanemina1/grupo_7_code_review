const express = require("express");
const userController = require("../../controllers/api/userController")
const router = express.Router();
const loginValidations = require("../../middlewares/validateLoginForm")


// apis/users
router.get("/", userController.list)
router.get("/:id", userController.detail)
router.get("/:id", userController.update)

module.exports = router;
