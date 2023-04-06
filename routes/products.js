const express = require('express');
const router = express.Router();

const {getAllProducts,updateProduct,getOneProduct ,createProduct} = require("../controllers/products")

router.route('/').get(getAllProducts)
router.route('/').post(createProduct)
router.route('/:id').put(updateProduct)

router.route('/:id').get(getOneProduct)


module.exports = router;