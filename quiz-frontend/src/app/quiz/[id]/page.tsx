import { Question } from "@/app/models/question";
import { Quiz } from "@/app/models/quiz";
import axios from "axios";
import "../styling/QuizStyles.scss";
import "../../globals.scss";
import Questions from "../Questions";

export async function generateStaticParams() {
    const res = await fetch("http://localhost:5000/api/quizzes", {
        cache: "force-cache", // Ensure this is fetched at build time
    });

    if (!res.ok) {
        throw new Error("Failed to fetch quizzes");
    }

    const quizzes: Quiz[] = await res.json();

    return quizzes.map((quiz) => ({
        id: quiz.id.toString(), // Ensure `id` is a string
    }));
}

const fetchQuestions = async (quizId: string): Promise<Question[]> => {
    try {
        const response = await axios.get(
            `http://localhost:5000/api/quizzes/${quizId}/questions`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching questions:", error);
        return [];
    }
};

async function QuizPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const questions = await fetchQuestions(id);

    return <Questions questions={questions} />;
}

export default QuizPage;
