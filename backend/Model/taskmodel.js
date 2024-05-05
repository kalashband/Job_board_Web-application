const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    task: {
        companyName: { type: String, required: true },
        jobRole: { type: String, required: true },
        location: { type: String, required: true },
        description: { type: String, required: true },
        payRange: { type: String, required: true }
    },
})

module.exports = mongoose.model("task", taskSchema);

