import React from 'react'
import { Typography } from '../../Typography'

export interface ISkillItemProps {
  text: string;
}

export const SkillItem: React.FC<ISkillItemProps> = ({
  text
}) => {
  return (
    <li>
    <Typography
      text={text}
      variant="span"
      className={{
        size: 'text-xs md:text-sm',
        weight: 'font-bold',
        color: 'text-slate-200',
      }}
    />
  </li>
  )
}
