import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  }
});

const Product = mongoose.model('Product', productSchema);

export default Product;
