import "express-async-errors";
import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import userRouter from "./routes/userRouter";

const app = express();

app.use(cors());

app.use(morgan("tiny"));

app.use(helmet());

app.use(express.json());

app.use("/user/", userRouter);

app.use((req: Request, res: Response) => {
  res.send("Hello, Node!");
});

app.use((error: Error, req: Request, res: Response) => {
  res.sendStatus(500).send(error.message);
});

export default app;
