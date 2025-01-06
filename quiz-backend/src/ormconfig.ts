import { DataSource } from "typeorm";
import { Question } from "./entities/question";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true, // Auto-generates tables (use only in dev)
    logging: true,
    entities: [Question], // Specify your entities here
});
