import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import MongoDB_connection from "./DB/MondoDB_conection.js";

import contactRoute from "./routes/contactRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", contactRoute);

const PORT = process.env.port;

app.listen(PORT, () => {
  MongoDB_connection();
  console.log("server listening on port", PORT);
});
