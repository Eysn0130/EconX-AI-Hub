import { Home, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TopBarProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
}

export default function TopBar({ title, subtitle, showBack = true }: TopBarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex h-20 items-center justify-between border-b border-slate-200 bg-white/80 px-6 shadow-lg backdrop-blur">
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-police-blue text-2xl text-white shadow-md">
          <Shield className="h-6 w-6" />
        </span>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold text-police-dark">{title}</h1>
          {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
        </div>
      </div>
      {showBack && (
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-lg bg-police-blue px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-police-light"
        >
          <Home className="h-4 w-4" />
          返回首页
        </Link>
      )}
    </header>
  );
}
