import React, { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss'
import classNames from 'classnames';

export enum ButtonTheme {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

const Button = (props: ButtonProps) => {
  const {
    className,
    theme = ButtonTheme.CLEAR,
    children,
    ...otherProps
  } = props

  return (
    <button 
      className={classNames(cls.Button, {}, [className, [cls[theme]]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;