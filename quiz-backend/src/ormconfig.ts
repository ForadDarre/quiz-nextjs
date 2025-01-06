import { DataSource } from "typeorm";
import { Question } from "./entities/question";
import { Quiz } from "./entities/quiz";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USER,
    password: String(process.env.DB_PASSWORD),
    database: process.env.DB_NAME,
    synchronize: true, // Auto-generates tables (use only in dev)
    logging: true,
    entities: [Quiz, Question],
});
