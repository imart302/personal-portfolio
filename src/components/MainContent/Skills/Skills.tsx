import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TextStrings } from '../../../common/i18next';
import { Typography } from '../../Typography';
import { SectionLayout } from '../SectionLayout';
import { AutoScrollingIcons } from './AutoScrollingIcons';
import { SkillSet } from './SkillSet';
import { SKILLS_DATA } from '../../../data/skills';

export const Skills: React.FC = () => {
  const [t] = useTranslation();

  return (
    <SectionLayout>
      <div className={clsx('w-[100%]')}>
        <Typography
          text={t(`${TextStrings.skills}`)}
          variant="h1"
          className={{
            size: 'text-2xl md:text-4xl',
            weight: 'font-bold',
            color: 'text-slate-200',
          }}
        />

        <AutoScrollingIcons />

        <div id="skillList">
          <div className={clsx('my-5')}>
            <Typography
              text={t(`${TextStrings.hard_skills}`)}
              variant="h1"
              className={{
                size: 'text-lg md:text-2xl',
                weight: 'font-bold',
                color: 'text-slate-200',
              }}
            />
          </div>

          <div
            className={clsx(
              'grid',
              'grid-cols-1',
              'gap-4',
              'sm:grid-cols-2',
              'md:grid-cols-3',
              'mb-3'
            )}
          >
            <SkillSet
              title={t(`${TextStrings.programming_langs}`)}
              skills={SKILLS_DATA.hard.programmingLangs}
            />
            <SkillSet
              title={t(`${TextStrings.frameworks}`)}
              skills={SKILLS_DATA.hard.frameworks}
            />
            <SkillSet
              title={t(`${TextStrings.tools}`)}
              skills={SKILLS_DATA.hard.tools}
            />
          </div>

          <div className={clsx('my-5')}>
            <Typography
              text={t(`${TextStrings.soft_skills}`)}
              variant="h1"
              className={{
                size: 'text-lg md:text-2xl',
                weight: 'font-bold',
                color: 'text-slate-200',
              }}
            />
          </div>

          <div
            className={clsx(
              'flex',
              'flex-wrap',
              'justify-center',
              'border-solid',
              'border-2',
              'border-border_color1',
              'rounded-md',
              'p-3',
              'gap-6',
              'my-8'
            )}
          >
            {SKILLS_DATA.soft.en.map((_, index) => (
              <Typography
                key={index}
                text={t(`soft_skill_${index}`)}
                className={{ color: 'text-slate-100', font: 'font-bold' }}
                variant="span"
              />
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
