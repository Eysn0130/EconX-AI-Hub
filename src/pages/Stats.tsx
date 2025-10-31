import { useMemo, useState } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  TimeScale,
  Tooltip
} from 'chart.js';
import Layout from '../components/Layout';

ChartJS.register(ArcElement, BarElement, CategoryScale, Legend, LinearScale, LineElement, PointElement, TimeScale, Tooltip);

const timeRanges = [
  { key: '7d', label: '近7天' },
  { key: '30d', label: '近30天' },
  { key: '90d', label: '近90天' }
] as const;

type TimeRangeKey = (typeof timeRanges)[number]['key'];

const usageDataset: Record<TimeRangeKey, Array<{ date: string; sessions: number; avgTime: number }>> = {
  '7d': [
    { date: '周一', sessions: 420, avgTime: 16 },
    { date: '周二', sessions: 466, avgTime: 18 },
    { date: '周三', sessions: 512, avgTime: 17 },
    { date: '周四', sessions: 488, avgTime: 19 },
    { date: '周五', sessions: 530, avgTime: 20 },
    { date: '周六', sessions: 310, avgTime: 14 },
    { date: '周日', sessions: 284, avgTime: 12 }
  ],
  '30d': Array.from({ length: 30 }, (_, index) => ({
    date: `${index + 1}日`,
    sessions: 320 + Math.round(Math.sin(index / 4) * 70 + Math.random() * 40),
    avgTime: 15 + Math.round(Math.cos(index / 5) * 4 + Math.random() * 2)
  })),
  '90d': Array.from({ length: 12 }, (_, index) => ({
    date: `第${index + 1}周`,
    sessions: 280 + Math.round(Math.sin(index / 2) * 90 + Math.random() * 30),
    avgTime: 14 + Math.round(Math.cos(index / 3) * 5 + Math.random() * 2)
  }))
};

const moduleUsage = [
  { label: '通用AI助手', value: 38 },
  { label: '通用案件研判', value: 21 },
  { label: '金融领域', value: 12 },
  { label: '涉税领域', value: 9 },
  { label: '警情数据分析', value: 8 },
  { label: '其他', value: 12 }
];

const peakHours = [
  { label: '00:00', value: 40 },
  { label: '03:00', value: 32 },
  { label: '06:00', value: 55 },
  { label: '09:00', value: 110 },
  { label: '12:00', value: 180 },
  { label: '15:00', value: 220 },
  { label: '18:00', value: 190 },
  { label: '21:00', value: 150 }
];

const satisfaction = [
  { label: '响应速度', value: 4.6 },
  { label: '问题解决', value: 4.4 },
  { label: '智能程度', value: 4.2 },
  { label: '可用性', value: 4.5 }
];

export default function Stats() {
  const [timeRange, setTimeRange] = useState<TimeRangeKey>('7d');

  const timeSeries = usageDataset[timeRange];

  const totalSessions = useMemo(() => timeSeries.reduce((sum, item) => sum + item.sessions, 0), [timeSeries]);
  const avgTimeSpent = useMemo(
    () => (timeSeries.length ? (timeSeries.reduce((sum, item) => sum + item.avgTime, 0) / timeSeries.length).toFixed(1) : '0'),
    [timeSeries]
  );

  const moduleData = useMemo(
    () => ({
      labels: moduleUsage.map((item) => item.label),
      datasets: [
        {
          data: moduleUsage.map((item) => item.value),
          backgroundColor: ['#1a3e72', '#4a6fa5', '#0d1f3a', '#e74c3c', '#27ae60', '#95a5a6'],
          borderWidth: 0
        }
      ]
    }),
    []
  );

  const moduleOptions = useMemo(
    () => ({
      plugins: {
        legend: {
          position: 'right' as const,
          labels: {
            usePointStyle: true,
            boxWidth: 12
          }
        }
      }
    }),
    []
  );

  const sessionsTrend = useMemo(
    () => ({
      labels: timeSeries.map((item) => item.date),
      datasets: [
        {
          label: '会话次数',
          data: timeSeries.map((item) => item.sessions),
          backgroundColor: 'rgba(26, 62, 114, 0.25)',
          borderColor: '#1a3e72',
          borderWidth: 2,
          fill: true,
          tension: 0.35,
          pointRadius: 4,
          pointBackgroundColor: '#1a3e72'
        }
      ]
    }),
    [timeSeries]
  );

  const sessionsOptions = useMemo(
    () => ({
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (context: any) => `会话：${context.parsed.y}`
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 100
          }
        }
      }
    }),
    []
  );

  const peakHourData = useMemo(
    () => ({
      labels: peakHours.map((item) => item.label),
      datasets: [
        {
          label: '调用次数',
          data: peakHours.map((item) => item.value),
          backgroundColor: 'rgba(231, 76, 60, 0.2)',
          borderColor: '#e74c3c',
          borderWidth: 2,
          tension: 0.3
        }
      ]
    }),
    []
  );

  const peakHourOptions = useMemo(
    () => ({
      plugins: { legend: { display: false } },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }),
    []
  );

  const satisfactionData = useMemo(
    () => ({
      labels: satisfaction.map((item) => item.label),
      datasets: [
        {
          label: '满意度',
          data: satisfaction.map((item) => item.value),
          backgroundColor: '#27ae60'
        }
      ]
    }),
    []
  );

  const satisfactionOptions = useMemo(
    () => ({
      indexAxis: 'y' as const,
      scales: {
        x: {
          suggestedMin: 0,
          suggestedMax: 5
        }
      }
    }),
    []
  );

  return (
    <Layout title="系统使用统计" subtitle="Operational Insight">
      <section className="mb-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">累计会话</p>
          <p className="mt-3 text-3xl font-semibold text-police-dark">{totalSessions}</p>
          <p className="mt-2 text-sm text-slate-500">选择的时间段内所有智能体的会话总量。</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">平均会话时长</p>
          <p className="mt-3 text-3xl font-semibold text-police-dark">{avgTimeSpent} 分钟</p>
          <p className="mt-2 text-sm text-slate-500">包含问答交互、报告生成等活动的平均耗时。</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">活跃工具</p>
          <p className="mt-3 text-3xl font-semibold text-police-dark">{moduleUsage.length}</p>
          <p className="mt-2 text-sm text-slate-500">纳入统计的智能体数量，覆盖通用、专业、研判场景。</p>
        </div>
      </section>

      <section className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-lg font-semibold text-police-dark">时段分布</h2>
        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1 shadow-inner">
          {timeRanges.map((range) => (
            <button
              key={range.key}
              type="button"
              onClick={() => setTimeRange(range.key)}
              className={`rounded-full px-4 py-1 text-sm font-medium transition ${
                timeRange === range.key ? 'bg-police-blue text-white shadow' : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </section>

      <section className="mb-10 grid gap-8 xl:grid-cols-[2fr,1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-base font-semibold text-police-dark">会话趋势</h3>
          <Line data={sessionsTrend} options={sessionsOptions} height={320} />
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-base font-semibold text-police-dark">模块使用占比</h3>
          <Doughnut data={moduleData} options={moduleOptions} />
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-base font-semibold text-police-dark">小时段活跃度</h3>
          <Line data={peakHourData} options={peakHourOptions} height={300} />
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-base font-semibold text-police-dark">满意度指标</h3>
          <Bar data={satisfactionData} options={satisfactionOptions} height={300} />
        </div>
      </section>
    </Layout>
  );
}
