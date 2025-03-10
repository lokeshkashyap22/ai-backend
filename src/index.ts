import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import connectDB from "./config/db";
import AuthenticationRouter from "./route/auth.route";

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

connectDB();


app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Backend!");
});

app.use("/api/auth", AuthenticationRouter);
// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
