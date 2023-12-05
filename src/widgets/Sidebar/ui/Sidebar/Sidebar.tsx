import React, { useState } from 'react';
import cls from './Sidebar.module.scss'
import classNames from 'classnames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface SidebarProps {
  className?: string
}

const Sidebar = ({className}: SidebarProps) => {
  const [collapsed, setcollapsed] = useState(false)

  const onToggle = () => {
    setcollapsed(prev => !prev)
  }
  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;