import mongodb from "mongodb";
import { getDb } from "../utils/dbFurniture.js"


export const insertFurniture = (furn) => {
    return new Promise((resolve, reject) => {
        getDb()
            .then((db) => db.collection("Inventar").insertOne(furn))
            .then((result) => {
                console.log("test: newFurnitureModel Zeile 10 läuft")
                console.log("result ist", result)

                resolve(result.insertedId)
            })
            .catch((err) => reject(err))
    })
}
