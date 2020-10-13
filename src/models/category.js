const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3 , 'Category name should include minimum 3 characters'],
        maxlength: [255 , 'Category name should include maximum 255 characters '],
        required: [true , 'Category name is not declared']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('category' , categorySchema);