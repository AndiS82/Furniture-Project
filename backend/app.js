import express from "express";
import cors from "cors";
import multer from "multer";
import morgan from "morgan";
import './config/config.js'
import { furnitureCreate } from "./controller/newFurniture.js";
import { getFurniture } from "./controller/allFurniture.js"
import { furnitureUpdate } from "./controller/updateFurniture.js";

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
//an Tag 74 hatten wir Multer benutzt. Der Import war wie hier aber wir hatten das anders verwendet:
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public")
    },
    filename: function (req, file, cb) {
        let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
        cb(null, Date.now() + ext)
    }
});

const upload = multer({ dest: './public', storage: storage })
app.post('/api/fileUpload/:id', upload.single('wallpaper'), furnitureUpdate)

app.use(morgan("dev"));
app.use(cors())
app.use("/public", express.static("public"))

app.post("/api/bigstuff", furnitureCreate)
app.get("/api/bigstuff", getFurniture)

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});