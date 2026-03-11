import React from 'react';
import { Network, Cable, Cpu, Link as LinkIcon, AlertTriangle } from 'lucide-react';
import ConceptLink from '../ConceptLink';

export default function ModbusIntro() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-stone-100 leading-tight">
                    什麼是 Modbus？<br />
                    <span className="text-stone-200">工業界的「世界語」</span>
                </h1>
                <p className="text-lg text-stone-300 leading-relaxed max-w-2xl">
                    如果 OpenEMS 是一間講「Java 語」的跨國智慧能源總部，那麼散佈在機房裡的太陽能逆變器、電池櫃、電表，就是講著各種方言的當地員工。
                </p>
            </header>

            <section className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-zinc-700/50 rounded-xl shrink-0">
                        <Network className="w-6 h-6 text-stone-200" />
                    </div>
                    <div>
                        <p className="text-stone-300 leading-relaxed text-lg">
                            為了讓大家溝通無礙，工業界在 1979 年（沒錯，比很多寫程式的工程師年紀還大！）發明了一種叫做 <strong>Modbus</strong> 的通訊語言。雖然它是個「老爺爺」級的協定，但因為超級穩定、簡單，至今仍是工業界覆蓋率超過 80% 的絕對主流！
                        </p>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-stone-100 flex items-center gap-3">
                    <Cpu className="w-6 h-6 text-stone-400" />
                    Bridge (橋接器) 與 Device (設備)：翻譯官與外籍員工
                </h2>
                <p className="text-stone-300 leading-relaxed text-lg">
                    在 OpenEMS 的架構裡，我們不會讓「電池控制器」直接去接電線跟電池講話，這樣太亂了。我們會把架構分成兩層：
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700/50 hover:border-amber-500/30 transition-colors">
                        <h3 className="text-xl font-medium text-stone-200 mb-4 flex items-center gap-2">
                            <Network className="w-5 h-5" />
                            Modbus Bridge (翻譯官)
                        </h3>
                        <p className="text-stone-300 mb-4 h-24">
                            它的唯一工作就是「建立連線」跟「傳送/接收原始數據」。它不管這些數據代表溫度還是電壓，它只負責跑腿。在實體世界上，它分為兩大門派：
                        </p>
                        <ul className="space-y-4">
                            <li className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-700/50 flex gap-3">
                                <Network className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                                <div>
                                    <strong className="text-stone-200 block mb-1">Modbus/TCP</strong>
                                    <span className="text-sm text-stone-400">走網路線 (Ethernet)。就像是用 Email 溝通，只要有 IP 位置（例如 192.168.1.100）和 Port 號，就能快速傳遞訊息。</span>
                                </div>
                            </li>
                            <li className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-700/50 flex gap-3">
                                <Cable className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                                <div>
                                    <strong className="text-stone-200 block mb-1">Modbus/RTU</strong>
                                    <span className="text-sm text-stone-400">走實體序列線 (RS485)。就像是用「傳閱板夾」把多台設備串在一起 (Daisy-chain)，必須指定每一台機器的「站號 (Unit ID)」，例如 1號機、2號機。</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700/50 hover:border-amber-500/30 transition-colors">
                        <h3 className="text-xl font-medium text-stone-200 mb-4 flex items-center gap-2">
                            <Cpu className="w-5 h-5" />
                            Modbus Device (外籍員工)
                        </h3>
                        <p className="text-stone-300">
                            這才是你真正要寫的業務邏輯（例如：Deye 逆變器模組）。這個模組會把 Bridge 傳來的「一堆無意義的數字」，翻譯成我們上一階段學過的 <ConceptLink to="/openems-channel">Channel 通道</ConceptLink>。<br /><br />
                            例如，透過 <ConceptLink to="/openems-channel">Doc.of()</ConceptLink> 定義清楚這個數字代表的是電壓、電流還是溫度。
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-br from-zinc-800/80 to-zinc-900 border border-amber-900/30 rounded-2xl p-6 md:p-8 space-y-6">
                <h2 className="text-2xl font-semibold text-stone-100 flex items-center gap-3">
                    <LinkIcon className="w-6 h-6 text-stone-200" />
                    結合第一階段：Bridge 與 Device 的生死之交
                </h2>

                <p className="text-stone-300 leading-relaxed text-lg">
                    💡 重點來了！這裡完美結合了你學過的 <strong>OSGi</strong> 知識！
                </p>
                <p className="text-stone-300 leading-relaxed">
                    既然 Device（設備）是外籍員工，它自己不會講 Java 語，那它必須依賴 Bridge（翻譯官）才能存活。
                    所以在每一個 Modbus Device 的程式碼裡，你一定會看到類似這樣的 <ConceptLink to="/osgi">OSGi 宣告</ConceptLink>：
                </p>

                <div className="bg-zinc-950 rounded-xl overflow-hidden shadow-lg border border-zinc-700/50">
                    <div className="px-4 py-2 border-b border-zinc-700/50 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <pre className="p-4 overflow-x-auto text-sm lg:text-base font-mono leading-relaxed">
                        <code className="text-stone-300">
                            <span className="text-stone-200">@Reference</span>(policy = ReferencePolicy.<span className="text-blue-400">STATIC</span>,
                            policyOption = ReferencePolicyOption.<span className="text-blue-400">GREEDY</span>,
                            cardinality = ReferenceCardinality.<span className="text-red-400">MANDATORY</span>)
                            <span className="text-purple-400">private</span> ModbusBridge bridge;
                        </code>
                    </pre>
                </div>

                <div className="flex items-start gap-4 p-4 bg-amber-900/10 rounded-lg border border-amber-500/20">
                    <AlertTriangle className="w-5 h-5 text-stone-200 shrink-0 mt-0.5" />
                    <p className="text-stone-300 text-sm md:text-base leading-relaxed">
                        因為如果沒有了翻譯官，外籍員工留在辦公室（系統裡）也只是發呆，接收不到任何 <ConceptLink to="/openems-channel">Channel 數據</ConceptLink>。<br />
                        所以通常會設定為 <strong>STATIC + MANDATORY</strong>，只要通訊橋樑一斷開，這個設備模組就會跟著銷毀重啟！
                    </p>
                </div>
            </section>
        </div>
    );
}
