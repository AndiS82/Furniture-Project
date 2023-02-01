import { findAllFurn } from "../models/allFurnModel.js"

export const getFurniture = (req, res) => {

    findAllFurn()
        .then((furn) => {
            res.json({ furn })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send("Error")
        })
    return
}