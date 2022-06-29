const userStatus = (req, res, next) => {
  const userSesion = req.session;
  const userCookie = req.cookies;

  if (!userSesion.isEmpty() || !userCookie.isEmpty()) {
    userStatus = "loggedIn";
    next();
  } else {
    userStatus = "notLoggedIn";
    next();
  }  
  

};

module.exports = userStatus;
