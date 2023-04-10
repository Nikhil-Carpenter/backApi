const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  updateProduct,
  getOneProduct,
  createProduct,
  deleteProduct,
} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/").post(createProduct);
router.route("/:id").patch(updateProduct);
router.route("/:id").delete(deleteProduct);

router.route("/:id").get(getOneProduct);

module.exports = router;
