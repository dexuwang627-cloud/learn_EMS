import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import OsgiPage from './pages/OsgiPage';
import PlaceholderPage from './pages/PlaceholderPage';
import OpenEmsChannelPage from './pages/OpenEmsChannelPage';
import ModbusPage from './pages/ModbusPage';

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-zinc-900 text-stone-200 selection:bg-amber-500/30 selection:text-amber-300">
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 ml-64 min-h-screen">
          <div className="p-8 lg:p-12 lg:pt-16 pb-24">
            <Routes>
              <Route path="/osgi" element={<OsgiPage />} />
              <Route path="/openems-channel" element={<OpenEmsChannelPage />} />
              <Route path="/modbus" element={<ModbusPage />} />
              <Route path="/energy-domain" element={<PlaceholderPage title="這份筆記能學到什麼？" subtitle="即將匯入：ESS、功率方向、Deye 設備等 Energy Domain 判斷邏輯" />} />
              <Route path="/build-tools" element={<PlaceholderPage title="這份筆記能學到什麼？" subtitle="即將匯入：Gradle 與 BND 建構慣例，快速診斷 CI 失敗" />} />
              <Route path="/testing" element={<PlaceholderPage title="這份筆記能學到什麼？" subtitle="即將匯入：ComponentTest 框架，快速驗證修改是否正確" />} />
              <Route path="/database" element={<PlaceholderPage title="這份筆記能學到什麼？" subtitle="即將匯入：Database 連線池與備用資料庫等相關知識" />} />

              {/* Default redirect to /osgi */}
              <Route path="*" element={<Navigate to="/osgi" replace />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
