import clsx from 'clsx';
import React from 'react';

export const CandyBackground: React.FC = () => {
  return (
    <div className={clsx('absolute', 'z-10')}>
      <div
        className={clsx(
          'absolute',
          'w-[350px]',
          'h-[600px]',
          'md:w-[1500px]',
          'md:h-[600px]',
          'bg-gradient-to-tr',
          'from-red-700',
          'to-orange-500',
          'shadow-2xl',
          'translate-y-[300px]',
          'translate-x-[150px]',
          'md:translate-y-[300px]',
          'md:translate-x-[400px]',
          'rounded-full'
        )}
      ></div>
      <div
        className={clsx(
          'absolute',
          'w-[350px]',
          'h-[600px]',
          'md:w-[700px]',
          'md:h-[500px]',
          'bg-gradient-to-tr',
          'from-purple-900',
          'to-pink-800',
          'shadow-2xl',
          'rotate-45',
          'translate-y-[1200px]',
          'translate-x-[-200px]',
          'md:translate-y-[900px]',
          'md:translate-x-[-200px]',
          'rounded-full'
        )}
      ></div>
    </div>
  );
};
