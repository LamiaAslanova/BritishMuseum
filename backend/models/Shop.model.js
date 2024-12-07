const mongoose = require('mongoose')

const Shop = mongoose.model('Shop', new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    additionalImage: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
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