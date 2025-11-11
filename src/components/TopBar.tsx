import {
  ArrowRight,
  BarChart3,
  ChevronDown,
  Home,
  Menu,
  Shield,
  Sparkles,
  UserRound
} from 'lucide-react';
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
  const userProfile = {
    name: '张伟',
    position: '经侦支队 · 一级警长',
    badge: '警号 420512'
  };
  const location = useLocation();

  return (
    <header className="topbar-shell">
      <div className="topbar-shell__inner">
        <div className="flex items-center gap-3 lg:gap-4">
          <button
            type="button"
            onClick={() => onMenuClick?.()}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/70 bg-white/80 text-slate-500 shadow-sm transition hover:-translate-y-0.5 hover:text-police-blue lg:hidden"
            aria-label="展开导航"
          >
            <Menu className="h-5 w-5" />
          </button>
          <Link to="/home" className="relative flex h-12 w-12 items-center justify-center rounded-2xl text-white">
            <span className="topbar-shell__crest">
              <Shield className="h-6 w-6" />
            </span>
          </Link>
          <div className="hidden h-12 w-px bg-gradient-to-b from-transparent via-slate-200/70 to-transparent lg:block" />
          <div className="flex flex-col">
            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.45em] text-slate-400 sm:text-[0.65rem]">
              Intelligence Console
            </span>
            <div className="flex flex-wrap items-baseline gap-2">
              <h1 className="text-base font-semibold leading-tight text-slate-900 sm:text-lg">{title}</h1>
              {subtitle && <span className="text-xs text-slate-500 sm:text-sm">{subtitle}</span>}
            </div>
          </div>
        </div>
        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/70 bg-white/80 p-1 text-[0.72rem] font-medium uppercase tracking-[0.32em] text-slate-500 shadow-sm lg:flex">
          {primaryNav.map((item) => {
            const isActive = location.pathname === item.to || location.pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative flex items-center gap-2 rounded-full px-4 py-2 transition ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500/20 via-sky-400/15 to-cyan-400/15 text-police-blue'
                    : 'text-slate-500 hover:text-police-blue'
                }`}
              >
                <span className="text-[0.65rem] tracking-[0.3em]">{item.label}</span>
                {isActive && <span className="absolute inset-0 rounded-full border border-blue-500/20" />}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          {showBack ? (
            <Link
              to="/home"
              className="group hidden items-center gap-2 rounded-full border border-slate-200/80 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:text-police-blue lg:inline-flex"
            >
              <Home className="h-4 w-4" />
              返回首页
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          ) : (
            <div className="hidden items-center gap-2 rounded-full border border-slate-200/80 bg-white px-4 py-2 text-xs font-medium text-slate-500 shadow-sm sm:flex">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              实时警务 · 智能守护
            </div>
          )}
          <Link
            to="/stats"
            className="hidden items-center gap-2 rounded-full border border-slate-200/80 bg-white px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:text-police-blue sm:inline-flex"
          >
            <BarChart3 className="h-4 w-4" />
            使用情况
          </Link>
          <div className="group relative hidden sm:block">
            <button
              type="button"
              className="group/button inline-flex items-center gap-3 rounded-full border border-slate-200/80 bg-white px-3 py-2 text-left text-sm font-medium text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:text-police-blue"
            >
              <span className="topbar-shell__avatar">
                <UserRound className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-slate-800">{userProfile.name}</span>
                <span className="text-[0.62rem] uppercase tracking-[0.32em] text-slate-400">{userProfile.badge}</span>
              </span>
              <ChevronDown className="h-4 w-4 text-slate-400 transition group-hover/button:text-police-blue" />
            </button>
            <div className="pointer-events-none absolute right-0 top-[calc(100%+0.9rem)] w-64 -translate-y-1 scale-95 rounded-3xl border border-slate-200/80 bg-white/95 p-4 text-sm text-slate-600 opacity-0 shadow-[0_26px_70px_rgba(148,163,184,0.26)] backdrop-blur-2xl transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white p-3">
                <span className="topbar-shell__avatar topbar-shell__avatar--large">
                  <UserRound className="h-6 w-6" />
                </span>
                <div className="flex flex-col">
                  <span className="text-base font-semibold text-slate-900">{userProfile.name}</span>
                  <span className="text-xs text-slate-500">{userProfile.position}</span>
                </div>
              </div>
              <div className="mt-3 space-y-2">
                <Link
                  to="/profile"
                  className="flex items-center justify-between rounded-2xl border border-transparent bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-200 hover:bg-white hover:text-police-blue"
                >
                  个人详情
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-2xl border border-transparent bg-slate-50 px-4 py-2 text-sm font-medium text-slate-500 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500"
                >
                  退出登录
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
