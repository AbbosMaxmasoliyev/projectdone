const mongoose = require("mongoose")



const ProjectSchema = new mongoose.Schema({
    organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Organization",
        require: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    }
})



const Project = mongoose.model("Project", ProjectSchema)

module.exports = Project