import CONVERSATION from "../../models/conversationModel.js"

const getConversation = async (req, res) => {
    try {
        const conversation = await CONVERSATION.findOne({ members: { $all: [req.body.senderId, req.body.receiverId] } });

        res.status(200).json(conversation);
    } catch (error) {
        res.status(500).json(error);
    }
}

export default getConversation