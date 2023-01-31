import { insertFurniture } from "../models/newFurnModel";

export const furnitureCreate = (req, res) => {
    const {
        title,
        room,
        stuff
    } = req.body;
    insertFurniture({
        title,
        room,
        stuff
    })
        .then((id) => {
            res.json({ id })
        })
        .catch((err) => {
            res.status(500).send("Error")
        })
}