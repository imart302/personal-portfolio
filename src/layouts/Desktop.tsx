import clsx from 'clsx';
import { Sidebar } from '../components/Sidebar';
import { MainContent } from '../components/MainContent/MainContent';

export const Desktop = () => {
  return (
    <div
      className={clsx(
        'relative',
        'hidden',
        'lg:flex',
        'bg-slate-800',
        'w-[100vw]',
        'h-[100vh]'
      )}
      id="Desktop"
    >
      <Sidebar open={true} />
      <div className={clsx('pl-[280px]', 'w-full')}>
        <MainContent />
      </div>
    </div>
  );
};
