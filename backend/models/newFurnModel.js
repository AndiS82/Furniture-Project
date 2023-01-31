import { ConnectionClosedEvent } from "mongodb"
import { getDb } from "../utils/dbFurniture"


export const insertFurniture = (furn) => {
    return new Promise((resolve, reject) => {
        getDb()
            .then((db) => db.collection("Inventar").insertOne(furn))
            .then((result) => {
                ConnectionClosedEvent.log("test: newFurnitureModel Zeile 10 läuft")
                resolve(result.insertedId)
            })
            .catch((err) => reject(err))
    })
}