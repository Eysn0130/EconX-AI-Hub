# 经智 AI 智能体工作平台

基于 [Vite](https://vitejs.dev/) + React + Tailwind CSS 构建的经济犯罪智能体工作台。项目将原有的分散 HTML 页面进行重构，统一为模块化的单页应用，提供更好的可维护性与扩展性。

## 主要特性

- 🧭 **统一导航与布局**：通过 `Layout`、`Sidebar`、`TopBar` 组件复用顶栏与侧边导航，保证各工具页的一致体验。
- 🧠 **智能体矩阵**：`/tools/:slug` 路由根据 `src/data/tools.ts` 中的配置自动生成 iframe 工具页，覆盖通用、专业、研判与运维场景。
- 📊 **运行态势监控**：`/stats` 页面基于 Chart.js 展示会话趋势、模块占比、时段活跃度与满意度指标。
- 🔐 **统一认证入口**：`/login` 页面提供多因子认证说明，强化登录入口的视觉与交互设计。
- 🛠️ **运维支撑**：`/support/chrome-installer`、`/legacy/guizhou-police-platform` 汇总浏览器部署与历史系统信息。

## 启动方式

```bash
npm install
npm run dev
```

构建发布：

```bash
npm run build
```

## 目录结构

```
├── public/                # 静态资源（favicon 等）
├── src/
│   ├── components/        # 布局与导航组件
│   ├── data/              # 智能体、仪表盘数据配置
│   ├── pages/             # 各业务页面（Dashboard、ToolPage 等）
│   ├── styles/            # 全局样式（Tailwind）
│   └── main.tsx           # 应用入口
├── index.html             # Vite 模板入口
├── package.json
├── tsconfig*.json
└── vite.config.ts
```

## 数据配置

- 智能体定义集中在 `src/data/tools.ts`，可维护标题、描述、图标、iframe 地址等信息；侧边导航与首页卡片均从该配置派生。
- 仪表盘与统计页的演示数据位于 `src/data/dashboard.ts` 及 `src/pages/Stats.tsx`，可根据真实接口替换。

## 浏览器兼容

默认使用现代浏览器特性。若需兼容旧环境，可在 `vite.config.ts` 中接入 `@vitejs/plugin-legacy` 或按需引入 polyfill。
