const mongoose = require('mongoose')

const Exhibitions = mongoose.model('Exhibitions', new mongoose.Schema({
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
    date: {
        type: String,
        required: false
    },
    time: {
        type: String,
        required: false
    },
    suppBy: {
        type: String,
        required: false
    },
    additionalSuppBy: {
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
    room: {
        type: String,
        required: false
    },
    roomName: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    }
}))

module.exports = { Exhibitions }