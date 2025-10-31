import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ToolPage from './pages/ToolPage';
import Login from './pages/Login';
import Stats from './pages/Stats';
import ChromeInstaller from './pages/ChromeInstaller';
import LegacyGuizhou from './pages/LegacyGuizhou';
import Layout from './components/Layout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/support/chrome-installer" element={<ChromeInstaller />} />
      <Route path="/legacy/guizhou-police-platform" element={<LegacyGuizhou />} />
      <Route path="/tools/:slug" element={<ToolPage />} />
      <Route
        path="*"
        element={<Layout title="页面不存在" subtitle="404 Not Found" showSidebar={false}>当前访问的链接不存在。</Layout>}
      />
    </Routes>
  );
}
