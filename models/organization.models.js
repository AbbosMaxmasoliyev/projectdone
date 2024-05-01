const mongoose = require("mongoose")



const OragnizationSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    createAt: {
        type: Number,
        default: new Date().getTime(),
        require: true
    }
})



const Organization = mongoose.model("Organization", OragnizationSchema)

module.exports = Organization