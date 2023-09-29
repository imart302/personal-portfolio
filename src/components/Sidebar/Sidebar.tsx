import React, { useEffect, useRef } from 'react';
import { NavItem } from './NavItem';
import { Heading } from '../Heading';
import profileImg from '../../assets/profile.jpg';
import { useTranslation } from 'react-i18next';
import { TextStrings } from '../../common/i18next';
import { LangSelect } from '../LangSelect';
import clsx from 'clsx';
import { SocialButton } from './SocialButton';

export interface ISidebarProps {
  id?: string;
  drawer?: boolean;
  open?: boolean;
  onBlur?: () => void;
  onSelectNav?: () => void;
}

export const Sidebar: React.FC<ISidebarProps> = ({
  open = true,
  drawer = false,
  id,
  onBlur,
  onSelectNav
}) => {
  const [t] = useTranslation();
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function clickListener(ev: MouseEvent) {
      if (sidebarRef && sidebarRef.current && ev.target) {
        if (
          sidebarRef.current.id === id &&
          !sidebarRef.current?.contains(ev.target as Node) &&
          sidebarRef.current.classList.contains('translate-x-0') &&
          (ev.target as HTMLElement).id !== 'MenuBars'
        ) {
          onBlur?.();
        }
      }
    }

    document.addEventListener('click', clickListener);

    return () => {
      document.removeEventListener('click', clickListener);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={sidebarRef}
      id={id}
      //onBlur={() => onBlur?.()}
      className={clsx(
        'bg-primary',
        'h-[100vh]',
        'w-[280px]',
        'flex',
        'flex-col',
        'gap-[9px]',
        'pt-4',
        'items-center',
        'justify-start',
        'fixed',
        open ? 'translate-x-0' : '-translate-x-72',
        drawer ? 'shadow-xl' : '',
        drawer ? 'z-50' : 'z-50',
        drawer ? 'transition-transform' : '',
        drawer ? 'ease-in-out' : ''
      )}
    >
      <Heading text="Ivan Martinez" size="h1" weight="font-bold" />
      <div className="p-0 h-fit w-fit flex justify-center">
        <img
          className="rounded-full w-32 h-32 object-cover"
          src={profileImg}
        ></img>
      </div>
      <div className="flex justify-center w-full h-fit p-2">
        <Heading text={t(`${TextStrings.image_caption}`)} size="h5" />
      </div>
      <div className="flex justify-center items-center w-full h-fit p-1 gap-5">

        <SocialButton iconClass='fa fa-linkedin'  url='https://www.linkedin.com/in/iv%C3%A1n-mart%C3%ADnez-55a678151/'/>
        <SocialButton iconClass='fa fa-github' url='https://github.com/imart302'/>
        
      </div>
      <hr className="w-full h-fit" />
      <nav className="flex flex-col items-start py-4 gap-1 w-full h-full">
        <NavItem
          onClick={() => onSelectNav?.()}
          url='aboutme'
          icon={<i className="fa fa-user-circle" aria-hidden="true"></i>}
          text={t(`${TextStrings.about_me}`)}
        />
        <NavItem
          onClick={() => onSelectNav?.()}
          url='experience'
          icon={<i className="fa fa-building-o" aria-hidden="true"></i>}
          text={t(`${TextStrings.experience}`)}
        />
        <NavItem
          onClick={() => onSelectNav?.()}
          url='skills'
          icon={<i className="fa fa-bar-chart" aria-hidden="true"></i>}
          text={t(`${TextStrings.skills}`)}
        />
        <NavItem
          onClick={() => onSelectNav?.()}
          url='portfolio'
          icon={<i className="fa fa-briefcase" aria-hidden="true"></i>}
          text={t(`${TextStrings.portfolio}`)}
        />
      </nav>
      <hr className="w-full h-fit" />
      <footer className="flex flex-col gap-3 pb-4 w-full h-fit  align-bottom pl-3">
        <div className="flex flex-col gap-1 w-full">
          <Heading size="h5" text="Email" />
          <Heading
            size="h5"
            text="imartinezchin@gmail.com"
            weight="font-normal"
          />
        </div>
        <div className="flex justify-end pr-3">
          <LangSelect />
        </div>
      </footer>
    </div>
  );
};
