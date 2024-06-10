import MESSAGE from "../../models/messageModel.js"

const getMessage = async (req, res) => {
    try {
        const messages = await MESSAGE.find({ conversationId: req.params.id });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json(error);
    }
}

export default getMessage