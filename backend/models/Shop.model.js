const mongoose = require('mongoose')

const Shop = mongoose.model('Shop', new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        default: [],
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: false
    },
    about: {
        type: String,
        required: false
    },
    dimensions: {
        type: String,
        required: false
    },
    weight: {
        type: Number,
        required: false
    }
}))

module.exports = { Shop }