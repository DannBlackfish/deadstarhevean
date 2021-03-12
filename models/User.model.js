const mongoose = require('mongoose')
const {Schema, model} = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trime: true
    },
    record: {
        type: Date,
        default: Date.now()
    },
    address: { 
        type: String 
    },
    mobile: { 
        type: Number
    },
    orders: [{type: Schema.Types.ObjectId, ref: 'Order'}],
    checkout: {
        type: Array
    }
    
})

module.exports = mongoose.model('User', UserSchema)