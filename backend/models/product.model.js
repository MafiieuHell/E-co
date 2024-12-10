import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    price: {
      type: Number,
      min: [0, "Price must be at least 0"],
      required: [true, "Please add a price"],
    },
    image: {
      type: String,
      required: [true, "Please add an image"],
    },
    category: {
      type: String,
      required: [true, "Please add a category"],
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
