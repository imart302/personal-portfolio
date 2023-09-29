import { clsx } from 'clsx';
import React, { useContext } from 'react';
import { ScrollNavContext } from '../../context/NavContext';
import { Typography } from '../Typography';

export interface INavItemProps {
  text: string;
  icon: JSX.Element;
  url?: string;
  onClick?: () => void;
}

export const NavItem: React.FC<INavItemProps> = ({ text, icon, url, onClick}) => {

  const scrollNavContext = useContext(ScrollNavContext);
  
  const handleOnClick = () => {
    console.log("🚀 ~ file: NavItem.tsx:18 ~ handleOnClick ~:", url);
    
    scrollNavContext.navigate(url || '');
    onClick?.();
  }

  return (
    // <div className="flex items-center py-2 pl-6 gap-3 w-full hover:bg-gradient-to-r hover:from-m_gold hover:to-m_orange hover:cursor-pointer hover:transition-colors duration-1000">
  
      <div
        className={clsx(
          'relative',
          'transition',
          'ease-in-out',
          'flex',
          'items-center',
          'align-middle',
          'py-2',
          'pl-6',
          'gap-4',
          'w-full',
          'bg-gradient-to-r',
          'hover:bg-gradient-to-r',
          'hover:from-g_start1',
          'hover:to-g_end1',
          'lg:hover:cursor-pointer',
          'duration-100',
          'lg:hover:translate-x-3',
          'lg:hover:scale-[1.05]',
          'hover:shadow-lg',
          'z-50',
        )}
        onClick={handleOnClick}
      >
        <span className="text-slate-100 text-center text-lg w-5 h-5 md:w-8 md:h-8">{icon}</span>
        <Typography className={{size: 'text-md md:text-lg', color: 'text-slate-100'}} text={text} />
      </div>
    
  );
};
