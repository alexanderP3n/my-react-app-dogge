import React from 'react';
import './Button.css';
interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: string;
}
export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className="login_page_button">{children}</button>;
};
