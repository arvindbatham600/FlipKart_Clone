import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import defaultData from "./defalut.js";
import Router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", Router);
dotenv.config();
const USER = process.env.db_username;
const PASSWORD = process.env.db_password;
const URL =
  process.env.MONGODB_URI ||
  `mongodb+srv://${USER}:${PASSWORD}@e-commerce-web.aivlpjv.mongodb.net/?retryWrites=true&w=majority`;

Connection(URL);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("/", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

defaultData();
