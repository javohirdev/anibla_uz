const express = require('express');
const { getAllProducts ,
        getProduct,
        createProduct,
         } = require('../controllers/products');
const router = express.Router({mergeParams: true});
const {protect , authorize} = require('../middlewares/auth');

router.route('/products').get(getAllProducts);
router.route('/:categoryId/products')
         .get(getProduct)
        .post(/*protect , authorize('publisher' , 'admin'),*/ createProduct);

/*router.route('/:id')
    .get(getProduct)
    .put(protect , authorize('publisher' , 'admin') ,updateProduct)
    .delete(protect , authorize('publisher' , 'admin') ,deleteProduct);
*/
module.exports = router;