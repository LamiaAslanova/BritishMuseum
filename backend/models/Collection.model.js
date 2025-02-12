const mongoose = require('mongoose')

const Collections = mongoose.model('Collections', new mongoose.Schema({
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
    }
}))

module.exports = { Collections }