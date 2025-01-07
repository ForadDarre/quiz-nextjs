import React, { FC } from "react";
import axios from "axios";

// This will generate static params at build time
export async function generateStaticParams() {
    try {
        const res = await axios.get("http://localhost:5000/api/quizzes");
        const quizzes = res.data;

        // Return quizzes to generate paths
        return quizzes.map((quiz: { id: number }) => ({
            quizId: quiz.id.toString(),
        }));
    } catch (error) {
        console.error("Error fetching quizzes:", error);
        return [];
    }
}

export default async function Home({ quizzes }: any) {
    return (
        <div className="max-height-width center-horizontally-and-vertically">
            <h1>Quizzes</h1>
            <ul>
                {quizzes.map((quiz: any) => (
                    <li key={quiz.id}>{quiz.name}</li>
                ))}
            </ul>
        </div>
    );
}
