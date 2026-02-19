import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";

const app: Application = express();
const PORT = Number(process.env.PORT) || 7000;

app.get("/", (req: Request, res: Response) => {
  return res.json({ msg: "Its working...." });
});

app.listen(PORT, () => console.log(`app listening on ${PORT}`));
