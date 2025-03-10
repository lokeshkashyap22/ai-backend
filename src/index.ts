import express, { Request, Response } from "express";
import connectDB from "./config/db";

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Backend!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
