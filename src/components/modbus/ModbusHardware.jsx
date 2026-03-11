import React from 'react';
import { Cable, Network, Server, Building2, ArrowRight, MapPin } from 'lucide-react';

export default function ModbusHardware() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Bonus Hardware Section */}
            <section className="bg-zinc-800/40 rounded-2xl p-6 md:p-8 border border-zinc-700/50 space-y-6">
                <div className="flex items-center gap-3 border-b border-zinc-700/50 pb-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                        <Cable className="w-6 h-6 text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-semibold text-stone-100 flex-1">進階硬體知識：網路線 vs RS485 線與混血架構</h2>
                </div>

                <div className="space-y-4">
                    <p className="text-stone-300 leading-relaxed">
                        理解這兩種物理線路的本質，是掌握 OT (工業控制) 與傳統 IT (資工) 差異的關鍵：
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                        <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-700/50">
                            <h3 className="text-lg font-medium text-blue-400 flex items-center gap-2 mb-3">
                                <Network className="w-5 h-5" />
                                網路線 (Ethernet / TCP)
                            </h3>
                            <ul className="list-disc list-inside text-stone-300 space-y-2 text-sm leading-relaxed">
                                <li><strong>特性：</strong>專線 (星型拓樸)。每一台機器都要拉一條獨立的網路線接到「交換器 (Switch)」。</li>
                                <li><strong>尋址方式：</strong>靠的是 IP 地址（例如 192.168.1.10）。</li>
                                <li><strong>備註：</strong>雖然現代高階設備可能有雙網路孔串接，但傳統上是「一台一條」。</li>
                            </ul>
                        </div>
                        <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-700/50">
                            <h3 className="text-lg font-medium text-stone-200 flex items-center gap-2 mb-3">
                                <Cable className="w-5 h-5" />
                                RS485 (RTU)
                            </h3>
                            <ul className="list-disc list-inside text-stone-300 space-y-2 text-sm leading-relaxed">
                                <li><strong>特性：</strong>一條線串到底 (匯流排拓樸)。用一對雙絞線最多可以串聯幾十台設備，省去大量佈線成本。</li>
                                <li><strong>尋址方式：</strong>為了避免通訊衝突，必須靠 <strong>Unit ID (站號)</strong> 點名。</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8 bg-blue-900/10 border border-blue-500/20 rounded-xl p-6">
                    <h3 className="text-xl font-medium text-blue-300 mb-4 flex items-center gap-2">
                        💡 破解案發現場的「混血架構 (Gateway)」
                    </h3>
                    <p className="text-stone-300 leading-relaxed">
                        你可能會疑惑：「既然是串接的 RS485，為什麼菜鳥在 OpenEMS 裡建的卻是 Modbus/TCP Bridge？」
                    </p>
                    <p className="text-stone-300 leading-relaxed mt-4">
                        因為現代機房通常只留網路孔。硬體廠商會在屋頂放一台 <strong>串列轉網路通訊閘道器 (Serial-to-Ethernet Gateway)</strong>：
                    </p>
                    <div className="bg-zinc-900/80 p-4 rounded-lg mt-4 border border-zinc-700">
                        <ul className="space-y-3 text-stone-300 text-sm md:text-base">
                            <li className="flex gap-2"><span className="text-stone-200 font-bold shrink-0">1.</span> <div><strong>屋頂上：</strong>幾台逆變器用 RS485 串聯接上 Gateway。</div></li>
                            <li className="flex gap-2"><span className="text-stone-200 font-bold shrink-0">2.</span> <div><strong>機房裡：</strong>OpenEMS 透過網路線連到 Gateway 的 IP。</div></li>
                            <li className="flex gap-2">
                                <span className="text-stone-200 font-bold shrink-0">3.</span> <div><strong>運作邏輯：</strong>OpenEMS 送出網路封包：「問 IP 192.168.1.50 底下的 Unit ID 2」。Gateway 收到後轉成電訊號，在 RS485 線上大喊：「2 號機，老大找你！」。</div>
                            </li>
                        </ul>
                    </div>
                    <p className="text-blue-200 font-medium mt-4">
                        這就是 OpenEMS 中最常見、也最精華的 Modbus Bridge 應用場景！
                    </p>
                </div>
            </section>

            {/* 實戰全紀錄 Section */}
            <section className="bg-zinc-800/40 rounded-2xl p-6 md:p-8 border border-zinc-700/50 space-y-8 relative overflow-hidden">
                {/* Decorative background */}
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Building2 className="w-64 h-64" />
                </div>

                <div className="flex items-center gap-3 border-b border-zinc-700/50 pb-4 relative z-10">
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                        <MapPin className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-stone-100 flex-1">案場實戰全紀錄：從頂樓到一樓大腦的 4 個階段</h2>
                </div>

                <div className="relative z-10 space-y-6">
                    <p className="text-stone-300 leading-relaxed text-lg">
                        「先見林，再見樹」這是打通 OT (工業技術) 與 IT (資訊技術) 的最高級策略！讓我們戴上工程安全帽，想像你今天親自帶隊去到一個太陽能案場的真實配置：
                    </p>

                    <div className="space-y-4">
                        {/* 階段 1 */}
                        <div className="bg-zinc-900/60 rounded-xl p-6 border border-zinc-700/50 flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex flex-col items-center shrink-0">
                                <div className="w-12 h-12 bg-emerald-900/30 rounded-full flex items-center justify-center border border-emerald-500/30">
                                    <span className="text-emerald-400 font-bold text-xl">1</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                                    <Building2 className="w-5 h-5" />
                                    頂樓烈日下的硬體派對 (設備與 RS485 串接)
                                </h3>
                                <ul className="list-disc list-inside text-stone-300 space-y-2 leading-relaxed">
                                    <li><strong>設備就位：</strong>工班將 3 台變流器安裝在頂樓鐵皮屋下。</li>
                                    <li><strong>通訊線串聯：</strong>用 RS485 雙絞線從第 1 台連到第 2 台，再連到第 3 台。</li>
                                    <li><strong>設定站號 (Unit ID)：</strong>在設備螢幕上設定 ID 分別為 1, 2, 3。</li>
                                    <li><strong>裝上翻譯官 (Gateway)：</strong>在最後一台旁邊裝上 Modbus 閘道器，接上 RS485 線頭。</li>
                                </ul>
                            </div>
                        </div>

                        {/* 階段 2 */}
                        <div className="bg-zinc-900/60 rounded-xl p-6 border border-zinc-700/50 flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex flex-col items-center shrink-0">
                                <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center border border-blue-500/30">
                                    <span className="text-blue-400 font-bold text-xl">2</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-blue-400 mb-3 flex items-center gap-2">
                                    <Cable className="w-5 h-5" />
                                    穿梭樓層的網路線 (IT 基礎建設)
                                </h3>
                                <ul className="list-disc list-inside text-stone-300 space-y-2 leading-relaxed">
                                    <li><strong>拉網路線：</strong>水電師傅從頂樓 Gateway 拉網路線到一樓機房。</li>
                                    <li><strong>接上路由器：</strong>一樓機房的路由器接上這條線，你的 OpenEMS 電腦也插在同台路由器上。</li>
                                    <li><strong>分配 IP：</strong>Gateway 設為 <code className="bg-zinc-800 px-1 rounded text-stone-200">192.168.1.50</code>，電腦設為 <code className="bg-zinc-800 px-1 rounded text-stone-200">192.168.1.100</code>。兩者已在同一個區域內網！</li>
                                </ul>
                            </div>
                        </div>

                        {/* 階段 3 */}
                        <div className="bg-zinc-900/60 rounded-xl p-6 border border-zinc-700/50 flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex flex-col items-center shrink-0">
                                <div className="w-12 h-12 bg-amber-900/30 rounded-full flex items-center justify-center border border-amber-500/30">
                                    <span className="text-stone-200 font-bold text-xl">3</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-stone-200 mb-3 flex items-center gap-2">
                                    <Server className="w-5 h-5" />
                                    一樓冷氣房裡的魔法 (OpenEMS 軟體設定)
                                </h3>
                                <ul className="list-disc list-inside text-stone-300 space-y-2 leading-relaxed">
                                    <li>你在冷氣房開啟 OpenEMS 後台，建立 <strong>Modbus/TCP Bridge</strong>，填入 <code className="bg-zinc-800 px-1 rounded text-stone-200">192.168.1.50</code>。</li>
                                    <li>建立 3 個 <strong>Device</strong>，把它們全部綁定到剛才那個 Bridge，並且將站號 (Unit ID) 依序填入 1, 2, 3。</li>
                                </ul>
                            </div>
                        </div>

                        {/* 階段 4 */}
                        <div className="bg-zinc-900/60 rounded-xl p-6 border border-amber-900/50 bg-gradient-to-r from-zinc-900 to-amber-900/10 flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex flex-col items-center shrink-0">
                                <div className="w-12 h-12 bg-red-900/30 rounded-full flex items-center justify-center border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                                    <span className="text-red-400 font-bold text-xl">4</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-red-400 mb-3 flex items-center gap-2">
                                    <ArrowRight className="w-5 h-5" />
                                    資料流動與收成 (Protocol Mapping 發威)
                                </h3>
                                <p className="text-stone-300 mb-3 leading-relaxed">當你按下儲存，整個系統就活起來了：</p>
                                <ul className="space-y-2 text-stone-300 text-sm md:text-base">
                                    <li className="flex gap-2"><span className="text-stone-200">✅</span> <div><strong>OpenEMS 出發：</strong> 「我要讀取逆變器 A 的發電量！」發出 TCP 封包到 Gateway。</div></li>
                                    <li className="flex gap-2"><span className="text-stone-200">✅</span> <div><strong>翻譯與廣播：</strong> Gateway 轉成訊號，在頂樓實體線上大喊：「1號機！交出發電量！」</div></li>
                                    <li className="flex gap-2"><span className="text-stone-200">✅</span> <div><strong>設備回傳：</strong> 1號機把數字「5000」傳回 Gateway，再打包成網路封包丟回一樓電腦。</div></li>
                                    <li className="flex gap-2"><span className="text-stone-200">✅</span> <div><strong>軟體翻譯：</strong> OpenEMS 利用 <strong>Protocol Mapping</strong>，將「5000」塞入 <code>ACTIVE_POWER</code> 通道。</div></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
