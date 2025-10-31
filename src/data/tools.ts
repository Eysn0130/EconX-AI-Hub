import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  BadgeDollarSign,
  BarChart3,
  Bot,
  Building,
  ChartColumn,
  Chrome,
  Compass,
  FileText,
  Landmark,
  PieChart,
  Receipt,
  Scale,
  SearchCheck,
  Shield,
  Store,
  UserCheck,
  Users
} from 'lucide-react';

export type ToolCategory = 'general' | 'domain' | 'tool' | 'analysis' | 'support' | 'legacy';

export interface ToolDefinition {
  slug: string;
  path: string;
  title: string;
  subtitle?: string;
  description: string;
  icon: LucideIcon;
  iframeUrl?: string;
  external?: boolean;
  category: ToolCategory;
}

export const toolDefinitions: ToolDefinition[] = [
  {
    slug: 'general-ai',
    path: '/tools/general-ai',
    title: '通用AI助手',
    subtitle: 'General AI Assistant',
    description: '提供全局智能问答、智能检索与对话支撑能力，辅助日常研判与知识查询。',
    icon: Bot,
    iframeUrl: 'http://83.103.25.178:4001/chat/TOQdASK1B8S142VW',
    category: 'general'
  },
  {
    slug: 'general-case',
    path: '/tools/general-case',
    title: '通用案件研判',
    subtitle: 'Universal Case Intelligence',
    description: '聚合案件研判模型，对案件流程、要素、风险点进行全流程分析。',
    icon: SearchCheck,
    iframeUrl: 'http://83.103.25.178:4001/chat/L0TiiXg6tONQmweS',
    category: 'general'
  },
  {
    slug: 'doc-writing',
    path: '/tools/doc-writing',
    title: '公文写作助手',
    subtitle: 'Official Document Copilot',
    description: '根据模板快速生成侦办类公文、请示、汇报材料并自动完成语言润色。',
    icon: FileText,
    iframeUrl: 'http://83.103.25.178:4001/chat/VksDHAcG7VjVyT43',
    category: 'general'
  },
  {
    slug: 'data-analysis',
    path: '/tools/data-analysis',
    title: '数据分析',
    subtitle: 'Advanced Data Analytics',
    description: '整合多源数据分析能力，支持复杂指标、趋势和关联网络的可视化探索。',
    icon: PieChart,
    iframeUrl: 'http://83.103.25.178:4001/chatbot/3sgnLtuMACfC2OW7',
    category: 'tool'
  },
  {
    slug: 'finance-case',
    path: '/tools/finance-case',
    title: '金融领域',
    subtitle: 'Finance Investigation Suite',
    description: '覆盖银行、支付等金融场景的异常交易监测、风险预警与案件辅导。',
    icon: Landmark,
    iframeUrl: 'http://83.103.25.178:4001/chat/X3l4lUpF0hFQ3gWx',
    category: 'domain'
  },
  {
    slug: 'securities-case',
    path: '/tools/securities-case',
    title: '证券领域',
    subtitle: 'Securities Compliance Lab',
    description: '聚焦证券市场操纵、内幕交易等场景的实时研判与策略建议。',
    icon: BarChart3,
    iframeUrl: 'http://83.103.25.178:4001/chat/Bq43AhPcW1JR3Snm',
    category: 'domain'
  },
  {
    slug: 'tax-case',
    path: '/tools/tax-case',
    title: '涉税领域',
    subtitle: 'Tax Intelligence Hub',
    description: '对票据流、税负异常进行识别，提供企业税务风险画像与处置建议。',
    icon: Receipt,
    iframeUrl: 'http://83.103.25.178:4001/chat/p6sCM9dIJx35sRaR',
    category: 'domain'
  },
  {
    slug: 'trade-case',
    path: '/tools/trade-case',
    title: '商贸领域',
    subtitle: 'Trade Insight Center',
    description: '监测商贸行为异常与串货、洗售等风险，辅助线索研判。',
    icon: Store,
    iframeUrl: 'http://83.103.25.178:4001/chat/Q7KlbWIxAaXAgDMf',
    category: 'domain'
  },
  {
    slug: 'money-laundering',
    path: '/tools/money-laundering',
    title: '反洗钱领域',
    subtitle: 'Anti-Money Laundering Studio',
    description: '跟踪异常资金链路，识别高危账户集群，提供全链条分析。',
    icon: BadgeDollarSign,
    iframeUrl: 'http://83.103.25.178:4001/chat/SKZRcbbEgpPgqoX2',
    category: 'domain'
  },
  {
    slug: 'evidence-analysis',
    path: '/tools/evidence-analysis',
    title: '金析为证',
    subtitle: 'Evidence Intelligence',
    description: '提供证据提取、分类和证据链条梳理能力，提升案件材料质效。',
    icon: Scale,
    iframeUrl: 'http://83.103.25.178:4001/chat/ESs5z9AFW2vdxJWF',
    category: 'tool'
  },
  {
    slug: 'case-guide',
    path: '/tools/case-guide',
    title: '办案指引',
    subtitle: 'Investigation Playbook',
    description: '内置制度规范、流程指南和典型案例，实现标准化办案指引。',
    icon: Compass,
    iframeUrl: 'http://83.103.25.178:4001/chat/O8OsbcdjA1iwhwEU',
    category: 'tool'
  },
  {
    slug: 'person-info-analysis',
    path: '/tools/person-info-analysis',
    title: '人员基础信息分析',
    subtitle: 'Person Intelligence Profile',
    description: '整合多维人员信息，构建背景画像与关系网络，辅助锁定关键对象。',
    icon: UserCheck,
    iframeUrl: 'http://83.103.25.178:4001/chatbot/W2kHzre9JVaQyll2',
    category: 'analysis'
  },
  {
    slug: 'police-data-analysis',
    path: '/tools/police-data-analysis',
    title: '警情数据分析',
    subtitle: 'Police Intelligence Analytics',
    description: '通过警情趋势、热点区域与案件类型分析，为指挥调度提供支撑。',
    icon: Activity,
    iframeUrl: 'http://localhost:8080/chat/c9gRwU5bbPfMIbyK',
    category: 'analysis'
  },
  {
    slug: 'case-helper',
    path: '/tools/case-helper',
    title: '案件协同助手',
    subtitle: 'Case Collaboration Assistant',
    description: '面向合成作战的多角色协同助手，提供随身化案件跟进能力。',
    icon: Users,
    iframeUrl: 'http://localhost:8080/chatbot/c9gRwU5bbPfMIbyK',
    category: 'analysis'
  },
  {
    slug: 'person-analysis',
    path: '/tools/person-analysis',
    title: '重点人员研判',
    subtitle: 'Key Person Insight',
    description: '以重点对象为核心，提供轨迹还原、同行分析与行为模式研判。',
    icon: Shield,
    iframeUrl: 'http://10.160.26.176:3008/chat/share?shareId=1gxy7pzbpg4w4qa0qenrwj0w',
    category: 'analysis'
  },
  {
    slug: 'stats',
    path: '/stats',
    title: '系统使用统计',
    subtitle: 'Usage Analytics',
    description: '实时掌握平台活跃度、工具使用频次与绩效指标，为迭代提供依据。',
    icon: ChartColumn,
    category: 'support'
  },
  {
    slug: 'chrome-installer',
    path: '/support/chrome-installer',
    title: 'Chrome 安装指南',
    subtitle: 'Chrome Installation Guide',
    description: '提供离线环境下的Chrome浏览器安装、配置与常见问题处理步骤。',
    icon: Chrome,
    category: 'support'
  },
  {
    slug: 'legacy-guizhou',
    path: '/legacy/guizhou-police-platform',
    title: '贵州公安大数据惠警平台',
    subtitle: 'Legacy Portal',
    description: '保留历史登录界面，供比对现有系统风格与交互升级情况。',
    icon: Building,
    category: 'legacy',
    external: false
  }
];

export const navigationSections: Array<{ key: ToolCategory; title: string }> = [
  { key: 'general', title: '通用功能' },
  { key: 'domain', title: '专业领域' },
  { key: 'tool', title: '辅助工具' },
  { key: 'analysis', title: '研判工具' },
  { key: 'support', title: '运维支持' },
  { key: 'legacy', title: '历史界面' }
];
