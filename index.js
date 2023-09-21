import { http } from "@ampt/sdk";
import express, { Router } from "express";

const app = express();

const api = Router();

api.get("/hello", (req, res) => {
  return res.status(200).send({ message: "Hello from the public api!" });
});

app.use("/api", api);

http.node.use(app);
