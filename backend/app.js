import express from "express";
import cors from "cors";
import multer from "multer";
import morgan from "morgan";
import './config/config.js'
import { furnitureCreate } from "./controller/newFurniture.js";

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
//app.use(multer());
//an Tag 74 hatten wir Multer benutzt. Der Import war wie hier aber wir hatten das anders verwendet:
//const upload = multer({ dest: './public' })
//und dann im Post request so: app.post('/natur', upload.single('wallpaper'), (req, res) => {
//     console.log('Der Body:', req.file);
//     const post = {
//         title: req.body.title,
//         picture: req.file.path
//     }
//     posts.push(post)

//     res.json(posts)
// })
app.use(morgan("dev"));
app.use(cors())

app.post("/api/bigstuff", furnitureCreate)
// app.

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});