import { Request, Response } from "express";
import { AppDataSource } from "../ormconfig";
import { Quiz } from "../entities/quiz";
import { Question } from "../entities/question";

export const getQuizzes = async (req: Request, res: Response) => {
    try {
        const quizRepository = AppDataSource.getRepository(Quiz);
        const quizzes: Quiz[] = await quizRepository.find(); // Fetch all quizzes
        console.log(quizzes);
        res.status(200).json(quizzes);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
};

export const getQuestionsByQuizId = async (req: Request, res: Response) => {
    const quizId = parseInt(req.params.quizId);

    if (isNaN(quizId)) {
        return res.status(400).json({ error: "Invalid quizId" });
    }

    try {
        const questionRepository = AppDataSource.getRepository(Question);

        const questions = await questionRepository.find({
            where: { quiz: { id: quizId } },
        });

        if (questions.length === 0) {
            return res
                .status(404)
                .json({ error: "No questions found for this quiz" });
        }

        res.status(200).json(questions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
};
