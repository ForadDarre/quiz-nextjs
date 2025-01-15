import { FormControlLabel, Radio } from "@mui/material";
import React from "react";

interface DataProps {
    option: string;
    isInvalid: boolean;
}

function QuestionOption(props: DataProps) {
    const { option, isInvalid } = props;

    return (
        <FormControlLabel
            value={option}
            control={<Radio color={isInvalid ? "error" : "success"} />}
            label={option}
        />
    );
}

export default QuestionOption;
