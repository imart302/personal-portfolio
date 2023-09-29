import React from 'react';

export interface IHeadingProps {
  text: string;
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
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
  justify?: 'text-center' | 'text-left' | 'text-right'
}

export const Heading: React.FC<IHeadingProps> = ({
  text,
  size,
  color = 'text-slate-100',
  font = 'font-sans',
  weight = 'font-semibold',
  justify = 'text-center'
}) => {
  return size === 'h1' ? (
    <h1 className={`text-2xl h-fit w-fit ${justify} ${color} ${font} ${weight}`}>{text}</h1>
  ) : size === 'h2' ? (
    <h2 className={`text-xl h-fit w-fit ${justify} ${color} ${font} ${weight}`}>{text}</h2>
  ) : size === 'h3' ? (
    <h3 className={`text-lg h-fit w-fit ${justify} ${color} ${font} ${weight}`}>{text}</h3>
  ) : size === 'h4' ? (
    <h4 className={`text-base h-fit w-fit ${justify} ${color} ${font} ${weight}`}>{text}</h4>
  ) : (
    <h5 className={`text-sm h-fit w-fit ${justify} ${color} ${font} ${weight}`}>{text}</h5>
  );
};
