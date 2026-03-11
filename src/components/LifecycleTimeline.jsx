import React from 'react';
import { PlayCircle, Settings, PowerOff } from 'lucide-react';

const iconMap = {
    PlayCircle: <PlayCircle className="w-6 h-6 text-amber-500" />,
    Settings: <Settings className="w-6 h-6 text-amber-500" />,
    PowerOff: <PowerOff className="w-6 h-6 text-amber-500" />
};

export default function LifecycleTimeline({ data }) {
    return (
        <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-8 bg-amber-500 rounded-full"></div>
                <h2 className="text-2xl font-bold tracking-tight text-stone-100">Part 1：元件的生命週期 <span className="text-stone-400 font-normal text-xl ml-2">(生死與異動)</span></h2>
            </div>

            <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-6 space-y-12 pb-4">
                {data.map((item, index) => (
                    <div key={item.phase} className="relative pl-8 md:pl-10">
                        {/* Timeline Dot with Icon */}
                        <div className="absolute -left-5 bg-zinc-900 border-4 border-zinc-800 rounded-full p-1.5 shadow-xl flex items-center justify-center">
                            {iconMap[item.icon]}
                        </div>

                        <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50 hover:border-amber-500/30 transition-colors backdrop-blur-sm shadow-sm">
                            <h3 className="text-xl font-bold text-amber-500 mb-1 flex items-baseline gap-2">
                                {item.phase}
                                <span className="text-sm font-medium text-stone-400">({item.subtitle})</span>
                            </h3>

                            <div className="mt-6 space-y-4">
                                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                                    <div className="shrink-0 w-16 text-xs font-bold uppercase tracking-wider text-amber-500/70 pt-1">時機</div>
                                    <div className="text-stone-300 leading-relaxed font-medium">{item.timing}</div>
                                </div>

                                <div className="h-px w-full bg-zinc-700/50 my-2"></div>

                                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                                    <div className="shrink-0 w-16 text-xs font-bold uppercase tracking-wider text-emerald-500/70 pt-1">情境</div>
                                    <div className="text-stone-400 leading-relaxed">{item.context}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
