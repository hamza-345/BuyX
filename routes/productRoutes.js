const express = require('express')
const { getAllProducts, postProduct, deleteProduct, getProduct } = require('../controllers/productController')
const Router = express.Router()
const multer = require("multer")
const path = require('path')
const fs = require('fs')

console.log(__dirname)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = path.join(__dirname, "..", "ecommerce", "public", "uploads")
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
      cb(null, "./ecommerce/public/uploads")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null, uniqueSuffix + file.originalname)
    }
  })
  
const upload = multer({ storage: storage })

Router.route("/products").get(getAllProducts).post(upload.array("productImage"), postProduct)
Router.route("/products/:id").delete(deleteProduct).get(getProduct)


module.exports = Router