import React from 'react';
import './Input.css';
interface InputProps extends React.HTMLProps<HTMLInputElement> {
  isError: boolean;
  helperText: string;
}
export const Input: React.FC<InputProps> = ({ isError, helperText, ...props }) => {
  return (
    <div>
      <input className={isError ? 'main-input main-input-error' : 'main-input'} {...props} />
      {isError && helperText && <span className="main-input-helper-text">{helperText}</span>}
    </div>
  );
};
