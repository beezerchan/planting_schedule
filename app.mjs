import express from "express";
import path from "path";

import data from "./data/planting_data.json" with { type: "json" };

const app = express();
const port = 3000;

app.use("/static", express.static(path.join(__dirname, "public")));

app.listen(port);
console.log(`listening on port ${port}`);
