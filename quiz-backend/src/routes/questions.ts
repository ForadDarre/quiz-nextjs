import express from "express";
import { getQuestions } from "../controllers/questionsController";

const router = express.Router();

router.get("/", getQuestions);

export const questionsRouter = router;
