import React from 'react';
import { GitBranch, Layers } from 'lucide-react';

export default function DependencyDimensions({ data }) {
    return (
        <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-8 bg-amber-500 rounded-full"></div>
                <h2 className="text-2xl font-bold tracking-tight text-stone-100">
                    Part 2：依賴關係 <span className="text-amber-500 font-mono">@Reference</span> 的兩大維度
                </h2>
            </div>

            <p className="text-stone-400 mb-8 border-l-2 border-stone-600 pl-4">
                這是最容易搞混的地方！我們必須把「Policy (態度)」跟「Cardinality (數量)」<span className="text-amber-400 font-medium">分開來看</span>。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-800/30 rounded-3xl p-6 border border-zinc-700/50">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-zinc-800 p-2 text-blue-400 rounded-xl shadow-inner">
                            <GitBranch className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold text-stone-200">Policy <span className="text-stone-400 text-sm font-normal ml-2">(替換策略 / 態度)</span></h3>
                    </div>

                    <div className="space-y-4">
                        {data.policy.map(p => (
                            <div key={p.type} className="bg-zinc-900/80 rounded-2xl p-5 border border-zinc-700/50 hover:border-blue-500/30 transition-colors">
                                <div className="flex items-baseline gap-2 mb-2">
                                    <h4 className="text-lg font-bold font-mono text-blue-400">{p.type}</h4>
                                    <span className="text-sm text-stone-400">{p.name}</span>
                                </div>
                                <div className="text-stone-300 text-sm leading-relaxed">{p.description}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-zinc-800/30 rounded-3xl p-6 border border-zinc-700/50">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-zinc-800 p-2 text-emerald-400 rounded-xl shadow-inner">
                            <Layers className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold text-stone-200">Cardinality <span className="text-stone-400 text-sm font-normal ml-2">(生存底線 / 數量)</span></h3>
                    </div>

                    <div className="h-full">
                        {data.cardinality.map((c, idx) => (
                            <div key={idx} className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-700/50 h-[calc(100%-2rem)] hover:border-emerald-500/30 transition-colors flex flex-col justify-center">
                                <div className="text-stone-300 leading-relaxed text-lg text-center font-medium">
                                    {c.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
