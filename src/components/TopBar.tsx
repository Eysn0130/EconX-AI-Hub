import {
  Activity,
  ArrowRight,
  BarChart3,
  ChevronDown,
  Home,
  Menu,
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
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-3 pt-5 sm:px-6">
      <div className="pointer-events-auto relative w-full max-w-6xl overflow-hidden rounded-[2.75rem] border border-white/75 bg-white/85 px-4 py-4 text-slate-900 shadow-[0_28px_80px_rgba(148,163,184,0.32)] backdrop-blur-2xl sm:px-6 lg:px-8">
        <div className="absolute inset-x-8 -top-16 h-32 rounded-full bg-gradient-to-r from-sky-400/35 via-blue-400/25 to-indigo-400/30 blur-3xl" />
        <div className="relative flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => onMenuClick?.()}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/65 text-slate-500 shadow-sm transition hover:-translate-y-0.5 hover:text-police-blue lg:hidden"
                aria-label="展开导航"
              >
                <Menu className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/70 px-3 py-2 shadow-[0_16px_35px_rgba(148,163,184,0.18)]">
                <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 text-white shadow-[0_18px_38px_rgba(59,130,246,0.35)]">
                  <Shield className="h-6 w-6" />
                  <span className="absolute -bottom-2 left-1/2 h-5 w-[70%] -translate-x-1/2 rounded-full bg-sky-500/25 blur-lg" />
                </span>
                <div className="leading-tight">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.4em] text-slate-400 sm:text-[0.7rem]">
                    EconX Matrix
                  </p>
                  <p className="text-sm font-semibold text-slate-900 sm:text-base">警务情报指挥中心</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 sm:text-[0.75rem]">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-3 py-1 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                智能协作矩阵
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-emerald-500/10 px-3 py-1 text-emerald-600 shadow-sm">
                <Activity className="h-3.5 w-3.5" />
                系统稳定
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-400 sm:text-xs">
                <span className="hidden items-center gap-1 sm:inline-flex">
                  <Home className="h-3.5 w-3.5" />
                  指挥枢纽
                </span>
                <span className="hidden text-slate-300 sm:inline">/</span>
                <span>动态态势</span>
              </div>
              <h1 className="text-lg font-semibold leading-tight text-slate-900 sm:text-xl">{title}</h1>
              {subtitle && <p className="text-sm text-slate-500 sm:text-base">{subtitle}</p>}
            </div>

            <div className="flex flex-1 items-center justify-end gap-3">
              {showBack ? (
                <Link
                  to="/home"
                  className="group hidden items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md hover:text-police-blue sm:inline-flex"
                >
                  <Home className="h-4 w-4" />
                  返回首页
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              ) : (
                <div className="hidden items-center gap-2 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-xs font-medium text-slate-500 shadow-sm sm:flex">
                  <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                  实时警务 · 智能守护
                </div>
              )}

              <Link
                to="/support/chrome-installer"
                className="hidden items-center gap-2 rounded-full border border-white/70 bg-white/85 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:text-police-blue sm:inline-flex"
              >
                <Shield className="h-4 w-4 text-blue-500" />
                Chrome 安装助手
              </Link>

              <div className="hidden items-center gap-2 rounded-full border border-white/70 bg-white/80 px-2 py-2 shadow-sm sm:flex">
                <Link
                  to="/stats"
                  className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/90 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-slate-600 shadow-[0_12px_20px_rgba(148,163,184,0.18)] transition hover:-translate-y-0.5 hover:text-police-blue"
                >
                  <BarChart3 className="h-4 w-4" />
                  使用情况
                </Link>
                <div className="group relative">
                  <button
                    type="button"
                    className="group inline-flex items-center gap-3 rounded-full border border-white/60 bg-white/90 px-3 py-2 text-left text-sm font-medium text-slate-600 shadow-[0_12px_20px_rgba(148,163,184,0.18)] transition hover:-translate-y-0.5 hover:text-police-blue"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 text-white shadow-[0_12px_30px_rgba(59,130,246,0.28)]">
                      <UserRound className="h-5 w-5" />
                    </span>
                    <span className="flex flex-col leading-tight">
                      <span className="text-sm font-semibold text-slate-800">{userProfile.name}</span>
                      <span className="text-[0.65rem] uppercase tracking-[0.3em] text-slate-400">{userProfile.badge}</span>
                    </span>
                    <ChevronDown className="h-4 w-4 text-slate-400 transition group-hover:text-police-blue" />
                  </button>
                  <div className="pointer-events-none absolute right-0 top-[calc(100%+0.85rem)] w-64 -translate-y-1 scale-95 rounded-3xl border border-white/70 bg-white/95 p-4 text-sm text-slate-600 opacity-0 shadow-[0_26px_70px_rgba(148,163,184,0.28)] backdrop-blur-2xl transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100">
                    <div className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/80 p-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 text-white shadow-[0_16px_36px_rgba(59,130,246,0.3)]">
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
                        className="flex items-center justify-between rounded-2xl border border-transparent bg-slate-50/60 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-200 hover:bg-white hover:text-police-blue"
                      >
                        个人详情
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-2xl border border-transparent bg-slate-50/60 px-4 py-2 text-sm font-medium text-slate-500 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500"
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
        </div>
      </div>
    </header>
  );
}
