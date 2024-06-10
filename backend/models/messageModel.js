import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    conversationId: {
        type: String
    },
    senderId: {
        type: String
    },
    receiverId: {
        type: String
    },
    text: {
        type: String
    },
    type: {
        type: String
    }
},
    {
        timestamps: true
    }
)

const MESSAGE = mongoose.model('message', messageSchema);

export default MESSAGE