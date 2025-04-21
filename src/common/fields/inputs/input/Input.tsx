import React from 'react';
import iconShowPassword from '../../../../assets/showPassword.svg';
import iconHidePassword from '../../../../assets/hidePassword.svg';
import styles from './Input.module.css';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  helperText?: string;
}
export const Input: React.FC<InputProps> = ({ isError, helperText, type, ...props }) => {
  const [showPassword, setShowPassword] = React.useState(true);
  const showPasswordToggle = type === 'password' && props.value;
  return (
    <div className={styles.input_container}>
      <input type={showPasswordToggle && showPassword ? type : 'text'} className={`${styles.main_input}${isError ? ` ${styles.main_input_error}` : ``}`} {...props} />
      {isError && helperText && <span className={styles.main_input_helper_text}>{helperText}</span>}
      {showPasswordToggle && (
        <div className={styles.icon_container} onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <img className={styles.icon} src={iconHidePassword} alt="Icon" /> : <img className={styles.icon} src={iconShowPassword} alt="Icon" />}
        </div>
      )}
    </div>
  );
};
