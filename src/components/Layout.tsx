import { useState } from 'react';
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
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-slate-100/55 to-blue-50/70 text-slate-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="aurora-bg" />
        <div className="floating-orb left-[-8%] top-24 opacity-60" />
        <div className="floating-orb delay-2000 right-[-10%] top-1/3 scale-90 opacity-50" />
        <div className="floating-orb delay-4000 left-1/2 top-2/3 h-[520px] w-[520px] -translate-x-1/2 scale-75 opacity-40" />
        <div className="glass-noise" />
      </div>
      <div className="relative z-10">
        <TopBar
          title={title}
          subtitle={subtitle}
          showBack={showBack}
          onMenuClick={() => setMobileNavOpen(true)}
        />
        {showSidebar && (
          <Sidebar mobileOpen={mobileNavOpen} onMobileToggle={setMobileNavOpen} />
        )}
        {mobileNavOpen && (
          <button
            type="button"
            aria-label="关闭导航"
            onClick={() => setMobileNavOpen(false)}
            className="fixed inset-0 z-30 bg-slate-900/20 backdrop-blur-sm transition lg:hidden"
          />
        )}
        <main
          className={`relative z-20 mx-auto w-full max-w-6xl px-6 pb-24 pt-36 transition-all duration-500 sm:px-10 lg:px-14 ${
            showSidebar ? 'lg:pl-[6.25rem] xl:pl-[7.5rem]' : 'lg:px-20'
          }`}
          onClick={() => {
            if (mobileNavOpen) {
              setMobileNavOpen(false);
            }
          }}
        >
          <div className="mx-auto w-full max-w-5xl lg:max-w-6xl xl:max-w-6xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
