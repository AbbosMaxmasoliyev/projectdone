const mongoose = require("mongoose")



const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'direktor'],
        required: true
    },
    createAt: {
        type: Number,
        default: new Date().getTime(),
        require: true
    }
})



const User = mongoose.model("User", UserSchema)

module.exports = User