import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export default function ConceptLink({ to, children }) {
    return (
        <Link
            to={to}
            className="inline-flex items-center gap-1 px-1.5 py-0.5 mx-0.5 rounded-md bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 hover:text-amber-300 transition-colors border border-amber-500/20 group relative font-medium underline decoration-amber-500/30 underline-offset-2"
            title={`點擊查看關聯：${children}`}
        >
            {children}
            <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
        </Link>
    );
}
