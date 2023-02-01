
import { ObjectId } from "mongodb"
import { getDb } from "../utils/dbFurniture.js"

export const updateFurnModel = (_id, path) => {
    return new Promise((resolve, reject) => {
        getDb()
            .then((db) => db.collection("Inventar").updateOne({ _id: ObjectId(_id) }, { $set: { path } }))
            .then((result) => {
                console.log("test: newFurnitureModel Zeile 10 läuft")
                console.log("result ist", result)

                resolve(result)
            })
            .catch((err) => reject(err))
    })
}