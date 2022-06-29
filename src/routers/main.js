const express = require("express");

const mainController = require("../controllers/mainController");
const router = express.Router();
const userStatusValidator = require("../middlewares/userStatusValidator")
const userStatus = userStatusValidator;

router.get("/", userStatusValidator, mainController.home);

module.exports = router;