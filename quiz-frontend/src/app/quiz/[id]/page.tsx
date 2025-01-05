import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // For navigating between pages
import axios from "axios";

interface Question {
    id: number;
    text: string;
    options: string[];
    answer: string; // Hidden from the user
}

const QuizDetailPage = ({ params }: { params: { id: string } }) => {
    const [question, setQuestion] = useState<Question | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchQuestion = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/api/questions/${params.id}`
                );
                setQuestion(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching question:", error);
                router.push("/quiz"); // Redirect if there's an error
            }
        };

        fetchQuestion();
    }, [params.id, router]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!question) {
        return <div>Question not found</div>;
    }

    return (
        <div>
            <h1>{question.text}</h1>
            {question.options.map((option, index) => (
                <button key={index}>{option}</button>
            ))}
        </div>
    );
};

export default QuizDetailPage;
