import React from 'react';
import { Target, Zap, AlertTriangle, ShieldCheck, Link2 } from 'lucide-react';

const icons = [
    <Link2 className="w-5 h-5" />,
    <Zap className="w-5 h-5" />,
    <ShieldCheck className="w-5 h-5" />,
    <Target className="w-5 h-5" />,
    <AlertTriangle className="w-5 h-5" />
];

export default function ScenarioCards({ data }) {
    return (
        <section className="mb-16">
            <div className="flex flex-col gap-2 mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-8 bg-amber-500 rounded-full"></div>
                    <h2 className="text-2xl font-bold tracking-tight text-stone-100">
                        Part 3：核心組合技與真實使用情境
                    </h2>
                </div>
                <p className="text-stone-400 pl-5 text-sm">這是在實戰中最常看到的組合，搭配真實的能源系統情境。</p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {data.map((scenario, index) => (
                    <div key={scenario.id} className="group relative bg-zinc-800/20 rounded-3xl p-6 md:p-8 border border-zinc-700/50 hover:-translate-y-1 hover:border-amber-500/50 transition-all duration-300 shadow-lg overflow-hidden flex flex-col h-full">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors pointer-events-none"></div>

                        <div className="mb-4 flex flex-wrap gap-2 items-center">
                            <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 text-xs font-mono font-bold uppercase tracking-wider">
                                {scenario.setting}
                            </span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-stone-100 mb-3 group-hover:text-amber-400 transition-colors">
                            {scenario.title}
                        </h3>

                        <p className="text-stone-300/90 leading-relaxed mb-6 flex-grow text-[15px]">
                            <span className="font-bold text-stone-300 mr-2">白話文：</span>
                            {scenario.meaning}
                        </p>

                        <div className="mt-auto bg-zinc-900/60 rounded-2xl p-5 border-l-4 border-amber-500 relative overflow-hidden">
                            <div className="absolute -bottom-4 -right-2 text-stone-300/10 w-24 h-24 transform -rotate-12 pointer-events-none">
                                {icons[index % icons.length]}
                            </div>

                            <h4 className="flex items-center gap-2 text-stone-200 font-bold mb-3 z-10 relative text-sm md:text-base">
                                <div className="bg-amber-500/20 p-1.5 inline-flex rounded-lg text-amber-500">
                                    {icons[index % icons.length]}
                                </div>
                                真實情境：{scenario.scenarioName}
                            </h4>
                            <div className="text-stone-400 text-sm leading-relaxed z-10 relative">
                                {scenario.scenarioContext}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
