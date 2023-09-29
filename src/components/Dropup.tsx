import { clsx } from 'clsx';
import React, { useState } from 'react';
import { Typography } from './Typography';

export interface IDropupOptionProps {
  children: React.ReactNode;
  value: string;
  className?: {
    justify?: string;
    bgColor?: string;
    hoverBgColor?: string;
    bgGradient?: string;
    colorFrom?: string;
    colorTo?: string;
    hoverColorFrom?: string;
    hoverColorTo?: string;
  };
  onSelect?: (value: string) => void;
}

export const DropupOption: React.FC<IDropupOptionProps> = ({
  children,
  value,
  className = {
    justify: 'text-left',
    bgColor: 'text-slate-200',
  },
  onSelect,
}) => {
  return (
    <div
      onMouseDown={() => onSelect?.(value)}
      className={clsx(
        'block',
        className.bgColor,
        className.bgGradient,
        className.colorFrom,
        className.colorTo,
        className.hoverColorFrom,
        className.hoverColorTo
      )}
    >
      <div className={clsx('pl-1', className.justify)}>{children}</div>
    </div>
  );
};

export interface IDropupProps {
  className?: {
    textSize?: string;
    bgColor?: string;
    hoverBgColor?: string;
    textColor?: string;
    hoverTextColor?: string;
    width?: string;
    height?: string;
    bgGradient?: string;
    colorFrom?: string;
    colorTo?: string;
    hoverColorFrom?: string;
    hoverColorTo?: string;
  };
  id: string;
  children: React.ReactNode | React.ReactNode[];
  textLabel?: string;
  iconLabel?: React.ReactElement;
}

export const Dropup: React.FC<IDropupProps> = ({
  textLabel,
  iconLabel,
  id,
  className = {
    textSize: 'text-base',
    bgColor: 'bg-slate-200',
  },
  children,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div
        id={id}
        className="inline-block relative w-fit"
        onBlur={() => {
          setOpen(false);
        }}
      >
        <button
          className={clsx(
            'flex',
            'items-center',
            'justify-center',
            'gap-2',
            'rounded-md',
            'p-2',
            className.bgColor,
            className.hoverBgColor,
            className.bgGradient,
            className.colorFrom,
            className.colorTo,
            className.hoverColorFrom,
            className.hoverColorTo,
            className.width,
            className.height
          )}
          onClick={() => setOpen(!open)}
        >
          {textLabel && (
            <Typography
              text={textLabel}
              className={{
                size: className.textSize,
                weight: 'font-medium',
                color: className.textColor,
              }}
            />
          )}
          {iconLabel}
          <span
            className={clsx(
              className.textSize,
              'font-medium',
              className.textColor
            )}
          >
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </span>
        </button>
        <div
          className={clsx(
            'z-10',
            'absolute',
            open ? 'block' : 'hidden',
            className.bgColor,
            'bottom-[100%]',
            'p-1',
            'w-[100%]',
            'rounded-md',
            'mt-0.5'
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
};
