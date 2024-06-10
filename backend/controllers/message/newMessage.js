import MESSAGE from "../../models/messageModel.js"
import CONVERSATION from "../../models/conversationModel.js"

const newMessage = async (req, res) => {
    try {
        const newMessage = new MESSAGE(req.body);

        await newMessage.save();

        await CONVERSATION.findByIdAndUpdate(req.body.conversationId, { message: req.body.text });

        res.status(200).json("Message has been sent successfully");
    } catch (error) {
        res.status(500).json(error);
    }
}

export default newMessage