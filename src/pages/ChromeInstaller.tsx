import { CheckCircle2, Chrome } from 'lucide-react';
import Layout from '../components/Layout';

const steps = [
  {
    title: '下载准备',
    items: [
      '联系运维人员获取离线安装包（含 64 位安装程序与扩展）',
      '确保具备管理员权限，提前关闭老版本浏览器',
      '准备 USB 或内网共享目录，传输安装资源'
    ]
  },
  {
    title: '安装流程',
    items: [
      '双击运行 Chrome 安装程序，完成基础安装',
      '复制策略模板（policy）至本地组策略目录，导入经侦统一配置',
      '安装「警务插件包」扩展，并配置可信站点列表'
    ]
  },
  {
    title: '环境校验',
    items: [
      '访问 https://chrome://policy 确认策略生效',
      '在地址栏输入 chrome://extensions 校验插件加载状态',
      '打开平台门户验证是否能够正常登录与使用 iframe 工具'
    ]
  }
];

const faqs = [
  {
    question: '出现「管理员已停用更新」提示怎么办？',
    answer: '说明策略已成功写入，无需手动更新。若需人工升级，请联系运维中心。'
  },
  {
    question: '浏览器打开平台后空白？',
    answer: '请确认已安装国密算法控件，并在受信任站点中加入平台域名。'
  },
  {
    question: '如何批量分发？',
    answer: '通过域控 AD 或桌面运维平台下发安装包与策略文件，批量静默部署。'
  }
];

export default function ChromeInstaller() {
  return (
    <Layout title="Chrome 浏览器安装指南" subtitle="Offline Deployment" showSidebar={false}>
      <div className="mx-auto max-w-4xl space-y-10">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-police-blue/10 text-3xl text-police-blue">
              <Chrome className="h-8 w-8" />
            </span>
            <div>
              <h2 className="text-xl font-semibold text-police-dark">离线环境安装说明</h2>
              <p className="text-sm text-slate-500">适用于公安内网环境的 Chrome 离线安装、策略部署与插件配置。</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
              <h3 className="mb-4 text-lg font-semibold text-police-dark">{step.title}</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                {step.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-police-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
          <h3 className="mb-4 text-lg font-semibold text-police-dark">常见问题</h3>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <h4 className="mb-2 font-semibold text-police-dark">{faq.question}</h4>
                <p className="text-sm text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-dashed border-police-blue/40 bg-white/70 p-6 text-sm text-slate-600">
          <h3 className="mb-3 text-base font-semibold text-police-dark">运维建议</h3>
          <ul className="space-y-2">
            <li>统一使用版本 120 及以上，确保与平台 iframe 渲染兼容。</li>
            <li>策略模板建议通过组策略管理器（gpmc.msc）集中维护。</li>
            <li>插件更新建议通过离线包覆盖安装，避免外网依赖。</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
