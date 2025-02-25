import { FormEvent, ReactNode } from 'react';
import './Button.scss'
import clsx from 'clsx';
import { bem } from "../../utils";

interface ButtonProps {
  onClick?: (e?: FormEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  name?: string;
}
const b = bem("button");
export const Button = ({children, onClick, className, name}: ButtonProps) => {
  return (
    <button name={name} className={clsx(b(), className)} onClick={onClick}>
      {children}
    </button>
  )
}
export default Button