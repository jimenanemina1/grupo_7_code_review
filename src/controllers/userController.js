const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");

const User = require("../models/User");
let db = require("../database/models")
const userController = {
  login: (req, res) => {
    res.render("login.ejs");
  },

  loginProcess: async (req, res) => {
   try{ const resultsValidation = validationResult(req);

    if (!resultsValidation.isEmpty()) {
      return res.render("login", {
        errors: resultsValidation.mapped(),
        oldData: req.body,
      });
    }

  //  let userToLogin = User.findByField("email", req.body.email);
    userToLogin = await db.User.findOne({
      where: {
        email : req.body.email
      }
    })
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


  } catch (error){
    console.log(error)
  }
  },

  register: (req, res) => {
    res.render("register.ejs");
  },

  registerProcess: async (req, res) => {
  try{  const resultsValidation = validationResult(req);

    if (!resultsValidation.isEmpty()) {
      return res.render("register", {
        errors: resultsValidation.mapped(),
        oldData: req.body,
      });
    }

   // let userInData = User.findByField("email", req.body.email);
   userInData = await db.User.findOne({
     where: 
          {
     email : req.body.email
           }
   })
   

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

    // let dataUserToCreate = {
    //   ...req.body,
    //   password: bcryptjs.hashSync(req.body.password, 10),
    //   admin: req.body.admin === "true",
    //   imgPath,
    //   purchases: [],
    //   orders: [],
    // };

    
    
     userCreated = await db.User.create({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: bcryptjs.hashSync(req.body.password, 10),
        admin: req.body.admin === "true"?1:0,
        imgPath: req.body.imgPath,
        billing_address: "calle falsa 1775",
        phone: "1156062209",
        shipping_address: "calle 13"

        
      }) 

      delete userCreated.confirmPassword;

    delete userCreated.password;

    return res.render("login", { userCreated });

  } catch(error){
    console.log(error)
  }
  },

  profile: (req, res) => {
    // res.send(req.session.userLogged);
    res.redirect("/")
  },
  userProfile: (req, res) => {
   const profile = req.session.userLogged; 
    
  res.render("userProfile");
  },
  userProfileUpdate: async (req, res) =>{
    try{ 
     console.log("user logged tiene adentro" + req.session.userLogged)

      userToUpdate = await db.User.findOne({
        where: {
          email: req.body.email
        }
        
      })
      return userToUpdate;

    }catch (error){
      console.log(error)
    }
try{
    updatedUser = await db.User.update({
      name: req.body.name,
      lastName:req.body.lastName,
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password, 10),
      confirmPassword:req.body.confirmPassword,
      admin: req.body.admin,
      imgPath: `/images/${req.file.filename}`,
      purchases: [],
      orders: [],
    })
    } catch (error){
      console.log(error)
    }
    return res.render("userProfile"); 

  },
  closeSesion: (req, res) => {
    res.clearCookie('userEmail');
    delete req.session.userLogged;
    res.redirect("/")
  }

};

module.exports = userController;
