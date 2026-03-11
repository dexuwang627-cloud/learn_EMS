import React from 'react';
import { FileCode, Layers, Link2 } from 'lucide-react';

const BndConcepts = () => {
    return (
        <section className="space-y-8">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
                <div className="bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20">
                    <Layers className="w-6 h-6 text-amber-500" />
                </div>
                <h2 className="text-2xl font-bold text-stone-100">1. BND 核心概念：OSGi 的「打包大師」</h2>
            </div>

            <p className="text-lg text-stone-300 leading-relaxed">
                在 OpenEMS 中，Java 代碼並不是直接運行的，而是被打包成 <span className="text-amber-500 font-semibold underline decoration-amber-500/30">OSGi Bundles</span>。BND 就是負責這項工作的核心工具。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl hover:border-amber-500/30 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                        <div className="bg-zinc-800 p-3 rounded-xl group-hover:scale-110 transition-transform">
                            <FileCode className="w-6 h-6 text-amber-500" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-stone-100">bnd.bnd</h3>
                            <p className="text-stone-400 leading-relaxed">
                                每個模組的靈魂。定義了 Bundle 的名稱、版本，最重要的是 <span className="text-stone-200 font-medium">Export-Package</span> 與 <span className="text-stone-200 font-medium">Import-Package</span>。
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl hover:border-amber-500/30 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                        <div className="bg-zinc-800 p-3 rounded-xl group-hover:scale-110 transition-transform">
                            <Link2 className="w-6 h-6 text-amber-500" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-stone-100">Workspace 模型</h3>
                            <p className="text-stone-400 leading-relaxed">
                                OpenEMS 使用 BND Workspace 結構，所有的模組都在同一個視窗下管理，確保依賴版本的一致性。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-amber-500/5 border border-amber-500/10 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-amber-500 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                    為什麼重要？
                </h4>
                <p className="text-stone-300">
                    BND 會自動分析你的代碼，找出需要的外部 Jar 包。如果你看到 <code className="bg-zinc-800 px-2 py-0.5 rounded text-amber-200 font-mono text-sm">Unresolved constraint</code>，通常就是 <code className="text-stone-200 font-mono">bnd.bnd</code> 設定出了問題。
                </p>
            </div>
        </section>
    );
};

export default BndConcepts;
