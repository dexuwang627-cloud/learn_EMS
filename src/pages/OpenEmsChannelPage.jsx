import React from 'react';
import { IdCard, AlertOctagon, ShieldCheck, Flame, Skull } from 'lucide-react';

export default function OpenEmsChannelPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* Page Header */}
            <header className="space-y-4 py-8">
                <div className="flex items-center gap-3 text-amber-500 mb-2">
                    <div className="h-0.5 w-12 bg-amber-500"></div>
                    <span className="text-sm font-bold tracking-widest uppercase">Priority 2</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-stone-100 tracking-tight">
                    OpenEMS <span className="text-amber-500">資料通道</span> 與 <span className="text-amber-500">風險控管</span>
                </h1>
                <p className="text-xl text-stone-400 max-w-3xl leading-relaxed">
                    在 OpenEMS 的世界裡，Channel 就是負責傳遞數據的血管。掌握資料定義與異常處理，確保系統大腦運作正確。
                </p>
            </header>

            {/* Section 1 */}
            <section className="space-y-6">
                <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
                    <div className="bg-sky-500/10 p-2.5 rounded-lg border border-sky-500/20">
                        <IdCard className="w-6 h-6 text-sky-400" />
                    </div>
                    <h2 className="text-2xl font-semibold text-stone-100 uppercase tracking-wide">
                        1. 通道的身分證：Doc.of() 與 Level
                    </h2>
                </div>

                <p className="text-stone-300 leading-relaxed text-lg">
                    在創造一個新的 Channel 時，我們必須用 <code className="bg-zinc-800 text-sky-300 px-2 py-0.5 rounded text-sm font-mono">Doc.of()</code> 來賦予它屬性，這就像是幫資料辦身分證。
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-2xl hover:border-zinc-600 transition-colors">
                        <h3 className="text-lg font-medium text-stone-200 mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                            資料定義
                        </h3>
                        <p className="text-stone-400">
                            規定這個通道是數字、文字，還是布林值，以及它的單位 (例如攝氏度、瓦特)。
                        </p>
                    </div>
                    <div className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-2xl hover:border-zinc-600 transition-colors">
                        <h3 className="text-lg font-medium text-stone-200 mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                            狀態與警報 (Level)
                        </h3>
                        <p className="text-stone-400">
                            如果這是一個用來回報狀態的通道 (StateChannel)，必須設定嚴重等級。
                        </p>
                    </div>
                </div>

                <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden mt-6">
                    <ul className="divide-y divide-zinc-800/50">
                        <li className="p-4 sm:px-6 flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-500">
                                🟢
                            </div>
                            <div>
                                <strong className="text-stone-200 font-medium block mb-1">INFO (資訊)</strong>
                                <span className="text-stone-400">日常回報，無傷大雅。</span>
                            </div>
                        </li>
                        <li className="p-4 sm:px-6 flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-500">
                                🟡
                            </div>
                            <div>
                                <strong className="text-stone-200 font-medium block mb-1">WARNING (警告)</strong>
                                <span className="text-stone-400">有點異常，需要注意，但不影響運作。</span>
                            </div>
                        </li>
                        <li className="p-4 sm:px-6 flex items-start gap-4 bg-red-950/20">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 text-red-500">
                                🔴
                            </div>
                            <div>
                                <strong className="text-red-400 font-semibold block mb-1 flex items-center gap-2">
                                    FAULT (故障)
                                    <Flame className="w-4 h-4" />
                                </strong>
                                <span className="text-red-300/80">最高級別的紅色警戒！只要系統中任何一個 FAULT 通道被觸發，OpenEMS 大腦就會強制介入，可能直接切斷放電邏輯以保護硬體。</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-6">
                <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
                    <div className="bg-red-500/10 p-2.5 rounded-lg border border-red-500/20">
                        <Skull className="w-6 h-6 text-red-400" />
                    </div>
                    <h2 className="text-2xl font-semibold text-stone-100 uppercase tracking-wide">
                        2. 兩種致命的資料異常：null vs stale
                    </h2>
                </div>

                <p className="text-stone-300 text-lg">
                    這是工程師最容易忽視，卻也是最容易搞垮系統的盲點。
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    {/* NULL Card */}
                    <div className="bg-zinc-800/40 border-t-4 border-t-rose-500 border border-x-zinc-800 border-b-zinc-800 rounded-xl p-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <AlertOctagon className="w-24 h-24 text-rose-500" />
                        </div>
                        <h3 className="text-xl font-bold text-rose-400 mb-6 flex items-center gap-2">
                            <span className="bg-rose-500/20 px-2 py-1 rounded text-sm text-rose-300 border border-rose-500/30">
                                null
                            </span>
                            (空值 / 沒資料)
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <strong className="text-stone-300 block text-sm uppercase tracking-wider mb-1">成因</strong>
                                <p className="text-stone-400 text-sm">硬體剛開機還沒連上，或是設定了 DYNAMIC/OPTIONAL 後設備斷線。</p>
                            </div>
                            <div>
                                <strong className="text-stone-300 block text-sm uppercase tracking-wider mb-1">特徵</strong>
                                <p className="text-stone-400 text-sm italic border-l-2 border-rose-500/50 pl-3 my-2 text-rose-200/80">
                                    「大吵大鬧的嬰兒」
                                </p>
                                <p className="text-stone-400 text-sm">如果你直接讀取它，Java 會直接賞你一個 <code className="text-rose-300">NullPointerException</code> 讓程式當機。</p>
                            </div>
                            <div className="bg-zinc-900 rounded-lg p-3 border border-zinc-800">
                                <strong className="text-stone-300 block text-sm uppercase tracking-wider mb-1">影響</strong>
                                <p className="text-stone-400 text-sm">
                                    雖然會引發當機，但因為程式死掉了，反而不會做出錯誤的控制決策 (Fail-Fast 保護機制)。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* STALE Card */}
                    <div className="bg-zinc-800/40 border-t-4 border-t-purple-500 border border-x-zinc-800 border-b-zinc-800 rounded-xl p-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <AlertOctagon className="w-24 h-24 text-purple-500" />
                        </div>
                        <h3 className="text-xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                            <span className="bg-purple-500/20 px-2 py-1 rounded text-sm text-purple-300 border border-purple-500/30">
                                stale
                            </span>
                            (過期 / 假情報)
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <strong className="text-stone-300 block text-sm uppercase tracking-wider mb-1">成因</strong>
                                <p className="text-stone-400 text-sm">硬體感測器當機，通道裡的值卡在「最後一次」的舊數據，再也沒有更新。</p>
                            </div>
                            <div>
                                <strong className="text-stone-300 block text-sm uppercase tracking-wider mb-1">特徵</strong>
                                <p className="text-stone-400 text-sm italic border-l-2 border-purple-500/50 pl-3 my-2 text-purple-200/80">
                                    「安靜的隱形殺手」
                                </p>
                                <p className="text-stone-400 text-sm">程式碼不會報錯，它會拿著舊資料繼續運算。</p>
                            </div>
                            <div className="bg-purple-950/20 rounded-lg p-3 border border-purple-500/20">
                                <strong className="text-stone-300 block text-sm uppercase tracking-wider mb-1">影響</strong>
                                <p className="text-purple-300/90 text-sm">
                                    極度危險！控制器可能會因為看著「永遠 45 度」的舊溫度，讓已經燒到 80 度的電池繼續過充，導致物理性破壞。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-6">
                <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
                    <div className="bg-emerald-500/10 p-2.5 rounded-lg border border-emerald-500/20">
                        <ShieldCheck className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h2 className="text-2xl font-semibold text-stone-100 uppercase tracking-wide">
                        3. 實戰防護指南：絕對防禦寫法 <span className="text-emerald-400 normal-case tracking-normal ml-2 bg-zinc-800 px-2 py-1 rounded-md text-xl font-mono">asOptional()</span>
                    </h2>
                </div>

                <p className="text-stone-300 text-lg">
                    為了對抗 <code className="text-rose-400 font-mono">null</code> 和 <code className="text-purple-400 font-mono">stale</code>，OpenEMS 團隊設計了標準的安全取值法。永遠不要用 <code className="bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-mono line-through opacity-70">.get()</code> 直接拿值！
                </p>

                <div className="bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden mt-6 shadow-xl shadow-black/50">
                    <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                        </div>
                        <span className="text-xs font-mono text-stone-500">✅ 標準安全寫法</span>
                    </div>
                    <div className="p-6 overflow-x-auto text-sm md:text-base font-mono leading-relaxed">
                        <pre className="text-stone-300">
                            <span className="text-stone-500 italic">// 1. 用 asOptional() 把資料包裝起來</span>
                            <span className="text-yellow-300">Optional</span>&lt;<span className="text-sky-300">Integer</span>&gt; voltageOpt = battery.getVoltageChannel().value().asOptional();

                            <span className="text-stone-500 italic">// 2. 嚴格檢查海關：是不是 null？是不是 stale？</span>
                            <span className="text-pink-400">if</span> (!voltageOpt.isPresent()) &#123;
                            <span className="text-stone-500 italic">  // 只要資料無效或過期，直接擋下！不准執行後續危險動作！</span>
                            <span className="text-pink-400">  return</span>;
                            &#125;

                            <span className="text-stone-500 italic">// 3. 確認安全後，才把數值拿出來用</span>
                            <span className="text-sky-300">Integer</span> voltage = voltageOpt.get();
                        </pre>
                    </div>
                </div>
            </section>

            {/* Footer padding */}
            <div className="h-12"></div>
        </div>
    );
}
