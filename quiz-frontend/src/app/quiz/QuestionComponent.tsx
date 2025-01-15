"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Question } from "../models/question";
import { FormControl, ListItem, RadioGroup } from "@mui/material";
import "./styling/QuizStyles.scss";
import "../globals.scss";
import QuestionOption from "./QuestionOption";

interface DataProps {
    question: Question;
    onOptionChange: Function;
    showValidate: boolean;
}

function QuestionComponent(props: DataProps) {
    const { question, onOptionChange, showValidate } = props;

    const [option, setOption] = useState<string | null>(null);
    const [isValid, setIsValid] = useState<boolean>(false);

    const changeOption = (newValue: ChangeEvent<HTMLInputElement>) => {
        setOption(newValue.target.value);
        onOptionChange();
        if (newValue.target.value === question.answer) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    return (
        <ListItem key={`item-${question.id}`} className="question-block">
            <div className="question-text">{question.text}</div>
            <FormControl error={!isValid} color="error">
                <RadioGroup
                    className="question-options-block"
                    defaultValue="female"
                    name="radio-buttons-group"
                    value={option}
                    onChange={changeOption}
                >
                    {question.options.map((o) => (
                        <QuestionOption
                            option={o}
                            key={o}
                            isInvalid={showValidate && !isValid}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </ListItem>
    );
}

export default QuestionComponent;
