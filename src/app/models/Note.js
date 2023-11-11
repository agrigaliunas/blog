import {Schema, model, models} from "mongoose";

const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    labels: [{
        type: String,
        trim: true
    }]
}, {
    timestamps: true
})

export default models.Note || model('Note', noteSchema);