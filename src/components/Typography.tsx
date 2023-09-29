import React from 'react';

export interface ITypographyProps {
  className: {
    size?:
      | 'text-2xl'
      | 'text-xl'
      | 'text-lg'
      | 'text-base'
      | 'text-sm'
      | string;
    color?: string;
    font?: string;
    weight?:
      | 'font-thin'
      | 'font-extralight'
      | 'font-light'
      | 'font-normal'
      | 'font-medium'
      | 'font-semibold'
      | 'font-bold';
    align?: 'text-center' | 'text-left' | 'text-right';
  };
  text: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'p';
}

export const Typography: React.FC<ITypographyProps> = ({
  text,
  variant = 'span',
  className = {
    size: 'text-base',
    align: 'text-center',
    color: 'text-slate-50',
    font: 'font-sans',
    weight: 'font-normal',
  },
}) => {
  return variant === 'h1' ? (
    <h1
      className={`h-fit text w-fit ${className.size} ${className.align} ${className.color} ${className.font} ${className.weight}`}
    >
      {text}
    </h1>
  ) : variant === 'h2' ? (
    <h2
      className={`h-fit w-fit ${className.size} ${className.align} ${className.color} ${className.font} ${className.weight}`}
    >
      {text}
    </h2>
  ) : variant === 'h3' ? (
    <h3
      className={`h-fit w-fit ${className.size} ${className.align} ${className.color} ${className.font} ${className.weight}`}
    >
      {text}
    </h3>
  ) : variant === 'h4' ? (
    <h4
      className={`h-fit w-fit ${className.size} ${className.align} ${className.color} ${className.font} ${className.weight}`}
    >
      {text}
    </h4>
  ) : variant === 'h5' ? (
    <h5
      className={`h-fit w-fit ${className.size} ${className.align} ${className.color} ${className.font} ${className.weight}`}
    >
      {text}
    </h5>
  ) : variant === 'span' ? (
    <span
      className={`h-fit w-fit ${className.size} ${className.align} ${className.color} ${className.font} ${className.weight}`}
    >
      {text}
    </span>
  ) : (
    <p
      className={`h-fit w-fit ${className.size} ${className.align} ${className.color} ${className.font} ${className.weight}`}
    >
      {text}
    </p>
  );
};
