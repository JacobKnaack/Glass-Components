import { SyntheticEvent } from 'react';
import './FormButton.css';

export interface ButtonProps {
  title: string;
  onClick?: Function;
}

export const FormButton: React.FC<ButtonProps> = ({ title, onClick }: ButtonProps) => {

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    onClick ? onClick() : console.log('no click handler');
  }

  return <button onClick={handleClick} className="glass-button">{title}</button>
}