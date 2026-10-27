import express from "express";
import path from "path";

const app = express();
const port = 3000;
app.use("/static", express.static(path.join(__dirname, "public")));
