import Link from "next/link";
import { Quiz } from "./models/quiz";
import "./MainPageStyles.scss";
import "./globals.scss";
import { List, ListItem } from "@mui/material";

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
        <div className="main-page-block">
            <div className="header-text">Available Quizzes</div>
            <List className="quizzes-block">
                {quizzes.map((quiz: Quiz) => (
                    <ListItem key={`item-${quiz.id}`}>
                        <Link href={`/quiz/${quiz.id}`} className="quiz-link">
                            {quiz.name}
                        </Link>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default HomePage;
