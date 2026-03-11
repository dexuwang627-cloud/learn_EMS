import React, { useState } from 'react';
import { Layers, Server, Network, ShieldAlert } from 'lucide-react';
import ModbusIntro from '../components/modbus/ModbusIntro';
import ModbusHardware from '../components/modbus/ModbusHardware';
import ModbusMapping from '../components/modbus/ModbusMapping';
import ModbusPuzzles from '../components/modbus/ModbusPuzzles';

const ModbusPage = () => {
    const [activeTab, setActiveTab] = useState('intro');

    const tabs = [
        { id: 'intro', label: '基礎概念', icon: Layers },
        { id: 'hardware', label: '硬體與實戰', icon: Server },
        { id: 'mapping', label: '通訊協議映射', icon: Network },
        { id: 'puzzles', label: '實戰解謎與總結', icon: ShieldAlert },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'intro':
                return <ModbusIntro />;
            case 'hardware':
                return <ModbusHardware />;
            case 'mapping':
                return <ModbusMapping />;
            case 'puzzles':
                return <ModbusPuzzles />;
            default:
                return <ModbusIntro />;
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-16">
            <header className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-stone-200 leading-tight">
                    什麼是 Modbus？<br />
                    <span className="text-stone-200">工業界的「世界語」</span>
                </h1>
                <p className="text-lg text-stone-300 leading-relaxed max-w-2xl">
                    如果 OpenEMS 是一間講「Java 語」的跨國智慧能源總部，那麼散佈在機房裡的太陽能逆變器、電池櫃、電表，就是講著各種方言的當地員工。
                </p>
            </header>

            {/* Tab Navigation */}
            <div className="bg-zinc-900/50 p-1.5 rounded-2xl flex flex-wrap gap-1 border border-zinc-800">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 flex-1 min-w-[140px] justify-center ${
                                isActive
                                    ? 'bg-amber-500/20 text-stone-200 shadow-sm border border-amber-500/30'
                                    : 'text-stone-100/60 hover:text-stone-300 hover:bg-zinc-800/50 border border-transparent'
                            }`}
                        >
                            <Icon className={`w-4 h-4 ${isActive ? 'text-stone-200' : 'text-stone-100/40'}`} />
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Content Area */}
            <div className="min-h-[500px]">
                {renderContent()}
            </div>
        </div>
    );
};

export default ModbusPage;
