import CONVERSATION from "../../models/conversationModel.js";

const newConversation = async (req, res) => {
    console.log(req.body);
    try {
        let senderId = req.body.senderId;
        let receiverId = req.body.receiverId;

        const conversation = await CONVERSATION.findOne({ members: { $all: [receiverId, senderId] } })

        if (conversation) {
            res.status(200).json('conversation already exists');
            return;
        }

        const newConversation = new CONVERSATION({
            members: [senderId, receiverId]
        });

        await newConversation.save();

        res.status(200).json(newConversation);
    } catch (error) {
        res.status(500).json(error);
    }

}

export default newConversation