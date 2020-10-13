const { param } = require("../routes/users");
const User = require('../models/user');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');
// @description Get all users
// @route GET /api/users
// @access Public
exports.getUsers = asyncHandler( async (req , res , next) => {
      const users = await User.find();
    res.status(200).json({success: true , count : users.length , data: users});
  });

// @description Get single user
// @route GET /api/users/:id
// @access Public
exports.getUser = asyncHandler( async (req , res , next) => {
    const user = await User.findById(req.params.id);
    if(!user) 
      return next(new ErrorResponse(`Resourse not found with id of ${req.params.id}`, 404))
    res.status(200).json({success: true , data: user});
  });

// @description Delete user
// @route DELETE /api/users/:id
// @access Public
exports.deleteUser = asyncHandler( async (req , res , next) => {
        const user = await User.findByIdAndRemove(req.params.id);
        if(!user) 
            return  next(new ErrorResponse(`Resourse not found with id of ${req.params.id}`,404))
        res.status(200).json({success: true , data: user});
   });