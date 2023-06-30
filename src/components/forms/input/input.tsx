import React from "react";

import { Field, ErrorMessage } from "formik";

import styles from "./input.module.css";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  errors?: string;
  touched?: boolean;
}

// estrutura padrão de interface ^^

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  errors,
  touched,
}) => {
  return (
    <fieldset className={styles.formGroup}>
      <label htmlFor={name} className={styles.label}>
        {label}:
      </label>
      <Field
        type={type}
        id={name}
        name={name}
        className={`${styles.input} ${touched && errors && styles.error}`}
      ></Field>
      <ErrorMessage name={name} component="div" className={styles.errorMsg} />
    </fieldset>
  );
};

export default Input;
