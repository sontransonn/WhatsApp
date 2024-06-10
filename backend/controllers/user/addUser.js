import USER from "../../models/userModel.js";

const addUser = async (req, res) => {
    try {
        const user = await USER.findOne({ sub: req.body.sub })

        if (user) {
            res.status(200).json('User already exists');
            return;
        }

        const newUser = new USER(req.body);

        await newUser.save();

        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

export default addUser