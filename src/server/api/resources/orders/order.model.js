import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  products: [{
    item: 'productSchema',
    quantity: {
      type: Number,
      required: true,
      min: 1
    }
  }]
});

const Orders = mongoose.model('Orders', orderSchema);

export default Orders;
