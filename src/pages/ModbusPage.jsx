import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Network, Cable, Cpu, Link as LinkIcon, HelpCircle, AlertTriangle, CheckCircle2, XCircle, Building2, Server, ArrowRight, BookOpen, Edit3, Layers, Star, RefreshCcw, Code, Lightbulb } from 'lucide-react';

const ConceptLink = ({ to, children }) => (
    <Link
        to={to}
        className="inline-flex items-center gap-1 text-amber-500 hover:text-amber-400 font-medium transition-colors border-b border-amber-500/30 hover:border-amber-400 pb-0.5"
        title={`跳轉至: ${children} 觀念`}
    >
        {children}
        <LinkIcon className="w-3 h-3" />
    </Link>
);

const ModbusPage = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedMappingOption, setSelectedMappingOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-12 pb-16">
            <header className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-stone-100 leading-tight">
                    什麼是 Modbus？<br />
                    <span className="text-amber-500">工業界的「世界語」</span>
                </h1>
                <p className="text-lg text-stone-300 leading-relaxed max-w-2xl">
                    如果 OpenEMS 是一間講「Java 語」的跨國智慧能源總部，那麼散佈在機房裡的太陽能逆變器、電池櫃、電表，就是講著各種方言的當地員工。
                </p>
            </header>

            <section className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-zinc-700/50 rounded-xl shrink-0">
                        <Network className="w-6 h-6 text-amber-400" />
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
                        <h3 className="text-xl font-medium text-amber-400 mb-4 flex items-center gap-2">
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
                        <h3 className="text-xl font-medium text-amber-400 mb-4 flex items-center gap-2">
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
                    <LinkIcon className="w-6 h-6 text-amber-500" />
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
                            <span className="text-amber-400">@Reference</span>(policy = ReferencePolicy.<span className="text-blue-400">STATIC</span>,
                            policyOption = ReferencePolicyOption.<span className="text-blue-400">GREEDY</span>,
                            cardinality = ReferenceCardinality.<span className="text-red-400">MANDATORY</span>)
                            <span className="text-purple-400">private</span> ModbusBridge bridge;
                        </code>
                    </pre>
                </div>

                <div className="flex items-start gap-4 p-4 bg-amber-900/10 rounded-lg border border-amber-500/20">
                    <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-stone-300 text-sm md:text-base leading-relaxed">
                        因為如果沒有了翻譯官，外籍員工留在辦公室（系統裡）也只是發呆，接收不到任何 <ConceptLink to="/openems-channel">Channel 數據</ConceptLink>。<br />
                        所以通常會設定為 <strong>STATIC + MANDATORY</strong>，只要通訊橋樑一斷開，這個設備模組就會跟著銷毀重啟！
                    </p>
                </div>
            </section>

            <section className="bg-zinc-800/40 rounded-2xl p-6 md:p-8 border border-zinc-700/50 space-y-8">
                <div className="flex items-center gap-3 border-b border-zinc-700/50 pb-4">
                    <div className="p-2 bg-amber-500/10 rounded-lg">
                        <HelpCircle className="w-6 h-6 text-amber-500" />
                    </div>
                    <h2 className="text-2xl font-semibold text-stone-100 flex-1">案發現場：複製貼上的太陽能逆變器</h2>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-amber-400 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        【背景情境】
                    </h3>
                    <p className="text-stone-300 leading-relaxed">
                        你是這間太陽能電廠的資深架構師。今天，一位菜鳥工程師去屋頂安裝了 3 台一模一樣的太陽能逆變器 (Device A, B, C)。<br /><br />
                        因為屋頂只有一條網路線，所以硬體廠商用了一條「實體通訊線 (RS485)」把這 3 台逆變器像串烤肉一樣串接起來 (Daisy-chain)，最後接到一台網路轉換器上。
                    </p>

                    <h3 className="text-lg font-medium text-amber-400 mt-6 flex items-center gap-2">
                        <Cpu className="w-5 h-5" />
                        【菜鳥的 OpenEMS 設定】
                    </h3>
                    <p className="text-stone-300 leading-relaxed">
                        回到機房後，菜鳥在 OpenEMS 網頁後台做了以下設定：
                    </p>
                    <ul className="list-disc list-inside text-stone-300 space-y-2 ml-4">
                        <li><strong>建立 Bridge (橋接器)：</strong> 他很聰明地建了 1 個 Modbus/TCP Bridge，並且正確填入了那台網路轉換器的 IP 地址 (例如 192.168.1.50)。</li>
                        <li><strong>建立 Device (設備模組)：</strong> 他新增了 3 個逆變器模組 (Device)，並且把這 3 個模組的 OSGi @Reference 都指向了剛剛那個 Bridge。</li>
                    </ul>

                    <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-5 mt-6 border-l-4 border-l-red-500">
                        <h3 className="text-lg font-medium text-red-400 flex items-center gap-2 mb-2">
                            🚨 【靈異事件發生了】
                        </h3>
                        <p className="text-stone-300 leading-relaxed">
                            當你打開 OpenEMS 監控面板時，你發現一件超毛的事情：<br />
                            這 3 台逆變器的發電量數字永遠一模一樣！如果 A 台現在發電 500W，B 變成 500W，C 也變成 500W。就算你拿一塊黑布把 B 台遮住，它的數字還是跟 A 一模一樣！
                        </p>
                    </div>

                    <p className="text-stone-200 font-medium text-lg mt-6">
                        身為資深架構師，你馬上看穿了菜鳥漏掉的關鍵設定。<br />
                        請問：菜鳥工程師到底犯了什麼錯，導致這 3 個 Device 讀到一模一樣的資料？
                    </p>
                </div>

                <div className="space-y-4 mt-8">
                    {/* Option A */}
                    <button
                        onClick={() => handleOptionSelect('A')}
                        className={`w-full text-left p-5 rounded-xl border transition-all duration-200 ${selectedOption === 'A'
                            ? 'bg-red-900/20 border-red-500/50'
                            : 'bg-zinc-800 border-zinc-700/50 hover:border-amber-500/30 hover:bg-zinc-700/30'
                            }`}
                    >
                        <div className="flex gap-4">
                            <div className={`mt-0.5 w-6 h-6 shrink-0 rounded-full border-2 flex items-center justify-center ${selectedOption === 'A' ? 'border-red-400' : 'border-stone-500'}`}>
                                {selectedOption === 'A' && <div className="w-3 h-3 rounded-full bg-red-400" />}
                            </div>
                            <div>
                                <strong className={`block mb-1 ${selectedOption === 'A' ? 'text-red-300' : 'text-stone-200'}`}>選項 A：</strong>
                                <span className="text-stone-300">他太省了！他不應該只建 1 個 Bridge。3 台逆變器就應該要建 3 個不同的 Bridge，並且給它們 3 個不同的 IP 地址。</span>
                            </div>
                        </div>
                    </button>

                    {/* Option B */}
                    <button
                        onClick={() => handleOptionSelect('B')}
                        className={`w-full text-left p-5 rounded-xl border transition-all duration-200 ${selectedOption === 'B'
                            ? 'bg-green-900/20 border-green-500/50'
                            : 'bg-zinc-800 border-zinc-700/50 hover:border-amber-500/30 hover:bg-zinc-700/30'
                            }`}
                    >
                        <div className="flex gap-4">
                            <div className={`mt-0.5 w-6 h-6 shrink-0 rounded-full border-2 flex items-center justify-center ${selectedOption === 'B' ? 'border-green-400' : 'border-stone-500'}`}>
                                {selectedOption === 'B' && <div className="w-3 h-3 rounded-full bg-green-400" />}
                            </div>
                            <div>
                                <strong className={`block mb-1 ${selectedOption === 'B' ? 'text-green-300' : 'text-stone-200'}`}>選項 B：</strong>
                                <span className="text-stone-300">Bridge 是無辜的！菜鳥在設定那 3 個 Device 模組時，忘記給它們設定各自獨立的<strong>「站號 (Unit ID)」</strong>，導致全部都預設成 1 號，所以 Bridge 永遠只去幫忙問 1 號機的資料。</span>
                            </div>
                        </div>
                    </button>

                    {/* Option C */}
                    <button
                        onClick={() => handleOptionSelect('C')}
                        className={`w-full text-left p-5 rounded-xl border transition-all duration-200 ${selectedOption === 'C'
                            ? 'bg-red-900/20 border-red-500/50'
                            : 'bg-zinc-800 border-zinc-700/50 hover:border-amber-500/30 hover:bg-zinc-700/30'
                            }`}
                    >
                        <div className="flex gap-4">
                            <div className={`mt-0.5 w-6 h-6 shrink-0 rounded-full border-2 flex items-center justify-center ${selectedOption === 'C' ? 'border-red-400' : 'border-stone-500'}`}>
                                {selectedOption === 'C' && <div className="w-3 h-3 rounded-full bg-red-400" />}
                            </div>
                            <div>
                                <strong className={`block mb-1 ${selectedOption === 'C' ? 'text-red-300' : 'text-stone-200'}`}>選項 C：</strong>
                                <span className="text-stone-300">這是 OSGi 的錯！他一定是把 Device 對 Bridge 的依賴設定成了 STATIC，導致資料被快取卡死了。</span>
                            </div>
                        </div>
                    </button>
                </div>

                {/* Feedback Section */}
                {selectedOption && (
                    <div className={`mt-6 p-5 rounded-xl border duration-300 ${selectedOption === 'B'
                        ? 'bg-green-900/20 border-green-500/50 text-green-200'
                        : 'bg-red-900/20 border-red-500/50 text-red-200'
                        }`}>
                        <div className="flex items-start gap-4">
                            {selectedOption === 'B' ? (
                                <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5 text-green-400" />
                            ) : (
                                <XCircle className="w-6 h-6 shrink-0 mt-0.5 text-red-400" />
                            )}
                            <div>
                                <h4 className={`font-semibold text-lg mb-2 ${selectedOption === 'B' ? 'text-green-300' : 'text-red-300'}`}>
                                    {selectedOption === 'B' ? '完全正確！推理滿分！ 🎉' : '哎呀，再想一下！ 🤔'}
                                </h4>
                                <p className="leading-relaxed opacity-90 text-stone-200">
                                    {selectedOption === 'A' && '網路轉換器確實只有一個 IP，而且 RS485 是透過 Daisy-chain 串接在一起的，這種架構下 1 個 Bridge (TCP) 是沒錯的！問題出在 Bridge 不知道怎麼跟底下的個別設備打招呼。'}
                                    {selectedOption === 'B' && '因為這 3 台逆變器是透過 RS485 串在一起的，共用同一個 IP 的 Bridge 時，就必須依靠 Unit ID (1號、2號、3號) 來區分。菜鳥忘了設 Unit ID，全部預設為 1，難怪讀回來的全部都是 1 號機的資料！'}
                                    {selectedOption === 'C' && 'STATIC 依賴是正確的設計，目的是讓設備與通訊橋樑同生共死。它不會導致資料快取卡死。核心問題在於如何識別同一條線上不同的實體設備。'}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </section>

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
                            <h3 className="text-lg font-medium text-amber-500 flex items-center gap-2 mb-3">
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
                            <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">1.</span> <div><strong>屋頂上：</strong>幾台逆變器用 RS485 串聯接上 Gateway。</div></li>
                            <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">2.</span> <div><strong>機房裡：</strong>OpenEMS 透過網路線連到 Gateway 的 IP。</div></li>
                            <li className="flex gap-2">
                                <span className="text-amber-500 font-bold shrink-0">3.</span> <div><strong>運作邏輯：</strong>OpenEMS 送出網路封包：「問 IP 192.168.1.50 底下的 Unit ID 2」。Gateway 收到後轉成電訊號，在 RS485 線上大喊：「2 號機，老大找你！」。</div>
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
                                    <li><strong>分配 IP：</strong>Gateway 設為 <code className="bg-zinc-800 px-1 rounded text-amber-500">192.168.1.50</code>，電腦設為 <code className="bg-zinc-800 px-1 rounded text-amber-500">192.168.1.100</code>。兩者已在同一個區域內網！</li>
                                </ul>
                            </div>
                        </div>

                        {/* 階段 3 */}
                        <div className="bg-zinc-900/60 rounded-xl p-6 border border-zinc-700/50 flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex flex-col items-center shrink-0">
                                <div className="w-12 h-12 bg-amber-900/30 rounded-full flex items-center justify-center border border-amber-500/30">
                                    <span className="text-amber-500 font-bold text-xl">3</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-amber-500 mb-3 flex items-center gap-2">
                                    <Server className="w-5 h-5" />
                                    一樓冷氣房裡的魔法 (OpenEMS 軟體設定)
                                </h3>
                                <ul className="list-disc list-inside text-stone-300 space-y-2 leading-relaxed">
                                    <li>你在冷氣房開啟 OpenEMS 後台，建立 <strong>Modbus/TCP Bridge</strong>，填入 <code className="bg-zinc-800 px-1 rounded text-amber-500">192.168.1.50</code>。</li>
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
                                    <li className="flex gap-2"><span className="text-amber-500">✅</span> <div><strong>OpenEMS 出發：</strong> 「我要讀取逆變器 A 的發電量！」發出 TCP 封包到 Gateway。</div></li>
                                    <li className="flex gap-2"><span className="text-amber-500">✅</span> <div><strong>翻譯與廣播：</strong> Gateway 轉成訊號，在頂樓實體線上大喊：「1號機！交出發電量！」</div></li>
                                    <li className="flex gap-2"><span className="text-amber-500">✅</span> <div><strong>設備回傳：</strong> 1號機把數字「5000」傳回 Gateway，再打包成網路封包丟回一樓電腦。</div></li>
                                    <li className="flex gap-2"><span className="text-amber-500">✅</span> <div><strong>軟體翻譯：</strong> OpenEMS 利用 <strong>Protocol Mapping</strong>，將「5000」塞入 <code>ACTIVE_POWER</code> 通道。</div></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Protocol Mapping Section */}
            <section className="bg-gradient-to-br from-zinc-800/80 to-zinc-900 border border-emerald-900/30 rounded-2xl p-6 md:p-8 space-y-8 mt-12">
                <div className="flex items-center gap-3 border-b border-zinc-700/50 pb-4">
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                        <BookOpen className="w-6 h-6 text-emerald-500" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-stone-100 flex-1">通訊協議映射 (Protocol Mapping) 與任務</h2>
                </div>

                <div className="space-y-6 text-stone-300 leading-relaxed">
                    <p className="text-lg">
                        當一切硬體接通，OpenEMS 收到的資料只是一堆類似密碼的數字：<br />
                        <code className="text-amber-400 bg-zinc-900 px-2 py-1 rounded">地址 40014 的值是 5000</code>
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
                            <p className="mb-2"><strong>FC3ReadRegistersTask</strong></p>
                            <p className="text-sm text-stone-400">
                                這是去問設備「你現在狀況怎樣？」。例如：持續讀取現在的發電量、電池電壓。
                            </p>
                        </div>
                        <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700/50">
                            <h3 className="text-xl font-medium text-purple-400 mb-4 flex items-center gap-2">
                                <Edit3 className="w-5 h-5" />
                                寫入任務 (FC16)
                            </h3>
                            <p className="mb-2"><strong>FC16WriteRegistersTask</strong></p>
                            <p className="text-sm text-stone-400">
                                這是去命令設備「照我的話做！」。例如：命令電池改用 3000W 功率充放電。
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 bg-zinc-900/60 rounded-xl border border-zinc-700/50 overflow-hidden">
                        <div className="bg-zinc-800/80 px-4 py-3 border-b border-zinc-700/50 flex items-center gap-2">
                            <Layers className="w-5 h-5 text-amber-500" />
                            <span className="font-mono text-amber-500 font-medium">m() 映射魔法：連接硬體與軟體通道</span>
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

            {/* Interactive Puzzle 2 */}
            <section className="bg-zinc-800/40 rounded-2xl p-6 md:p-8 border border-zinc-700/50 space-y-8 mt-12 pb-8">
                <div className="flex items-center gap-3 border-b border-zinc-700/50 pb-4">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                        <HelpCircle className="w-6 h-6 text-purple-400" />
                    </div>
                    <h2 className="text-2xl font-semibold text-stone-100 flex-1">逆向工程解謎：智慧電池櫃的對照表</h2>
                </div>

                <div className="space-y-4">
                    <p className="text-stone-300 leading-relaxed text-lg">
                        為了確認你完全吸收了這本「翻譯字典」的邏輯，我們再來做一個情境解謎！
                    </p>

                    <div className="bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-6 my-6">
                        <h3 className="text-lg font-medium text-purple-400 flex items-center gap-2 mb-4">
                            【情境：整合全新的智慧電池櫃】
                        </h3>
                        <p className="text-stone-300 leading-relaxed mb-4">
                            原廠給了你一本厚厚的 Modbus 說明書，裡面寫著：
                        </p>
                        <ul className="space-y-3">
                            <li className="flex gap-3 items-start">
                                <span className="bg-zinc-800 px-2 flex items-center rounded text-amber-500 font-mono mt-0.5 border border-zinc-700">40100</span>
                                <span className="text-stone-300">電池當前溫度 <strong>(只能讀取)</strong></span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="bg-zinc-800 px-2 flex items-center rounded text-amber-500 font-mono mt-0.5 border border-zinc-700">40200</span>
                                <span className="text-stone-300">最大充電功率限制 <strong>(可以讀取，也可以由外部系統寫入修改)</strong></span>
                            </li>
                        </ul>
                    </div>

                    <p className="text-stone-200 font-medium text-lg mt-6">
                        請問：針對這兩個地址，你在 OpenEMS 裡寫 Protocol Mapping 時，應該怎麼分配任務？
                    </p>
                </div>

                <div className="space-y-4 mt-8">
                    {/* Option A */}
                    <button
                        onClick={() => setSelectedMappingOption('A')}
                        className={`w-full text-left p-5 rounded-xl border transition-all duration-200 ${selectedMappingOption === 'A'
                                ? 'bg-red-900/20 border-red-500/50'
                                : 'bg-zinc-800 border-zinc-700/50 hover:border-purple-500/30 hover:bg-zinc-700/30'
                            }`}
                    >
                        <div className="flex gap-4">
                            <div className={`mt-0.5 w-6 h-6 shrink-0 rounded-full border-2 flex items-center justify-center ${selectedMappingOption === 'A' ? 'border-red-400' : 'border-stone-500'}`}>
                                {selectedMappingOption === 'A' && <div className="w-3 h-3 rounded-full bg-red-400" />}
                            </div>
                            <div>
                                <strong className={`block mb-1 ${selectedMappingOption === 'A' ? 'text-red-300' : 'text-stone-200'}`}>選項 A：</strong>
                                <span className="text-stone-300">把 40100 和 40200 全部塞進一個 <strong>讀取任務 (FC3)</strong> 裡就好，反正 OpenEMS 這麼聰明，我要修改功率時它自己會結合在一起寫入。</span>
                            </div>
                        </div>
                    </button>

                    {/* Option B */}
                    <button
                        onClick={() => setSelectedMappingOption('B')}
                        className={`w-full text-left p-5 rounded-xl border transition-all duration-200 ${selectedMappingOption === 'B'
                                ? 'bg-green-900/20 border-green-500/50'
                                : 'bg-zinc-800 border-zinc-700/50 hover:border-purple-500/30 hover:bg-zinc-700/30'
                            }`}
                    >
                        <div className="flex gap-4">
                            <div className={`mt-0.5 w-6 h-6 shrink-0 rounded-full border-2 flex items-center justify-center ${selectedMappingOption === 'B' ? 'border-green-400' : 'border-stone-500'}`}>
                                {selectedMappingOption === 'B' && <div className="w-3 h-3 rounded-full bg-green-400" />}
                            </div>
                            <div>
                                <strong className={`block mb-1 ${selectedMappingOption === 'B' ? 'text-green-300' : 'text-stone-200'}`}>選項 B：</strong>
                                <span className="text-stone-300">40100 放在讀取任務 (FC3)。至於 40200，因為它需要讀取當前設定，又需要被寫入，所以我必須把它<strong>同時放進 讀取任務 (FC3) 和 寫入任務 (FC16) 裡。</strong></span>
                            </div>
                        </div>
                    </button>
                </div>

                {/* Feedback Section */}
                {selectedMappingOption && (
                    <div className={`mt-6 p-5 rounded-xl border duration-300 ${selectedMappingOption === 'B'
                            ? 'bg-green-900/20 border-green-500/50 text-green-200'
                            : 'bg-red-900/20 border-red-500/50 text-red-200'
                        }`}>
                        <div className="flex items-start gap-4">
                            {selectedMappingOption === 'B' ? (
                                <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5 text-green-400" />
                            ) : (
                                <XCircle className="w-6 h-6 shrink-0 mt-0.5 text-red-400" />
                            )}
                            <div>
                                <h4 className={`font-semibold text-lg mb-2 ${selectedMappingOption === 'B' ? 'text-green-300' : 'text-red-300'}`}>
                                    {selectedMappingOption === 'B' ? '滿分架構師！完全命中核心！' : '可惜了，OpenEMS 沒有你想的那麼聰明！'}
                                </h4>
                                <p className="leading-relaxed opacity-90 text-stone-200">
                                    {selectedMappingOption === 'A' && 'FC3 是純粹的「讀取指令」，底層的 Modbus 協議是不允許你用 FC3 來修改設定的。如果我們不給它 FC16 的任務配置，再怎麼聰明的軟體也不能直接突破硬體協定的限制去寫入資料。'}
                                    {selectedMappingOption === 'B' && (
                                        <div className="space-y-5 mt-3">
                                            <p className="text-green-100 text-base">你已經完全掌握了工業控制裡「讀寫分離」的核心邏輯！OpenEMS 雖然很聰明，但它絕對不會擅自幫你決定哪個地址可以寫入，這一切都必須由工程師（你）來嚴格定義。</p>
                                            
                                            <div className="bg-zinc-900/50 rounded-xl p-5 border border-green-500/20 text-stone-300 shadow-inner">
                                                <h5 className="text-emerald-400 font-bold mb-3 flex items-center gap-2">
                                                    <RefreshCcw className="w-4 h-4" />
                                                    為什麼 40200 (最大充電功率) 需要同時「讀」又「寫」？
                                                </h5>
                                                <ul className="space-y-4 text-sm leading-relaxed">
                                                    <li><strong className="text-red-300">只有寫入 (FC16)：</strong> 你的控制器想把功率調降 500W，但因為你沒讀取，你根本不知道現在設備上的設定值是多少！你成了「瞎子摸象」，只能盲目發送絕對數值。</li>
                                                    <li><strong className="text-green-300">同時有讀取 (FC3) 和寫入 (FC16)：</strong> OpenEMS 會在背景每秒鐘用 FC3 去問硬體：「你現在的設定值是多少？」並更新到 Channel 裡。當你的 Controller 決定要改變功率時，它會觸發 FC16 把新數字寫進硬體。這樣 OpenEMS 永遠能和實體設備保持「狀態同步」！</li>
                                                </ul>
                                            </div>

                                            <div className="bg-zinc-950/80 rounded-xl overflow-hidden border border-zinc-700/50 shadow-md">
                                                <div className="bg-zinc-800/80 px-4 py-3 border-b border-zinc-700/50">
                                                    <span className="font-mono text-amber-500 text-sm font-medium flex items-center gap-2">
                                                        <Code className="w-4 h-4" />
                                                        實戰魔法：OpenEMS 的 m() 映射語法
                                                    </span>
                                                </div>
                                                <pre className="p-5 overflow-x-auto text-xs lg:text-sm font-mono leading-loose">
                                                    <code className="text-stone-300">
                                                        <span className="text-purple-400">@Override</span><br />
                                                        <span className="text-purple-400">protected</span> ModbusProtocol <span className="text-blue-400">defineModbusProtocol</span>() {'{'}<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return new</span> ModbusProtocol(<span className="text-purple-400">this</span>,<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-500">// 📖 任務一：讀取任務 (FC3) - 每秒鐘不斷去問現況</span><br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">new</span> FC3ReadRegistersTask(<span className="text-orange-300">40100</span>, Priority.<span className="text-blue-400">HIGH</span>,<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-200">m</span>(Battery.ChannelId.<span className="text-blue-400">TEMPERATURE</span>, <span className="text-purple-400">new</span> UnsignedWordElement(<span className="text-orange-300">40100</span>)),<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-500">// 這裡也讀取 40200，隨時掌握硬體當前的設定值</span><br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-200">m</span>(Battery.ChannelId.<span className="text-blue-400">MAX_CHARGE_POWER</span>, <span className="text-purple-400">new</span> UnsignedWordElement(<span className="text-orange-300">40200</span>))<br /> 
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;),<br /><br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-500">// ✍️ 任務二：寫入任務 (FC16) - 只有當 Controller 下達指令時才會觸發</span><br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">new</span> FC16WriteRegistersTask(<span className="text-orange-300">40200</span>,<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-500">// 當大腦想修改 MAX_CHARGE_POWER 時，就把數字轉成指令送到 40200</span><br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-200">m</span>(Battery.ChannelId.<span className="text-blue-400">MAX_CHARGE_POWER</span>, <span className="text-purple-400">new</span> UnsignedWordElement(<span className="text-orange-300">40200</span>))<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)<br />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;);<br />
                                                        {'}'}
                                                    </code>
                                                </pre>
                                            </div>
                                            
                                            <div className="bg-amber-900/10 rounded-xl p-5 border border-amber-500/20 flex gap-4 items-start shadow-sm mt-2">
                                                <div className="p-1.5 bg-amber-500/20 rounded-lg shrink-0 mt-0.5">
                                                    <Lightbulb className="w-5 h-5 text-amber-400" />
                                                </div>
                                                <div>
                                                    <h5 className="text-amber-400 font-bold mb-2">呼應第一階段的記憶點：還記得 Doc.of() 嗎？</h5>
                                                    <p className="text-sm leading-relaxed mb-3">
                                                        為了讓 <code>MAX_CHARGE_POWER</code> 可以被寫入，你在定義這個通道的「身分證」時，必須多加一個屬性：
                                                    </p>
                                                    <div className="bg-zinc-950 p-3 rounded-md border border-zinc-800">
                                                        <code className="text-amber-200 text-sm font-mono break-all">
                                                            Doc.of(OpenemsType.INTEGER).accessMode(AccessMode.READ_WRITE)
                                                        </code>
                                                    </div>
                                                    <p className="text-sm leading-relaxed mt-3">
                                                        如果沒加上 <code>READ_WRITE</code>，就算你在 Modbus 裡寫了 FC16，OpenEMS 大腦還是會把你擋下來，這就是系統層層保護的防呆機制！
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* Priority 3 Summary */}
            <section className="bg-gradient-to-br from-indigo-900/40 to-blue-900/20 rounded-2xl p-6 md:p-8 border border-indigo-500/30 space-y-6 mt-12 mb-8 shadow-lg shadow-indigo-900/20">
                <div className="flex items-center gap-3 border-b border-indigo-500/30 pb-4">
                    <div className="p-2 bg-indigo-500/20 rounded-lg">
                        <Star className="w-6 h-6 text-indigo-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-stone-100 flex-1">OpenEMS 第 3 優先總結：Modbus 通訊與軟硬體映射</h2>
                </div>

                <p className="text-stone-300 leading-relaxed text-lg">
                    如果說前兩階的 OSGi 和 Channel 是系統的「大腦與神經」，那麼 Modbus 就是讓大腦能夠控制四肢（實體設備）的<strong className="text-indigo-300">「跨國翻譯部」</strong>。
                </p>

                <div className="grid lg:grid-cols-3 gap-6 mt-6">
                    {/* Core Point 1 */}
                    <div className="bg-zinc-900/70 rounded-xl p-6 border border-zinc-700/50 flex flex-col h-full hover:border-emerald-500/30 transition-colors">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-emerald-500/20 text-emerald-400 p-1.5 rounded-lg">
                                <Network className="w-5 h-5" />
                            </span>
                            <h3 className="text-lg font-semibold text-emerald-400">一、IT 與 OT 實體交匯</h3>
                        </div>
                        <ul className="space-y-3 text-stone-300 text-sm md:text-base flex-1">
                            <li><strong className="text-stone-200">OT 端 (屋頂)：</strong> 設備使用 Modbus RTU (RS485) 串接，必須設定獨立的 <span className="text-amber-400">站號 (Unit ID)</span>。</li>
                            <li><strong className="text-stone-200">Gateway (變形金剛)：</strong> 將 RS485 電訊號轉為 TCP 網路封包。</li>
                            <li><strong className="text-stone-200">IT 端 (機房)：</strong> 透過一樓網路線 (Cat.6) 以 <span className="text-amber-400">IP 地址</span> 尋找 Gateway。</li>
                        </ul>
                    </div>

                    {/* Core Point 2 */}
                    <div className="bg-zinc-900/70 rounded-xl p-6 border border-zinc-700/50 flex flex-col h-full hover:border-blue-500/30 transition-colors">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-blue-500/20 text-blue-400 p-1.5 rounded-lg">
                                <Cpu className="w-5 h-5" />
                            </span>
                            <h3 className="text-lg font-semibold text-blue-400">二、軟體依賴 (主從關係)</h3>
                        </div>
                        <ul className="space-y-3 text-stone-300 text-sm md:text-base flex-1">
                            <li><strong className="text-stone-200">Bridge (翻譯官)：</strong> 負責實體連線，填寫 Gateway IP。</li>
                            <li><strong className="text-stone-200">Device (外籍員工)：</strong> 設備邏輯模組，填寫 Unit ID。</li>
                            <li><strong className="text-red-300">生死依賴：</strong> Device 必須用 <code>@Reference(STATIC)</code> 綁定 Bridge，沒翻譯官就強制死機保護！</li>
                        </ul>
                    </div>

                    {/* Core Point 3 */}
                    <div className="bg-zinc-900/70 rounded-xl p-6 border border-zinc-700/50 flex flex-col h-full hover:border-purple-500/30 transition-colors">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-purple-500/20 text-purple-400 p-1.5 rounded-lg">
                                <Layers className="w-5 h-5" />
                            </span>
                            <h3 className="text-lg font-semibold text-purple-400">三、Protocol Mapping</h3>
                        </div>
                        <ul className="space-y-3 text-stone-300 text-sm md:text-base flex-1">
                            <li><strong className="text-stone-200">FC3 (讀取)：</strong> 每秒問現況 (如當前溫度)。</li>
                            <li><strong className="text-stone-200">FC16 (寫入)：</strong> 改變狀態時觸發 (如命令放電)。</li>
                            <li><strong className="text-stone-200">m() 魔法：</strong> 把硬體地址綁到這兩類的 Channel 上。</li>
                            <li><strong className="text-amber-300">雙向綁定：</strong> 可修改的屬性須同時放入 FC3 與 FC16，這就是 <code>READ_WRITE</code>。</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ModbusPage;
