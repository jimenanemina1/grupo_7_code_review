const User = require("../models/User");
const userLogged = (req,res,next) =>{
    res.locals.isLogged = false;

    // console.log('Cookies: ', req.cookies.userEmail2)
    // let emailInCookie = req.cookies.userEmail2;

    let emailInCookie = req.cookies.userEmail;
	let userFromCookie = User.findByField('email', emailInCookie);

	if (userFromCookie) {
		req.session.userLogged = userFromCookie;
	}


    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
}

module.exports = userLogged;

