import { ChevronLeft, Pin, PinOff, Shield } from 'lucide-react';
import { useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navigationSections, toolDefinitions } from '../data/tools';
import type { ToolCategory } from '../data/tools';

const categoryOrder: ToolCategory[] = navigationSections.map((section) => section.key);

interface SidebarProps {
  mobileOpen: boolean;
  onMobileToggle: (open: boolean) => void;
}

export default function Sidebar({ mobileOpen, onMobileToggle }: SidebarProps) {
  const location = useLocation();
  const [isPinned, setIsPinned] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const groupedTools = useMemo(() => {
    return categoryOrder.reduce<Record<ToolCategory, typeof toolDefinitions>>((acc, category) => {
      acc[category] = toolDefinitions.filter((tool) => tool.category === category);
      return acc;
    }, {} as Record<ToolCategory, typeof toolDefinitions>);
  }, []);

  const isExpanded = isPinned || isHovering || mobileOpen;
  const collapsed = !isExpanded;

  return (
    <aside
      onMouseEnter={() => !mobileOpen && setIsHovering(true)}
      onMouseLeave={() => !mobileOpen && setIsHovering(false)}
      className={`group fixed left-6 top-32 z-40 flex h-[calc(100vh-10rem)] flex-col overflow-hidden rounded-[32px] border border-white/70 bg-white/60 text-slate-700 shadow-[0_36px_110px_rgba(148,163,184,0.3)] backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
        isExpanded ? 'w-[18.5rem] px-6' : 'w-[5.5rem] px-3'
      } ${mobileOpen ? 'translate-x-0 opacity-100' : '-translate-x-[115%] opacity-0 lg:translate-x-0 lg:opacity-100'}`}
    >
      <span className="pointer-events-none absolute inset-x-4 top-2 h-[1px] rounded-full bg-gradient-to-r from-transparent via-white/70 to-transparent" />
      <span
        className={`pointer-events-none absolute -right-7 top-1/2 hidden h-24 w-12 -translate-y-1/2 rounded-full border border-white/60 bg-white/70 shadow-[0_20px_45px_rgba(148,163,184,0.25)] backdrop-blur-xl transition-all duration-500 lg:block ${
          collapsed ? 'translate-x-2 opacity-90 group-hover:translate-x-0 group-hover:opacity-100' : 'translate-x-6 opacity-0'
        }`}
      >
        <span className="absolute inset-0 flex items-center justify-center text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-slate-400 [writing-mode:vertical-rl]">
          Menu
        </span>
      </span>
      <div className="flex items-center justify-between pt-6">
        <div className="flex items-center gap-3">
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 text-police-blue shadow-[0_20px_40px_rgba(148,163,184,0.22)] transition-all duration-500 ${
              isExpanded ? '' : 'scale-90'
            }`}
          >
            <Shield className="h-5 w-5" />
          </span>
          <div
            className={`origin-left text-xs font-semibold uppercase tracking-[0.32em] text-slate-400 transition-all duration-500 ${
              isExpanded ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
            }`}
          >
            导航索引
          </div>
        </div>
        <button
          type="button"
          onClick={() => setIsPinned((value) => !value)}
          className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/75 text-slate-500 shadow-sm transition hover:-translate-y-0.5 hover:text-police-blue lg:flex"
          aria-label={isPinned ? '取消固定导航' : '固定导航'}
        >
          {isPinned ? <PinOff className="h-4 w-4" /> : <Pin className="h-4 w-4" />}
        </button>
        <button
          type="button"
          onClick={() => onMobileToggle(false)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/75 text-slate-500 shadow-sm transition hover:-translate-y-0.5 hover:text-police-blue lg:hidden"
          aria-label="收起导航"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-8 flex-1 overflow-y-auto pb-10">
        {navigationSections.map((section) => (
          <div key={section.key} className="mb-8 last:mb-0">
            <div
              className={`mb-4 flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-slate-500 transition-all duration-500 ${
                isExpanded ? 'opacity-100 translate-x-0' : 'pointer-events-none -translate-x-3 opacity-0'
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400/70" />
              {section.title}
            </div>
            <nav className="space-y-1">
              {(groupedTools[section.key] ?? []).map((tool) => (
                <NavLink
                  key={tool.slug}
                  to={tool.path}
                  title={tool.title}
                  className={({ isActive }) =>
                    `group relative flex items-center gap-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                      isExpanded ? 'px-3 py-2' : 'justify-center px-2.5 py-2'
                    } ${
                      isActive || location.pathname === tool.path
                        ? 'bg-white/95 text-police-blue shadow-[0_18px_45px_rgba(148,163,184,0.18)]'
                        : 'text-slate-600 hover:bg-white/80 hover:text-police-blue'
                    }`
                  }
                  onClick={() => onMobileToggle(false)}
                >
                  <span
                    className={`pointer-events-none absolute left-0 top-1/2 h-10 w-1 -translate-x-2 -translate-y-1/2 rounded-full bg-gradient-to-b from-sky-400/70 via-blue-500/60 to-transparent transition-all duration-300 ${
                      isExpanded && location.pathname === tool.path ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                    }`}
                  />
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-white/85 text-lg text-police-blue shadow-[0_12px_30px_rgba(148,163,184,0.22)] transition-all duration-500 group-hover:scale-[1.08] group-hover:bg-white">
                    <tool.icon className="h-5 w-5" />
                    <span
                      className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-sky-400/10 to-cyan-400/5 opacity-0 transition-all duration-500 group-hover:opacity-100 ${
                        location.pathname === tool.path ? 'opacity-100' : ''
                      }`}
                    />
                  </span>
                  <div
                    className={`flex flex-col text-left transition-all duration-500 ${
                      isExpanded ? 'max-w-[12rem] opacity-100' : 'pointer-events-none max-w-0 opacity-0'
                    }`}
                  >
                    <span>{tool.title}</span>
                    {tool.subtitle && <span className="text-xs font-normal text-slate-400">{tool.subtitle}</span>}
                  </div>
                </NavLink>
              ))}
            </nav>
          </div>
        ))}
      </div>
    </aside>
  );
}
