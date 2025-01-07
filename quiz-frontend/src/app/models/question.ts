export interface Question {
    id: number;
    text: string;
    options: string[];
    answer: string; // Hidden from the user
}
