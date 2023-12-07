import React from 'react';
import cls from './LangSwitcher.module.scss'
import classNames from 'classnames';
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import Button from 'shared/ui/Button/Button';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';


interface LangSwitcherProps {
  className?: string
}

const LangSwitcher = ({className}: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button theme={ButtonTheme.CLEAR} 
            className={classNames(cls.LangSwitcher, {}, [className])} 
            onClick={toggleLang}>
      {t('Язык')}
    </Button>
  );
};

export default LangSwitcher;