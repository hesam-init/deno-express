// @deno-types="npm:@types/express@4"
import express, { NextFunction, Request, Response } from "npm:express@4.18.2";
import { config } from "./config.ts";
import { reqLogger } from "./utils/logger.ts";

const app = express();
const port = Number(config.express.port);

app.use(reqLogger);

app.get("/", (_req, res) => {
  res.status(200).json("hi");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
