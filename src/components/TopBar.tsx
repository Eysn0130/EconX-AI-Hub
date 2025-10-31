import { ArrowRight, Home, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TopBarProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
}

export default function TopBar({ title, subtitle, showBack = true }: TopBarProps) {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-6 sm:px-8">
      <div className="pointer-events-auto flex w-full max-w-6xl items-center justify-between rounded-3xl border border-white/15 bg-white/10 px-6 py-4 text-white shadow-2xl backdrop-blur-2xl">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-sky-400 text-2xl text-white shadow-lg shadow-blue-500/30">
            <Shield className="h-6 w-6" />
          </span>
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold tracking-tight sm:text-xl">{title}</h1>
            {subtitle && <p className="text-xs font-medium text-blue-100/80 sm:text-sm">{subtitle}</p>}
          </div>
        </div>
        {showBack && (
          <Link
            to="/home"
            className="group inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
          >
            <Home className="h-4 w-4" />
            返回首页
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </header>
  );
}
