const UserController = require("../controllers/UserController")
const {authenticate} = require("../config/JwtConfig")

module.exports = app => {
    app.post("/api/users/register", UserController.register),
    app.post("/api/users/login", UserController.login),

    // PROTECTED ROUTE, makes sure the user is logged in before they can get to other routes
    //want on pages they have to be logged in for
    app.get("/api/users", authenticate, UserController.getAll)
    
}