import { Request, Response } from "express";
import { AppDataSource } from "../ormconfig";
import { Question } from "../entities/question";

export const getQuestions = async (req: Request, res: Response) => {
    try {
        const questionRepository = AppDataSource.getRepository(Question);
        const questions: Question[] = await questionRepository.find(); // Fetch all questions
        console.log(questions);
        res.status(200).json(questions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
};
