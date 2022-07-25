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
    try{
      const resultsValidation = validationResult(req);
  
      if (!resultsValidation.isEmpty()) {
        return res.render("login", {
          errors: resultsValidation.mapped(),
          oldData: req.body,
        });
      }
  
      //let userToLogin = User.findByField("email", req.body.email);
      userToLogin = await db.User.findOne({
        where: {
          email: req.body.email
        }
        
      })
   console.log( userToLogin)
      if (userToLogin !=  null) {
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
