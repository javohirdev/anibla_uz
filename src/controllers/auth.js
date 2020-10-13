const User = require('../models/user');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');

// @description Register
// @route GET /api/auth/register
// @access Public
exports.register = asyncHandler( async (req , res , next) => {
 const { name, email, password, role, status, balance } = req.body;
 const  user = await User.create({
     name,
     email,
     password,
     role,
     status,
     balance
 });
 res.status(201).json({success: true , data: user});
});

// @description Login user
// @route GET /api/auth/login
// @access Public
exports.login = asyncHandler( async (req , res , next) => {
    const { email, password } = req.body;
    
    // Validate email & password
    if(!email || !password) {
        return next(new ErrorResponse('Please provide email and password' , 400));
    }

    // check for user
    const user = await User.findOne({email: email}).select('+password');

    if(!user) {
        return next(new ErrorResponse('Invalid credentials ' , 401));
    }

    //check if password matches
    const isMatch = await user.matchPassword(password);

    if(!isMatch) {
        return next(new ErrorResponse('Invalid credentials ' , 401));
    }

        sendTokenResponse(user, 200 , res);
});

// @description get current logged user
// @route GET /api/auth/me
// @access Public
exports.getMe = asyncHandler( async (req , res , next) => {
 const user = await User.findById(req.user.id)
 res.status(201).json({success: true , data: user});
});

   // Get token from model , create cookie and send response
   const sendTokenResponse = (user, statusCode, res) => {
        // Create token
        const token = user.getSignedJWT();

        const options = {
            expires : new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE*24*60*60*1000),
            httpOnly: true
        };
        res.status(statusCode)
            .cookie('token', token, options)
            .json({success: true, token});
   }