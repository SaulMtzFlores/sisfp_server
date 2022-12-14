import * as Mongoose from 'mongoose';
import { model, Schema } from 'mongoose';

const modelName = 'Post'

const schema = new Schema({
    _id: { 
        type: Mongoose.Schema.Types.ObjectId, 
        auto:true 
    },
    ownerId: {
        type: Mongoose.Schema.Types.ObjectId,
        required: true
    },
    groupId: {
        type: Mongoose.Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    media: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        required: true
    },
    finishAt: {
        type: Date,
        required: false
    },
    moment: {
        type: Boolean,
        required: true,
    },
    notified: {
        type: Boolean,
        required: true,
        default: false
    },
    notifyAt: {
        type: Date,
        required: false
    },
    applauses: {
        type: Number,
        default: 0,
        required: true
    },
    active: { 
        type: Boolean, 
        required: true, 
        default: true 
    },
    deleted: { 
        type: Boolean, 
        required: true, 
        default: false 
    },
    root: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    versionKey: false,
    collection: modelName
});

export default model(modelName, schema);