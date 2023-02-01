import { updateFurnModel } from "../models/updateFurnModel.js";

export const furnitureUpdate = (req, res) => {
    console.log('Der Body:', req.file);
    updateFurnModel(req.params.id, req.file.path)
        .then((result) => res.json())
}