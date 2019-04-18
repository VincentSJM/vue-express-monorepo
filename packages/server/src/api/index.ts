import { Router } from "express";

const api = Router();

api.get("/", (req, res) => {
  res.send("Hit Api");
});

api.get("/hello", (req, res) => {
  res.send({
    hello: "hello world"
  });
});

export default api;