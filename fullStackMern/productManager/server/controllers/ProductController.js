
const Product = require("../models/ProductModel");

//test method
// module.exports.test = (req,res) =>{
//     res.json ("hello world")
// }
                // GET ALL
module.exports.findAllProducts = (req, res) => {
  Product.find()
    .then(products => res.json( products ))
    .catch(err => res.json({ message: "you dun messed up A-A-RON!!", err }));
};
            //GET ONE
module.exports.findOneProduct = (req, res) => {
  //whatever you put in route after colon is what you would put, in this case we put id (check routes for route name)
	Product.findOne({ _id: req.params.product_id })
		.then(oneProduct=> res.json( oneProduct ))
		.catch(err => res.statusjson({ message: "Something went wrong", error: err }));
};

                    //CREATE
module.exports.createNewProduct = (req, res) => {
  Product.create(req.body)
    .then(product => res.json( product ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
                // UPDATE 
module.exports.updateProduct = (req, res) => {
  //finds the info  (_id: req.params.id)BEFORE the update(req.body is info you want updated), then sets the new value with (new: true)
  Product.findOneAndUpdate({ _id: req.params.product_id }, req.body, { new: true })
    .then(updatedProduct => res.json(updatedProduct ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.product_id })
    //dont change .then name from result
    .then(result => res.json( result ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};