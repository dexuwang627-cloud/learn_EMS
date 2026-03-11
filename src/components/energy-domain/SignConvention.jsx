import React from 'react';
import { Battery, TowerControl as Tower, Sun, Home, Minus, Plus } from 'lucide-react';

export default function SignConvention() {
    const systems = [
        {
            name: 'ESS (儲能系統/電池)',
            icon: <Battery className="w-6 h-6 text-blue-400" />,
            definitions: [
                { type: 'positive', label: '放電 (Discharging)', description: '電池把電吐給家裡。', math: '(+)' },
                { type: 'negative', label: '充電 (Charging)', description: '電池把家裡的電吸走存起來。', math: '(-)' }
            ]
        },
        {
            name: 'Grid (電網/電表)',
            icon: <Tower className="w-6 h-6 text-emerald-400" />,
            definitions: [
                { type: 'positive', label: '買電 (Buy)', description: '從台電把電拉進家裡。', math: '(+)' },
                { type: 'negative', label: '賣電 (Sell)', description: '把家裡多餘的電逆流送回台電。', math: '(-)' }
            ]
        },
        {
            name: 'Production (發電端，如 PV)',
            icon: <Sun className="w-6 h-6 text-amber-400" />,
            definitions: [
                { type: 'positive', label: '發電中', description: '源源不絕提供能量。', math: '(+)' }
            ]
        },
        {
            name: 'Consumption (負載/消耗)',
            icon: <Home className="w-6 h-6 text-rose-400" />,
            definitions: [
                { type: 'positive', label: '耗電中', description: '家裡設備正在消耗的能量。', math: '(+)' }
            ]
        }
    ];

    return (
        <section className="space-y-8">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                    <Plus className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-stone-100 flex-1">四大天王正負號定義 (The Sign Convention)</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {systems.map((system, idx) => (
                    <div key={idx} className="bg-zinc-800/40 border border-zinc-700/50 rounded-2xl p-6 space-y-4 hover:border-zinc-600 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                            {system.icon}
                            <h3 className="text-lg font-bold text-stone-100">{system.name}</h3>
                        </div>
                        <div className="space-y-4">
                            {system.definitions.map((def, defIdx) => (
                                <div key={defIdx} className="flex items-start gap-4">
                                    <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm ${
                                        def.type === 'positive' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'
                                    }`}>
                                        {def.math}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-stone-200">{def.label}</div>
                                        <p className="text-sm text-stone-400 leading-relaxed">{def.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
