import React from 'react';
import EnergyDomainIntro from '../components/energy-domain/EnergyDomainIntro';
import SignConvention from '../components/energy-domain/SignConvention';
import EnergyBalance from '../components/energy-domain/EnergyBalance';
import EnergyReflection from '../components/energy-domain/EnergyReflection';

export default function EnergyDomainPage() {
    return (
        <div className="max-w-5xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Page Header */}
            <header className="space-y-4 py-8">
                <div className="flex items-center gap-3 text-amber-500 mb-2">
                    <div className="h-0.5 w-12 bg-amber-500"></div>
                    <span className="text-sm font-bold tracking-widest uppercase">Priority 4</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-stone-100 tracking-tight">
                    能量領域 <span className="text-amber-500">(Energy Domain)</span> 核心筆記
                </h1>
                <p className="text-xl text-stone-400 max-w-2xl leading-relaxed">
                    學習 OpenEMS 如何規範物理世界的能量流向，並建立統一的數學標準，確保系統控制邏輯的穩定性。
                </p>
            </header>

            {/* Sections */}
            <EnergyDomainIntro />
            <SignConvention />
            <EnergyBalance />
            <EnergyReflection />
            
            <footer className="pt-12 border-t border-zinc-800 text-stone-500 text-sm italic">
                Last updated: 2026-03-11 • OpenEMS Sign Convention Standards
            </footer>
        </div>
    );
}
