const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        steps: {
            type: [String],
            default: []
        },
        // creator: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'User',
        //     required: true
        // },
    },
    { timestamps: true }
)

module.exports = mongoose.model("Task", taskSchema)