import React, { useState } from 'react';
import { HelpCircle, AlertTriangle, Cpu, Network, CheckCircle2, XCircle, Code, RefreshCcw, Lightbulb, Star, Layers } from 'lucide-react';

export default function ModbusPuzzles() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedMappingOption, setSelectedMappingOption] = useState(null);
    const [selectedBossOption, setSelectedBossOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Puzzle 1: Copied Hardware */}
            <section className="bg-zinc-800/40 rounded-2xl p-6 md:p-8 border border-zinc-700/50 space-y-8">
                <div className="flex items-center gap-3 border-b border-zinc-700/50 pb-4">
                    <div className="p-2 bg-amber-500/10 rounded-lg">
                        <HelpCircle className="w-6 h-6 text-amber-500" />
                    </div>
                    <h2 className="text-2xl font-semibold text-amber-100 flex-1">案發現場：複製貼上的太陽能逆變器</h2>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-medium text-amber-400 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        【背景情境】
                    </h3>
                    <p className="text-amber-100/90 leading-relaxed">
                        你是這間太陽能電廠的資深架構師。今天，一位菜鳥工程師去屋頂安裝了 3 台一模一樣的太陽能逆變器 (Device A, B, C)。<br /><br />
                        因為屋頂只有一條網路線，所以硬體廠商用了一條「實體通訊線 (RS485)」把這 3 台逆變器像串烤肉一樣串接起來 (Daisy-chain)，最後接到一台網路轉換器上。
                    </p>

                    <h3 className="text-lg font-medium text-amber-400 mt-6 flex items-center gap-2">
                        <Cpu className="w-5 h-5" />
                        【菜鳥的 OpenEMS 設定】
                    </h3>
                    <p className="text-amber-100/90 leading-relaxed">
                        回到機房後，菜鳥在 OpenEMS 網頁後台做了以下設定：
                    </p>
                    <ul className="list-disc list-inside text-amber-100/90 space-y-2 ml-4">
                        <li><strong>建立 Bridge (橋接器)：</strong> 他很聰明地建了 1 個 Modbus/TCP Bridge，並且正確填入了那台網路轉換器的 IP 地址 (例如 192.168.1.50)。</li>
                        <li><strong>建立 Device (設備模組)：</strong> 他新增了 3 個逆變器模組 (Device)，並且把這 3 個模組的 OSGi @Reference 都指向了剛剛那個 Bridge。</li>
                    </ul>

                    <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-5 mt-6 border-l-4 border-l-red-500">
                        <h3 className="text-lg font-medium text-red-400 flex items-center gap-2 mb-2">
                            🚨 【靈異事件發生了】
                        </h3>
                        <p className="text-amber-100/90 leading-relaxed">
                            當你打開 OpenEMS 監控面板時，你發現一件超毛的事情：<br />
                            這 3 台逆變器的發電量數字永遠一模一樣！如果 A 台現在發電 500W，B 變成 500W，C 也變成 500W。就算你拿一塊黑布把 B 台遮住，它的數字還是跟 A 一模一樣！
                        </p>
                    </div>

                    <p className="text-amber-50 font-medium text-lg mt-6">
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
                                <strong className={`block mb-1 ${selectedOption === 'A' ? 'text-red-300' : 'text-amber-100/90'}`}>選項 A：</strong>
                                <span className={selectedOption === 'A' ? 'text-red-200' : 'text-amber-100/70'}>他太省了！他不應該只建 1 個 Bridge。3 台逆變器就應該要建 3 個不同的 Bridge，並且給它們 3 個不同的 IP 地址。</span>
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
                                <strong className={`block mb-1 ${selectedOption === 'B' ? 'text-green-300' : 'text-amber-100/90'}`}>選項 B：</strong>
                                <span className={selectedOption === 'B' ? 'text-green-200' : 'text-amber-100/70'}>Bridge 是無辜的！菜鳥在設定那 3 個 Device 模組時，忘記給它們設定各自獨立的<strong>「站號 (Unit ID)」</strong>，導致全部都預設成 1 號，所以 Bridge 永遠只去幫忙問 1 號機的資料。</span>
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
                                <strong className={`block mb-1 ${selectedOption === 'C' ? 'text-red-300' : 'text-amber-100/90'}`}>選項 C：</strong>
                                <span className={selectedOption === 'C' ? 'text-red-200' : 'text-amber-100/70'}>這是 OSGi 的錯！他一定是把 Device 對 Bridge 的依賴設定成了 STATIC，導致資料被快取卡死了。</span>
                            </div>
                        </div>
                    </button>
                </div>

                {/* Feedback Section */}
                {selectedOption && (
                    <div className={`mt-6 p-5 rounded-xl border duration-300 animate-in fade-in slide-in-from-top-2 ${selectedOption === 'B'
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
                                <p className="leading-relaxed opacity-90 text-amber-50">
                                    {selectedOption === 'A' && '網路轉換器確實只有一個 IP，而且 RS485 是透過 Daisy-chain 串接在一起的，這種架構下 1 個 Bridge (TCP) 是沒錯的！問題出在 Bridge 不知道怎麼跟底下的個別設備打招呼。'}
                                    {selectedOption === 'B' && '因為這 3 台逆變器是透過 RS485 串在一起的，共用同一個 IP 的 Bridge 時，就必須依靠 Unit ID (1號、2號、3號) 來區分。菜鳥忘了設 Unit ID，全部預設為 1，難怪讀回來的全部都是 1 號機的資料！'}
                                    {selectedOption === 'C' && 'STATIC 依賴是正確的設計，目的是讓設備與通訊橋樑同生共死。它不會導致資料快取卡死。核心問題在於如何識別同一條線上不同的實體設備。'}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* Interactive Puzzle 2 */}
            <section className="bg-zinc-800/40 rounded-2xl p-6 md:p-8 border border-zinc-700/50 space-y-8 pb-8">
                <div className="flex items-center gap-3 border-b border-zinc-700/50 pb-4">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                        <HelpCircle className="w-6 h-6 text-purple-400" />
                    </div>
                    <h2 className="text-2xl font-semibold text-amber-100 flex-1">逆向工程解謎：智慧電池櫃的對照表</h2>
                </div>

                <div className="space-y-4">
                    <p className="text-amber-100/90 leading-relaxed text-lg">
                        為了確認你完全吸收了這本「翻譯字典」的邏輯，我們再來做一個情境解謎！
                    </p>

                    <div className="bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-6 my-6">
                        <h3 className="text-lg font-medium text-purple-400 flex items-center gap-2 mb-4">
                            【情境：整合全新的智慧電池櫃】
                        </h3>
                        <p className="text-amber-100/90 leading-relaxed mb-4">
                            原廠給了你一本厚厚的 Modbus 說明書，裡面寫著：
                        </p>
                        <ul className="space-y-3">
                            <li className="flex gap-3 items-start">
                                <span className="bg-zinc-800 px-2 flex items-center rounded text-amber-500 font-mono mt-0.5 border border-zinc-700">40100</span>
                                <span className="text-amber-100/90">電池當前溫度 <strong className="text-amber-400">(只能讀取)</strong></span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="bg-zinc-800 px-2 flex items-center rounded text-amber-500 font-mono mt-0.5 border border-zinc-700">40200</span>
                                <span className="text-amber-100/90">最大充電功率限制 <strong className="text-amber-400">(可以讀取，也可以由外部系統寫入修改)</strong></span>
                            </li>
                        </ul>
                    </div>

                    <p className="text-amber-50 font-medium text-lg mt-6">
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
                                <strong className={`block mb-1 ${selectedMappingOption === 'A' ? 'text-red-300' : 'text-amber-100/90'}`}>選項 A：</strong>
                                <span className={selectedMappingOption === 'A' ? 'text-red-200' : 'text-amber-100/70'}>把 40100 和 40200 全部塞進一個 <strong>讀取任務 (FC3)</strong> 裡就好，反正 OpenEMS 這麼聰明，我要修改功率時它自己會結合在一起寫入。</span>
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
                                <strong className={`block mb-1 ${selectedMappingOption === 'B' ? 'text-green-300' : 'text-amber-100/90'}`}>選項 B：</strong>
                                <span className={selectedMappingOption === 'B' ? 'text-green-200' : 'text-amber-100/70'}>40100 放在讀取任務 (FC3)。至於 40200，因為它需要讀取當前設定，又需要被寫入，所以我必須把它<strong>同時放進 讀取任務 (FC3) 和 寫入任務 (FC16) 裡。</strong></span>
                            </div>
                        </div>
                    </button>
                </div>

                {/* Feedback Section */}
                {selectedMappingOption && (
                    <div className={`mt-6 p-5 rounded-xl border duration-300 animate-in fade-in slide-in-from-top-2 ${selectedMappingOption === 'B'
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
                                <div className="leading-relaxed opacity-90 text-amber-50">
                                    {selectedMappingOption === 'A' && 'FC3 是純粹的「讀取指令」，底層的 Modbus 協議是不允許你用 FC3 來修改設定的。如果我們不給它 FC16 的任務配置，再怎麼聰明的軟體也不能直接突破硬體協定的限制去寫入資料。'}
                                    {selectedMappingOption === 'B' && (
                                        <div className="space-y-5 mt-3">
                                            <p className="text-green-100 text-base">你已經完全掌握了工業控制裡「讀寫分離」的核心邏輯！OpenEMS 雖然很聰明，但它絕對不會擅自幫你決定哪個地址可以寫入，這一切都必須由工程師（你）來嚴格定義。</p>
                                            
                                            <div className="bg-zinc-900/50 rounded-xl p-5 border border-green-500/20 text-amber-100 shadow-inner">
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
                                                <pre className="p-5 overflow-x-auto text-xs lg:text-sm font-mono leading-loose bg-[#1e1e1e]">
                                                    <code className="text-stone-300">
                                                        <span className="text-purple-400">@Override</span>{'\n'}
                                                        <span className="text-purple-400">protected</span> ModbusProtocol <span className="text-blue-400">defineModbusProtocol</span>() {'{'}{'\n'}
                                                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return new</span> ModbusProtocol(<span className="text-purple-400">this</span>,{'\n'}
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-500">// 📖 任務一：讀取任務 (FC3) - 每秒鐘不斷去問現況</span>{'\n'}
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">new</span> FC3ReadRegistersTask(<span className="text-orange-300">40100</span>, Priority.<span className="text-blue-400">HIGH</span>,{'\n'}
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-200">m</span>(Battery.ChannelId.<span className="text-blue-400">TEMPERATURE</span>, <span className="text-purple-400">new</span> UnsignedWordElement(<span className="text-orange-300">40100</span>)),{'\n'}
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-500">// 這裡也讀取 40200，隨時掌握硬體當前的設定值</span>{'\n'}
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-200">m</span>(Battery.ChannelId.<span className="text-blue-400">MAX_CHARGE_POWER</span>, <span className="text-purple-400">new</span> UnsignedWordElement(<span className="text-orange-300">40200</span>)){'\n'} 
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;),{'\n\n'}
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-500">// ✍️ 任務二：寫入任務 (FC16) - 只有當 Controller 下達指令時才會觸發</span>{'\n'}
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">new</span> FC16WriteRegistersTask(<span className="text-orange-300">40200</span>,{'\n'}
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-500">// 當大腦想修改 MAX_CHARGE_POWER 時，就把數字轉成指令送到 40200</span>{'\n'}
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-200">m</span>(Battery.ChannelId.<span className="text-blue-400">MAX_CHARGE_POWER</span>, <span className="text-purple-400">new</span> UnsignedWordElement(<span className="text-orange-300">40200</span>)){'\n'}
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;){'\n'}
                                                        &nbsp;&nbsp;&nbsp;&nbsp;);{'\n'}
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
                                                    <p className="text-sm leading-relaxed mb-3 text-amber-100/90">
                                                        為了讓 <code>MAX_CHARGE_POWER</code> 可以被寫入，你在定義這個通道的「身分證」時，必須多加一個屬性：
                                                    </p>
                                                    <div className="bg-zinc-950 p-3 rounded-md border border-zinc-800">
                                                        <code className="text-amber-200 text-sm font-mono break-all">
                                                            Doc.of(OpenemsType.INTEGER).accessMode(AccessMode.READ_WRITE)
                                                        </code>
                                                    </div>
                                                    <p className="text-sm leading-relaxed mt-3 text-amber-100/90">
                                                        如果沒加上 <code>READ_WRITE</code>，就算你在 Modbus 裡寫了 FC16，OpenEMS 大腦還是會把你擋下來，這就是系統層層保護的防呆機制！
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* Priority 3 Summary */}
            <section className="bg-gradient-to-br from-indigo-900/40 to-blue-900/20 rounded-2xl p-6 md:p-8 border border-indigo-500/30 space-y-6 mb-8 shadow-lg shadow-indigo-900/20">
                <div className="flex items-center gap-3 border-b border-indigo-500/30 pb-4">
                    <div className="p-2 bg-indigo-500/20 rounded-lg">
                        <Star className="w-6 h-6 text-indigo-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-amber-100 flex-1">OpenEMS 第 3 優先總結：Modbus 通訊與軟硬體映射</h2>
                </div>

                <p className="text-amber-100/90 leading-relaxed text-lg">
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
                        <ul className="space-y-3 text-amber-100/80 text-sm md:text-base flex-1">
                            <li><strong className="text-amber-100">OT 端 (屋頂)：</strong> 設備使用 Modbus RTU (RS485) 串接，必須設定獨立的 <span className="text-amber-400">站號 (Unit ID)</span>。</li>
                            <li><strong className="text-amber-100">Gateway (變形金剛)：</strong> 將 RS485 電訊號轉為 TCP 網路封包。</li>
                            <li><strong className="text-amber-100">IT 端 (機房)：</strong> 透過一樓網路線 (Cat.6) 以 <span className="text-amber-400">IP 地址</span> 尋找 Gateway。</li>
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
                        <ul className="space-y-3 text-amber-100/80 text-sm md:text-base flex-1">
                            <li><strong className="text-amber-100">Bridge (翻譯官)：</strong> 負責實體連線，填寫 Gateway IP。</li>
                            <li><strong className="text-amber-100">Device (外籍員工)：</strong> 設備邏輯模組，填寫 Unit ID。</li>
                            <li><strong className="text-red-400">生死依賴：</strong> Device 必須用 <code>@Reference(STATIC)</code> 綁定 Bridge，沒翻譯官就強制死機保護！</li>
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
                        <ul className="space-y-3 text-amber-100/80 text-sm md:text-base flex-1">
                            <li><strong className="text-amber-100">FC3 (讀取)：</strong> 每秒問現況 (如當前溫度)。</li>
                            <li><strong className="text-amber-100">FC16 (寫入)：</strong> 改變狀態時觸發 (如命令放電)。</li>
                            <li><strong className="text-amber-100">m() 魔法：</strong> 把硬體地址綁到這兩類的 Channel 上。</li>
                            <li><strong className="text-amber-300">雙向綁定：</strong> 可修改的屬性須同時放入 FC3 與 FC16，這就是 <code>READ_WRITE</code>。</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Final Boss Interactive Puzzle */}
            <section className="bg-zinc-800/80 border border-zinc-700/80 rounded-2xl p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-purple-500 to-red-500"></div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-red-500/20 text-red-400 rounded-lg">
                        <AlertTriangle className="w-6 h-6 animate-pulse" />
                    </div>
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                        大魔王綜合測驗：吵鬧的智慧電表
                    </h2>
                </div>

                <div className="prose prose-invert max-w-none mb-8">
                    <p className="text-amber-100/90 leading-relaxed text-lg">
                        這題綜合測驗，將會同時考驗你 <strong className="text-amber-400">第一階段：Channel 身分證</strong> 與 <strong className="text-amber-400">第三階段：Modbus 任務映射</strong> 的融會貫通能力。準備接招！
                    </p>

                    <div className="bg-zinc-900 rounded-xl p-5 border border-zinc-700 mt-6">
                        <h4 className="text-amber-400 font-semibold mb-3 flex items-center gap-2">
                            【案發現場】
                        </h4>
                        <p className="text-amber-100/90">
                            工廠買了一台全新的「智慧電表 (Smart Meter)」，採用 RS485 通訊並透過 Gateway 連接。電表原廠的 Modbus 手冊提供以下資訊：
                        </p>
                        <ul className="text-amber-100/90 space-y-2 mt-3 list-disc list-inside">
                            <li><strong className="text-amber-400">地址 40010：</strong> 當前總耗電量 (僅供讀取)</li>
                            <li><strong className="text-amber-400">地址 40050：</strong> 警報解除開關 (寫入 1 即可解除電表上的蜂鳴器警報；平時讀取會顯示目前的警報狀態)</li>
                        </ul>
                    </div>

                    <div className="mt-8">
                        <h4 className="text-blue-300 font-semibold mb-3">你的 Protocol Mapping 程式碼：</h4>
                        <div className="bg-[#1e1e1e] rounded-xl p-4 overflow-x-auto border border-zinc-700 shadow-inner">
                            <pre className="text-sm font-mono text-stone-300 leading-relaxed max-w-full"><code className="block w-full">{`@Override
protected ModbusProtocol defineModbusProtocol() {
    return new ModbusProtocol(this,
        // 📖 任務一：每秒讀取現況
        new FC3ReadRegistersTask(40010, Priority.HIGH,
            m(Meter.ChannelId.ACTIVE_POWER, new UnsignedWordElement(40010)),
            m(Meter.ChannelId.ALARM_STATUS, new UnsignedWordElement(40050)) 
        ),

        // ✍️ 任務二：寫入警報解除命令
        new FC16WriteRegistersTask(40050,
            m(Meter.ChannelId.ALARM_STATUS, new UnsignedWordElement(40050)) 
        )
    );
}`}</code></pre>
                        </div>
                    </div>

                    <div className="bg-red-900/10 border-l-4 border-red-500 p-4 mt-8 rounded-r-lg">
                        <h4 className="text-red-400 font-semibold flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5" />
                            緊急狀況！
                        </h4>
                        <p className="text-amber-100/90 mt-2">
                            程式上線後，你發現可以正常讀到耗電量，也可以讀到警報狀態。但是！<strong className="text-amber-100">當你透過 OpenEMS UI 按下「解除警報」按鈕時，現場的電表依然嗶嗶叫個不停，完全無法寫入！</strong>
                        </p>
                        <p className="text-amber-100/90 mt-2">
                            而且，如果你打開 OpenEMS 系統的 Log 紀錄，只要你按下按鈕，就會跳出一行紅色的 Error：
                        </p>
                        <code className="block bg-black/50 p-2 text-red-400 mt-2 rounded border border-red-900/30 text-xs md:text-sm">
                            Write-Channel [Meter.ALARM_STATUS] is not an instance of WriteChannel. Cannot set next write value.
                        </code>
                    </div>

                    <h4 className="text-xl font-semibold text-amber-100 mt-8 mb-4">請問這個致命的 Bug 出在哪裡？</h4>
                </div>

                {/* Boss Options */}
                <div className="space-y-4">
                    {/* Option A */}
                    <button
                        onClick={() => setSelectedBossOption('A')}
                        className={`w-full text-left p-5 rounded-xl border transition-all duration-200 ${selectedBossOption === 'A'
                            ? 'bg-red-900/20 border-red-500/50'
                            : 'bg-zinc-800 border-zinc-700/50 hover:border-amber-500/30 hover:bg-zinc-700/30'
                            }`}
                    >
                        <div className="flex gap-4">
                            <div className={`mt-0.5 w-6 h-6 shrink-0 rounded-full border-2 flex items-center justify-center ${selectedBossOption === 'A' ? 'border-red-400' : 'border-stone-500'}`}>
                                {selectedBossOption === 'A' && <div className="w-3 h-3 rounded-full bg-red-400" />}
                            </div>
                            <div>
                                <strong className={`block mb-1 ${selectedBossOption === 'A' ? 'text-red-300' : 'text-amber-100'}`}>選項 A：Modbus 任務衝突了！</strong>
                                <span className={selectedBossOption === 'A' ? 'text-red-200' : 'text-amber-100/70'}>因為 `ALARM_STATUS` 同時被放在 FC3 (讀取) 和 FC16 (寫入) 的任務裡。這兩個任務會互相打架，導致寫入失敗。應該要把 FC3 裡面的 `ALARM_STATUS` 刪掉。</span>
                            </div>
                        </div>
                    </button>

                    {/* Option B */}
                    <button
                        onClick={() => setSelectedBossOption('B')}
                        className={`w-full text-left p-5 rounded-xl border transition-all duration-200 ${selectedBossOption === 'B'
                            ? 'bg-green-900/20 border-green-500/50'
                            : 'bg-zinc-800 border-zinc-700/50 hover:border-amber-500/30 hover:bg-zinc-700/30'
                            }`}
                    >
                        <div className="flex gap-4">
                            <div className={`mt-0.5 w-6 h-6 shrink-0 rounded-full border-2 flex items-center justify-center ${selectedBossOption === 'B' ? 'border-green-400' : 'border-stone-500'}`}>
                                {selectedBossOption === 'B' && <div className="w-3 h-3 rounded-full bg-green-400" />}
                            </div>
                            <div>
                                <strong className={`block mb-1 ${selectedBossOption === 'B' ? 'text-green-300' : 'text-amber-100'}`}>選項 B：Channel 的身分類型錯了！</strong>
                                <span className={selectedBossOption === 'B' ? 'text-green-200' : 'text-amber-100/70'}>Modbus Protocol Mapping 寫得完全正確，錯誤出在 `Meter` 這個介面的 Channel 定義上。當初在寫 `ALARM_STATUS` 的身分證時，一定是不小心用了 `Doc.of(OpenemsType.BOOLEAN)`，而沒有加上 `.accessMode(AccessMode.READ_WRITE)`，導致它被判定成只能讀取的唯讀 Channel。</span>
                            </div>
                        </div>
                    </button>

                    {/* Option C */}
                    <button
                        onClick={() => setSelectedBossOption('C')}
                        className={`w-full text-left p-5 rounded-xl border transition-all duration-200 ${selectedBossOption === 'C'
                            ? 'bg-red-900/20 border-red-500/50'
                            : 'bg-zinc-800 border-zinc-700/50 hover:border-amber-500/30 hover:bg-zinc-700/30'
                            }`}
                    >
                        <div className="flex gap-4">
                            <div className={`mt-0.5 w-6 h-6 shrink-0 rounded-full border-2 flex items-center justify-center ${selectedBossOption === 'C' ? 'border-red-400' : 'border-stone-500'}`}>
                                {selectedBossOption === 'C' && <div className="w-3 h-3 rounded-full bg-red-400" />}
                            </div>
                            <div>
                                <strong className={`block mb-1 ${selectedBossOption === 'C' ? 'text-red-300' : 'text-amber-100'}`}>選項 C：地址映射跨距太大！</strong>
                                <span className={selectedBossOption === 'C' ? 'text-red-200' : 'text-amber-100/70'}>在 FC3 讀取任務中，你把地址 40010 和 40050 包在同一個 Task 裡面。因為中間跳躍了 40 個地址，這會導致硬體無法解讀，進而造成後續的寫入任務也跟著當機。</span>
                            </div>
                        </div>
                    </button>
                </div>

                {/* Boss Feedback Section */}
                {selectedBossOption && (
                    <div className={`mt-6 p-5 rounded-xl border duration-300 animate-in fade-in slide-in-from-top-2 ${selectedBossOption === 'B'
                        ? 'bg-green-900/20 border-green-500/50 text-green-200'
                        : 'bg-red-900/20 border-red-500/50 text-red-200'
                        }`}>
                        <div className="flex items-start gap-4">
                            {selectedBossOption === 'B' ? (
                                <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5 text-green-400" />
                            ) : (
                                <XCircle className="w-6 h-6 shrink-0 mt-0.5 text-red-400" />
                            )}
                            <div>
                                <h4 className={`font-semibold text-lg mb-2 ${selectedBossOption === 'B' ? 'text-green-300' : 'text-red-300'}`}>
                                    {selectedBossOption === 'B' ? '太神啦！你已經具備獨立開發 OpenEMS 設備模組的能力了！ 🏆' : '小心陷阱！錯誤訊息已經提示你了喔 🔍'}
                                </h4>
                                <div className="space-y-4 opacity-90 text-amber-50">
                                    {selectedBossOption === 'A' && (
                                        <p>這是最常見的誤區！在 OpenEMS 裡，同一個 Channel <strong>必須</strong>同時綁定讀取 (FC3) 與寫入 (FC16)，因為大腦需要隨時知道它目前的狀態，而且在每次寫入成功後，也要靠讀取任務來「驗證」是否真的改變了。所以這兩個任務不會打架，反而是最佳拍檔！</p>
                                    )}
                                    {selectedBossOption === 'C' && (
                                        <p>雖然 Modbus 在讀取連續地址時效率最好，但 OpenEMS 底層非常聰明！如果你把 40010 和 40050 放在同一個 Task，它的底層套件會自動幫你計算：如果中間的空白地址加起來「小於」分兩次問的通訊成本，它就會一次讀回來再幫你切開；如果相差太遠，它也會自動拆成兩個封包去問。所以這不會造成寫入失敗喔！</p>
                                    )}
                                    {selectedBossOption === 'B' && (
                                        <>
                                            <p>沒錯！那個大大的 Error 訊息：<code>is not an instance of WriteChannel</code> 就是最大的鐵證！</p>
                                            <p className="mt-2 text-amber-100">雖然你在 <strong className="text-amber-400">第三階 (Modbus)</strong> 把它綁到了 FC16 寫入任務，但因為你在 <strong className="text-amber-400">第一階 (Channel 介面宣告)</strong> 時，忘記幫它申請 <code>READ_WRITE</code> 的權限，導致 OpenEMS 核心大腦把它當成「唯讀」的。<br /><br />
                                                就算 Modbus 準備好要幫你送信了，但 OpenEMS 大腦根本不允許 UI 按鈕產生寫入命令 (Next Write Value)！這就是結合「軟體抽象化 (Channel)」與「硬體通訊 (Modbus)」的經典 Bug！</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}

