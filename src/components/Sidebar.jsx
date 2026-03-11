import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, Database, Cpu, LayoutTemplate, Activity, Zap, Wrench, TestTube } from 'lucide-react';

export default function Sidebar() {
    const menuItems = [
        { name: '1. OSGi 生命週期與依賴', path: '/osgi', icon: <BookOpen className="w-5 h-5" /> },
        { name: '2. Channel 系統', path: '/openems-channel', icon: <Activity className="w-5 h-5" /> },
        { name: '3. Modbus 協議模式', path: '/modbus', icon: <Cpu className="w-5 h-5" /> },
        { name: '4. Energy Domain', path: '/energy-domain', icon: <Zap className="w-5 h-5" /> },
        { name: '5. Gradle+BND 建構', path: '/build-tools', icon: <Wrench className="w-5 h-5" /> },
        { name: '6. ComponentTest 框架', path: '/testing', icon: <TestTube className="w-5 h-5" /> },
    ];

    return (
        <nav className="w-64 bg-zinc-950 border-r border-zinc-800 h-screen fixed top-0 left-0 flex flex-col z-50">
            <div className="p-6 border-b border-zinc-800 flex items-center gap-3">
                <div className="bg-amber-500 p-2 rounded-xl text-stone-100 shadow-lg shadow-amber-500/20">
                    <LayoutTemplate className="w-5 h-5" />
                </div>
                <h1 className="text-lg font-bold tracking-tight text-stone-100">Learning EMS</h1>
            </div>

            <div className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
                <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-4 px-2">知識庫導覽</div>
                {menuItems.map(item => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${isActive
                                ? 'bg-amber-500/10 text-amber-500 font-semibold border border-amber-500/20'
                                : 'text-stone-400 hover:bg-zinc-800 hover:text-stone-200 border border-transparent'
                            }`
                        }
                    >
                        {item.icon}
                        <span className="text-sm">{item.name}</span>
                    </NavLink>
                ))}
            </div>

            <div className="p-4 border-t border-zinc-800 text-xs text-stone-600 text-center">
                © 2026 EMS Learning Note
            </div>
        </nav>
    );
}
