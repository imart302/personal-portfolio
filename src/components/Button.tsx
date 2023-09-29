import clsx from 'clsx';
import React from 'react';
import { Typography } from './Typography';

export interface IButtonProps {
  title: string;
  action: () => void;
  icon?: string;
}

export const Button: React.FC<IButtonProps> = ({ title, action }) => {
  return (
    <button
      onClick={() => action()}
      className={clsx(
        'rounded-md',
        'min-w-[100px]',
        'max-w-fit',
        'bg-gradient-to-r',
        'from-g_start1',
        'to-g_end1',
        'hover:from-orange-600',
        'hover:to-orange-500',
        'px-3',
        'py-1'
      )}
    >
      <Typography
        text={title}
        className={{
          color: 'text-slate-100',
          align: 'text-center',
          weight: 'font-normal',
        }}
        variant="span"
      />
    </button>
  );
};
