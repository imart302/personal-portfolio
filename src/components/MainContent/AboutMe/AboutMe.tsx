import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import profileImg from '../../../assets/profile.jpg';
import { Heading } from '../../Heading';
import { TextStrings } from '../../../common/i18next';


export const AboutMe = () => {
  const [t] = useTranslation();

  return (
    <div
      className={clsx(
        'flex',
        'gap-4',
        'align-middle',
        'items-center',
        'justify-between',
        'w-100',
        'bg-gray-700',
        'h-fit',
        'p-6',
        'mb-8',
        'rounded-md',
        'flex-col',
        'md:flex-row',
        'bg-cover',
        'bg-blend-soft-light',
        'bg-hero',
        'min-h-[600px]',
      )}
    >
      <div className={clsx('flex justify-center w-3/4 h-fit md:w-2/4')}>
        <img
          className="rounded-md object-cover"
          src={profileImg}
        ></img>
      </div>
      <div
        className={clsx(
          'flex',
          'flex-col',
          'justify-around',
          'content-around',
          'items-center',
          'w-full',
          'h-full',
          'gap-4'
        )}
      >
        <Heading text={t(`${TextStrings.brief}`)} size="h1"></Heading>
        <Heading text={t(`${TextStrings.presentation}`)} size="h4"></Heading>
      </div>
    </div>
  );
};
