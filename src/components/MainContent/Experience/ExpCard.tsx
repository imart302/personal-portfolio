import clsx from 'clsx';
import React from 'react';
import { Typography } from '../../Typography';

export interface IExpCardProps {
  place: string;
  position: string;
  fromTo: string;
  duties: string[];
  className?: {
    width?: string;
  };
}

export const ExpCard: React.FC<IExpCardProps> = ({
  place,
  position,
  fromTo,
  duties,
  className,
}) => {
  return (
    <div
      className={clsx(
        'flex',
        'flex-col',
        'bg-gradient-to-r',
        'from-g_start1',
        'to-g_end1',
        'p-5',
        'rounded-md',
        'shadow-lg',
        'gap-2',
        'md:gap-1',
        'm-2',
        className?.width
      )}
    >
      <div className={clsx('flex', 'flex-col', 'gap-0')}>
        <Typography
          text={place}
          variant="h3"
          className={{
            size: 'text-xl md:text-2xl',
            weight: 'font-bold',
            color: 'text-slate-200',
          }}
        />
        <Typography
          text={position}
          className={{
            align: 'text-center',
            color: 'text-slate-200',
            size: 'text-lg',
          }}
        />
      </div>

      <Typography
        text={fromTo}
        className={{ size: 'text-base', color: 'text-slate-300' }}
      />

      <hr />
      <ul className="list-disc list-inside text-slate-200 mt-1">
        {duties.map((duty, index) => (
          <li key={index}>
            <Typography
              text={duty}
              className={{ size: 'text-base', color: 'text-slate-200' }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
