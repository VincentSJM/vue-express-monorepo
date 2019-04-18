import express from "express";
import { resolve } from "path";

const app = express();
const port = 3000;

app.use(express.static(resolve(__dirname,'../../client/dist')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));