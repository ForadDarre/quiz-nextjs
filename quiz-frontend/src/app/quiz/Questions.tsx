"use client";
import React, { useState } from "react";
import QuestionComponent from "./QuestionComponent";
import { Button, List } from "@mui/material";
import "./styling/QuizStyles.scss";
import "../globals.scss";
import { Question } from "../models/question";

interface DataProps {
    questions: Question[];
}

function Questions(props: DataProps) {
    const { questions } = props;

    const [showValidate, setShowValidate] = useState<boolean>(false);

    const onSubmit = () => {
        setShowValidate(true);
    };

    const onQuestioChange = () => {
        setShowValidate(false);
    };

    return (
        <div className="questions-block">
            <List className="quizzes-block">
                {questions.map((q) => (
                    <QuestionComponent
                        question={q}
                        onOptionChange={onQuestioChange}
                        key={q.id}
                        showValidate={showValidate}
                    />
                ))}
            </List>
            <Button
                onClick={onSubmit}
                className="submit-button"
                variant="contained"
            >
                Submit
            </Button>
        </div>
    );
}

export default Questions;
