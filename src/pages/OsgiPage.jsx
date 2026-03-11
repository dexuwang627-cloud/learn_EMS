import React from 'react';
import LifecycleTimeline from '../components/LifecycleTimeline';
import DependencyDimensions from '../components/DependencyDimensions';
import ScenarioCards from '../components/ScenarioCards';
import { lifecycleData, dependencyDimensions, scenariosData } from '../data/osgiData';
import { TerminalSquare } from 'lucide-react';

export default function OsgiPage() {
    return (
        <div className="space-y-8 md:space-y-12 max-w-5xl mx-auto">
            {/* Intro Section */}
            <div className="flex flex-col md:flex-row gap-6 mb-12 items-start md:items-center bg-zinc-800/40 border border-zinc-700/50 p-6 md:p-8 rounded-3xl shadow-sm">
                <div className="bg-zinc-800 p-4 rounded-full text-stone-300 shrink-0 shadow-inner">
                    <TerminalSquare className="w-8 h-8" />
                </div>
                <div>
                    <h2 className="text-lg md:text-xl font-medium text-stone-200 mb-3">這份筆記能學到什麼？</h2>
                    <p className="text-stone-200 text-sm md:text-base leading-relaxed font-medium">
                        主要整理自 OSGi 的生命週期管理與 Declarative Services (DS) 設定方式。
                        重點在於理解模組的 <span className="text-stone-100 font-bold bg-zinc-700/80 px-2 py-0.5 rounded border border-zinc-600">生死（Lifecycle）</span>、
                        它對其它服務的 <span className="text-stone-100 font-bold bg-zinc-700/80 px-2 py-0.5 rounded border border-zinc-600">態度（Policy）</span> 與
                        <span className="text-stone-100 font-bold bg-zinc-700/80 px-2 py-0.5 rounded border border-zinc-600">底線（Cardinality）</span>。
                    </p>
                </div>
            </div>

            <LifecycleTimeline data={lifecycleData} />
            <DependencyDimensions data={dependencyDimensions} />
            <ScenarioCards data={scenariosData} />
        </div>
    );
}
