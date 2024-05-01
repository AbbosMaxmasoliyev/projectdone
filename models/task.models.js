const mongoose = require("mongoose")



const TaskSchema = new mongoose.Schema({
    organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Organization",
        require: true
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
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        require: true
    },
    deadline: {
        type: Number,
        require: true
    },
    workerUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    status: {
        type: String,
        enum: ['created', 'in_process', 'done'],
        required: true
    },
    doneAt: {
        type: Number,
        require: true
    }
})



const Task = mongoose.model("Task", TaskSchema)

module.exports = Task