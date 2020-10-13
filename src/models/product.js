const mongoose = require('mongoose');
const category = require('./category');
const Category = require('./category').schema;

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        minlength : 3,
        maxlength : 255,
        required : true
    },
    category : {
        type : mongoose.SchemaTypes,
        ref: 'Category',
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
});

exports.Products = mongoose.model('product' , productSchema);