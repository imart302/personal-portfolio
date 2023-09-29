import clsx from 'clsx';
import React from 'react';

export interface IMenuBarsProps {
  onClick?: () => void;
}

export const MenuBars: React.FC<IMenuBarsProps> = ({ onClick }) => {
  return (
    <div
      id='MenuBars'
      onClick={() => onClick?.()}
      className={clsx(
        'text-slate-200',
        'text-xl',
        'text-center',
        'py-1',
        'px-2',
        'rounded-md',
        'hover:bg-gradient-to-r',
        'hover:from-m_gold',
        'hover:to-m_orange',
        'hover:cursor-pointer'
      )}
    >
      <i id='MenuBars' className="fa fa-bars" aria-hidden="true"></i>
    </div>
  );
};
