import { insertFurniture } from "../models/newFurnModel.js";

export const furnitureCreate = (req, res) => {
    const {
        title,
        room,
        stuff,
        text
    } = req.body;
    insertFurniture({
        title,
        room,
        stuff,
        text
    })
        .then((id) => {
            res.json({ id })
        })
        .catch((err) => {
            res.status(500).send("Error")
        })
}
