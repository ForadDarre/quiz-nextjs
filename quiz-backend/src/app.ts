import express from "express";
import cors from "cors";
import { questionsRouter } from "./routes/questions";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/questions", questionsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);
