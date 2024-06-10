import USER from "../../models/userModel.js";

const getUsers = async (req, res) => {
    try {
        const users = await USER.find({});

        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}

export default getUsers