import { ChevronLeft, ChevronRight, Pin, PinOff } from 'lucide-react';
import { useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navigationSections, toolDefinitions } from '../data/tools';
import type { ToolCategory } from '../data/tools';

const categoryOrder: ToolCategory[] = navigationSections.map((section) => section.key);

export default function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const groupedTools = useMemo(() => {
    return categoryOrder.reduce<Record<ToolCategory, typeof toolDefinitions>>((acc, category) => {
      acc[category] = toolDefinitions.filter((tool) => tool.category === category);
      return acc;
    }, {} as Record<ToolCategory, typeof toolDefinitions>);
  }, []);

  return (
    <aside
      onMouseEnter={() => !isPinned && setIsOpen(true)}
      onMouseLeave={() => !isPinned && setIsOpen(false)}
      className={`group fixed left-4 top-28 z-30 h-[calc(100vh-9rem)] w-72 origin-left rounded-3xl border border-white/15 bg-white/10 shadow-2xl shadow-black/20 backdrop-blur-2xl transition-all duration-500 ${
        isOpen || isPinned ? 'translate-x-0 opacity-100' : '-translate-x-80 opacity-90 lg:-translate-x-[65%]'
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="absolute -right-10 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white shadow-lg backdrop-blur transition hover:bg-white/30 lg:hidden"
        aria-label={isOpen ? '收起导航' : '展开导航'}
      >
        {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </button>
      <button
        type="button"
        onClick={() => setIsPinned((value) => !value)}
        className="absolute -right-12 bottom-10 hidden h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-lg backdrop-blur transition hover:bg-white/20 lg:flex"
        aria-label={isPinned ? '取消固定导航' : '固定导航'}
      >
        {isPinned ? <PinOff className="h-4 w-4" /> : <Pin className="h-4 w-4" />}
      </button>
      <div className="h-full overflow-y-auto px-5 pb-10 pt-8 text-white">
        {navigationSections.map((section) => (
          <div key={section.key} className="mb-8">
            <div className="mb-4 flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-blue-100/70">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              {section.title}
            </div>
            <nav className="space-y-1">
              {(groupedTools[section.key] ?? []).map((tool) => (
                <NavLink
                  key={tool.slug}
                  to={tool.path}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition ${
                      isActive || location.pathname === tool.path
                        ? 'bg-white/20 text-white'
                        : 'text-blue-100/80 hover:bg-white/10 hover:text-white'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-lg text-white transition group-hover:scale-110 group-hover:bg-white/20">
                    <tool.icon className="h-5 w-5" />
                  </span>
                  <div className="flex flex-col">
                    <span>{tool.title}</span>
                    {tool.subtitle && <span className="text-xs font-normal text-blue-100/60">{tool.subtitle}</span>}
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
