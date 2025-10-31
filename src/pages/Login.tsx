import { ArrowRight, ContactRound, Headset, Lock, Network, Shield, ShieldCheck, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [remember, setRemember] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="login-aurora" />
      <div className="absolute inset-0 opacity-60 mix-blend-screen">
        <div className="floating-particle left-[10%] top-[18%]" />
        <div className="floating-particle delay-2000 left-[70%] top-[32%]" />
        <div className="floating-particle delay-4000 left-[30%] top-[70%]" />
      </div>
      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="flex items-center justify-between px-6 pt-8 sm:px-12">
          <div className="flex items-center gap-3 text-sm text-blue-100/80">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-sky-400 text-xl shadow-lg shadow-blue-500/30">
              <Shield className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-blue-100/70">Guizhou Economic Crime</p>
              <h1 className="text-lg font-semibold sm:text-xl">经智AI智能体工作平台</h1>
            </div>
          </div>
          <div className="hidden items-center gap-6 text-xs text-blue-100/60 sm:flex">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" /> 等保三级
            </span>
            <span className="inline-flex items-center gap-2">
              <Network className="h-4 w-4" /> 统一身份与权限
            </span>
          </div>
        </header>
        <main className="flex flex-1 items-center justify-center px-6 py-12 sm:px-12">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/10 shadow-2xl shadow-blue-500/20 backdrop-blur-3xl">
            <div className="grid gap-0 lg:grid-cols-[1.1fr,1fr]">
              <div className="relative flex flex-col justify-between gap-10 p-10">
                <div className="space-y-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-100/80">
                    <Sparkles className="h-4 w-4" /> Unified Access
                  </span>
                  <div className="space-y-4">
                    <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">安全可信的统一身份认证入口</h2>
                    <p className="text-sm text-blue-100/80 sm:text-base">
                      支持PKI证书、扫码、人脸、口令等多因子认证方式，结合零信任架构、动态风控策略与全链路审计，保障公安网环境下的敏捷访问与数据安全。
                    </p>
                  </div>
                </div>
                <div className="grid gap-3 text-sm text-blue-100/80 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Lock className="h-5 w-5" />
                    <span>支持国密算法，敏感口令自动加固。</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Headset className="h-5 w-5" />
                    <span>7x24 运维支持，异常一键工单。</span>
                  </div>
                </div>
              </div>
              <div className="relative border-t border-white/10 bg-slate-950/40 p-10 backdrop-blur-xl lg:border-l lg:border-t-0">
                <div className="mb-8 space-y-3 text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl text-white">
                    <Shield className="h-8 w-8" />
                  </span>
                  <h3 className="text-xl font-semibold">登录平台</h3>
                  <p className="text-sm text-blue-100/70">使用公安专网账号登录，完成统一认证后访问所有智能体。</p>
                </div>
                <form
                  className="space-y-6"
                  onSubmit={(event) => {
                    event.preventDefault();
                    navigate('/home');
                  }}
                >
                  <div className="space-y-2 text-left">
                    <label htmlFor="username" className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-100/60">
                      账号
                    </label>
                    <input
                      id="username"
                      type="text"
                      placeholder="请输入警号 / 工号"
                      className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-blue-100/50 focus:border-white/40 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <label htmlFor="password" className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-100/60">
                      密码
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="请输入登录密码"
                      className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-blue-100/50 focus:border-white/40 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
                    />
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-blue-100/70">
                    <label className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={remember}
                        onChange={(event) => setRemember(event.target.checked)}
                        className="h-4 w-4 rounded border-white/40 bg-white/10 text-blue-400 focus:ring-blue-400/50"
                      />
                      记住登录状态
                    </label>
                    <button type="button" className="underline-offset-4 transition hover:underline">
                      忘记密码？
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-sky-400 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/40 transition hover:-translate-y-0.5"
                  >
                    进入平台
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
                <div className="mt-8 grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-blue-100/70">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                      <ContactRound className="h-4 w-4" />
                    </span>
                    <span>支持 PKI、APP 扫码、口令等多因子方式，动态校验终端安全。</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                      <Headset className="h-4 w-4" />
                    </span>
                    <span>运维中心热线：400-110-9100 · 工单系统随时待命。</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
