const User = require("../models/User");
const db = require("../database/models")
const userLogged = async(req,res,next) =>{
    
  try {  res.locals.isLogged = false;

    
    if(req.cookies.userEmail){
    emailInCookie = req.cookies.userEmail;
    let userFromCookie = await db.User.findOne({
        where: {
            email :  emailInCookie 
        }
    })
    

	if (userFromCookie) {
		req.session.userLogged = userFromCookie;
	}

}
    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
} catch(error){
    console.log(error)
}
}

module.exports = userLogged;

