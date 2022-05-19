const Name = require("../models/AuthorModel");

// // test method
// module.exports.test = (req,res) =>{
//     res.json ("hello world")
// }

                // GET ALL
module.exports.findAllNames = (req, res) => {
  Name.find()
    .then(names => res.json( names ))
    .catch(err => res.json({ message: "you dun messed up A-A-RON!!", err }));
};
//             //GET ONE
module.exports.findOneName = (req, res) => {
  //whatever you put in route after colon is what you would put, in this case we put id (check routes for route name)
	Name.findOne({ _id: req.params.author_id })
		.then(oneName => res.json( oneName ))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

                    //CREATE
module.exports.createNewName = (req, res) => {
  Name.create(req.body)
    .then(name => res.json( name ))
    .catch(err => res.status(400).json(err));
};
//                 // UPDATE 
module.exports.updateName = (req, res) => {
  //finds the info  (_id: req.params.id)BEFORE the update(req.body is info you want updated), then sets the new value with (new: true)
  Name.findOneAndUpdate({ _id: req.params.author_id }, req.body, { new: true, runValidators:true})
    .then(updatedName => res.json(updatedName ))
    .catch(err => res.status(400).json(err));
};

                    // DELETE
module.exports.deleteName = (req, res) => {
  Name.deleteOne({ _id: req.params.author_id })
    //dont change .then name from result
    .then(result => res.json( result ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}