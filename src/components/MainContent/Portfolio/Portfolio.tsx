import React from 'react';
import { SectionLayout } from '../SectionLayout';
import clsx from 'clsx';
import { Typography } from '../../Typography';
import { TextStrings } from '../../../common/i18next';
import { useTranslation } from 'react-i18next';
import { Button } from '../../Button';
import calendarImg from '../../../assets/calendar.png';
import { PortfolioItem } from './PortfolioItem';
import chatImg from '../../../assets/chat.png';

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

      <PortfolioItem
        demoImgUrl={calendarImg}
        title={t(`${TextStrings.calendar_title}`)}
        description={t(`${TextStrings.calendar_desc}`)}
      />

      <PortfolioItem
        demoImgUrl={chatImg}
        title={t(`${TextStrings.calendar_title}`)}
        description={t(`${TextStrings.calendar_desc}`)}
      />

    </SectionLayout>
  );
};
