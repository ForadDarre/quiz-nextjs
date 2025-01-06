import "reflect-metadata";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { questionsRouter } from "./routes/questions";
import { quizzesRouter } from "./routes/quizzes";
import { AppDataSource } from "./ormconfig";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/questions", questionsRouter);
app.use("/api/quizzes", quizzesRouter);

// Initialize TypeORM and Start Server
AppDataSource.initialize()
    .then(() => {
        console.log("TypeORM Data Source has been initialized!");

        // Start the Express server
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Error during TypeORM Data Source initialization:", err);
    });
