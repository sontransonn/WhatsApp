import MESSAGE from "../../models/messageModel.js"
import CONVERSATION from "../../models/conversationModel.js"

export const deleteAllMessages = async (req, res) => {
    try {
        const conversationId = req.params.id

        await MESSAGE.deleteMany({ conversationId: conversationId })

        await CONVERSATION.findByIdAndUpdate(conversationId, { message: "" });

        res.status(200).json("All message has been deleted successfully");
    } catch (error) {
        res.status(500).json(error);
    }
}