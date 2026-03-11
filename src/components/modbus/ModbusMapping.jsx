import React from 'react';
import { BookOpen, Edit3, Layers } from 'lucide-react';
import ConceptLink from '../ConceptLink';

export default function ModbusMapping() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <section className="bg-gradient-to-br from-zinc-800/80 to-zinc-900 border border-emerald-900/30 rounded-2xl p-6 md:p-8 space-y-8">
                <div className="flex items-center gap-3 border-b border-zinc-700/50 pb-4">
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                        <BookOpen className="w-6 h-6 text-emerald-500" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-stone-100 flex-1">通訊協議映射 (Protocol Mapping) 與任務</h2>
                </div>

                <div className="space-y-6 text-stone-300 leading-relaxed">
                    <p className="text-lg">
                        當一切硬體接通，OpenEMS 收到的資料只是一堆類似密碼的數字：<br />
                        <code className="text-stone-200 bg-zinc-900 px-2 py-1 rounded">地址 40014 的值是 5000</code>
                    </p>
                    <p>
                        這對 OpenEMS 的控制器來說根本像天書！我們必須把它變成第一階段學過的 <ConceptLink to="/openems-channel">Channel (通道)</ConceptLink>。這就像寫一本「翻譯字典」，教大腦怎麼把冷冰冰的數字，變成具有生命力的 `Doc.of()`。
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700/50">
                            <h3 className="text-xl font-medium text-emerald-400 mb-4 flex items-center gap-2">
                                <BookOpen className="w-5 h-5" />
                                讀取任務 (FC3)
                            </h3>
                            <p className="mb-2 text-stone-100"><strong>FC3ReadRegistersTask</strong></p>
                            <p className="text-sm text-stone-400">
                                這是去問設備「你現在狀況怎樣？」。例如：持續讀取現在的發電量、電池電壓。
                            </p>
                        </div>
                        <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700/50">
                            <h3 className="text-xl font-medium text-purple-400 mb-4 flex items-center gap-2">
                                <Edit3 className="w-5 h-5" />
                                寫入任務 (FC16)
                            </h3>
                            <p className="mb-2 text-stone-100"><strong>FC16WriteRegistersTask</strong></p>
                            <p className="text-sm text-stone-400">
                                這是去命令設備「照我的話做！」。例如：命令電池改用 3000W 功率充放電。
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 bg-zinc-900/60 rounded-xl border border-zinc-700/50 overflow-hidden">
                        <div className="bg-zinc-800/80 px-4 py-3 border-b border-zinc-700/50 flex items-center gap-2">
                            <Layers className="w-5 h-5 text-stone-200" />
                            <span className="font-mono text-stone-200 font-medium">m() 映射魔法：連接硬體與軟體通道</span>
                        </div>
                        <pre className="p-6 overflow-x-auto text-sm lg:text-base font-mono leading-relaxed">
                            <code className="text-stone-300">
                                <span className="text-stone-500">// 建立一個高優先級的讀取任務，從地址 40014 開始讀</span><br />
                                <span className="text-purple-400">new</span> FC3ReadRegistersTask(<span className="text-orange-300">40014</span>, Priority.<span className="text-blue-400">HIGH</span>,<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-500">// 翻譯字典：把 40014 讀到的值，塞進 ACTIVE_POWER 通道裡！</span><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-200">m</span>(SymmetricMeter.ChannelId.<span className="text-blue-400">ACTIVE_POWER</span>, <span className="text-purple-400">new</span> UnsignedWordElement(<span className="text-orange-300">40014</span>))<br />
                                )
                            </code>
                        </pre>
                    </div>
                </div>
            </section>
        </div>
    );
}
