import { ArrowRight, BarChart3, Bell, Home, Menu, Search, Shield, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface TopBarProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  onMenuClick?: () => void;
}

const primaryNav = [
  { label: '工作台', to: '/home' },
  { label: '智能体矩阵', to: '/tools/general-ai' },
  { label: '态势监测', to: '/stats' },
  { label: '支撑服务', to: '/support/chrome-installer' }
];

export default function TopBar({ title, subtitle, showBack = true, onMenuClick }: TopBarProps) {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-white/55 backdrop-blur-xl">
      {/* TODO(hqk): 顶栏采用玻璃拟态与柔和渐变以提升可读性 */}
      <div className="mx-auto flex w-full max-w-[1200px] items-center gap-4 px-4 py-4 transition-all duration-300 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            aria-label="展开导航"
            onClick={() => onMenuClick?.()}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/70 text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
          <Link
            to="/home"
            aria-label="返回工作台"
            className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-sky-400 to-cyan-400 text-white shadow-[0_18px_40px_rgba(56,189,248,0.28)] transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200"
          >
            <Shield className="h-6 w-6" />
          </Link>
          <div className="hidden h-10 w-px bg-white/50 sm:block" />
          <div className="hidden flex-col leading-tight md:flex">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-slate-500">Intelligence Console</span>
            <div className="flex flex-wrap items-baseline gap-2">
              <h1 className="text-base font-semibold text-slate-900 sm:text-lg">{title}</h1>
              {subtitle && <span className="text-xs text-slate-500 sm:text-sm">{subtitle}</span>}
            </div>
          </div>
        </div>
        <nav className="hidden flex-1 items-center justify-center gap-2 md:flex">
          {primaryNav.map((item) => {
            const isActive = location.pathname === item.to || location.pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-label={`前往${item.label}`}
                aria-current={isActive ? 'page' : undefined}
                className={`relative inline-flex h-10 items-center rounded-full px-4 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 ${
                  isActive ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:bg-white/40 hover:text-slate-900'
                }`}
              >
                {item.label}
                {isActive && <span className="absolute inset-0 rounded-full border border-white/60" />}
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-3 sm:gap-4">
          {showBack ? (
            <Link
              to="/home"
              aria-label="返回首页"
              className="group hidden items-center gap-2 rounded-full border border-white/50 bg-white/70 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 lg:inline-flex"
            >
              <Home className="h-4 w-4" />
              返回首页
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          ) : (
            <span className="hidden items-center gap-2 rounded-full border border-white/50 bg-white/70 px-4 py-2 text-xs font-medium text-slate-600 shadow-sm sm:inline-flex">
              <Sparkles className="h-3.5 w-3.5 text-sky-500" />
              实时警务 · 智能守护
            </span>
          )}
          <Link
            to="/stats"
            aria-label="查看使用情况"
            className="hidden items-center gap-2 rounded-full border border-white/50 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 sm:inline-flex"
          >
            <BarChart3 className="h-4 w-4" />
            使用情况
          </Link>
          <button
            type="button"
            aria-label="搜索内容"
            className="hidden h-10 items-center gap-2 rounded-full border border-white/50 bg-white/70 px-4 text-sm text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 xl:inline-flex"
          >
            <Search className="h-4 w-4" />
            搜索
          </button>
          <button
            type="button"
            aria-label="查看消息提醒"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/70 text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
          >
            <Bell className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="打开用户菜单"
            className="inline-flex items-center gap-3 rounded-full border border-white/60 bg-white/80 px-3 py-2 text-left text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 text-white shadow-[0_12px_24px_rgba(15,23,42,0.25)]">JW</span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-sm font-semibold text-slate-900">警务用户</span>
              <span className="text-xs text-slate-500">执勤中</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
