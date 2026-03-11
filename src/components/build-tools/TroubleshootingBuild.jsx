import React from 'react';
import { AlertTriangle, Lightbulb, Search, BookOpen } from 'lucide-react';

const TroubleshootingBuild = () => {
    const issues = [
        {
            title: "Unresolved Constraint",
            desc: "最常見的錯誤，代表 OSGi 找不到對應的 Service 或 Package。",
            fix: "檢查 bnd.bnd 的 Import-Package，或執行 ./gradlew resolve。"
        },
        {
            title: "ClassCastException (Bundle Classloading)",
            desc: "同一個類別被多個 Bundle 導出，導致 JVM 混淆。",
            fix: "確保 Export-Package 沒有重複，檢查是否引入了衝突的第三方庫。"
        },
        {
            title: "CI 失敗但本地成功",
            desc: "通常是環境差異（JDK 版本）或快取遺留問題。",
            fix: "先執行 ./gradlew clean，再執行 build。"
        }
    ];

    return (
        <section className="space-y-8">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
                <div className="bg-rose-500/10 p-2.5 rounded-xl border border-rose-500/20">
                    <AlertTriangle className="w-6 h-6 text-rose-500" />
                </div>
                <h2 className="text-2xl font-bold text-stone-100">3. 疑難排解：當 CI 報錯時該怎麼辦？</h2>
            </div>

            <div className="space-y-4">
                {issues.map((issue, idx) => (
                    <div key={idx} className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 hover:bg-zinc-800/20 transition-all">
                        <div className="flex items-start gap-4">
                            <div className="bg-zinc-800 p-2 rounded-lg mt-1">
                                <Search className="w-5 h-5 text-stone-400" />
                            </div>
                            <div className="space-y-3 flex-1">
                                <h3 className="text-lg font-bold text-stone-200">{issue.title}</h3>
                                <p className="text-stone-400 text-sm leading-relaxed">{issue.desc}</p>
                                <div className="flex items-center gap-2 text-rose-400 bg-rose-500/5 p-3 rounded-xl border border-rose-500/10">
                                    <Lightbulb className="w-4 h-4 shrink-0" />
                                    <span className="text-sm font-medium">解決方案：{issue.fix}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-8 rounded-3xl border border-zinc-700/50 text-center space-y-4">
                <div className="bg-amber-500 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20">
                    <BookOpen className="w-6 h-6 text-stone-900" />
                </div>
                <h3 className="text-xl font-bold text-stone-100">延伸閱讀</h3>
                <p className="text-stone-400 max-w-md mx-auto">
                    深入了解 OpenEMS 的構建系統，請參考官網開發者文檔中關於 <span className="text-stone-200 underline decoration-amber-500">Core Concepts</span> 的部分。
                </p>
            </div>
        </section>
    );
};

export default TroubleshootingBuild;
