import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TextStrings } from '../../../common/i18next';
import { experience } from '../../../data/experience';
import { Typography } from '../../Typography';
import { ExpCard } from './ExpCard';
import { SectionLayout } from '../SectionLayout';

export const Experience: React.FC = () => {
  const [t, i18next] = useTranslation();

  return (
    <SectionLayout>
      <div className={clsx('mb-3', 'md:mb-6', 'ml-2')}>
        <Typography
          text={t(`${TextStrings.experience}`)}
          variant="h1"
          className={{
            size: 'text-2xl md:text-4xl',
            weight: 'font-bold',
            color: 'text-slate-200',
          }}
        />
      </div>

      <div
        className={clsx(
          'grid',
          'gap-y-3',
          'gap-x-2',
          'grid-cols-1',
          'md:grid-cols-2',
          'xl:grid-cols-3'
        )}
      >
        {[...experience].reverse().map((exp, index) => (
          <ExpCard
            duties={i18next.language === 'es' ? exp.duties_es : exp.duties}
            fromTo={exp.fromTo}
            place={exp.place}
            position={
              i18next.language === 'es' ? exp.position_es : exp.position
            }
            key={index}
          />
        ))}
      </div>
    </SectionLayout>
  );
};
