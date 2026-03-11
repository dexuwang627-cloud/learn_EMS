import React from 'react';
import BndConcepts from '../components/build-tools/BndConcepts';
import GradleWorkflow from '../components/build-tools/GradleWorkflow';
import TroubleshootingBuild from '../components/build-tools/TroubleshootingBuild';

export default function BuildToolsPage() {
    return (
        <div className="max-w-5xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Page Header */}
            <header className="space-y-4 py-8">
                <div className="flex items-center gap-3 text-amber-500 mb-2">
                    <div className="h-0.5 w-12 bg-amber-500"></div>
                    <span className="text-sm font-bold tracking-widest uppercase">Priority 5</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-stone-100 tracking-tight">
                    Gradle 與 BND <span className="text-amber-500">建構系統</span>
                </h1>
                <p className="text-xl text-stone-400 max-w-3xl leading-relaxed">
                    解密 OpenEMS 的建構慣例。從 Bundle 打包到 CI 故障診斷，掌握讓代碼成功运行的最後一哩路。
                </p>
            </header>

            <BndConcepts />
            <GradleWorkflow />
            <TroubleshootingBuild />

            <footer className="pt-12 border-t border-zinc-800 text-stone-500 text-sm italic">
                Last updated: 2026-03-11 • Build Infrastructure & CI/CD Guidelines
            </footer>
        </div>
    );
}
