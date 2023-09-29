import clsx from 'clsx';
import React from 'react';
import { Typography } from '../../Typography';
import { TextStrings } from '../../../common/i18next';
import { useTranslation } from 'react-i18next';
import { Button } from '../../Button';



export interface IPortfolioItemProps {
  title: string;
  description: string;
  demoImgUrl: string;
  sourceCodeUrl?: string;
  demoUrl?: string;
}

export const PortfolioItem: React.FC<IPortfolioItemProps> = ({
  title,
  description,
  demoImgUrl,
  sourceCodeUrl,
  demoUrl,
}) => {
  const [ t ] = useTranslation();
  
  return (
    <div>
      <div
        className={clsx(
          'grid',
          'grid-cols-1',
          'md:grid-cols-2',
          'gap-5',
          'justify-center',
          'align-middle'
        )}
      >
        <div className={clsx('flex', 'flex-col', 'gap-3', 'p-4')}>
          <div className={clsx('my-4')}>
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
          <div>
            <Typography
              text={description}
              variant="p"
              className={{
                size: 'text-sm',
                weight: 'font-bold',
                color: 'text-slate-200',
              }}
            />
          </div>
          <div className={clsx('flex', 'gap-4')}>
            {demoUrl && <Button
              title={t(`${TextStrings.try}`) + ' \u2192'}
              action={() => {
                ('');
              }}
            />}
            {sourceCodeUrl && <Button
              title={t(`${TextStrings.source_code}`) + ' \u2192'}
              action={() => {
                ('');
              }}
            />}
          </div>
        </div>
        <div className={clsx('p-5')}>
          <img src={demoImgUrl} alt="" />
        </div>
      </div>
      <hr />
    </div>
  );
};
