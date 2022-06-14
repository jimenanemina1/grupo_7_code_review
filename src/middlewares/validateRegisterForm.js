const path = require("path");
const { body } = require("express-validator");

module.exports = [
  body("name").notEmpty().withMessage("Escribe tu nombre"),
  body("lastname").notEmpty().withMessage("Escribe tu apellido"),
  body("email")
    .notEmpty()
    .withMessage("Escribe tu email")
    .bail()
    .isEmail()
    .withMessage("Escribe un correo electrónico válido"),
  body("password").notEmpty().withMessage("Escribe tu contraseña"),
];
