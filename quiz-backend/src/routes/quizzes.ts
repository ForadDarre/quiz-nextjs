import express from "express";
import {
    getQuestionsByQuizId,
    getQuizzes,
} from "../controllers/quizzesController";

const router = express.Router();

router.get("/", getQuizzes);
router.get("/:quizId/questions", async function (req, res) {
    console.log("Here");
    await getQuestionsByQuizId(req, res);
});

export const quizzesRouter = router;
