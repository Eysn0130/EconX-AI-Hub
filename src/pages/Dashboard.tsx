import {
  ArrowUpRight,
  Banknote,
  BrainCircuit,
  CircleDollarSign,
  CircuitBoard,
  FileBadge2,
  Gem,
  LineChart,
  Navigation2,
  PackageSearch,
  Radar,
  ReceiptText,
  ScanSearch,
  ScrollText,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Reveal from '../components/Reveal';

type IconVisual = {
  iconGradient: string;
  iconBeam: string;
  iconRing: string;
};

type ModuleBase = IconVisual & {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
};

type GeneralModule = ModuleBase & {
  metrics: string[];
};

type DocumentModule = ModuleBase & {
  highlights: string[];
};

const FuturisticIcon = ({ icon: Icon, gradient, beam, ring }: { icon: LucideIcon; gradient: string; beam: string; ring: string }) => {
  const crestStyle: CSSProperties = { background: gradient };
  const beamStyle: CSSProperties = { background: beam };
  const ringStyle: CSSProperties = { background: ring };

  return (
    <span className="futuristic-icon" style={crestStyle}>
      <span className="futuristic-icon__beam" style={beamStyle} />
      <span className="futuristic-icon__ring" style={ringStyle} />
      <span className="futuristic-icon__shine" />
      <Icon className="futuristic-icon__glyph" />
    </span>
  );
};

const generalAiModules: GeneralModule[] = [
  {
    title: '通用AI中枢',
    description: '统一编排知识库、向量检索与语义推理，提供全天候的政务问答支持。',
    icon: BrainCircuit,
    link: '/tools/general-ai',
    metrics: ['知识图谱覆盖 28W+ 条目', '行业语料持续增补'],
    iconGradient: 'linear-gradient(135deg, #6d4dff, #2cb1bc, #00c6fb)',
    iconBeam: 'linear-gradient(145deg, rgba(109, 77, 255, 0.45), rgba(44, 177, 188, 0.32), rgba(0, 198, 251, 0.05))',
    iconRing: 'radial-gradient(circle, rgba(109, 77, 255, 0.45), transparent 70%)'
  },
  {
    title: '多模态洞察',
    description: '实现文本、图像、表格的跨模态理解，快速抽取案件关键要素。',
    icon: ScanSearch,
    link: '/tools/general-case',
    metrics: ['复杂意图识别率 93%', '自动摘要 4s 完成'],
    iconGradient: 'linear-gradient(140deg, #3b82f6, #8b5cf6, #22d3ee)',
    iconBeam: 'linear-gradient(145deg, rgba(59, 130, 246, 0.42), rgba(139, 92, 246, 0.32), rgba(34, 211, 238, 0.1))',
    iconRing: 'radial-gradient(circle, rgba(139, 92, 246, 0.45), transparent 68%)'
  },
  {
    title: '智能联动',
    description: '与公安网各业务系统互通，按需调度模型算力，守护流程安全合规。',
    icon: CircuitBoard,
    link: '/stats',
    metrics: ['零信任防护策略', '实时算力调度看板'],
    iconGradient: 'linear-gradient(140deg, #0ea5e9, #14b8a6, #60a5fa)',
    iconBeam: 'linear-gradient(150deg, rgba(14, 165, 233, 0.4), rgba(20, 184, 166, 0.32), rgba(96, 165, 250, 0.08))',
    iconRing: 'radial-gradient(circle, rgba(14, 165, 233, 0.4), transparent 70%)'
  }
];

const caseCategories: ModuleBase[] = [
  {
    title: '通用领域案件侦办',
    description: '覆盖全流程案件管理，支持线索研判、人员画像与风险推送。',
    icon: ShieldCheck,
    link: '/tools/general-case',
    iconGradient: 'linear-gradient(140deg, #2563eb, #60a5fa, #4ade80)',
    iconBeam: 'linear-gradient(140deg, rgba(37, 99, 235, 0.38), rgba(96, 165, 250, 0.28), rgba(74, 222, 128, 0.12))',
    iconRing: 'radial-gradient(circle, rgba(37, 99, 235, 0.45), transparent 70%)'
  },
  {
    title: '金融领域',
    description: '聚焦银行、支付、信贷全链条数据，实现异常交易自动识别。',
    icon: Banknote,
    link: '/tools/finance-case',
    iconGradient: 'linear-gradient(145deg, #22d3ee, #34d399, #0ea5e9)',
    iconBeam: 'linear-gradient(145deg, rgba(34, 211, 238, 0.38), rgba(52, 211, 153, 0.28), rgba(14, 165, 233, 0.08))',
    iconRing: 'radial-gradient(circle, rgba(34, 211, 238, 0.4), transparent 70%)'
  },
  {
    title: '证劵领域',
    description: '对接交易所与券商数据，提供行情对照与操纵识别策略。',
    icon: LineChart,
    link: '/tools/securities-case',
    iconGradient: 'linear-gradient(145deg, #8b5cf6, #6366f1, #22d3ee)',
    iconBeam: 'linear-gradient(150deg, rgba(139, 92, 246, 0.42), rgba(99, 102, 241, 0.34), rgba(34, 211, 238, 0.1))',
    iconRing: 'radial-gradient(circle, rgba(99, 102, 241, 0.4), transparent 70%)'
  },
  {
    title: '涉税领域',
    description: '串联企业税控、发票与工商信息，生成税务风险热力图。',
    icon: ReceiptText,
    link: '/tools/tax-case',
    iconGradient: 'linear-gradient(140deg, #f97316, #fb7185, #6366f1)',
    iconBeam: 'linear-gradient(150deg, rgba(249, 115, 22, 0.42), rgba(251, 113, 133, 0.32), rgba(99, 102, 241, 0.1))',
    iconRing: 'radial-gradient(circle, rgba(249, 115, 22, 0.45), transparent 70%)'
  },
  {
    title: '商贸领域',
    description: '监测货物流向与交易行为，定位批量串货、虚假贸易疑点。',
    icon: PackageSearch,
    link: '/tools/trade-case',
    iconGradient: 'linear-gradient(150deg, #0ea5e9, #6366f1, #ec4899)',
    iconBeam: 'linear-gradient(150deg, rgba(14, 165, 233, 0.4), rgba(99, 102, 241, 0.32), rgba(236, 72, 153, 0.12))',
    iconRing: 'radial-gradient(circle, rgba(99, 102, 241, 0.35), transparent 70%)'
  },
  {
    title: '反洗钱领域',
    description: '从账户关系、跨境资金与多级分账识别可疑链条。',
    icon: CircleDollarSign,
    link: '/tools/money-laundering',
    iconGradient: 'linear-gradient(140deg, #14b8a6, #22d3ee, #4ade80)',
    iconBeam: 'linear-gradient(145deg, rgba(20, 184, 166, 0.42), rgba(34, 211, 238, 0.28), rgba(74, 222, 128, 0.12))',
    iconRing: 'radial-gradient(circle, rgba(20, 184, 166, 0.45), transparent 70%)'
  }
];

const documentModules: DocumentModule[] = [
  {
    title: '公文写作',
    description: '结合规范模板与行业语料，一键生成请示、报告与总结。',
    icon: ScrollText,
    link: '/tools/doc-writing',
    highlights: ['语气风格自动匹配', '多级审批留痕'],
    iconGradient: 'linear-gradient(135deg, #6366f1, #3b82f6, #22d3ee)',
    iconBeam: 'linear-gradient(145deg, rgba(99, 102, 241, 0.42), rgba(59, 130, 246, 0.32), rgba(34, 211, 238, 0.12))',
    iconRing: 'radial-gradient(circle, rgba(99, 102, 241, 0.4), transparent 70%)'
  },
  {
    title: '文档审核',
    description: '智能校对敏感字段、格式规范与数据准确性，实现提交即校验。',
    icon: FileBadge2,
    link: '/tools/doc-writing',
    highlights: ['历史版本对比', '引用溯源一键查看'],
    iconGradient: 'linear-gradient(140deg, #22d3ee, #34d399, #38bdf8)',
    iconBeam: 'linear-gradient(150deg, rgba(34, 211, 238, 0.4), rgba(52, 211, 153, 0.3), rgba(56, 189, 248, 0.12))',
    iconRing: 'radial-gradient(circle, rgba(34, 211, 238, 0.4), transparent 70%)'
  }
];

const econExclusive: ModuleBase[] = [
  {
    title: '金析为证',
    description: '快速完成交易流水聚合、证据链勾勒与图谱呈现。',
    icon: Gem,
    link: '/tools/evidence-analysis',
    iconGradient: 'linear-gradient(145deg, #f59e0b, #fb7185, #8b5cf6)',
    iconBeam: 'linear-gradient(150deg, rgba(245, 158, 11, 0.38), rgba(251, 113, 133, 0.32), rgba(139, 92, 246, 0.12))',
    iconRing: 'radial-gradient(circle, rgba(245, 158, 11, 0.45), transparent 70%)'
  },
  {
    title: '办案指引',
    description: '沉淀制度规程与典型案例，办案过程随时调取标准作业卡。',
    icon: Navigation2,
    link: '/tools/case-guide',
    iconGradient: 'linear-gradient(145deg, #22d3ee, #6366f1, #ef4444)',
    iconBeam: 'linear-gradient(150deg, rgba(34, 211, 238, 0.38), rgba(99, 102, 241, 0.32), rgba(239, 68, 68, 0.12))',
    iconRing: 'radial-gradient(circle, rgba(34, 211, 238, 0.4), transparent 70%)'
  },
  {
    title: '数据分析',
    description: '覆盖案件态势监测、可疑群体识别、专题研判等高级分析能力。',
    icon: Radar,
    link: '/tools/data-analysis',
    iconGradient: 'linear-gradient(150deg, #0ea5e9, #22d3ee, #4ade80)',
    iconBeam: 'linear-gradient(150deg, rgba(14, 165, 233, 0.4), rgba(34, 211, 238, 0.3), rgba(74, 222, 128, 0.12))',
    iconRing: 'radial-gradient(circle, rgba(14, 165, 233, 0.4), transparent 70%)'
  }
];

export default function Dashboard() {
  const [primaryModule, ...supportModules] = generalAiModules;
  const PrimaryIcon = primaryModule?.icon;

  return (
    <Layout title="经智AI智能体工作平台" subtitle="Economic Crime Intelligence Platform" showBack={false}>
      <Reveal
        as="section"
        className="mb-12 grid gap-10 rounded-[2.5rem] border border-slate-100 bg-white p-10 text-slate-900 shadow-[0_40px_120px_rgba(15,23,42,0.08)] lg:grid-cols-[1.35fr,1fr]"
      >
        <div className="flex flex-col justify-between gap-10">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 shadow-sm">
              <Sparkles className="h-4 w-4 text-police-blue" />
              Intelligence Fabric
            </span>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              一站式经侦智能体集群，连接线索、侦查与指挥的全链路协作中心
            </h2>
            <p className="max-w-xl text-sm text-slate-600 sm:text-base">
              从通用认知、领域办案到文书流转，平台以毛玻璃风格承载核心能力，为民警提供沉浸式、可信赖的高效工作体验。
            </p>
          </div>
          <div className="grid gap-4 text-sm sm:grid-cols-2">
            {supportModules.map((module, index) => {
              const Icon = module.icon;
              const tone =
                index === 0
                  ? 'from-[#8b5cf6]/15 via-[#22d3ee]/12 to-[#2563eb]/15'
                  : 'from-[#34d399]/15 via-[#0ea5e9]/12 to-[#22d3ee]/15';

              return (
                <Reveal key={module.title} delay={0.08 * (index + 1)} className="h-full">
                  <Link
                    to={module.link}
                    className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-slate-100 bg-white p-5 text-slate-700 shadow-[0_28px_80px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:text-police-blue"
                  >
                    <span
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tone} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                    />
                    <div className="relative flex items-center gap-3">
                      <FuturisticIcon icon={Icon} gradient={module.iconGradient} beam={module.iconBeam} ring={module.iconRing} />
                      <div className="flex flex-col">
                        <h3 className="text-base font-semibold text-slate-900">{module.title}</h3>
                        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-slate-400">Multimodal Intelligence</span>
                      </div>
                    </div>
                    <p className="relative text-sm text-slate-500">{module.description}</p>
                    <div className="relative mt-auto flex flex-wrap gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-slate-400">
                      {module.metrics.map((item) => (
                        <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1">
                          {item}
                        </span>
                      ))}
                    </div>
                    <span className="relative mt-2 inline-flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-slate-500">
                      进入模块
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link
              to="/stats"
              className="group inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-semibold text-police-blue shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              运行态势总览
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/tools/general-ai"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-5 py-3 font-semibold text-slate-600 transition hover:-translate-y-0.5 hover:text-police-blue"
            >
              即刻调度智能体
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        {primaryModule && PrimaryIcon && (
          <Reveal delay={0.05} className="h-full">
            <Link
              to={primaryModule.link}
              className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-[2.2rem] border border-slate-100 bg-white p-8 text-slate-700 shadow-[0_36px_110px_rgba(15,23,42,0.1)] transition-transform duration-500 hover:-translate-y-1 hover:text-police-blue"
            >
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/15 via-[#22d3ee]/12 to-[#6366f1]/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-center gap-4">
                <FuturisticIcon
                  icon={PrimaryIcon}
                  gradient={primaryModule.iconGradient}
                  beam={primaryModule.iconBeam}
                  ring={primaryModule.iconRing}
                />
                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">General Intelligence Hub</span>
                  <h3 className="text-2xl font-semibold text-slate-900">{primaryModule.title}</h3>
                </div>
              </div>
              <p className="relative text-base text-slate-500">{primaryModule.description}</p>
              <div className="relative grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                {primaryModule.metrics.map((item) => (
                  <span key={item} className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400/80" />
                    {item}
                  </span>
                ))}
              </div>
              <span className="relative mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">
                调度中枢
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        )}
      </Reveal>

      <Reveal as="section" className="mb-14">
        <div className="mb-6 flex flex-col gap-4 text-slate-900 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-2xl font-semibold">案件侦办矩阵</h3>
            <p className="mt-2 text-sm text-slate-500">六大领域协同运转，打造从发现到固证的全流程智能闭环。</p>
          </div>
          <Link to="/tools/general-case" className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400 hover:text-police-blue">
            全部智能体
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {caseCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.title} delay={0.05 * index} className="h-full">
                <Link
                  to={category.link}
                  className="group flex h-full flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-6 text-slate-700 shadow-[0_30px_90px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:text-police-blue"
                >
                  <div className="flex items-center gap-4">
                    <FuturisticIcon icon={Icon} gradient={category.iconGradient} beam={category.iconBeam} ring={category.iconRing} />
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">{category.title}</h4>
                      <p className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-400">Investigation Suite</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500">{category.description}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 group-hover:text-police-blue">
                    进入工作台
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Reveal>

      <Reveal as="section" className="mb-14 grid gap-6 lg:grid-cols-[1.1fr,1fr]">
        <div className="rounded-[2rem] border border-slate-100 bg-white p-8 text-slate-900 shadow-[0_36px_110px_rgba(15,23,42,0.1)]">
          <h3 className="text-2xl font-semibold">公文板块</h3>
          <p className="mt-3 max-w-xl text-sm text-slate-500">
            全面覆盖经侦公文写作、材料审核与质量评估，为跨部门协同提供一致的语言与格式规范。
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {documentModules.map((module, index) => {
              const Icon = module.icon;
              return (
                <Reveal key={module.title} delay={0.08 * index} className="h-full">
                  <Link
                    to={module.link}
                    className="group flex h-full flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-6 text-slate-600 shadow-[0_24px_70px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:text-police-blue"
                  >
                    <FuturisticIcon icon={Icon} gradient={module.iconGradient} beam={module.iconBeam} ring={module.iconRing} />
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">{module.title}</h4>
                      <p className="mt-2 text-sm text-slate-500">{module.description}</p>
                    </div>
                    <div className="mt-auto flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
                      {module.highlights.map((item) => (
                        <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1">
                          {item}
                        </span>
                      ))}
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Reveal className="rounded-[2rem] border border-slate-100 bg-white p-6 text-slate-900 shadow-[0_30px_90px_rgba(15,23,42,0.08)]" delay={0.1}>
            <h4 className="text-lg font-semibold">实时通知</h4>
            <p className="mt-2 text-sm text-slate-500">智能体更新、模型迭代与运维公告统一呈现。</p>
            <ul className="mt-6 space-y-4 text-sm text-slate-600">
              <li className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                新增跨域关联分析模型，支持跨省案件协同研判。
              </li>
              <li className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                文档审核模块上线敏感字段自动遮蔽能力。
              </li>
              <li className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                运行态势大屏新增算力弹性调度监控指标。
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.18} className="h-full">
            <Link
              to="/stats"
              className="flex h-full flex-col justify-between rounded-[2rem] border border-slate-100 bg-white p-6 text-slate-700 shadow-[0_30px_90px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:text-police-blue"
            >
              <div>
                <h4 className="text-lg font-semibold">运维与支撑</h4>
                <p className="mt-2 text-sm text-slate-500">浏览使用统计、环境部署与安全合规状态。</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                查看态势
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        </div>
      </Reveal>

      <Reveal as="section" className="mb-10">
        <div className="mb-6 text-slate-900">
          <h3 className="text-2xl font-semibold">经侦专属领域</h3>
          <p className="mt-2 text-sm text-slate-500">沉淀经侦办案经验，提供可落地的模型与工作指引。</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {econExclusive.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={0.08 * index} className="h-full">
                <Link
                  to={item.link}
                  className="group flex h-full flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-6 text-slate-700 shadow-[0_32px_95px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:text-police-blue"
                >
                  <FuturisticIcon icon={Icon} gradient={item.iconGradient} beam={item.iconBeam} ring={item.iconRing} />
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                    <p className="mt-2 text-sm text-slate-500">{item.description}</p>
                  </div>
                  <span className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 group-hover:text-police-blue">
                    打开模块
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Reveal>
    </Layout>
  );
}
