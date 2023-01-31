import express from "express";
import cors from "cors";
import multer from "multer";
import morgan from "morgan";

const PORT = 8989;

const app = express();

app.use(express.json());
app.use(multer());
app.use(morgan("dev"));
app.use(cors())

app.post("/api/bigstuff")
app.

    app.listen(PORT, () => {
        console.log("Server is running on port " + PORT);
    });