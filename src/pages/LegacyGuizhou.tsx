import Layout from '../components/Layout';

export default function LegacyGuizhou() {
  return (
    <Layout title="贵州公安大数据惠警平台" subtitle="Legacy Portal" showSidebar={false}>
      <div className="mx-auto max-w-4xl space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <h2 className="text-xl font-semibold text-police-dark">历史界面概览</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            该页面保留了贵州公安大数据惠警平台的传统登录流程，包括 PKI 证书、二维码与语音三种认证方式，便于对比现有经智 AI 平台在界面与交互方面的优化。
          </p>
        </section>
        <section className="rounded-3xl border border-dashed border-police-blue/30 bg-white/80 p-8 text-sm text-slate-600 shadow-inner">
          <h3 className="mb-4 text-base font-semibold text-police-dark">核心要素</h3>
          <ul className="space-y-3">
            <li>· 采用传统表单布局与分栏设计，对移动端适配有限；</li>
            <li>· 认证方式依赖外部控件与 ActiveX 组件，维护成本较高；</li>
            <li>· 无智能体入口，需要跳转至各业务系统分别操作；</li>
            <li>· 缺少统一的运行数据、使用统计与运维看板。</li>
          </ul>
        </section>
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <h3 className="mb-4 text-base font-semibold text-police-dark">迁移建议</h3>
          <p className="text-sm text-slate-600">
            如仍需访问历史系统，请在可信浏览器中打开原始链接，并确保安装 PKI 证书及控件。建议逐步将业务迁移到经智 AI 智能体矩阵，实现统一入口、统一认证和统一运维。
          </p>
        </section>
      </div>
    </Layout>
  );
}
