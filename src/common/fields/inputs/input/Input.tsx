import React from 'react';
import styles from './Input.module.css';
interface InputProps extends React.HTMLProps<HTMLInputElement> {
  isError?: boolean;
  helperText?: string;
}
export const Input: React.FC<InputProps> = ({ isError, helperText, ...props }) => {
  return (
    <div>
      <input className={`${styles.main_input}${isError ? ` ${styles.main_input_error}` : ``}`} {...props} />
      {isError && helperText && <span className={styles.main_input_helper_text}>{helperText}</span>}
    </div>
  );
};
