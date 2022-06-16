const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");

const User = require("../models/User");

const userController = {
  login: (req, res) => {
    res.render("login.ejs");
  },

  register: (req, res) => {
    res.render("register.ejs");
  },

  registerProcess: (req, res) => {
    const resultsValidation = validationResult(req);

    if (!resultsValidation.isEmpty()) {
      return res.render("register", {
        errors: resultsValidation.mapped(),
        oldData: req.body,
      });
    }

    let userInData = User.findByField("email", req.body.email);

    if (userInData) {
      return res.render("register", {
        errors: {
          email: {
            msg: "Ya existe un usuario con este correo electrónico",
          },
        },
        oldData: req.body,
      });
    }

    let imgPath = "/images/avatars/default-avatar.png";
    if (req.file) {
      imgPath = `/images/avatars/${req.file.filename}`;
    }

    let dataUserToCreate = {
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),
      admin: req.body.admin === "true",
      imgPath,
      purchases: [],
      orders: [],
    };

    delete dataUserToCreate.confirmPassword;

    let userCreated = User.createUser(dataUserToCreate);

    delete userCreated.password;

    return res.render("login", { userCreated });
  },

  profile: (req, res) => {
    res.render("userProfile");
  },
};

module.exports = userController;
