const Category = require('../models/category');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');

// @description Get all Categories
// @route GET /api/category
// @access Public
exports.getCategories = asyncHandler( async (req , res , next) => {
      const categories = await Category.find();
    res.status(200).json({success: true , count : categories.length , data: categories});
  });

// @description Create Category
// @route POST /api/category
// @access Public
exports.createCategory = asyncHandler( async (req , res , next) => {
    const category = await Category.create(req.body);
  res.status(201).json({success: true , data: category});
});


// @description Get single Category
// @route GET /api/category
// @access Public
exports.getCategory = asyncHandler( async (req , res , next) => {
    const category = await Category.findById(req.params.id);
    if(!category)
        return next(new ErrorResponse(`Resourse not found with id of ${req.params.id}`, 404))
  res.status(200).json({success: true , data: category});
});

// @description update Category
// @route PUT /api/category
// @access Public
exports.updateCategory = asyncHandler( async (req , res , next) => {
    const category = await Category.findByIdAndUpdate(req.params.id , req.body , {
        new: true,
        runValidators: true
    });
    if(!category)
        return next(new ErrorResponse(`Resourse not found with id of ${req.params.id}`, 404))
  res.status(200).json({success: true , data: category});
});

// @description delete single Category
// @route DELETE /api/category
// @access Public
exports.deleteCategory = asyncHandler( async (req , res , next) => {
    const category = await Category.findByIdAndRemove(req.params.id);
    if(!category)
        return next(new ErrorResponse(`Resourse not found with id of ${req.params.id}`, 404))
  res.status(200).json({success: true , data: category});
});

// @description upload file Category
// @route PUT /api/category/:id/photo
// @access Public
exports.uploadfiletoCategory = asyncHandler( async (req , res , next) => {
  const category = await Category.findById(req.params.id);
  if(!category)
      return next(new ErrorResponse(`Resourse not found with id of ${req.params.id}`, 404))
  if(!req.file)
    return next(new ErrorResponse('Please upload a file' , 400));
    
    console.log(req.file);
});