import React from 'react';
import { Lightbulb, ShieldAlert } from 'lucide-react';

export default function EnergyReflection() {
    return (
        <section className="bg-amber-900/10 border border-amber-500/20 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-3 border-b border-amber-500/20 pb-4">
                <div className="p-2 bg-amber-500/20 rounded-lg text-amber-500">
                    <Lightbulb className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-stone-100 flex-1">💡 後設認知與反思策略</h2>
            </div>

            <div className="prose prose-invert max-w-none space-y-6">
                <p className="text-stone-300 leading-relaxed text-lg">
                    為什麼我們要學這個？因為現實世界中，每個設備廠商 (Deye, SMA, Delta) 都有自己的正負號脾氣。OpenEMS 透過這套「絕對標準」，建立了一道防護網。
                </p>

                <div className="bg-zinc-900/50 p-6 rounded-xl border border-amber-500/10 space-y-4">
                    <h3 className="text-amber-400 font-semibold flex items-center gap-2 m-0">
                        <ShieldAlert className="w-5 h-5" />
                        整合新設備的第一步
                    </h3>
                    <p className="text-stone-200 m-0">
                        不是急著寫控制邏輯，而是先問自己：
                        <span className="block mt-4 p-4 bg-zinc-950 rounded border border-zinc-800 text-amber-200 italic font-medium">
                            「這個設備丟出來的數值，符合 OpenEMS 的制服規定嗎？」
                        </span>
                    </p>
                    <p className="text-stone-400 text-sm">
                        如果不符合，我們就在程式裡幫它翻轉正負號（例如乘上 -1），這樣上層的 Controller 才能安心運作，不會因為誤判而導致系統崩潰。
                    </p>
                </div>
            </div>
        </section>
    );
}
