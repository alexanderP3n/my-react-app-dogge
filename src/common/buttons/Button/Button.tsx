import React from 'react';
import styles from './Button.module.css';
interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: string;
}
export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className={styles.login_page_button}>{children}</button>;
};
