import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import OsgiPage from './pages/OsgiPage';
import PlaceholderPage from './pages/PlaceholderPage';
import OpenEmsChannelPage from './pages/OpenEmsChannelPage';
import ModbusPage from './pages/ModbusPage';
import EnergyDomainPage from './pages/EnergyDomainPage';
import BuildToolsPage from './pages/BuildToolsPage';

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
              <Route path="/energy-domain" element={<EnergyDomainPage />} />
              <Route path="/build-tools" element={<BuildToolsPage />} />
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
