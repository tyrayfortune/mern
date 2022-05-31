const SandwichController = require("../controllers/SandwichController")
const {authenticate} = require("../config/JwtConfig")

module.exports = app => {
    //get all products
    app.get("/api/sandwiches/",  SandwichController.findAllSandwiches);
    //CREATE product
    app.post("/api/sandwiches/", SandwichController.createNewSandwich);
    //get one product
    app.get("/api/sandwiches/:sandwich_id", SandwichController.findOneSandwich);

    // PROTECTED ROUTE, makes sure the user is logged in before they can get to other routes
    //want on pages they have to be logged in for
    
}