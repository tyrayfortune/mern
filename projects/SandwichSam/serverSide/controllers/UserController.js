
const {User} = require("../models/UserModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

// FOR REGISTERING USER
module.exports.register = (req, res) => {
    //exists is predetermined mongoose method.
    User.exists({email : req.body.email})
        .then(userExists => {
            // IS USER EXISTS, SEND BACK AN ERROR
            if(userExists){
                //if the email exists goto .catch
                return Promise.reject({
                    errors: {"duplicate": "Email already taken"}
                })
            }
            //if user doesnt exist, create user
            else{
                const user = new User(req.body)
                return user.save()
            }
        })
        //if want to sign in user on reg put the JWT before the res.json
        .then(user =>{
            const newJWT = jwt.sign({
                _id:user._id
            }, "SECRET_KEY")
            //only for http request/responce cycles
            res.cookie("usertoken", newJWT, {httpOnly:true}).json("success")
            res.json(user)
        })
        .catch(err => res.status(400).json(err))
}

// FOR LOGGING IN THE USER
module.exports.login = (req,res) => {
    // CHECK TO SEE IF THE EMAIL EXISTS
    User.findOne({email : req.body.email})
        .then(user => {
            if(user === null){
                res.status(400).json({msg: "INVALID LOGIN"})
            }
            else{
                bcrypt.compare(req.body.password, user.password)
                    .then(passwordIsValid => {
                        if(passwordIsValid){
                            //Using JWT web token to for signed in user
                            const newJWT = jwt.sign({
                                _id:user._id
                            }, "SECRET_KEY")
                            //only for http request/responce cycles
                            res.cookie("usertoken", newJWT, {httpOnly:true}).json("success")
                        }
                        else{
                            res.status(400).json({msg:"INVALID ATTEMPT"})
                        }
                    })
            }
        })

}

module.exports.getAll = (req, res) => {
    User.find()
        .then(allUser => res.json(allUser))
        .catch(err => res.json(err))
}

                // UPDATE 
module.exports.updateUser = (req, res) => {
  //finds the info  (_id: req.params.id)BEFORE the update(req.body is info you want updated), then sets the new value with (new: true)
  Name.findOneAndUpdate({ _id: req.params.user_id }, req.body, { new: true, runValidators:true})
    .then(updatedUser => res.json(updatedUser ))
    .catch(err => res.status(400).json(err));
};