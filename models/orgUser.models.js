const mongoose = require("mongoose")



const OrgUserSchema = new mongoose.Schema({
    organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Organization",
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    }
})



const OrgUser = mongoose.model("OrgUser", OrgUserSchema)

module.exports = OrgUser