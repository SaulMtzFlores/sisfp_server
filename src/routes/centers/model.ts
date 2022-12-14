import * as Mongoose from 'mongoose';
import { model, Schema } from 'mongoose';

const modelName = 'Center'
// TODO import new

const schema = new Schema({
    _id: { 
        type: Mongoose.Schema.Types.ObjectId, 
        auto:true 
    },
    name: {
        type: String, 
        required: false
    },
    acronym: {
        type: String,
        required: false
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