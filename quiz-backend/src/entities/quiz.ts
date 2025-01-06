import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Question } from "./question";

@Entity("quizzes") // Define the table name as "quizzes"
export class Quiz {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column("text")
    name: string = "";

    // One Quiz can have many Questions
    @OneToMany(() => Question, (question) => question.quiz)
    questions!: Question[];
}
