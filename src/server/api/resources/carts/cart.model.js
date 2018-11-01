import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  products: [
    {
      item: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        require: true
      },
      quantity: {
        type: Number,
        min: 1
      }
    }
  ]
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
