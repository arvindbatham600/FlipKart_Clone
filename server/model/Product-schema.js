import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  descripton: String,
  discount: String,
  tagline: String,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
