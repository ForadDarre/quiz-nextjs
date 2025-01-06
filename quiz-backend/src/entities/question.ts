import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Question {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column("simple-array") // TypeORM supports arrays with "simple-array"
    options: string[];

    @Column()
    answer: string; // You can omit this field in responses to hide it from users
}
