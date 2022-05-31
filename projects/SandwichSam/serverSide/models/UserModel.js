//import dependecies
const mongoose = require("mongoose")
const brcypt = require("bcrypt")

// DEFINING the requirements
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        // VALIDATES FOR EMAIL REGEX
        validate: {
            //value of email run against values listed below
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    },

    //FOR SANDWICHES
    favoriteSandwich: {
        type: String
    }
}, {timestamps:true})

// CREATE A TEMPORARY CONFIRM PASSWORD ATTRIBUTE IN OUR SCHEMA (doesnt get saved)
UserSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );

// CREATE VALIDATIONS FOR THE CONFIRM PASSWORD (making sure pass and confrm pass match)
UserSchema.pre("validate", function(next){
    if(this.password !== this.confirmPassword){
        this.invalidate("confirmPassword", "Password and confirm password must match")
    }
    next()
})


// BEFORE SAVING THE USER, SWAP OUT PASSWORD WITH HASHED PASSWORD
UserSchema.pre("save", function(next){
    brcypt.hash(this.password, 10)
        .then(hashedPassword => {
            this.password = hashedPassword
            next()
        })
})


// REGISTER THE SCHEMA
module.exports.User = mongoose.model("User", UserSchema)