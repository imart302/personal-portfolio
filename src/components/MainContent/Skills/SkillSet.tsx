import clsx from 'clsx';
import React from 'react';
import { Typography } from '../../Typography';
import { SkillItem } from './SkillItem';

export interface ISkillSetProps {
  title: string;
  skills: string[];
}

export const SkillSet: React.FC<ISkillSetProps> = ({ title, skills }) => {

  return (
    <div
      className={clsx(
        'flex',
        'flex-col',
        'border-solid',
        'border-2',
        'border-border_color1',
        'rounded-md',
        'p-2'
      )}
    >
      <div className={clsx('mb-2')}>
        <Typography
          text={title}
          variant="h1"
          className={{
            size: 'text-md md:text-lg',
            weight: 'font-bold',
            color: 'text-slate-200',
          }}
        />
      </div>
      <ul className={clsx(
        'list-disc',
        'text-slate-100',
        'list-inside'
      )}>
        {skills.map( (skill, i) => <SkillItem key={`si-${i}`} text={skill} />)}
      </ul>
    </div>
  );
};
