"use client";
import { useEffect, useState } from "react";
import axios from "axios";

interface Question {
    id: number;
    text: string;
    options: string[];
    answer: string; // Hidden from the user
}

const QuizPage = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/questions"
                );
                setQuestions(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };

        fetchQuestions();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Quiz</h1>
            {questions.map((question) => (
                <div key={question.id}>
                    <h2>{question.text}</h2>
                    {question.options.map((option, index) => (
                        <button key={index}>{option}</button>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default QuizPage;
