import type { ReactNode } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

interface LayoutProps {
  title: string;
  subtitle?: string;
  showSidebar?: boolean;
  showBack?: boolean;
  children: ReactNode;
}

export default function Layout({ title, subtitle, showSidebar = true, showBack = true, children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-100 text-police-dark">
      <TopBar title={title} subtitle={subtitle} showBack={showBack} />
      {showSidebar && <Sidebar />}
      <main
        className={`pt-24 transition-all duration-300 ${
          showSidebar ? 'lg:ml-72 lg:px-10 px-6' : 'px-6'
        } pb-12`}
      >
        {children}
      </main>
    </div>
  );
}
