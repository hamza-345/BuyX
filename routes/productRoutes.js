import express from "express";
import {
  getAllProducts,
  postProduct,
  deleteProduct,
  getProduct,
} from "../controllers/productController.js";

import multer from "multer";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const Router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const dir = path.join(__dirname, "..", "ecommerce", "public", "uploads");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, "./ecommerce/public/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

Router.route("/products")
  .get(getAllProducts)
  .post(upload.array("productImage"), postProduct);
Router.route("/products/:id").delete(deleteProduct).get(getProduct);

export default Router;
