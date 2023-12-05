import React, { Children, FC } from 'react';
import cls from './AppLink.module.scss'
import classNames from 'classnames';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
  PRIMERY = 'primery',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const { 
    className, 
    children, 
    theme = AppLinkTheme.PRIMERY, 
    to, 
    ...otherProps
  } = props

  return (
    <Link to={to} 
        className={classNames(cls.AppLink, {}, [className, [cls[theme]]])} 
        {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;