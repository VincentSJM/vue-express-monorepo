import express from "express";
import apiRouter from "./api";
import { resolve } from "path";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(resolve(__dirname, "../../client/dist")));

app.use("/api", apiRouter);

app.get("*", (req, res) => {
  res.sendFile(resolve(__dirname, "../../client/dist/index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));