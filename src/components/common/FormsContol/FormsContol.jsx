import React from "react";
import classes from "./FormsContol.module.css";

const FormContol = ({ input, meta: { touched, error }, children }) => {
    const hasError = touched && error;
    return (
        <div
            className={
                classes.formControl + " " + (hasError ? classes.error : "")
            }
        >
            <div>{children}</div>
            {hasError && <span>{error}</span>}
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

export const createField = (
    placeholder,
    name,
    validators,
    component,
    props = {},
    text = ""
) => (
    <div>
        <Field
            placeholder={placeholder}
            name={name}
            component={component}
            validate={validators}
            {...props}
        />{" "}
        {text}
    </div>
);
