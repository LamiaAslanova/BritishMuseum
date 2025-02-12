const mongoose = require('mongoose')

const Events = mongoose.model('Events', new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false
    },
    time: {
        type: String,
        required: false
    },
    age: {
        type: String,
        required: false
    },
    miniDesc: {
        type: String,
        required: false
    },
    desc: {
        type: String,
        required: false
    },
    additionalDesc: {
        type: String,
        required: false
    },
    place: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    }
}))

module.exports = { Events }