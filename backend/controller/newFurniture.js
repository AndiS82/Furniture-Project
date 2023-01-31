import { insertFurniture } from "../models/newFurnModel.js";
//Andreas, hier hat das .js den Fehler "aufgehoben", bis auf weiteres...

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