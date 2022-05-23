const Belt = require("../models/BeltModel");

// test method
// module.exports.test = (req,res) =>{
//     res.json ("hello world")
// }

                // GET ALL
module.exports.findAllPirates = (req, res) => {
  Belt.find()
    .then(pirates => res.json( pirates ))
    .catch(err => res.json({ message: "you dun messed up A-A-RON!!", err }));
};
//             //GET ONE
module.exports.findOnePirate = (req, res) => {
  //whatever you put in route after colon is what you would put, in this case we put id (check routes for route name)
	Belt.findOne({ _id: req.params.pirate_id })
		.then(onePirate => res.json( onePirate ))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

                    //CREATE
module.exports.createNewPirate = (req, res) => {
  Belt.create(req.body)
    .then(pirate => res.json( pirate ))
    .catch(err => res.status(400).json(err));
};
//                 // UPDATE 
// module.exports.updateName = (req, res) => {
//   //finds the info  (_id: req.params.id)BEFORE the update(req.body is info you want updated), then sets the new value with (new: true)
//   Name.findOneAndUpdate({ _id: req.params.author_id }, req.body, { new: true, runValidators:true})
//     .then(updatedName => res.json(updatedName ))
//     .catch(err => res.status(400).json(err));
// };

                    // DELETE
module.exports.deletePirate = (req, res) => {
  Belt.deleteOne({ _id: req.params.pirate_id })
    //dont change .then name from result
    .then(result => res.json( result ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}