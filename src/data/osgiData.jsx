import React from 'react';
import ConceptLink from '../components/ConceptLink';

export const lifecycleData = [
    {
        phase: '@Activate',
        subtitle: '報到上班',
        icon: 'PlayCircle',
        timing: '模組剛啟動，且所有「必須 (MANDATORY)」的依賴都找齊時。',
        context: <>控制器啟動時，讀取初始設定（例如：最大放電功率是多少），或是開啟與外部資料庫的連線。這與 <ConceptLink to="/database">Database 連線池</ConceptLink> 有著密切關係。</>
    },
    {
        phase: '@Modified',
        subtitle: '更改設定/不重啟',
        icon: 'Settings',
        timing: '使用者在網頁後台修改了這個模組的設定。',
        context: <>廠長把最大放電功率從 5kW 改成 3kW。如果依賴設定正確（沒有被 <ConceptLink to="/osgi">STATIC</ConceptLink> 綁死），模組可以不用死機，直接在原地更新變數。</>
    },
    {
        phase: '@Deactivate',
        subtitle: '離職下台',
        icon: 'PowerOff',
        timing: '模組被刪除、系統關機，或是「必須」的依賴斷線（且沒有備用）時。',
        context: '清除記憶體裡的暫存資料、安全地關閉資料庫連線，確保不會發生 Memory Leak (記憶體洩漏)。'
    }
];

export const dependencyDimensions = {
    policy: [
        {
            type: 'STATIC',
            name: '靜態/自毀型',
            description: <>只要依賴稍微變動或換人，我就立刻死機重啟 (@Deactivate {`->`} @Activate)。追求「乾淨無污染的初始狀態」。</>
        },
        {
            type: 'DYNAMIC',
            name: '動態/熱插拔型',
            description: '依賴變動時，我不用死機，可以直接在背景把變數換掉。追求「服務不中斷」。'
        }
    ],
    cardinality: [
        {
            description: '決定生死存亡的「數量」。探討的是：「當數量變成 0 的時候，我還要不要活？」以及「我能不能同時接受多個？」'
        }
    ]
};

export const scenariosData = [
    {
        id: 1,
        setting: 'STATIC + 1..1 (MANDATORY)',
        title: '嚴格綁定，同生共死 (系統預設值)',
        meaning: '我一定要有一個夥伴，如果夥伴斷線或換人，我也要跟著死機重啟。',
        scenarioName: '計費扣款控制器',
        scenarioContext: <>開機時需要把資料庫的「用戶餘額」載入記憶體。如果 <ConceptLink to="/database">資料庫</ConceptLink> 斷線重連，或切換到備用資料庫，控制器必須重啟，強制它重新下載最新餘額。如果不重啟 (用 DYNAMIC)，可能會用到舊的餘額快取，導致算錯錢。</>
    },
    {
        id: 2,
        setting: 'DYNAMIC + 1..1 (MANDATORY)',
        title: '無縫接軌的熱插拔 (高可用性)',
        meaning: '我一定要有一個夥伴。如果主夥伴斷線，且剛好有備用夥伴，我可以瞬間切換過去，不用死機。但如果連備用都沒了 (數量變 0)，我還是得死。',
        scenarioName: '即時電價交易系統',
        scenarioContext: '系統必須隨時有電價 API 才能決定是否賣電。當「台電主 API」斷線時，控制器瞬間切換到「第三方備用 API」繼續交易。整個過程不重啟，確保不錯過任何一秒的交易機會。'
    },
    {
        id: 3,
        setting: 'DYNAMIC + 0..1 (OPTIONAL)',
        title: '獨立堅強，見機行事 (防禦型設計)',
        meaning: '我可以沒有夥伴 (數量 0 也死不了)。如果夥伴斷線，我就把變數設成 null 繼續活著做事。',
        scenarioName: '緊急警報寄信系統',
        scenarioContext: <>專門監控電表。電表斷線了 (變成 null)，控制器不但不能死，還要保持清醒，執行 <code className="bg-zinc-800 text-amber-200 px-1 py-0.5 rounded rounded text-xs mx-1">if (meter == null) {'{'} sendEmail(&quot;警報：電表失聯！&quot;); {'}'}</code> 的邏輯。此機制適用於各種 <ConceptLink to="/modbus">Modbus 設備</ConceptLink>的斷線處理。</>
    },
    {
        id: 4,
        setting: 'DYNAMIC + 0..n (MULTIPLE)',
        title: '多多益善，一個都不能少',
        meaning: '給我幾個我就收幾個，全部斷線我也無所謂。',
        scenarioName: '太陽能總發電量計算機',
        scenarioContext: <>收集全廠區的太陽能板數據。白天可能有 100 片板子運作；到了晚上，所有板子休眠斷線 (數量變 0)。計算機不會死，只是把總和算成 0 瓦。</>
    },
    {
        id: 5,
        setting: 'DYNAMIC + 1..n (AT_LEAST_ONE)',
        title: '團隊底線，全軍覆沒才投降',
        meaning: '我們是一個團隊，只要還有 1 個人活著，我就能撐下去。如果全部死光，我才跟著死。',
        scenarioName: '電池櫃總控制器',
        scenarioContext: '管理 10 顆小電池。壞掉 2 顆，剩 8 顆還是可以降載放電 (不重啟)。但如果 10 顆全部燒毀斷線，總控制器留著也沒意義，強制死機並觸發硬體斷電。'
    }
];
