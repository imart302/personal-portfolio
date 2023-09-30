import React from 'react';
import { SectionLayout } from '../SectionLayout';
import clsx from 'clsx';
import { Typography } from '../../Typography';
import { TextStrings } from '../../../common/i18next';
import { useTranslation } from 'react-i18next';
import { PortfolioItem } from './PortfolioItem';
import { PORTFOLIO } from '../../../data/portfolio';

export const Portfolio: React.FC = () => {
  const [t] = useTranslation();

  return (
    <SectionLayout>
      <div className={clsx('mb-3', 'md:mb-6')}>
        <Typography
          text={t(`${TextStrings.portfolio}`)}
          variant="h1"
          className={{
            size: 'text-2xl md:text-4xl',
            weight: 'font-bold',
            color: 'text-slate-200',
          }}
        />
      </div>
      {
        PORTFOLIO.map( (pItem, i) => {
          return (
            <PortfolioItem
              demoImgUrl={pItem.imgDemoUrl || ''}
              title={t(`portfolio_${pItem.id}_title`)}
              description={t(`portfolio_${pItem.id}_desc`)}
              key={i}
              demoUrl={pItem.demoUrl}
              sourceCodeUrl={pItem.sourceCodeUrl}
            />
          );
        })
      }
    </SectionLayout>
  );
};
