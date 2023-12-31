import React from 'react';
import cls from './ThemeSwitcher.module.scss'
import classNames from 'classnames';
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import Button from 'shared/ui/Button/Button';
import { ButtonTheme } from 'shared/ui/Button/Button';


interface ThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme()

  return (
    <Button theme={ButtonTheme.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};

export default ThemeSwitcher;