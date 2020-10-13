const express = require('express');
const { getCategories ,
        getCategory ,
        createCategory,
        deleteCategory,
        updateCategory } = require('../controllers/categories');
const router = express.Router();
const {protect , authorize} = require('../middlewares/auth');

router.use('/' , require('./products'));

router.route('/')
    .get(getCategories)
    .post(protect , authorize('publisher' , 'admin'), createCategory);

router.route('/:id')
    .get(getCategory)
    .put(protect , authorize('publisher' , 'admin') ,updateCategory)
    .delete(protect , authorize('publisher' , 'admin') ,deleteCategory);

module.exports = router;