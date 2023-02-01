import mongodb from "mongodb";
import { getDb } from "../utils/dbFurniture.js";

export const findAllFurn = () => {
    return new Promise((resolve, reject) => {
        getDb()
            .then((db) => db.collection("Inventar").find())
            .then((furn) => furn.toArray())
            .then((furnArray) => resolve(furnArray))
            .catch((err) => reject(err))
    })
}