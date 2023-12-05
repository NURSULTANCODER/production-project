import React from 'react';
import cls from './Navbar.module.scss'
import classNames from 'classnames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string
}

const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.Links)}>
        <AppLink to={'/'} theme={AppLinkTheme.PRIMERY} className={cls.MainLink}>Main</AppLink> 
        <AppLink to={'/about'} theme={AppLinkTheme.RED}>About</AppLink>
      </div>
    </div>
  );
};



export default Navbar