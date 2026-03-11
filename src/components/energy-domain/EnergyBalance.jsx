import React from 'react';
import { Calculator, CheckCircle2 } from 'lucide-react';

export default function EnergyBalance() {
    return (
        <section className="bg-zinc-950/40 border border-zinc-800 rounded-2xl p-6 md:p-8 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
                <Calculator className="w-32 h-32" />
            </div>

            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                    <Calculator className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-stone-100 flex-1">終極能量守恆公式 (Energy Balance Equation)</h2>
            </div>

            <div className="space-y-8">
                <p className="text-stone-300 text-lg leading-relaxed">
                    這是 OpenEMS 的靈魂數學題，用來驗證系統邏輯是否完美閉環：
                </p>

                <div className="bg-zinc-900 border border-zinc-700 p-6 md:p-8 rounded-2xl text-center shadow-inner overflow-x-auto">
                    <div className="text-lg md:text-2xl lg:text-3xl font-mono text-stone-100 inline-flex items-center justify-center gap-3 md:gap-4 whitespace-nowrap min-w-max">
                        <span className="text-emerald-400">Grid <span className="text-xs md:text-sm opacity-70">(買賣電)</span></span>
                        <span className="text-stone-500">+</span>
                        <span className="text-amber-400">Production <span className="text-xs md:text-sm opacity-70">(發電)</span></span>
                        <span className="text-stone-500">+</span>
                        <span className="text-blue-400">ESS <span className="text-xs md:text-sm opacity-70">(充放電)</span></span>
                        <span className="text-stone-500">=</span>
                        <span className="text-rose-400">Consumption <span className="text-xs md:text-sm opacity-70">(負載消耗)</span></span>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-stone-200 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        完美實戰範例
                    </h3>
                    <div className="bg-zinc-800/80 p-6 rounded-xl border border-zinc-700 font-mono text-lg space-y-3">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">0W (沒買賣)</span>
                            <span className="text-stone-500">+</span>
                            <span className="text-amber-500 bg-amber-500/10 px-2 py-1 rounded">5000W (發電)</span>
                            <span className="text-stone-500">+</span>
                            <span className="text-blue-500 bg-blue-500/10 px-2 py-1 rounded">(-3000W) (電池充電)</span>
                        </div>
                        <div className="flex items-center gap-3 text-stone-100 font-bold border-t border-zinc-700 pt-3 mt-3">
                            <span>=</span>
                            <span className="text-rose-500 bg-rose-500/10 px-2 py-1 rounded">2000W (家裡耗電)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
