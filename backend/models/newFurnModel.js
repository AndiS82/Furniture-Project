import { getDb } from "../utils/dbFurniture.js"


export const insertFurniture = (furn) => {
    return new Promise((resolve, reject) => {
        getDb()
            .then((db) => db.collection("Inventar").insertOne(furn))
            .then((result) => {
                Console.log("test: newFurnitureModel Zeile 10 läuft")
                resolve(result.insertedId)
            })
            .catch((err) => reject(err))
    })
}
