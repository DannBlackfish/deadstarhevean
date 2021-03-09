const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String
  },
  image:{
    type: [String]
  },
  size:{
    type: [String]
  },
  material:{
    type: String
  },
  description:{
    type: String
  },
  collect:{
    type: String
  },
  price:{
    type: Number
  },
  category:{
    type: String
  },
  quantity: {
    type: Number
  }
},
{timestamps: true}
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
