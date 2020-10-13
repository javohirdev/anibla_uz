const {Products} = require('../models/product');
const Category = require('../models/category');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');

// @description Get all products
// @route GET /api/category/products
// @access Public
exports.getAllProducts = asyncHandler( async (req , res , next) => {
  let products = await Products.find();
      res.status(200).json({success: true , count : products.length , data: products});
  });

// @description create new product
// @route POST /api/:categoryId/products
// @access Private
exports.createProduct = asyncHandler( async (req , res , next) => {
  
  const category = await Category.findById(req.params.categoryId); 
  if(!category){
    return next(
      ErrorResponse(`No category with the id of ${req.params.categoryId}` , 404)
    );
  }
  let product = new Products(
    { name: req.body.name ,
    category: {
      _id: category.id,
      name: category.name
    }
  });
  product = await product.save();
  res.status(200).json({success: true , data: product});
});

// @description Get all products belong to any category
// @route GET /api/:category/products
// @access Public
exports.getProduct = asyncHandler( async (req , res , next) => {
  let category = await Category.findById(req.params.id);
  if(!category)
        return next(new ErrorResponse(`Resourse not found with id of ${req.params.id}`, 404))
  let categoryId = req.params.categoryId;
  const products = await Products.find({category : {_id: categoryId}});
  res.status(200).json({success: true , length: products.length() ,data: products});
});

// @description update product
// @route PUT /api/products/:id
// @access Public
exports.updateProduct = asyncHandler( async (req , res , next) => {
    const product = await Products.findByIdAndUpdate(req.params.id , req.body , {
        new: true,
        runValidators: true
    });
    if(!product)
        return next(new ErrorResponse(`Resourse not found with id of ${req.params.id}`, 404))
  res.status(200).json({success: true , data: product});
});

// @description delete single product
// @route DELETE /api/products/:id
// @access Public
exports.deleteProduct = asyncHandler( async (req , res , next) => {
    const product = await Products.findByIdAndRemove(req.params.id);
    if(!product)
        return next(new ErrorResponse(`Resourse not found with id of ${req.params.id}`, 404))
  res.status(200).json({success: true , data: product});
});
