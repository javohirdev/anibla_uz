const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , 'Please add a name'],
        minlength : [3 , 'Name can\'t be shorter than 3 characters'],
        maxlength : [255 , 'Name can\'t be more than 255 characters'],
        trim: true
    },
    email : {
        type : String,
        required : [true , 'Please add an email'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ , 'Please add a valid email'],
        unique : [true , 'Your email has already been registered'],
        lowercase: true
    },
    password : {
        type : String,
        required : [true , 'Please add a password'],
        minlength : [3 , 'Password can\'t be shorter than 6 characters'],
        maxlength : [1024 , 'Name can\'t be more than 1024 characters'],
        select: false
    },
    role : {
        type : String,
        enum : ['user', 'publisher'],
        default: 'user'
    },
    status : {
        type: String,
        enum : ['oddiy' , 'VIP'],
        default: 'oddiy'
    },
    balance : {
        type: Number,
        required: function () {
            if(this.status === 'VIP') 
                return true; 
        }
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt : {
        type : Date,
        default : Date.now
    }
});

// Encrypt password using bcrypt
userSchema.pre('save' , async function(next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password , salt);
});

// Sign JWT and return
userSchema.methods.getSignedJWT = function() {
    return JWT.sign({ id: this._id } , process.env.JWT_KEY , {
        expiresIn: process.env.JWT_EXPIRE
    });
}

//  Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare( enteredPassword, this.password);
}

module.exports = mongoose.model('Users' , userSchema);