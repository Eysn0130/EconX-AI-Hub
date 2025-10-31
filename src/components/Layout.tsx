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
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="aurora-bg"></div>
        <div className="absolute -left-32 top-32 h-72 w-72 rounded-full bg-blue-500/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/30 blur-[120px]" />
      </div>
      <div className="relative z-10">
        <TopBar title={title} subtitle={subtitle} showBack={showBack} />
        {showSidebar && <Sidebar />}
        <main
          className={`pt-32 pb-20 transition-all duration-500 ${
            showSidebar
              ? 'px-6 lg:pl-[20rem] lg:pr-12 xl:pr-20'
              : 'mx-auto w-full max-w-5xl px-6'
          }`}
        >
          <div className={`${showSidebar ? 'max-w-6xl' : 'max-w-full'} mx-auto w-full`}>{children}</div>
        </main>
      </div>
    </div>
  );
}
