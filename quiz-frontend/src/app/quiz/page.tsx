import { FC } from "react";
import axios from "axios";
import { Question } from "../models/question";

const fetchQuestions = async (): Promise<Question[]> => {
    try {
        const response = await axios.get("http://localhost:5000/api/questions");
        return response.data;
    } catch (error) {
        console.error("Error fetching questions:", error);
        return [];
    }
};

const QuizPage: FC = async () => {
    const questions = await fetchQuestions();

    return (
        <div>
            <h1>Quiz</h1>
            <ul>
                {questions.map((q) => (
                    <li key={q.id}>{q.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default QuizPage;
