const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");

const User = require("../models/User");
let db = require("../database/models")
const userController = {
  login: (req, res) => {
    res.render("login.ejs");
  },

  loginProcess: (req, res) => {
    const resultsValidation = validationResult(req);

    if (!resultsValidation.isEmpty()) {
      return res.render("login", {
        errors: resultsValidation.mapped(),
        oldData: req.body,
      });
    }

    let userToLogin = User.findByField("email", req.body.email);

    if (userToLogin) {
      let passWordValidation = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );
      if (passWordValidation) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;
        if(req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}

        return res.redirect("/user/profile");
      }
      return res.render("login", {
        errors: {
          password: {
            msg: "Las credenciales son inválidas",
          },
          
        },
        oldData: req.body,
      });
    }
    return res.render("login", {
      errors: {
        email: {
          msg: "Aún no te has registrado con este correo electrónico",
        },
        
      },
      oldData: req.body,
    });
  },

  register: (req, res) => {
    res.render("register.ejs");
  },

  registerProcess: async (req, res) => {
    const resultsValidation = validationResult(req);

    if (!resultsValidation.isEmpty()) {
      return res.render("register", {
        errors: resultsValidation.mapped(),
        oldData: req.body,
      });
    }

//    let userInData = User.findByField("email", req.body.email);
try{
 userInData = await db.User.findOne({
  where: {
    email: req.body.email
  }
})
console.log("userIndata" +userInData)
return userInData

}  catch (error){
  console.log(error)
}

console.log("hasta aca llego")
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
console.log("abajo intento crear user")
    try {
      newUser = await db.User.create({
        name: req.body.name,
        lastName:req.body.lastName,
        email: req.body.email,
        password: bcryptjs.hashSync(req.body.password, 10),
        confirmPassword:req.body.confirmPassword,
        admin: req.body.admin,
        imgPath: `/images/${req.file.filename}`,
        purchases: [],
        orders: [],
      });
      return newUser;
    } catch (error) {
      console.error(error);
  } 
    delete newUser.confirmPassword;

    delete newUser.password;

    return res.render("login", { newUser });
  },

  profile: (req, res) => {
    // res.send(req.session.userLogged);
    res.redirect("/")
  },
  userProfile: (req, res) => {
   const profile = req.session.userLogged; 
    
  res.render("userProfile");
  },
  closeSesion: (req, res) => {
    res.clearCookie('userEmail');
    delete req.session.userLogged;
    res.redirect("/")
  }

};

module.exports = userController;
