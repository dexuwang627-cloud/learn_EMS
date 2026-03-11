import React from 'react';
import { Terminal, Command, Zap } from 'lucide-react';

const GradleWorkflow = () => {
    const commands = [
        { cmd: './gradlew build', desc: '全系統編譯與檢查。', color: 'text-sky-400' },
        { cmd: './gradlew resolve', desc: '更新依賴包。這是解決「找不到 Jar」的關鍵指令。', color: 'text-emerald-400' },
        { cmd: './gradlew clean', desc: '清除快取，解決不可思議的編譯錯誤。', color: 'text-amber-400' },
    ];

    return (
        <section className="space-y-8">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
                <div className="bg-sky-500/10 p-2.5 rounded-xl border border-sky-500/20">
                    <Terminal className="w-6 h-6 text-sky-400" />
                </div>
                <h2 className="text-2xl font-bold text-stone-100">2. Gradle 工作流：開發者的「助推器」</h2>
            </div>

            <p className="text-lg text-stone-300 leading-relaxed">
                Gradle 就像是在 BND 之上的指揮官。它負責跨模組的編譯順序、依賴下載以及最終產出檔案。
            </p>

            <div className="bg-zinc-950 rounded-2xl border border-zinc-800 overflow-hidden shadow-xl shadow-black/50">
                <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    </div>
                    <span className="text-xs font-mono text-stone-500">openems-cli</span>
                </div>
                <div className="p-6 space-y-4">
                    {commands.map((c, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-zinc-800/50 transition-colors group">
                            <Command className={`w-5 h-5 ${c.color} shrink-0 mt-1`} />
                            <div>
                                <code className={`${c.color} font-mono font-bold`}>{c.cmd}</code>
                                <p className="text-stone-400 text-sm mt-1">{c.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex gap-4">
                <div className="flex-1 bg-zinc-900/40 p-5 rounded-2xl border border-zinc-800">
                    <h3 className="font-bold text-stone-200 mb-2 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-amber-500" />
                        快速秘訣
                    </h3>
                    <p className="text-sm text-stone-400">
                        如果你正在 IDE (如 Eclipse 或 VS Code) 中開發，大多數時間 BND-Plugin 會自動處理。但當 CI/CD 報錯時，一定要回到命令行使用 <code className="text-stone-200">./gradlew build</code> 複現問題。
                    </p>
                </div>
            </div>
        </section>
    );
};

export default GradleWorkflow;
