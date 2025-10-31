import { Headset, IdCard, LogIn, Network, ShieldCheck, Sparkles, UserShield } from 'lucide-react';
import { useState } from 'react';
import Layout from '../components/Layout';

export default function Login() {
  const [remember, setRemember] = useState(true);

  return (
    <Layout title="统一身份认证" subtitle="Single Sign-On" showSidebar={false}>
      <div className="flex flex-col items-center justify-center">
        <div className="relative mb-10 flex w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl lg:flex-row">
          <div className="relative w-full bg-gradient-to-br from-police-dark via-police-blue to-blue-500 p-10 text-white lg:w-2/5">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-100">
                  <Sparkles className="h-4 w-4" /> AI Copilot
                </p>
                <h2 className="mb-4 text-2xl font-semibold">经智AI智能体工作平台</h2>
                <p className="text-sm text-blue-100/90">
                  支持PKI、扫码、口令多因子认证，提供零信任级别的访问控制能力，保障公安网环境安全可信。
                </p>
              </div>
              <div className="mt-8 space-y-3 text-sm text-blue-100/80">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5" />
                  <span>等保三级 · 全量安全审计</span>
                </div>
                <div className="flex items-center gap-3">
                  <Network className="h-5 w-5" />
                  <span>统一身份 · 统一权限 · 统一门户</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-white p-10 lg:w-3/5">
            <div className="mb-8 text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-police-blue/10 text-3xl text-police-blue">
                <UserShield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-police-dark">登录平台</h3>
              <p className="mt-2 text-sm text-slate-500">使用公安专网账号登录，完成统一认证后访问所有智能体。</p>
            </div>
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium text-slate-600">
                  账号
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="请输入警号 / 工号"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm shadow-inner focus:border-police-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-police-blue/40"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-slate-600">
                  密码
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="请输入登录密码"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm shadow-inner focus:border-police-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-police-blue/40"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(event) => setRemember(event.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-police-blue focus:ring-police-blue/60"
                  />
                  记住我的登录状态
                </label>
                <button type="button" className="text-police-blue hover:text-police-light">
                  忘记密码？
                </button>
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-police-blue py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-police-light hover:shadow-xl"
              >
                <LogIn className="h-4 w-4" /> 进入平台
              </button>
            </form>
            <div className="mt-8 grid gap-4 rounded-2xl bg-slate-50 p-4 text-xs text-slate-500">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-police-blue/10 text-police-blue">
                  <IdCard className="h-4 w-4" />
                </span>
                <span>支持PKI证书、黔警认证APP扫码、口令等多因子方式。</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-police-blue/10 text-police-blue">
                  <Headset className="h-4 w-4" />
                </span>
                <span>如遇异常，请联系运维中心：400-110-9100，或工单系统。</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
