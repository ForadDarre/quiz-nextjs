import Link from "next/link";
import { Quiz } from "./models/quiz";

export async function generateStaticParams() {
    const res = await fetch("http://localhost:5000/api/quizzes", {
        cache: "force-cache", // Ensures it's fetched only at build time
    });

    if (!res.ok) {
        throw new Error("Failed to fetch quizzes");
    }

    const quizzes: Quiz[] = await res.json();
    return quizzes.map((quiz) => ({ id: quiz.id.toString() }));
}

const HomePage = async () => {
    const quizzes = await fetch("http://localhost:5000/api/quizzes", {
        cache: "force-cache",
    }).then((res) => res.json());

    return (
        <div>
            <h1>Available Quizzes</h1>
            <ul>
                {quizzes.map((quiz: Quiz) => (
                    <li key={quiz.id}>
                        <Link href={`/quiz/${quiz.id}`}>{quiz.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
