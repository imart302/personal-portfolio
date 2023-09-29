import clsx from 'clsx';
import React from 'react';

export interface ISocialButtonProps {
  url: string;
  iconClass: string;
}

export const SocialButton: React.FC<ISocialButtonProps> = ({
  url,
  iconClass,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        'text-slate-200',
        'text-lg',
        'text-center',
        'align-middle',
        'bg-gradient-to-r',
        'from-g_start1',
        'to-g_end1',
        'p-1',
        'w-9',
        'h-9',
        'rounded-md'
      )}
    >
      <i className={iconClass} aria-hidden="true"></i>
    </a>
  );
};
