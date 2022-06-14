const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

const validations = require("../middlewares/validateRegisterForm");
const upload = require("../middlewares/multer");

router.get("/login", userController.login);
router.get("/register", userController.register);
router.post(
  "/register",
  upload.single("avatar"),
  validations,
  userController.registerProcess
);
router.get("/:id", userController.profile);

module.exports = router;
