import express from "express";
import cors from "cors";
import multer from "multer";
import morgan from "morgan";
import './config/config.js'
import { furnitureCreate } from "./controller/newFurniture.js";
import PORT from ".env";

const app = express();

app.use(express.json());
app.use(multer());
app.use(morgan("dev"));
app.use(cors())

app.post("/api/bigstuff", furnitureCreate)
app.

    app.listen(PORT, () => {
        console.log("Server is running on port " + PORT);
    });