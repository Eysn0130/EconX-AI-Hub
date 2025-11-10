import {
  Activity,
  ArrowRight,
  BarChart3,
  ChevronDown,
  Home,
  Menu,
  Radar,
  Shield,
  Sparkles,
  UserRound
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface TopBarProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  onMenuClick?: () => void;
}

export default function TopBar({ title, subtitle, showBack = true, onMenuClick }: TopBarProps) {
  const userProfile = {
    name: '张伟',
    position: '经侦支队 · 一级警长',
    badge: '警号 420512'
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-3 pt-6 sm:px-6">
      <div className="pointer-events-auto w-full max-w-6xl rounded-[2.75rem] border border-white/70 bg-gradient-to-br from-white/90 via-white/70 to-slate-100/60 p-5 text-slate-900 shadow-[0_32px_110px_rgba(15,23,42,0.18)] backdrop-blur-2xl sm:p-6 lg:p-7">
        <div className="flex w-full flex-col gap-5 lg:flex-row lg:items-center lg:gap-6">
          <div className="flex flex-1 items-center gap-4">
            <button
              type="button"
              onClick={() => onMenuClick?.()}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/70 bg-white/70 text-slate-500 shadow-sm transition hover:-translate-y-0.5 hover:text-police-blue lg:hidden"
              aria-label="展开导航"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="relative flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 via-indigo-500 to-sky-400 text-white shadow-[0_25px_40px_rgba(59,130,246,0.38)]">
              <Shield className="h-6 w-6" />
              <span className="absolute -bottom-3 left-1/2 h-7 w-[70%] -translate-x-1/2 rounded-full bg-blue-400/30 blur-xl" />
            </div>
            <div className="hidden h-14 w-px bg-gradient-to-b from-transparent via-white/80 to-transparent lg:block" />
            <div className="flex flex-col gap-1">
              <span className="inline-flex items-center gap-2 text-[0.66rem] font-semibold uppercase tracking-[0.35em] text-slate-400">
                <Sparkles className="h-3.5 w-3.5 text-sky-500" />
                Command Nexus
              </span>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h1 className="text-lg font-semibold leading-tight text-slate-900 sm:text-xl">{title}</h1>
                <span className="rounded-full border border-blue-100 bg-blue-50 px-2 py-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-blue-500 shadow-sm">
                  智能风控
                </span>
              </div>
              {subtitle ? (
                <p className="max-w-md text-sm text-slate-500 sm:text-[0.95rem]">{subtitle}</p>
              ) : (
                <p className="max-w-md text-sm text-slate-500">
                  高度集成的情报指挥面板，实时洞察趋势并快速调度资源。
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-1 flex-wrap items-center justify-between gap-4 lg:flex-nowrap lg:justify-center">
            <div className="flex items-center gap-2 rounded-full border border-white/60 bg-white/75 px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-slate-500 shadow-sm">
              <Radar className="h-4 w-4 text-sky-500" />
              全域感知网络
            </div>
            <div className="hidden items-center gap-2 lg:flex">
              {showBack ? (
                <Link
                  to="/home"
                  className="group inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/85 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg hover:text-police-blue"
                >
                  <Home className="h-4 w-4" />
                  返回首页
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-2xl border border-white/60 bg-white/80 px-4 py-2 text-xs font-medium text-slate-500 shadow-sm">
                  <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                  实时警务 · 智能守护
                </span>
              )}
              <Link
                to="/stats"
                className="group inline-flex items-center gap-2 rounded-2xl border border-white/70 bg-white/90 px-4 py-2 text-sm font-medium text-slate-600 shadow-[0_14px_24px_rgba(148,163,184,0.22)] transition hover:-translate-y-0.5 hover:text-police-blue"
              >
                <BarChart3 className="h-4 w-4" />
                指标监测
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-400">Live</span>
              </Link>
              <button
                type="button"
                className="group inline-flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400 px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(59,130,246,0.32)] transition hover:-translate-y-0.5"
              >
                <Activity className="h-4 w-4" />
                快速调度
              </button>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-end gap-3">
            <div className="hidden min-w-[220px] flex-1 items-center gap-2 rounded-2xl border border-white/65 bg-white/85 px-4 py-3 shadow-[0_18px_30px_rgba(148,163,184,0.18)] sm:flex">
              <div className="flex flex-col text-xs font-medium uppercase tracking-[0.35em] text-slate-400">
                <span>巡航指令</span>
                <span className="text-[0.6rem] text-blue-500">Updated · 3m ago</span>
              </div>
              <div className="ml-auto flex items-center gap-1 text-sm font-semibold text-slate-600">
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-emerald-600">87%</span>
                完成率
              </div>
            </div>
            <div className="group relative hidden sm:block">
              <button
                type="button"
                className="group inline-flex items-center gap-3 rounded-3xl border border-white/70 bg-white/95 px-3 py-2 text-left text-sm font-medium text-slate-600 shadow-[0_18px_35px_rgba(148,163,184,0.2)] transition hover:-translate-y-0.5 hover:text-police-blue"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 text-white shadow-[0_18px_35px_rgba(59,130,246,0.32)]">
                  <UserRound className="h-5 w-5" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold text-slate-800">{userProfile.name}</span>
                  <span className="text-[0.65rem] uppercase tracking-[0.3em] text-slate-400">{userProfile.badge}</span>
                </span>
                <ChevronDown className="h-4 w-4 text-slate-400 transition group-hover:text-police-blue" />
              </button>
              <div className="pointer-events-none absolute right-0 top-[calc(100%+0.85rem)] w-72 -translate-y-1 scale-95 rounded-3xl border border-white/70 bg-white/95 p-4 text-sm text-slate-600 opacity-0 shadow-[0_30px_80px_rgba(148,163,184,0.32)] backdrop-blur-2xl transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100">
                <div className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/85 p-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 text-white shadow-[0_16px_36px_rgba(59,130,246,0.3)]">
                    <UserRound className="h-6 w-6" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-base font-semibold text-slate-900">{userProfile.name}</span>
                    <span className="text-xs text-slate-500">{userProfile.position}</span>
                  </div>
                </div>
                <div className="mt-3 grid gap-2">
                  <Link
                    to="/profile"
                    className="flex items-center justify-between rounded-2xl border border-transparent bg-slate-50/70 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-200 hover:bg-white hover:text-police-blue"
                  >
                    个人详情
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-2xl border border-transparent bg-rose-50/70 px-4 py-2 text-sm font-medium text-rose-500 transition hover:border-rose-200 hover:bg-white"
                  >
                    退出登录
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
