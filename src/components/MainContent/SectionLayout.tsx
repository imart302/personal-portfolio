import clsx from 'clsx';
import React from 'react';

export const SectionLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={clsx('mx-4', 'mt-6', 'md:mt-32')}>{children}</div>;
};
