import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navigationSections, toolDefinitions } from '../data/tools';
import type { ToolCategory } from '../data/tools';

const categoryOrder: ToolCategory[] = navigationSections.map((section) => section.key);

export default function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const groupedTools = useMemo(() => {
    return categoryOrder.reduce<Record<ToolCategory, typeof toolDefinitions>>((acc, category) => {
      acc[category] = toolDefinitions.filter((tool) => tool.category === category);
      return acc;
    }, {} as Record<ToolCategory, typeof toolDefinitions>);
  }, []);

  return (
    <aside
      className={`fixed left-0 top-20 z-30 h-[calc(100vh-5rem)] w-72 transform border-r border-slate-200 bg-white/95 shadow-xl transition-transform duration-300 ease-in-out backdrop-blur ${
        isOpen ? 'translate-x-0' : '-translate-x-60 lg:translate-x-0'
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="absolute -right-10 top-6 flex h-10 w-10 items-center justify-center rounded-r-xl bg-white shadow-lg ring-1 ring-slate-200 transition hover:bg-slate-50 lg:hidden"
        aria-label={isOpen ? '收起导航' : '展开导航'}
      >
        {isOpen ? <ChevronLeft className="h-4 w-4 text-police-blue" /> : <ChevronRight className="h-4 w-4 text-police-blue" />}
      </button>
      <div className="h-full overflow-y-auto px-4 pb-8 pt-6">
        {navigationSections.map((section) => (
          <div key={section.key} className="mb-8">
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-police-blue" />
              {section.title}
            </div>
            <nav className="space-y-1">
              {(groupedTools[section.key] ?? []).map((tool) => (
                <NavLink
                  key={tool.slug}
                  to={tool.path}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition ${
                      isActive || location.pathname === tool.path
                        ? 'bg-police-blue/10 text-police-blue'
                        : 'text-slate-600 hover:bg-police-blue/5 hover:text-police-blue'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-police-blue/10 text-lg text-police-blue transition group-hover:scale-110 group-hover:bg-police-blue group-hover:text-white">
                    <tool.icon className="h-5 w-5" />
                  </span>
                  <div className="flex flex-col">
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
