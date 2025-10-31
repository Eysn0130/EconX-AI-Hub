import { ArrowRight, Grid2X2, LineChart, LogIn, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { featuredTools, insights, stats, supportTools, workflows } from '../data/dashboard';
import { navigationSections, toolDefinitions } from '../data/tools';

export default function Dashboard() {
  return (
    <Layout title="经智AI智能体工作平台" subtitle="Economic Crime Intelligence Platform" showSidebar={false} showBack={false}>
      <section className="mb-12 rounded-3xl bg-gradient-to-br from-police-dark via-police-blue to-blue-500 p-8 text-white shadow-2xl">
        <div className="grid gap-8 lg:grid-cols-[1.6fr,1fr]">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-medium">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              智能体矩阵 · 全域经济犯罪研判
            </p>
            <h2 className="mb-4 text-3xl font-semibold leading-tight lg:text-4xl">
              一站式整合线索、研判、协同与运维，实现公安专业场景的智能协作
            </h2>
            <p className="text-base text-blue-100 lg:text-lg">
              覆盖通用问答、专业领域办案、辅助工具与研判分析，打造敏捷、可信、可落地的经侦智能工作流。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/login"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-police-blue shadow-lg transition hover:-translate-y-0.5 hover:shadow-2xl"
              >
                <LogIn className="h-4 w-4" />
                统一认证入口
              </Link>
              <Link
                to="/stats"
                className="inline-flex items-center gap-2 rounded-xl border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <LineChart className="h-4 w-4" />
                查看运行态势
              </Link>
            </div>
          </div>
          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-lg">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-100">运行速览</h3>
            <div className="grid gap-4">
              {stats.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 shadow-inner backdrop-blur">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-xl text-yellow-200">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold">{item.value}</span>
                      <span className="text-sm text-blue-100">{item.label}</span>
                    </div>
                    <span className="ml-auto text-xs font-medium text-emerald-200">{item.trend}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-police-dark">高频工作流</h3>
          <Link to="/tools/general-case" className="text-sm font-medium text-police-blue hover:text-police-light">
            查看全部智能体
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {workflows.map((workflow) => {
            const Icon = workflow.icon;
            return (
              <Link
                key={workflow.title}
                to={workflow.link}
                className="group relative flex h-full flex-col rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-lg transition hover:-translate-y-1 hover:border-police-blue/40 hover:shadow-2xl"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-police-blue/10 text-xl text-police-blue group-hover:bg-police-blue group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h4 className="mb-2 text-lg font-semibold text-police-dark">{workflow.title}</h4>
                <p className="mb-4 text-sm text-slate-500">{workflow.description}</p>
                <div className="mt-auto space-y-2 text-sm text-slate-400">
                  {workflow.steps.map((step, index) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-police-blue/10 text-xs font-semibold text-police-blue">
                        {index + 1}
                      </span>
                      {step}
                    </div>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mb-12">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-police-dark">重点智能体矩阵</h3>
          <span className="text-xs uppercase tracking-wide text-slate-400">Core Copilots</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.slug}
                to={tool.path}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:border-police-blue/40 hover:shadow-2xl"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-police-blue/10 text-xl text-police-blue group-hover:bg-police-blue group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h4 className="mb-1 text-lg font-semibold text-police-dark">{tool.title}</h4>
                {tool.subtitle && <p className="text-sm text-slate-400">{tool.subtitle}</p>}
                <p className="mt-3 text-sm text-slate-500">{tool.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mb-12 rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-lg">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-police-dark">智能体全谱系</h3>
          <span className="text-xs uppercase tracking-wide text-slate-400">Explorer</span>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {navigationSections.map((section) => (
            <div key={section.key} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-police-blue/10 text-police-blue">
                  <Grid2X2 className="h-5 w-5" />
                </span>
                <div className="text-lg font-semibold text-police-dark">{section.title}</div>
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                {toolDefinitions
                  .filter((tool) => tool.category === section.key && tool.iframeUrl)
                  .map((tool) => (
                    <li key={tool.slug} className="flex items-start gap-3">
                      <span className="mt-1 text-police-blue">
                        <tool.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <Link to={tool.path} className="font-medium text-police-dark hover:text-police-blue">
                          {tool.title}
                        </Link>
                        <p className="text-xs text-slate-400">{tool.description}</p>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-police-dark">平台洞察</h3>
          <span className="text-xs uppercase tracking-wide text-slate-400">Platform Insights</span>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {insights.map((insight) => {
            const Icon = insight.icon;
            return (
              <div
                key={insight.title}
                className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-lg"
              >
                <div>
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-police-blue/10 text-xl text-police-blue">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h4 className="mb-2 text-lg font-semibold text-police-dark">{insight.title}</h4>
                  <p className="mb-3 text-sm font-semibold text-police-blue">{insight.highlight}</p>
                  <p className="text-sm text-slate-500">{insight.description}</p>
                </div>
                <Link to="/stats" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-police-blue">
                  查看相关指标 <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-8 rounded-3xl border border-dashed border-police-blue/40 bg-white/70 p-8 text-police-dark shadow-inner">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-xl font-semibold">运维支撑与更新公告</h3>
            <p className="mt-2 text-sm text-slate-500">
              浏览使用统计、环境部署指引等内容，保障系统稳定运行。
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {supportTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.slug}
                  to={tool.path}
                  className="inline-flex items-center gap-2 rounded-xl bg-police-blue/10 px-4 py-2 text-sm font-medium text-police-blue transition hover:bg-police-blue hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  {tool.title}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
