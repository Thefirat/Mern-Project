import express from "express";
import Product from "../models/productModel.js";

const ProductRouter = express.Router();

// for fetch or get product from db
ProductRouter.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

// get product by slug

ProductRouter.get("/slug/:slug", async (req, res) => {
  const product = await Product.findOne({slug:req.params.slug});
  if(product){
   res.send(product)
  } else{
   res.status(404).send({message: "Product not found"});
  }
});

// get product by userId

ProductRouter.get("/seller/:id", async (req, res) => {
  const product = await Product.find({sellerId:req.params.id});
  if(product){
   res.send(product)
  } else{
   res.status(404).send({message: "No Product of the this seller"});
  }
});


export default ProductRouter;
