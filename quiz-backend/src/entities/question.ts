import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Quiz } from "./quiz";

@Entity("questions") // Ensure it maps to the "questions" table
export class Question {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column("text")
    text: string = "";

    @Column("text", { array: true })
    options: string[] = [];

    @Column("text")
    answer: string = "";

    // Many Questions can belong to one Quiz
    @ManyToOne(() => Quiz, (quiz) => quiz.questions)
    quiz!: Quiz; // This will be the relation to the Quiz entity
}
