import React from 'react';
import { Construction } from 'lucide-react';

export default function PlaceholderPage({ title, subtitle }) {
    return (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center max-w-lg mx-auto">
            <div className="bg-amber-500/10 p-6 rounded-3xl text-amber-500 mb-6 border border-amber-500/20 shadow-lg shadow-amber-500/5">
                <Construction className="w-16 h-16" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-100 mb-4">{title}</h2>
            {subtitle && (
                <p className="text-xl text-amber-500/90 font-medium mb-4">{subtitle}</p>
            )}
            <p className="text-stone-400 leading-relaxed text-lg">
                這裡目前正在施工中。您可以透過左側選單回顧其他的知識點，或是期待未來即將整理的系統化筆記！
            </p>
        </div>
    );
}
