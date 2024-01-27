import React from "react";
import classes from "./FormsContol.module.css";

const FormContol = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div
            className={
                classes.formControl + " " + (hasError ? classes.error : "")
            }
        >
            <div>{props.children}</div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormContol {...props}>
            <textarea {...input} {...restProps} />
        </FormContol>
    );
};

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormContol {...props}>
            <input {...input} {...restProps} />
        </FormContol>
    );
};
