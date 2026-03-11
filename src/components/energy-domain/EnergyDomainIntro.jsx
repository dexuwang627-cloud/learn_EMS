import React from 'react';
import { Home, ArrowRightLeft } from 'lucide-react';

export default function EnergyDomainIntro() {
    return (
        <section className="bg-gradient-to-br from-zinc-800/80 to-zinc-900 border border-amber-900/30 rounded-2xl p-6 md:p-8 space-y-8 shadow-xl">
            <div className="flex items-center gap-3 border-b border-zinc-700/50 pb-4">
                <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500">
                    <Home className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-stone-100 flex-1">核心觀念：宇宙的中心是「家 (AC Bus)」</h2>
            </div>

            <div className="space-y-6 text-stone-300 leading-relaxed">
                <p className="text-lg">
                    在判斷正負號時，請把自己想像成家裡的 <strong className="text-amber-400">交流電匯流排 (AC Bus)</strong>。
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 bg-zinc-950/50 p-6 rounded-xl border border-zinc-800">
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform">
                            <ArrowRightLeft className="w-6 h-6 text-emerald-400 rotate-90" />
                        </div>
                        <div>
                            <div className="text-emerald-400 font-bold text-xl flex items-center gap-2">
                                給我能量 (流入) = 正號 (+)
                            </div>
                            <div className="text-sm text-stone-500">能量進入 AC Bus</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:scale-110 transition-transform">
                            <ArrowRightLeft className="w-6 h-6 text-red-400 -rotate-90" />
                        </div>
                        <div>
                            <div className="text-red-400 font-bold text-xl flex items-center gap-2">
                                跟我要能量 (流出) = 負號 (-)
                            </div>
                            <div className="text-sm text-stone-500">能量離開 AC Bus</div>
                        </div>
                    </div>
                </div>

                <div className="bg-amber-900/10 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <p className="text-stone-300 italic">
                        註：Consumption (負載) 是特例，通常皆記為正值代表消耗量。
                    </p>
                </div>
            </div>
        </section>
    );
}
