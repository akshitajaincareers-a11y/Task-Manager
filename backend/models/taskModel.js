const mongoose = require('mongoose');
const taskSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please add a title for the task'],

        },
        status :{
            type : String,
            default : 'pending'
        }
    })

module.exports = mongoose.model('Task', taskSchema)