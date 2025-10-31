import { CheckCircle2, Gauge, ShieldCheck } from 'lucide-react';
import { useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { toolDefinitions } from '../data/tools';

export default function ToolPage() {
  const { slug } = useParams<{ slug: string }>();

  const tool = useMemo(() => toolDefinitions.find((item) => item.slug === slug), [slug]);

  if (!tool) {
    return <Navigate to="/" replace />;
  }

  const Icon = tool.icon;
  const hasIframe = Boolean(tool.iframeUrl);

  return (
    <Layout title={tool.title} subtitle={tool.subtitle}>
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex-1 space-y-6">
          <section className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg">
            <h2 className="mb-2 text-lg font-semibold text-police-dark">功能简介</h2>
            <p className="text-sm leading-relaxed text-slate-600">{tool.description}</p>
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-500">
              <span className="inline-flex items-center gap-2 rounded-full bg-police-blue/10 px-3 py-1 font-medium text-police-blue">
                <Icon className="h-4 w-4" /> 核心智能体
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 font-medium text-emerald-700">
                <ShieldCheck className="h-4 w-4" /> 数据安全审计
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-700">
                <Gauge className="h-4 w-4" /> 实时算力保障
              </span>
            </div>
          </section>
          {hasIframe ? (
            <section className="h-[70vh] min-h-[520px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
              <iframe
                src={tool.iframeUrl}
                title={tool.title}
                className="h-full w-full"
                allow="microphone"
              />
            </section>
          ) : (
            <section className="flex min-h-[320px] flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-police-blue/40 bg-white/80 p-10 text-center shadow-lg">
              <Icon className="h-12 w-12 text-police-blue" />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-police-dark">暂无内嵌界面</h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  当前智能体尚未提供内嵌操作界面，请通过导航访问对应专题页面或联系运维获取更多信息。
                </p>
              </div>
              <Link to="/" className="text-sm font-semibold text-police-blue hover:text-police-light">
                返回工作台
              </Link>
            </section>
          )}
        </div>
        <aside className="w-full max-w-sm space-y-6">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <h3 className="mb-3 text-base font-semibold text-police-dark">使用建议</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 text-police-blue" />
                <span>建议在公安网环境访问，保障数据链路安全。</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 text-police-blue" />
                <span>可通过系统使用统计页面查看该智能体的调用情况。</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 text-police-blue" />
                <span>如需与案件协同，请结合案件协同助手完成流转。</span>
              </li>
            </ul>
          </section>
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <h3 className="mb-3 text-base font-semibold text-police-dark">关联智能体</h3>
            <ul className="space-y-3 text-sm text-police-blue">
              {toolDefinitions
                .filter((item) => item.category === tool.category && item.slug !== tool.slug)
                .slice(0, 3)
                .map((item) => (
                  <li key={item.slug} className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-600">
                      <item.icon className="h-4 w-4" />
                      {item.title}
                    </span>
                    <Link to={item.path} className="text-xs font-semibold text-police-blue hover:text-police-light">
                      查看
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        </aside>
      </div>
    </Layout>
  );
}
