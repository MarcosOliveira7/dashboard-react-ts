import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './select.module.css';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  name: string;
  options: Option[];
  errors?: string;
  touched?: boolean;

}

const Select: React.FC<SelectProps> = ({ label, name, options }) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <Field 
        as="select" 
        name={name} 
        id={name} 
        className={styles.input}>
        
        <option value="">Selecione uma opção</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component="div" className={styles.error} />
    </div>
  );
};

export default Select;
