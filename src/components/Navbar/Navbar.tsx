import clsx from 'clsx';
import React from 'react';
import { MenuBars } from '../MenuBars';
import { Heading } from '../Heading';
import { NavBarHeight } from '../../common/constants';

export interface INavBarProps {
  onClickMenu?: () => void;
}

export const Navbar: React.FC<INavBarProps> = ({ onClickMenu }) => {
  const handleMenuClick = () => {
    onClickMenu?.();
  };

  return (
    <div
      className={clsx(
        'fixed',
        'flex',
        'justify-between',
        'items-center',
        `h-[${NavBarHeight}px]`,
        'w-[100vw]',
        'static',
        'bg-primary',
        'p-2',
        'z-40',
      )}
    >
      <MenuBars onClick={handleMenuClick} />
      <a href="/#aboutme">
        <div
          className={clsx(
            'py-1',
            'px-2',
            'bg-gradient-to-r',
            'from-m_gold',
            'to-m_orange',
            'rounded-md'
          )}
        >
          <Heading size="h4" text="Ivan Martínez"></Heading>
        </div>
      </a>
    </div>
  );
};
