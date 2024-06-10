import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
    members: {
        type: Array
    },
    message: {
        type: String
    }
},
    {
        timestamps: true
    }
)

const CONVERSATION = mongoose.model('conversation', conversationSchema);

export default CONVERSATION