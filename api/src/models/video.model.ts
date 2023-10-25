import { Schema, model } from 'mongoose'

const videoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: false,
        trim: true,
        unique: true
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model('Video', videoSchema);