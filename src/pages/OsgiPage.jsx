import React from 'react';
import LifecycleTimeline from '../components/LifecycleTimeline';
import DependencyDimensions from '../components/DependencyDimensions';
import ScenarioCards from '../components/ScenarioCards';
import { lifecycleData, dependencyDimensions, scenariosData } from '../data/osgiData';
import { TerminalSquare } from 'lucide-react';

export default function OsgiPage() {
    return (
        <div className="max-w-5xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Page Header */}
            <header className="space-y-4 py-8">
                <div className="flex items-center gap-3 text-amber-500 mb-2">
                    <div className="h-0.5 w-12 bg-amber-500"></div>
                    <span className="text-sm font-bold tracking-widest uppercase">Priority 1</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-stone-100 tracking-tight">
                    OSGi <span className="text-amber-500">生命週期</span> 與 <span className="text-amber-500">依賴管理</span>
                </h1>
                <p className="text-xl text-stone-400 max-w-3xl leading-relaxed">
                    理解 OpenEMS 模組的生死與底線。掌握 Declarative Services (DS) 設定，確保服務之間的依賴關係穩定且可預測。
                </p>
            </header>

            <LifecycleTimeline data={lifecycleData} />
            <DependencyDimensions data={dependencyDimensions} />
            <ScenarioCards data={scenariosData} />
        </div>
    );
}
