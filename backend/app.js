import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import MongoDB_connection from "./DB/MondoDB_conection.js";
import path from "path";
import { fileURLToPath } from "url";
import contactRoute from "./routes/contactRoute.js";

const app = express();
//deployement start
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/frontend/dist", "index.html"));
});
//deployement end

dotenv.config();
const corsOptions = {
  origin: true,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use("/api", contactRoute);

const PORT = process.env.port;

app.listen(PORT || 5000, () => {
  MongoDB_connection();
  console.log(`server listening on port", ${PORT}`);
});
