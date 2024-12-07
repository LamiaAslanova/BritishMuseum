const mongoose = require('mongoose')

const userModel = mongoose.model('Users', new mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    password: String,
    src: String,
    // role: {
    //     type: String,
    //     enum: ["admin", "super-admin", "client"],
    // },
    isBanned: {
        type: Boolean,
        default: false
    },
    banDate: {
        type: Date || null,
        default: null
    },
    banCount: {
        type: Number,
        default: 0
    },
    favorites: Array,
    isVerified: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true }
))

module.exports = { userModel }