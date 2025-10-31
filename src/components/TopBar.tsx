import { ArrowRight, Home, Menu, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TopBarProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  onMenuClick?: () => void;
}

export default function TopBar({ title, subtitle, showBack = true, onMenuClick }: TopBarProps) {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-3 pt-6 sm:px-6">
      <div className="pointer-events-auto flex w-full max-w-6xl items-center gap-4 rounded-[2.5rem] border border-white/70 bg-white/80 px-4 py-4 text-slate-900 shadow-[0_32px_95px_rgba(148,163,184,0.28)] backdrop-blur-2xl sm:gap-6 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => onMenuClick?.()}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/65 text-slate-500 shadow-sm transition hover:-translate-y-0.5 hover:text-police-blue lg:hidden"
            aria-label="展开导航"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-400 to-sky-400 text-white shadow-[0_18px_35px_rgba(59,130,246,0.35)]">
            <Shield className="h-6 w-6" />
            <span className="absolute -bottom-2 left-1/2 h-6 w-[60%] -translate-x-1/2 rounded-full bg-blue-500/25 blur-lg" />
          </div>
          <div className="hidden h-12 w-px bg-gradient-to-b from-transparent via-white/80 to-transparent lg:block" />
          <div className="flex flex-col">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.4em] text-slate-400 sm:text-[0.7rem]">
              Intelligence Console
            </p>
            <h1 className="text-base font-semibold leading-tight text-slate-900 sm:text-lg">{title}</h1>
            {subtitle && <p className="text-xs font-medium text-slate-500 sm:text-sm">{subtitle}</p>}
          </div>
        </div>
        <div className="hidden flex-shrink-0 items-center gap-3 rounded-full border border-white/60 bg-white/70 px-4 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.35em] text-slate-500 shadow-sm lg:flex">
          <Sparkles className="h-3.5 w-3.5 text-blue-500" />
          <span>毛玻璃防护矩阵</span>
        </div>
        <div className="flex flex-1 items-center justify-end gap-3">
          <div className="hidden items-center gap-3 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-xs font-medium text-slate-500 shadow-sm sm:flex">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.24)]" />
            系统运行稳定
          </div>
          {showBack ? (
            <Link
              to="/home"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md hover:text-police-blue"
            >
              <Home className="h-4 w-4" />
              返回首页
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          ) : (
            <div className="flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-xs font-medium text-slate-500 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              实时警务 · 智能守护
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
