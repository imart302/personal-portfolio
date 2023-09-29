import { useState } from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Sidebar } from '../components/Sidebar';
import { MainContent } from '../components/MainContent/MainContent';
import clsx from 'clsx';

export const Mobile = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div
      className={clsx(
        'relative',
        'lg:hidden',
        'flex',
        'flex-col',
        'bg-slate-800'
      )}
      id="Mobile"
    >
      <Navbar onClickMenu={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar
        id="DrawerSidebar"
        open={sidebarOpen}
        drawer={true}
        onBlur={() => setSidebarOpen(false)}
        onSelectNav={() => setSidebarOpen(false)}
      />
      <MainContent />
    </div>
  );
};
