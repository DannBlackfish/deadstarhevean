const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    products: 
        [{type: Schema.Types.ObjectId, ref: 'Product'}],
    total: {
        type: Number
    },
    paid: { 
        type: Boolean, default: false 
    },
    user: { 
        type: Schema.Types.ObjectId, ref: 'User' 
    },
    quantity: {
        type: Number
    },
    size: {
        type: [String]
    },
    shippingAddress: { 
        type: String 
},
},
{ timestamps: true }
);

module.exports = model('Order', orderSchema);