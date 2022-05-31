
const jwt = require("jsonwebtoken");


module.exports.authenticate = (req, res, next) => {
    console.log("COOKIE: ",req.cookies)
    //matching client side cookie with server key
    //make sure "secret key here and in ur controller match"
    jwt.verify(req.cookies.usertoken, "SECRET_KEY" , (err, payload) => {
      console.log(err)
      if (err) { 
          //if keys dont match then unauthorized 
        res.status(401).json({verified: false});
      } else {
        next();
      }
    });
}
