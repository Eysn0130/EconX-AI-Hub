import type { LucideIcon } from 'lucide-react';
import {
  BriefcaseBusiness,
  Landmark,
  MessageSquare,
  Network,
  Shield,
  ShieldCheck,
  Workflow,
  FileSpreadsheet,
  UserSearch
} from 'lucide-react';
import { toolDefinitions } from './tools';

export interface DashboardStat {
  label: string;
  value: string;
  trend: string;
  icon: LucideIcon;
}

export interface WorkflowCard {
  title: string;
  description: string;
  steps: string[];
  icon: LucideIcon;
  link: string;
}

export interface InsightCard {
  title: string;
  highlight: string;
  description: string;
  icon: LucideIcon;
}

export const stats: DashboardStat[] = [
  {
    label: '本周智能对话',
    value: '3,482',
    trend: '较上周提升 18%',
    icon: MessageSquare
  },
  {
    label: '案件研判任务',
    value: '276',
    trend: '平均时效缩短 32%',
    icon: BriefcaseBusiness
  },
  {
    label: '活跃民警',
    value: '1,205',
    trend: '日均活跃 312 人',
    icon: ShieldCheck
  }
];

export const workflows: WorkflowCard[] = [
  {
    title: '金融犯罪专案',
    description: '从异常资金流入手，快速完成账户关联、交易聚合与预警策略输出。',
    steps: ['导入交易流水', '识别异常群体', '生成研判报告'],
    icon: Landmark,
    link: '/tools/finance-case'
  },
  {
    title: '涉税案件快办',
    description: '对可疑发票与企业行为进行比对，自动生成税务风险画像。',
    steps: ['导入票据', '识别风险企业', '联动处置建议'],
    icon: FileSpreadsheet,
    link: '/tools/tax-case'
  },
  {
    title: '重点人员研判',
    description: '整合轨迹、通联、资金等多源信息，输出动态风险预警。',
    steps: ['调取数据', '智能汇总', '下发预警'],
    icon: UserSearch,
    link: '/tools/person-analysis'
  }
];

export const insights: InsightCard[] = [
  {
    title: '智能研判模型升级',
    highlight: '新增 12 个跨域知识图谱节点',
    description: '覆盖税务、金融、贸易等场景的高频案件类型，实现一键调度多模型协同。',
    icon: Network
  },
  {
    title: '案件全流程闭环',
    highlight: '新增 6 条协同办理流程模版',
    description: '结合线索、研判、流转与归档环节，统一任务视图与责任人提醒。',
    icon: Workflow
  },
  {
    title: '数据安全合规',
    highlight: '通过省级等保三级测评',
    description: '平台底座增加细粒度审计与全量链路追踪能力，保障涉案数据安全可控。',
    icon: Shield
  }
];

export const featuredTools = toolDefinitions.filter((tool) =>
  ['general-ai', 'general-case', 'doc-writing', 'data-analysis'].includes(tool.slug)
);

export const supportTools = toolDefinitions.filter((tool) => tool.category === 'support');
