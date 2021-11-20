// 3. create mongoose schema and model

// a. the schema itself  -- the rules that the entries in the db must follow
//import mongoose here as well as config
const mongoose = require('mongoose');

//mongodb has no built in validators
//mongoose is doing all the validations and talking to mongo db

//a. the schema -- the rules that the entries in the db must follow
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "you must have a {PATH}!"],
        minlength: [3, "{PATH} must be at least 3 char, you gave {VALUE}"],
        maxlength: 100 
    },
    price: {
        type: String,
        required: [true, "you must have a {PATH}!"],
        minlength: [3, "{PATH} must be at least 3 char, you gave {VALUE}"],
        maxlength: 100 
    }, 
    description: {
        type: String,
        required: [true, "you must have a {PATH}!"],
        minlength: [3, "{PATH} must be at least 3 char, you gave {VALUE}"],
        maxlength: 100 
    }
}, { timestamps: true});

//timestamps gives created at and updated at
//b. the model-- this is what we use to make queries to hte db
const Product = mongoose.model('Product', ProductSchema);

// c. exports this object
module.exports = Product;



// b. the model -- this is what we use to make the actual querie to the db
