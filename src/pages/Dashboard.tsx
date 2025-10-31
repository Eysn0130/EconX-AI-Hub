import {
  ArrowUpRight,
  BadgeCheck,
  BadgeDollarSign,
  Compass,
  FileCheck2,
  FileText,
  Landmark,
  Layers,
  Network,
  Shield,
  Sparkles,
  Store,
  UserCheck,
  Workflow
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const generalAiModules = [
  {
    title: '通用AI中枢',
    description: '统一编排知识库、向量检索与语义推理，提供全天候的政务问答支持。',
    icon: Sparkles,
    link: '/tools/general-ai',
    metrics: ['知识图谱覆盖 28W+ 条目', '行业语料持续增补']
  },
  {
    title: '多模态洞察',
    description: '实现文本、图像、表格的跨模态理解，快速抽取案件关键要素。',
    icon: Layers,
    link: '/tools/general-case',
    metrics: ['复杂意图识别率 93%', '自动摘要 4s 完成']
  },
  {
    title: '智能联动',
    description: '与公安网各业务系统互通，按需调度模型算力，守护流程安全合规。',
    icon: Network,
    link: '/stats',
    metrics: ['零信任防护策略', '实时算力调度看板']
  }
];

const caseCategories = [
  {
    title: '通用领域案件侦办',
    description: '覆盖全流程案件管理，支持线索研判、人员画像与风险推送。',
    icon: Shield,
    link: '/tools/general-case'
  },
  {
    title: '金融领域',
    description: '聚焦银行、支付、信贷全链条数据，实现异常交易自动识别。',
    icon: Landmark,
    link: '/tools/finance-case'
  },
  {
    title: '证劵领域',
    description: '对接交易所与券商数据，提供行情对照与操纵识别策略。',
    icon: Workflow,
    link: '/tools/securities-case'
  },
  {
    title: '涉税领域',
    description: '串联企业税控、发票与工商信息，生成税务风险热力图。',
    icon: FileText,
    link: '/tools/tax-case'
  },
  {
    title: '商贸领域',
    description: '监测货物流向与交易行为，定位批量串货、虚假贸易疑点。',
    icon: Store,
    link: '/tools/trade-case'
  },
  {
    title: '反洗钱领域',
    description: '从账户关系、跨境资金与多级分账识别可疑链条。',
    icon: BadgeDollarSign,
    link: '/tools/money-laundering'
  }
];

const documentModules = [
  {
    title: '公文写作',
    description: '结合规范模板与行业语料，一键生成请示、报告与总结。',
    icon: FileText,
    link: '/tools/doc-writing',
    highlights: ['语气风格自动匹配', '多级审批留痕']
  },
  {
    title: '文档审核',
    description: '智能校对敏感字段、格式规范与数据准确性，实现提交即校验。',
    icon: FileCheck2,
    link: '/tools/doc-writing',
    highlights: ['历史版本对比', '引用溯源一键查看']
  }
];

const econExclusive = [
  {
    title: '金析为证',
    description: '快速完成交易流水聚合、证据链勾勒与图谱呈现。',
    icon: BadgeCheck,
    link: '/tools/evidence-analysis'
  },
  {
    title: '办案指引',
    description: '沉淀制度规程与典型案例，办案过程随时调取标准作业卡。',
    icon: Compass,
    link: '/tools/case-guide'
  },
  {
    title: '数据分析',
    description: '覆盖案件态势监测、可疑群体识别、专题研判等高级分析能力。',
    icon: UserCheck,
    link: '/tools/data-analysis'
  }
];

export default function Dashboard() {
  return (
    <Layout title="经智AI智能体工作平台" subtitle="Economic Crime Intelligence Platform" showBack={false}>
      <section className="mb-12 grid gap-6 rounded-[2.5rem] border border-white/10 bg-white/10 p-10 text-white shadow-2xl shadow-blue-500/10 backdrop-blur-2xl lg:grid-cols-[1.4fr,1fr]">
        <div className="flex flex-col justify-between gap-8">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-100/80">
              <Sparkles className="h-4 w-4" />
              Intelligence Fabric
            </span>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              一站式经侦智能体集群，连接线索、侦查与指挥的全链路协作中心
            </h2>
            <p className="max-w-xl text-sm text-blue-100/80 sm:text-base">
              从通用认知、领域办案到文书流转，平台以毛玻璃风格承载核心能力，为民警提供沉浸式、可信赖的高效工作体验。
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link
              to="/stats"
              className="group inline-flex items-center gap-2 rounded-2xl bg-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/25"
            >
              运行态势总览
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/tools/general-ai"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-5 py-3 font-semibold text-blue-100 transition hover:border-white/60"
            >
              即刻调度智能体
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="grid gap-4">
          {generalAiModules.map((module) => {
            const Icon = module.icon;
            return (
              <Link
                key={module.title}
                to={module.link}
                className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/10 p-5 shadow-xl shadow-black/10 backdrop-blur transition hover:-translate-y-1 hover:bg-white/20"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{module.title}</h3>
                  <p className="mt-2 text-sm text-blue-100/80">{module.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-blue-100/60">
                  {module.metrics.map((item) => (
                    <span key={item} className="rounded-full border border-white/15 px-3 py-1">
                      {item}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mb-14">
        <div className="mb-6 flex items-end justify-between text-white">
          <div>
            <h3 className="text-2xl font-semibold">案件侦办矩阵</h3>
            <p className="mt-2 text-sm text-blue-100/70">六大领域协同运转，打造从发现到固证的全流程智能闭环。</p>
          </div>
          <Link to="/tools/general-case" className="text-xs font-medium uppercase tracking-[0.3em] text-blue-200/70">
            全部智能体
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {caseCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.title}
                to={category.link}
                className="group flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-xl shadow-black/20 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/30"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold">{category.title}</h4>
                    <p className="mt-1 text-xs uppercase tracking-[0.25em] text-blue-100/60">Investigation Suite</p>
                  </div>
                </div>
                <p className="text-sm text-blue-100/80">{category.description}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-100/70">
                  进入工作台
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mb-14 grid gap-6 lg:grid-cols-[1.1fr,1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/8 p-8 text-white shadow-2xl shadow-black/20 backdrop-blur-2xl">
          <h3 className="text-2xl font-semibold">公文板块</h3>
          <p className="mt-3 max-w-xl text-sm text-blue-100/70">
            全面覆盖经侦公文写作、材料审核与质量评估，为跨部门协同提供一致的语言与格式规范。
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {documentModules.map((module) => {
              const Icon = module.icon;
              return (
                <Link
                  key={module.title}
                  to={module.link}
                  className="group flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/10 p-6 transition hover:-translate-y-1 hover:border-white/25"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold">{module.title}</h4>
                    <p className="mt-2 text-sm text-blue-100/80">{module.description}</p>
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-blue-100/60">
                    {module.highlights.map((item) => (
                      <span key={item} className="rounded-full border border-white/15 px-3 py-1">
                        {item}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 text-white shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <h4 className="text-lg font-semibold">实时通知</h4>
            <p className="mt-2 text-sm text-blue-100/70">智能体更新、模型迭代与运维公告统一呈现。</p>
            <ul className="mt-6 space-y-4 text-sm text-blue-100/80">
              <li className="rounded-2xl bg-white/5 p-4">
                新增跨域关联分析模型，支持跨省案件协同研判。
              </li>
              <li className="rounded-2xl bg-white/5 p-4">
                文档审核模块上线敏感字段自动遮蔽能力。
              </li>
              <li className="rounded-2xl bg-white/5 p-4">
                运行态势大屏新增算力弹性调度监控指标。
              </li>
            </ul>
          </div>
          <Link
            to="/stats"
            className="flex flex-1 flex-col justify-between rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-6 text-white shadow-2xl shadow-black/30 backdrop-blur-2xl transition hover:-translate-y-1"
          >
            <div>
              <h4 className="text-lg font-semibold">运维与支撑</h4>
              <p className="mt-2 text-sm text-blue-100/70">浏览使用统计、环境部署与安全合规状态。</p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-100/70">
              查看态势
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <div className="mb-6 text-white">
          <h3 className="text-2xl font-semibold">经侦专属领域</h3>
          <p className="mt-2 text-sm text-blue-100/70">沉淀经侦办案经验，提供可落地的模型与工作指引。</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {econExclusive.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                to={item.link}
                className="group flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/8 p-6 text-white shadow-xl shadow-black/20 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-white/25"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="mt-2 text-sm text-blue-100/80">{item.description}</p>
                </div>
                <span className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-100/70">
                  打开模块
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
