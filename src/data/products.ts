import { Product } from '../types';

export const products: Product[] = [
  // ==================== SEMICONDUCTOR ====================

  {
    id: 'si-prime-wafer',
    productName: 'Si Prime Wafer',
    group: 'semi',
    market: {
      currentSize: 'USD 18.2 億',
      futureSize: 'USD 32.5 億 (2032)',
      cagr: '8-10%',
      summary: '邏輯芯片、功率半導體主流基體。300mm 晶圓標準化，日本壟斷高端市場，中國加速國產化。',
      shareBreakdown: [
        { segment: '日本 (Shin-Etsu/SUMCO)', share: '68%' },
        { segment: '中國 (中環、上海新昇)', share: '32%' }
      ]
    },
    globalTop10: [
      {
        rank: 1,
        name: 'TSMC',
        country: '台灣',
        mainUse: '邏輯芯片 300mm 晶圓',
        estimatedAnnualDemand: '800 萬片/月',
        sentiment: 'hot',
        remarks: '全球代工龍頭，需求穩定'
      },
      {
        rank: 2,
        name: 'Samsung Foundry',
        country: '南韓',
        mainUse: '邏輯芯片製造',
        estimatedAnnualDemand: '600 萬片/月',
        sentiment: 'growth',
        remarks: '技術升級驅動需求'
      },
      {
        rank: 3,
        name: 'Intel',
        country: '美國',
        mainUse: '自家晶圓製造',
        estimatedAnnualDemand: '500 萬片/月',
        sentiment: 'stable',
        remarks: '產能優化，需求相對穩定'
      },
      {
        rank: 4,
        name: '中芯國際',
        country: '中國',
        mainUse: '14nm-28nm 工藝',
        estimatedAnnualDemand: '400 萬片/月',
        sentiment: 'growth',
        remarks: '中國最大晶圓廠，技術追趕'
      },
      {
        rank: 5,
        name: 'SK Hynix',
        country: '南韓',
        mainUse: '記憶體製造',
        estimatedAnnualDemand: '350 萬片/月',
        sentiment: 'stable',
        remarks: 'DRAM 工藝穩定'
      },
      {
        rank: 6,
        name: '華力微電子',
        country: '中國',
        mainUse: '28nm 及以下工藝',
        estimatedAnnualDemand: '280 萬片/月',
        sentiment: 'growth',
        remarks: '上海新昇晶圓應用'
      },
      {
        rank: 7,
        name: 'Micron',
        country: '美國',
        mainUse: 'NAND Flash 製造',
        estimatedAnnualDemand: '250 萬片/月',
        sentiment: 'stable',
        remarks: '記憶體廠商'
      },
      {
        rank: 8,
        name: '長江存儲',
        country: '中國',
        mainUse: '3D NAND 製造',
        estimatedAnnualDemand: '200 萬片/月',
        sentiment: 'hot',
        remarks: '國產化旗艦'
      },
      {
        rank: 9,
        name: 'UMC',
        country: '台灣',
        mainUse: '代工製造',
        estimatedAnnualDemand: '180 萬片/月',
        sentiment: 'stable',
        remarks: '成熟工藝客戶'
      },
      {
        rank: 10,
        name: 'GlobalFoundries',
        country: '美國',
        mainUse: '14nm-7nm 代工',
        estimatedAnnualDemand: '150 萬片/月',
        sentiment: 'stable',
        remarks: '汽車芯片代工廠'
      }
    ],
    taiwanTop10: [
      {
        rank: 1,
        name: 'TSMC',
        productType: '邏輯芯片晶圓',
        estimatedUsage: '800 萬片/月',
        difficulty: 5,
        importance: 5,
        remarks: '全球最大客戶，認證門檻最高'
      },
      {
        rank: 2,
        name: 'UMC',
        productType: '代工製造晶圓',
        estimatedUsage: '180 萬片/月',
        difficulty: 4,
        importance: 4,
        remarks: '台灣代二廠'
      },
      {
        rank: 3,
        name: '聯發科',
        productType: '設計用晶圓',
        estimatedUsage: '50 萬片/月',
        difficulty: 3,
        importance: 2,
        remarks: '設計廠，間接客戶'
      },
      {
        rank: 4,
        name: '台灣記憶體廠商',
        productType: 'DRAM/NAND 晶圓',
        estimatedUsage: '40 萬片/月',
        difficulty: 4,
        importance: 3,
        remarks: '記憶體製造'
      },
      {
        rank: 5,
        name: '功率半導體廠',
        productType: '功率芯片晶圓',
        estimatedUsage: '30 萬片/月',
        difficulty: 2,
        importance: 2,
        remarks: '應用領域擴大'
      },
      {
        rank: 6,
        name: '台灣模擬芯片廠',
        productType: '模擬芯片晶圓',
        estimatedUsage: '20 萬片/月',
        difficulty: 2,
        importance: 1,
        remarks: '小批量'
      },
      {
        rank: 7,
        name: '台灣測試廠',
        productType: '測試晶圓',
        estimatedUsage: '15 萬片/月',
        difficulty: 1,
        importance: 1,
        remarks: '支援服務'
      },
      {
        rank: 8,
        name: '台灣設備廠',
        productType: '設備用試驗晶圓',
        estimatedUsage: '10 萬片/月',
        difficulty: 2,
        importance: 1,
        remarks: '設備驗證'
      },
      {
        rank: 9,
        name: '台灣研究機構',
        productType: 'R&D 用晶圓',
        estimatedUsage: '5 萬片/月',
        difficulty: 1,
        importance: 1,
        remarks: '學界研發'
      },
      {
        rank: 10,
        name: '新興 AI 芯片廠',
        productType: 'AI 芯片晶圓',
        estimatedUsage: '3 萬片/月',
        difficulty: 3,
        importance: 2,
        remarks: '新應用領域'
      }
    ],
    strategy: {
      techSpecs: [
        {
          category: '晶圓尺寸',
          spec: '300mm',
          consumer: '標準',
          automotive: '標準',
          industrial: '標準'
        },
        {
          category: '電阻率',
          spec: '1-10 Ω·cm',
          consumer: '5-10',
          automotive: '1-5',
          industrial: '0.1-1'
        },
        {
          category: '雜質濃度',
          spec: '< 1e11 cm⁻³',
          consumer: '< 1e12',
          automotive: '< 1e11',
          industrial: '< 1e10'
        },
        {
          category: '平坦度',
          spec: '< 30 nm',
          consumer: '< 50',
          automotive: '< 30',
          industrial: '< 20'
        }
      ],
      entryPlan: {
        short: '短期（0-12月）：建立台灣晶圓廠供應合作，進入 UMC、華工等Tier-2 客戶驗證。',
        mid: '中期（12-24月）：完成中芯、華力等中國大廠認證，積累案例經驗。',
        long: '長期（24月+）：進入 TSMC 供應鏈認可，成為長期合格供應商。'
      }
    },
    suppliers: [
      {
        type: '技術標竿',
        name: 'Shin-Etsu（日本）',
        country: '日本',
        cpValue: '★★★☆☆',
        description: '全球最大硅晶圓廠，品質最優，價格最高。'
      },
      {
        type: '技術標竿',
        name: 'SUMCO（日本）',
        country: '日本',
        cpValue: '★★★☆☆',
        description: '日本第二大，技術領先，客戶多為Tier-1廠商。'
      },
      {
        type: '中端競品',
        name: '上海新昇',
        country: '中國',
        cpValue: '★★★★☆',
        description: '中國最大硅晶圓廠，成本優勢 20-30%，品質逐步提升。'
      },
      {
        type: '中端競品',
        name: '中環股份',
        country: '中國',
        cpValue: '★★★★☆',
        description: '中國第二大，成本競爭力強。'
      },
      {
        type: '合作評估',
        name: '台灣本地廠商',
        country: '台灣',
        cpValue: '★★★★☆',
        description: '本地合作優勢，但高端技術積累不足。'
      },
      {
        type: '原料供應',
        name: '矽料廠（全球）',
        country: '多國',
        cpValue: '★★★★★',
        description: '原料成本影響終端價格。'
      }
    ],
    actionPlan: [
      {
        phase: '短期（0-12月）',
        action: '建立台灣晶圓廠技術評估',
        targetCustomers: 'UMC、華工微電子',
        timeline: '3-6 個月'
      },
      {
        phase: '短期（0-12月）',
        action: '完成 300mm 晶圓驗證測試',
        targetCustomers: '國內外客戶',
        timeline: '6-9 個月'
      },
      {
        phase: '中期（12-24月）',
        action: '進入中國大廠供應鏈評估',
        targetCustomers: '中芯、華力、長江存儲',
        timeline: '12-18 個月'
      },
      {
        phase: '中期（12-24月）',
        action: '建立產能 500 萬片/月',
        targetCustomers: '所有客戶',
        timeline: '18-24 個月'
      },
      {
        phase: '長期（24月+）',
        action: '申報 TSMC 供應商認可',
        targetCustomers: 'TSMC',
        timeline: '24+ 個月'
      },
      {
        phase: '長期（24月+）',
        action: '開發 28nm 以下工藝專用晶圓',
        targetCustomers: '先進工藝客戶',
        timeline: '長期'
      }
    ]
  },

  {
    id: 'si-test-wafer',
    productName: 'Si Test Wafer',
    group: 'semi',
    market: {
      currentSize: 'USD 3.5 億',
      futureSize: 'USD 6.2 億 (2032)',
      cagr: '9-11%',
      summary: '用於晶圓廠設備驗證和工藝開發。需求與製程創新周期相關，小批量高溢價。',
      shareBreakdown: [
        { segment: '日本高端', share: '55%' },
        { segment: '美國技術', share: '25%' },
        { segment: '中國替代', share: '20%' }
      ]
    },
    globalTop10: [
      {
        rank: 1,
        name: 'TSMC',
        country: '台灣',
        mainUse: '新工藝驗證用晶圓',
        estimatedAnnualDemand: '150 萬片/年',
        sentiment: 'hot',
        remarks: '工藝創新驅動需求'
      },
      {
        rank: 2,
        name: 'Samsung Foundry',
        country: '南韓',
        mainUse: '製程開發晶圓',
        estimatedAnnualDemand: '120 萬片/年',
        sentiment: 'growth',
        remarks: '技術追趕需求量大'
      },
      {
        rank: 3,
        name: 'Intel',
        country: '美國',
        mainUse: '設備驗證晶圓',
        estimatedAnnualDemand: '100 萬片/年',
        sentiment: 'stable',
        remarks: '設備廠驗證用途'
      },
      {
        rank: 4,
        name: 'ASML',
        country: '荷蘭',
        mainUse: '光刻機驗證',
        estimatedAnnualDemand: '80 萬片/年',
        sentiment: 'growth',
        remarks: '設備廠商驗證'
      },
      {
        rank: 5,
        name: '中芯國際',
        country: '中國',
        mainUse: '工藝開發',
        estimatedAnnualDemand: '60 萬片/年',
        sentiment: 'growth',
        remarks: '技術升級驅動'
      },
      {
        rank: 6,
        name: 'Applied Materials',
        country: '美國',
        mainUse: '設備驗證',
        estimatedAnnualDemand: '50 萬片/年',
        sentiment: 'stable',
        remarks: '設備廠驗證'
      },
      {
        rank: 7,
        name: 'Lam Research',
        country: '美國',
        mainUse: '刻蝕設備驗證',
        estimatedAnnualDemand: '40 萬片/年',
        sentiment: 'stable',
        remarks: '設備驗證用途'
      },
      {
        rank: 8,
        name: '華力微電子',
        country: '中國',
        mainUse: '製程開發',
        estimatedAnnualDemand: '30 萬片/年',
        sentiment: 'growth',
        remarks: '工藝升級需求'
      },
      {
        rank: 9,
        name: 'UMC',
        country: '台灣',
        mainUse: '工藝優化',
        estimatedAnnualDemand: '25 萬片/年',
        sentiment: 'stable',
        remarks: '成熟工藝優化'
      },
      {
        rank: 10,
        name: '長江存儲',
        country: '中國',
        mainUse: '3D NAND 開發',
        estimatedAnnualDemand: '20 萬片/年',
        sentiment: 'hot',
        remarks: '3D 堆疊驅動'
      }
    ],
    taiwanTop10: [
      {
        rank: 1,
        name: 'TSMC',
        productType: '工藝驗證晶圓',
        estimatedUsage: '150 萬片/年',
        difficulty: 5,
        importance: 5,
        remarks: '最大客戶，技術要求最高'
      },
      {
        rank: 2,
        name: 'UMC',
        productType: '製程優化晶圓',
        estimatedUsage: '25 萬片/年',
        difficulty: 3,
        importance: 2,
        remarks: '成熟工藝客戶'
      },
      {
        rank: 3,
        name: '台灣設備廠商',
        productType: '設備驗證晶圓',
        estimatedUsage: '20 萬片/年',
        difficulty: 2,
        importance: 2,
        remarks: '國內設備廠支援'
      },
      {
        rank: 4,
        name: '國際設備廠台灣分公司',
        productType: '設備驗證',
        estimatedUsage: '15 萬片/年',
        difficulty: 2,
        importance: 1,
        remarks: '外資設備廠驗證'
      },
      {
        rank: 5,
        name: '台灣研究機構',
        productType: 'R&D 驗證',
        estimatedUsage: '10 萬片/年',
        difficulty: 1,
        importance: 1,
        remarks: '學界研發'
      },
      {
        rank: 6,
        name: '台灣材料廠',
        productType: '材料驗證',
        estimatedUsage: '8 萬片/年',
        difficulty: 2,
        importance: 1,
        remarks: '新材料開發'
      },
      {
        rank: 7,
        name: '台灣化學廠',
        productType: '製程液驗證',
        estimatedUsage: '5 萬片/年',
        difficulty: 2,
        importance: 1,
        remarks: '化學品驗證'
      },
      {
        rank: 8,
        name: '台灣新創廠商',
        productType: '創新工藝驗證',
        estimatedUsage: '3 萬片/年',
        difficulty: 3,
        importance: 1,
        remarks: '新技術試點'
      },
      {
        rank: 9,
        name: '台灣大學研究團隊',
        productType: '學術研究',
        estimatedUsage: '2 萬片/年',
        difficulty: 1,
        importance: 1,
        remarks: '非商業用途'
      },
      {
        rank: 10,
        name: '台灣檢測廠',
        productType: '品質驗證',
        estimatedUsage: '1 萬片/年',
        difficulty: 1,
        importance: 1,
        remarks: '測試服務'
      }
    ],
    strategy: {
      techSpecs: [
        {
          category: '雜質濃度',
          spec: '可控範圍',
          consumer: '寬鬆',
          automotive: '嚴格',
          industrial: '最嚴格'
        },
        {
          category: '缺陷密度',
          spec: '< 5e9 cm⁻²',
          consumer: '< 1e10',
          automotive: '< 5e9',
          industrial: '< 1e9'
        },
        {
          category: '均勻性',
          spec: '±5%',
          consumer: '±10',
          automotive: '±5',
          industrial: '±2'
        },
        {
          category: '成本等級',
          spec: '優價',
          consumer: 'Prime',
          automotive: 'Test',
          industrial: 'Standard'
        }
      ],
      entryPlan: {
        short: '短期（0-12月）：與台灣設備廠合作，進行設備驗證用晶圓供應。',
        mid: '中期（12-24月）：爭取 TSMC 工藝開發部門的驗證機會，建立長期合作。',
        long: '長期（24月+）：成為全球設備廠商和晶圓廠的認可供應商。'
      }
    },
    suppliers: [
      {
        type: '技術標竿',
        name: 'Shin-Etsu（日本）',
        country: '日本',
        cpValue: '★★★☆☆',
        description: '全球領先供應商，品質穩定。'
      },
      {
        type: '中端競品',
        name: '上海新昇',
        country: '中國',
        cpValue: '★★★★☆',
        description: '成本優勢明顯，品質可接受。'
      },
      {
        type: '合作評估',
        name: '台灣本地廠商',
        country: '台灣',
        cpValue: '★★★★★',
        description: '本地優勢，成本有競爭力。'
      }
    ],
    actionPlan: [
      {
        phase: '短期（0-12月）',
        action: '與台灣設備廠建立驗證合作',
        targetCustomers: '台灣設備廠商',
        timeline: '3-6 個月'
      },
      {
        phase: '中期（12-24月）',
        action: '進入 TSMC 工藝開發部驗證',
        targetCustomers: 'TSMC 工藝開發',
        timeline: '12-18 個月'
      },
      {
        phase: '長期（24月+）',
        action: '拓展國際設備廠商合作',
        targetCustomers: 'ASML、Applied Materials 等',
        timeline: '24+ 個月'
      }
    ]
  },

  {
    id: 'si-reclaim-wafer',
    productName: 'Si Reclaim Wafer',
    group: 'semi',
    market: {
      currentSize: 'USD 1.8 億',
      futureSize: 'USD 3.8 億 (2032)',
      cagr: '11-13%',
      summary: '從舊晶圓回收、研磨、拋光再利用。綠色經濟和成本優化驅動需求成長。',
      shareBreakdown: [
        { segment: '日本回收廠', share: '60%' },
        { segment: '中國新興', share: '40%' }
      ]
    },
    globalTop10: [
      {
        rank: 1,
        name: 'TSMC',
        country: '台灣',
        mainUse: '製程廢棄晶圓回收',
        estimatedAnnualDemand: '200 萬片/年',
        sentiment: 'hot',
        remarks: '大量廢料，回收價值高'
      },
      {
        rank: 2,
        name: 'Samsung',
        country: '南韓',
        mainUse: '晶圓回收',
        estimatedAnnualDemand: '150 萬片/年',
        sentiment: 'growth',
        remarks: '綠色政策驅動'
      },
      {
        rank: 3,
        name: 'Intel',
        country: '美國',
        mainUse: '廢晶圓回收',
        estimatedAnnualDemand: '120 萬片/年',
        sentiment: 'stable',
        remarks: '設施合規要求'
      },
      {
        rank: 4,
        name: '中芯國際',
        country: '中國',
        mainUse: '晶圓回收利用',
        estimatedAnnualDemand: '80 萬片/年',
        sentiment: 'growth',
        remarks: '成本優化'
      },
      {
        rank: 5,
        name: 'SK Hynix',
        country: '南韓',
        mainUse: '記憶體廠回收',
        estimatedAnnualDemand: '70 萬片/年',
        sentiment: 'stable',
        remarks: '定期回收'
      },
      {
        rank: 6,
        name: '華力微電子',
        country: '中國',
        mainUse: '廢晶圓處理',
        estimatedAnnualDemand: '50 萬片/年',
        sentiment: 'growth',
        remarks: '環保要求'
      },
      {
        rank: 7,
        name: 'Micron',
        country: '美國',
        mainUse: '閃存廠回收',
        estimatedAnnualDemand: '40 萬片/年',
        sentiment: 'stable',
        remarks: '定期服務'
      },
      {
        rank: 8,
        name: '長江存儲',
        country: '中國',
        mainUse: '3D NAND 廢料回收',
        estimatedAnnualDemand: '30 萬片/年',
        sentiment: 'hot',
        remarks: '新廠回收需求'
      },
      {
        rank: 9,
        name: 'UMC',
        country: '台灣',
        mainUse: '代工廠回收',
        estimatedAnnualDemand: '25 萬片/年',
        sentiment: 'stable',
        remarks: '常規服務'
      },
      {
        rank: 10,
        name: 'GlobalFoundries',
        country: '美國',
        mainUse: '代工廢晶圓',
        estimatedAnnualDemand: '15 萬片/年',
        sentiment: 'stable',
        remarks: '合規回收'
      }
    ],
    taiwanTop10: [
      {
        rank: 1,
        name: 'TSMC',
        productType: '廢晶圓回收服務',
        estimatedUsage: '200 萬片/年',
        difficulty: 4,
        importance: 5,
        remarks: '最大來源，回收量最大'
      },
      {
        rank: 2,
        name: 'UMC',
        productType: '代工廠廢料回收',
        estimatedUsage: '25 萬片/年',
        difficulty: 2,
        importance: 2,
        remarks: '定期合作'
      },
      {
        rank: 3,
        name: '台灣記憶體廠',
        productType: '廢晶圓回收',
        estimatedUsage: '20 萬片/年',
        difficulty: 3,
        importance: 2,
        remarks: '記憶體廠合作'
      },
      {
        rank: 4,
        name: '台灣環保公司',
        productType: '回收、銷毀服務',
        estimatedUsage: '15 萬片/年',
        difficulty: 1,
        importance: 1,
        remarks: '廢棄物處理'
      },
      {
        rank: 5,
        name: '台灣設備廠',
        productType: '設備廢晶圓',
        estimatedUsage: '10 萬片/年',
        difficulty: 2,
        importance: 1,
        remarks: '設備驗證廢料'
      },
      {
        rank: 6,
        name: '台灣大學',
        productType: '研究廢料處理',
        estimatedUsage: '5 萬片/年',
        difficulty: 1,
        importance: 1,
        remarks: '學界合作'
      },
      {
        rank: 7,
        name: '台灣物流廠',
        productType: '廢料運輸',
        estimatedUsage: '3 萬片/年',
        difficulty: 1,
        importance: 1,
        remarks: '物流支援'
      },
      {
        rank: 8,
        name: '台灣新創回收廠',
        productType: '創新回收技術',
        estimatedUsage: '2 萬片/年',
        difficulty: 2,
        importance: 1,
        remarks: '試點技術'
      },
      {
        rank: 9,
        name: '台灣政府環保機構',
        productType: '環保合規服務',
        estimatedUsage: '1 萬片/年',
        difficulty: 1,
        importance: 1,
        remarks: '政策配合'
      },
      {
        rank: 10,
        name: '台灣進出口商',
        productType: '回收出口服務',
        estimatedUsage: '1 萬片/年',
        difficulty: 1,
        importance: 1,
        remarks: '國際貿易'
      }
    ],
    strategy: {
      techSpecs: [
        {
          category: '回收率',
          spec: '> 95%',
          consumer: '> 90',
          automotive: '> 95',
          industrial: '> 98'
        },
        {
          category: '表面品質',
          spec: 'RMS < 1 nm',
          consumer: '< 2',
          automotive: '< 1',
          industrial: '< 0.5'
        },
        {
          category: '厚度控制',
          spec: '±1 μm',
          consumer: '±2',
          automotive: '±1',
          industrial: '±0.5'
        },
        {
          category: '環保認證',
          spec: 'ISO 14001',
          consumer: '必須',
          automotive: '必須',
          industrial: '必須'
        }
      ],
      entryPlan: {
        short: '短期（0-12月）：建立回收廠和技術設備，取得環保認證。',
        mid: '中期（12-24月）：與台灣晶圓廠簽訂長期回收協議。',
        long: '長期（24月+）：擴展到國際市場，成為全球回收供應商。'
      }
    },
    suppliers: [
      {
        type: '技術標竿',
        name: 'Shin-Etsu 回收部門',
        country: '日本',
        cpValue: '★★★☆☆',
        description: '日本領先回收技術，成熟穩定。'
      },
      {
        type: '中端競品',
        name: '台灣本地回收廠',
        country: '台灣',
        cpValue: '★★★★☆',
        description: '本地優勢，距離近，成本低。'
      },
      {
        type: '合作評估',
        name: '中國回收廠商',
        country: '中國',
        cpValue: '★★★★★',
        description: '成本最低，但環保合規有風險。'
      }
    ],
    actionPlan: [
      {
        phase: '短期（0-12月）',
        action: '建立回收廠和認證取得',
        targetCustomers: '全體廠商',
        timeline: '6-9 個月'
      },
      {
        phase: '中期（12-24月）',
        action: '與 TSMC、UMC 簽訂長期合約',
        targetCustomers: 'TSMC、UMC',
        timeline: '12-18 個月'
      },
      {
        phase: '長期（24月+）',
        action: '拓展國際市場，建立全球回收網絡',
        targetCustomers: '全球晶圓廠',
        timeline: '24+ 個月'
      }
    ]
  },

  {
    id: 'sic-gan-wafer',
    productName: 'SiC & GaN Wafer',
    group: 'semi',
    market: {
      currentSize: 'USD 4.2 億',
      futureSize: 'USD 18.5 億 (2032)',
      cagr: '22-25%',
      summary: '寬能隙半導體，驅動電動車、充電樁、光伏逆變器。全球快速成長，日本獨占優勢。',
      shareBreakdown: [
        { segment: '日本（Rohm、MACOM）', share: '72%' },
        { segment: '中國新興廠商', share: '28%' }
      ]
    },
    globalTop10: [
      {
        rank: 1,
        name: 'Tesla',
        country: '美國',
        mainUse: '電動車 SiC 功率模組',
        estimatedAnnualDemand: '50 萬片/年',
        sentiment: 'hot',
        remarks: 'Model 3 升級驅動需求'
      },
      {
        rank: 2,
        name: 'BYD',
        country: '中國',
        mainUse: 'SiC 功率半導體',
        estimatedAnnualDemand: '40 萬片/年',
        sentiment: 'hot',
        remarks: '中國 EV 龍頭'
      },
      {
        rank: 3,
        name: '比亞迪半導體',
        country: '中國',
        mainUse: 'SiC 芯片自用',
        estimatedAnnualDemand: '35 萬片/年',
        sentiment: 'hot',
        remarks: '自主開發'
      },
      {
        rank: 4,
        name: 'Infineon',
        country: '德國',
        mainUse: 'SiC 功率元器件',
        estimatedAnnualDemand: '30 萬片/年',
        sentiment: 'growth',
        remarks: '歐洲領導者'
      },
      {
        rank: 5,
        name: '華為',
        country: '中國',
        mainUse: '充電樁 SiC 方案',
        estimatedAnnualDemand: '25 萬片/年',
        sentiment: 'hot',
        remarks: '快充應用驅動'
      },
      {
        rank: 6,
        name: 'ON Semiconductor',
        country: '美國',
        mainUse: 'GaN 功率元器件',
        estimatedAnnualDemand: '20 萬片/年',
        sentiment: 'growth',
        remarks: 'GaN 領導者'
      },
      {
        rank: 7,
        name: '寧德時代',
        country: '中國',
        mainUse: '電池管理系統 SiC',
        estimatedAnnualDemand: '18 萬片/年',
        sentiment: 'hot',
        remarks: 'BMS 應用'
      },
      {
        rank: 8,
        name: 'STMicroelectronics',
        country: '義大利',
        mainUse: 'SiC/GaN 混合',
        estimatedAnnualDemand: '15 萬片/年',
        sentiment: 'growth',
        remarks: '汽車應用'
      },
      {
        rank: 9,
        name: '阿里達摩院',
        country: '中國',
        mainUse: '光伏逆變器 SiC',
        estimatedAnnualDemand: '12 萬片/年',
        sentiment: 'growth',
        remarks: '光伏應用擴大'
      },
      {
        rank: 10,
        name: 'Silicon Labs',
        country: '美國',
        mainUse: 'GaN 方案',
        estimatedAnnualDemand: '10 萬片/年',
        sentiment: 'growth',
        remarks: 'IoT 應用'
      }
    ],
    taiwanTop10: [
      {
        rank: 1,
        name: '台灣車廠（和大、富裕）',
        productType: 'EV 零部件供應',
        estimatedUsage: '20 萬片/年',
        difficulty: 3,
        importance: 4,
        remarks: '間接客戶，供應鏈機會'
      },
      {
        rank: 2,
        name: '台灣光伏廠（茂迪、台光電)',
        productType: '逆變器方案',
        estimatedUsage: '15 萬片/年',
        difficulty: 2,
        importance: 3,
        remarks: '光伏應用'
      },
      {
        rank: 3,
        name: '台灣充電樁廠商',
        productType: '快充解決方案',
        estimatedUsage: '10 萬片/年',
        difficulty: 2,
        importance: 2,
        remarks: '充電基礎設施'
      },
      {
        rank: 4,
        name: '台灣電源廠',
        productType: '高效電源供應',
        estimatedUsage: '8 萬片/年',
        difficulty: 2,
        importance: 2,
        remarks: '工業電源'
      },
      {
        rank: 5,
        name: '台灣 IC 設計廠',
        productType: 'GaN 控制芯片',
        estimatedUsage: '5 萬片/年',
        difficulty: 3,
        importance: 1,
        remarks: '設計服務'
      },
      {
        rank: 6,
        name: '台灣新創 EV 廠',
        productType: 'SiC 功率系統',
        estimatedUsage: '3 萬片/年',
        difficulty: 2,
        importance: 1,
        remarks: '新興市場'
      },
      {
        rank: 7,
        name: '台灣大學光電實驗室',
        productType: '研發晶圓',
        estimatedUsage: '2 萬片/年',
        difficulty: 1,
        importance: 1,
        remarks: '學界合作'
      },
      {
        rank: 8,
        name: '工研院',
        productType: '技術研發',
        estimatedUsage: '1.5 萬片/年',
        difficulty: 1,
        importance: 1,
        remarks: '研究機構'
      },
      {
        rank: 9,
        name: '台灣材料廠',
        productType: '隔離材料驗證',
        estimatedUsage: '1 萬片/年',
        difficulty: 2,
        importance: 1,
        remarks: '材料研發'
      },
      {
        rank: 10,
        name: '台灣貿易商',
        productType: '代理銷售',
        estimatedUsage: '0.5 萬片/年',
        difficulty: 1,
        importance: 1,
        remarks: '流通渠道'
      }
    ],
    strategy: {
      techSpecs: [
        {
          category: '晶圓尺寸',
          spec: '4-6 吋',
          consumer: '4 吋',
          automotive: '6 吋',
          industrial: '6+ 吋'
        },
        {
          category: '缺陷密度',
          spec: '< 1e5 cm⁻²',
          consumer: '< 5e5',
          automotive: '< 1e5',
          industrial: '< 1e4'
        },
        {
          category: '導電型',
          spec: 'n/p 可控',
          consumer: 'n 型',
          automotive: 'n 型',
          industrial: '雙型'
        },
        {
          category: '耐壓等級',
          spec: '600-1700V',
          consumer: '600',
          automotive: '1200',
          industrial: '1700'
        }
      ],
      entryPlan: {
        short: '短期（0-12月）：與日本廠商尋求代理或技術合作。',
        mid: '中期（12-24月）：進入台灣 EV 和光伏廠商供應鏈。',
        long: '長期（24月+）：自主研發 SiC/GaN 晶圓，進入全球市場。'
      }
    },
    suppliers: [
      {
        type: '技術標竿',
        name: 'Rohm（日本）',
        country: '日本',
        cpValue: '★★★☆☆',
        description: '全球 SiC 領導者，品質最優。'
      },
      {
        type: '技術標竿',
        name: 'Cree/Wolfspeed（美國）',
        country: '美國',
        cpValue: '★★★☆☆',
        description: 'SiC 和 GaN 雙龍頭。'
      },
      {
        type: '中端競品',
        name: '中國 SiC 廠商',
        country: '中國',
        cpValue: '★★★★☆',
        description: '成本優勢 30-40%，技術快速進步。'
      },
      {
        type: '合作評估',
        name: '台灣新興廠商',
        country: '台灣',
        cpValue: '★★★★☆',
        description: '本地優勢，成本競爭力。'
      }
    ],
    actionPlan: [
      {
        phase: '短期（0-12月）',
        action: '與日本廠商洽談代理權',
        targetCustomers: 'Rohm、MACOM',
        timeline: '3-6 個月'
      },
      {
        phase: '短期（0-12月）',
        action: '進入台灣光伏廠供應鏈',
        targetCustomers: '台灣光伏廠商',
        timeline: '6-9 個月'
      },
      {
        phase: '中期（12-24月）',
        action: '拓展到台灣 EV 零件廠',
        targetCustomers: '和大、富裕等',
        timeline: '12-18 個月'
      },
      {
        phase: '長期（24月+）',
        action: '自主研發 SiC/GaN 晶圓',
        targetCustomers: '全球市場',
        timeline: '24+ 個月'
      }
    ]
  },

  {
    id: 'special-gas-semi',
    productName: 'Special Gas (Semi)',
    group: 'semi',
    market: {
      currentSize: 'USD 9.8 億',
      futureSize: 'USD 21.3 億 (2032)',
      cagr: '11-13%',
      summary: '超高純度特殊氣體，用於晶圓製造、沉積、蝕刻。日本壟斷 80%，中國急起直追。',
      shareBreakdown: [
        { segment: '日本高端', share: '80%' },
        { segment: '中國替代', share: '20%' }
      ]
    },
    globalTop10: [
      {
        rank: 1,
        name: 'TSMC',
        country: '台灣',
        mainUse: '先進工藝製造氣體',
        estimatedAnnualDemand: '50,000 Nm³/年',
        sentiment: 'hot',
        remarks: '最大消費者'
      },
      {
        rank: 2,
        name: 'Samsung Foundry',
        country: '南韓',
        mainUse: '3nm 工藝氣體',
        estimatedAnnualDemand: '40,000 Nm³/年',
        sentiment: 'hot',
        remarks: '技術追趕驅動'
      },
      {
        rank: 3,
        name: 'Intel',
        country: '美國',
        mainUse: '自家工廠氣體',
        estimatedAnnualDemand: '35,000 Nm³/年',
        sentiment: 'stable',
        remarks: '穩定供應'
      },
      {
        rank: 4,
        name: '中芯國際',
        country: '中國',
        mainUse: '工藝製造',
        estimatedAnnualDemand: '30,000 Nm³/年',
        sentiment: 'growth',
        remarks: '進口替代'
      },
      {
        rank: 5,
        name: 'SK Hynix',
        country: '南韓',
        mainUse: '記憶體工藝',
        estimatedAnnualDemand: '25,000 Nm³/年',
        sentiment: 'stable',
        remarks: '定期供應'
      },
      {
        rank: 6,
        name: '華力微電子',
        country: '中國',
        mainUse: '28nm 工藝',
        estimatedAnnualDemand: '20,000 Nm³/年',
        sentiment: 'growth',
        remarks: '中國廠商'
      },
      {
        rank: 7,
        name: 'Micron',
        country: '美國',
        mainUse: 'NAND 製造',
        estimatedAnnualDemand: '18,000 Nm³/年',
        sentiment: 'stable',
        remarks: '記憶體廠'
      },
      {
        rank: 8,
        name: '長江存儲',
        country: '中國',
        mainUse: '3D NAND',
        estimatedAnnualDemand: '15,000 Nm³/年',
        sentiment: 'hot',
        remarks: '新廠投產'
      },
      {
        rank: 9,
        name: 'UMC',
        country: '台灣',
        mainUse: '成熟工藝',
        estimatedAnnualDemand: '12,000 Nm³/年',
        sentiment: 'stable',
        remarks: '台灣代二廠'
      },
      {
        rank: 10,
        name: 'GlobalFoundries',
        country: '美國',
        mainUse: '代工工藝',
        estimatedAnnualDemand: '10,000 Nm³/年',
        sentiment: 'stable',
        remarks: '代工廠商'
      }
    ],
    taiwanTop10: [
      {
        rank: 1,
        name: 'TSMC',
        productType: '製造工藝氣體',
        estimatedUsage: '50,000 Nm³/年',
        difficulty: 5,
        importance: 5,
        remarks: '最大客戶'
      },
      {
        rank: 2,
        name: 'UMC',
        productType: '代工氣體供應',
        estimatedUsage: '12,000 Nm³/年',
        difficulty: 3,
        importance: 2,
        remarks: '台灣代二廠'
      },
      {
        rank: 3,
        name: '台灣記憶體廠',
        productType: 'DRAM/NAND 氣體',
        estimatedUsage: '8,000 Nm³/年',
        difficulty: 3,
        importance: 2,
        remarks: '記憶體製造'
      },
      {
        rank: 4,
        name: '台灣設備廠',
        productType: '設備驗證氣體',
        estimatedUsage: '3,000 Nm³/年',
        difficulty: 2,
        importance: 1,
        remarks: '設備支援'
      },
      {
        rank: 5,
        name: '台灣分析檢測廠',
        productType: '標準氣體',
        estimatedUsage: '2,000 Nm³/年',
        difficulty: 1,
        importance: 1,
        remarks: '檢測用'
      },
      {
        rank: 6,
        name: '台灣大學研究室',
        productType: 'R&D 用氣體',
        estimatedUsage: '1,000 Nm³/年',
        difficulty: 1,
        importance: 1,
        remarks: '學界合作'
      },
      {
        rank: 7,
        name: '工研院',
        productType: '研究氣體',
        estimatedUsage: '800 Nm³/年',
        difficulty: 1,
        importance: 1,
        remarks: '研究機構'
      },
      {
        rank: 8,
        name: '台灣氣體貿易商',
        productType: '代理銷售',
        estimatedUsage: '500 Nm³/年',
        difficulty: 1,
        importance: 1,
        remarks: '流通渠道'
      },
      {
        rank: 9,
        name: '台灣新創廠商',
        productType: '創新應用',
        estimatedUsage: '200 Nm³/年',
        difficulty: 2,
        importance: 1,
        remarks: '試點應用'
      },
      {
        rank: 10,
        name: '台灣環保廠商',
        productType: '廢氣處理',
        estimatedUsage: '100 Nm³/年',
        difficulty: 1,
        importance: 1,
        remarks: '環保服務'
      }
    ],
    strategy: {
      techSpecs: [
        {
          category: '純度等級',
          spec: '5N-7N (99.999-99.99999%)',
          consumer: '5N',
          automotive: '6N',
          industrial: '7N'
        },
        {
          category: '水分含量',
          spec: '< 100 ppb',
          consumer: '< 1000',
          automotive: '< 100',
          industrial: '< 10'
        },
        {
          category: '粒子含量',
          spec: '< 0.1 ppm',
          consumer: '< 1',
          automotive: '< 0.1',
          industrial: '< 0.01'
        },
        {
          category: '流量范圍',
          spec: '1-100 L/min',
          consumer: '1-10',
          automotive: '10-50',
          industrial: '50-100'
        }
      ],
      entryPlan: {
        short: '短期（0-12月）：與日本氣體廠商洽談代理或合資模式。',
        mid: '中期（12-24月）：進入台灣晶圓廠供應鏈，建立穩定供應。',
        long: '長期（24月+）：自主合成，建立本地高純度氣體工廠。'
      }
    },
    suppliers: [
      {
        type: '技術標竿',
        name: '日本特氣廠（SUMITOMO、AIC）',
        country: '日本',
        cpValue: '★★★☆☆',
        description: '全球領先，品質最優。'
      },
      {
        type: '中端競品',
        name: '美國氣體公司（Linde、Air Liquide）',
        country: '美國/法國',
        cpValue: '★★★☆☆',
        description: '國際巨頭，技術成熟。'
      },
      {
        type: '合作評估',
        name: '中國氣體廠商',
        country: '中國',
        cpValue: '★★★★☆',
        description: '成本優勢 20-30%，品質逐步提升。'
      }
    ],
    actionPlan: [
      {
        phase: '短期（0-12月）',
        action: '與日本特氣廠商談代理或合資',
        targetCustomers: 'SUMITOMO、AIC',
        timeline: '3-6 個月'
      },
      {
        phase: '短期（0-12月）',
        action: '建立台灣存儲和配送中心',
        targetCustomers: '台灣晶圓廠',
        timeline: '6-9 個月'
      },
      {
        phase: '中期（12-24月）',
        action: '進入 TSMC 供應鏈評估',
        targetCustomers: 'TSMC',
        timeline: '12-18 個月'
      },
      {
        phase: '長期（24月+）',
        action: '自主合成高純度氣體',
        targetCustomers: '全球市場',
        timeline: '24+ 個月'
      }
    ]
  },

  // ... 其他 11 個 Semiconductor 產品會繼續添加

  // 保留現有的 Photo Resist（已完成）
  {
    id: 'photo-resist',
    productName: 'Photo Resist',
    group: 'semi',
    market: {
      currentSize: 'USD 6.8 億',
      futureSize: 'USD 15.2 億 (2032)',
      cagr: '12-14%',
      summary: '芯片製造關鍵材料，3nm 以下工藝推動高端光刻膠需求。日本廠商壟斷，中國急追。',
      shareBreakdown: [
        { segment: '日本高端', share: '62%' },
        { segment: '中國中端', share: '38%' }
      ]
    },
    globalTop10: [
      {
        rank: 1,
        name: 'TSMC',
        country: '台灣',
        mainUse: '3nm-5nm 工藝光刻膠',
        estimatedAnnualDemand: '1,200 噸',
        sentiment: 'hot',
        remarks: '全球領先芯片廠，高端工藝領先'
      },
      {
        rank: 2,
        name: 'Samsung Foundry',
        country: '南韓',
        mainUse: '3nm 及以下工藝',
        estimatedAnnualDemand: '800 噸',
        sentiment: 'growth',
        remarks: '緊追 TSMC，投資力度大'
      },
      {
        rank: 3,
        name: 'Intel',
        country: '美國',
        mainUse: '自家晶圓廠',
        estimatedAnnualDemand: '600 噸',
        sentiment: 'stable',
        remarks: 'Intel 4/3 導入期，需求穩定'
      },
      {
        rank: 4,
        name: '中芯國際',
        country: '中國',
        mainUse: '14nm-28nm 工藝',
        estimatedAnnualDemand: '500 噸',
        sentiment: 'growth',
        remarks: '中國最大晶圓廠，技術追趕'
      },
      {
        rank: 5,
        name: '華力微電子',
        country: '中國',
        mainUse: '28nm 主力工藝',
        estimatedAnnualDemand: '350 噸',
        sentiment: 'stable',
        remarks: '成熟工藝穩定客戶'
      },
      {
        rank: 6,
        name: 'SK Hynix',
        country: '南韓',
        mainUse: '記憶體製造',
        estimatedAnnualDemand: '320 噸',
        sentiment: 'stable',
        remarks: 'DRAM/NAND 工藝需求穩定'
      },
      {
        rank: 7,
        name: '京東方',
        country: '中國',
        mainUse: '顯示驅動 IC',
        estimatedAnnualDemand: '250 噸',
        sentiment: 'growth',
        remarks: '面板廠轉向芯片製造'
      },
      {
        rank: 8,
        name: 'GlobalFoundries',
        country: '美國',
        mainUse: '14nm-7nm 代工',
        estimatedAnnualDemand: '200 噸',
        sentiment: 'stable',
        remarks: '汽車芯片、模擬芯片客戶'
      },
      {
        rank: 9,
        name: 'UMC',
        country: '台灣',
        mainUse: '28nm-40nm 製程',
        estimatedAnnualDemand: '180 噸',
        sentiment: 'stable',
        remarks: 'IoT 芯片主要供應商'
      },
      {
        rank: 10,
        name: '長江存儲',
        country: '中國',
        mainUse: '3D NAND 製造',
        estimatedAnnualDemand: '150 噸',
        sentiment: 'hot',
        remarks: '中國存儲國產化旗艦'
      }
    ],
    taiwanTop10: [
      {
        rank: 1,
        name: 'TSMC',
        productType: '自家光刻膠消耗',
        estimatedUsage: '600 噸/年',
        difficulty: 5,
        importance: 5,
        remarks: '全球最大消費者，門檻最高'
      },
      {
        rank: 2,
        name: 'UMC',
        productType: '代工廠光刻膠',
        estimatedUsage: '180 噸/年',
        difficulty: 4,
        importance: 4,
        remarks: '台灣代二廠，切入機會'
      },
      {
        rank: 3,
        name: '聯發科',
        productType: 'EDA 設計、測試',
        estimatedUsage: '50 噸/年',
        difficulty: 2,
        importance: 2,
        remarks: '芯片設計廠，採購較少'
      },
      {
        rank: 4,
        name: '台灣光電廠商',
        productType: '光學薄膜應用',
        estimatedUsage: '40 噸/年',
        difficulty: 2,
        importance: 2,
        remarks: '衍生應用機會'
      },
      {
        rank: 5,
        name: '台灣半導體設備廠',
        productType: '曝光設備集成',
        estimatedUsage: '30 噸/年',
        difficulty: 3,
        importance: 2,
        remarks: '設備廠上遊供應商'
      },
      {
        rank: 6,
        name: '台灣檢測廠商',
        productType: '品質檢測',
        estimatedUsage: '20 噸/年',
        difficulty: 1,
        importance: 1,
        remarks: '支援服務'
      },
      {
        rank: 7,
        name: '台灣材料廠商',
        productType: '光刻膠用溶劑',
        estimatedUsage: '15 噸/年',
        difficulty: 3,
        importance: 2,
        remarks: '上遊原料供應'
      },
      {
        rank: 8,
        name: '台灣研究機構',
        productType: '先進工藝研發',
        estimatedUsage: '10 噸/年',
        difficulty: 4,
        importance: 1,
        remarks: '學界合作'
      },
      {
        rank: 9,
        name: '台灣進出口商',
        productType: '貿易代理',
        estimatedUsage: '8 噸/年',
        difficulty: 1,
        importance: 1,
        remarks: '流通渠道'
      },
      {
        rank: 10,
        name: '台灣新創團隊',
        productType: '新材料研發',
        estimatedUsage: '5 噸/年',
        difficulty: 4,
        importance: 1,
        remarks: '長期研發投資'
      }
    ],
    strategy: {
      techSpecs: [
        {
          category: 'EUV 光刻膠',
          spec: '用於 3nm-7nm',
          consumer: 'N/A',
          automotive: 'N/A',
          industrial: '特定工藝'
        },
        {
          category: 'ArF 光刻膠',
          spec: '用於 14nm-28nm',
          consumer: '標準級',
          automotive: '認證級',
          industrial: '工業級'
        },
        {
          category: 'KrF 光刻膠',
          spec: '用於 45nm-0.35μm',
          consumer: '成熟工藝',
          automotive: '汽車級',
          industrial: '工業級'
        },
        {
          category: '光敏度',
          spec: '60-80 mJ/cm²',
          consumer: '70-90',
          automotive: '50-70',
          industrial: '40-60'
        }
      ],
      entryPlan: {
        short: '短期（0-12月）：與日本 Shin-Etsu 或 Tokyo Ohka 洽談代理或合作模式，爭取台灣地區經銷權。',
        mid: '中期（12-24月）：建立本地存儲、技術支援中心，完成 UMC 等二線廠商認證。',
        long: '長期（24月+）：自主研發高端 EUV 光刻膠，進入 TSMC、Samsung 長期供應合同，實現進口替代。'
      }
    },
    suppliers: [
      {
        type: '技術標竿',
        name: 'Shin-Etsu（日本）',
        country: '日本',
        cpValue: '★★★☆☆',
        description: '全球光刻膠龍頭，市佔 40%+，技術領先，價格最高。'
      },
      {
        type: '技術標竿',
        name: 'Tokyo Ohka（日本）',
        country: '日本',
        cpValue: '★★★☆☆',
        description: '日本老字號，高端 EUV 膠領先，客戶粘性高。'
      },
      {
        type: '技術標竿',
        name: 'Sumitomo（日本）',
        country: '日本',
        cpValue: '★★★☆☆',
        description: '日本三大巨頭之一，品質穩定，客戶認可高。'
      },
      {
        type: '中端競品',
        name: '中國光刻膠廠商',
        country: '中國',
        cpValue: '★★★★☆',
        description: '成本低 30-40%，品質逐步追趕，適合中低端工藝。'
      },
      {
        type: '合作評估',
        name: '台灣本土廠商',
        country: '台灣',
        cpValue: '★★★★☆',
        description: '本地優勢，但高端技術積累不足，合作前景待評。'
      },
      {
        type: '原料供應',
        name: '全球光敏材料供應商',
        country: '多國',
        cpValue: '★★★★★',
        description: '光敏單體、樹脂等原料供應充足，定價權高。'
      }
    ],
    actionPlan: [
      {
        phase: '短期（0-12月）',
        action: '與日本三大廠商正式洽談代理權',
        targetCustomers: 'Shin-Etsu、Tokyo Ohka、Sumitomo',
        timeline: '3-6 個月'
      },
      {
        phase: '短期（0-12月）',
        action: '建立台灣技術支援中心，招聘光化學專家',
        targetCustomers: '國內廠商',
        timeline: '6-9 個月'
      },
      {
        phase: '中期（12-24月）',
        action: '完成 UMC、台積電二級供應商認證',
        targetCustomers: 'UMC、聯發科合作方',
        timeline: '12-18 個月'
      },
      {
        phase: '中期（12-24月）',
        action: '與中國廠商建立合作評估（成本對標）',
        targetCustomers: '中芯國際、華力微電子',
        timeline: '18-24 個月'
      },
      {
        phase: '長期（24月+）',
        action: '自主研發 EUV 光刻膠原型，送 TSMC 測試',
        targetCustomers: 'TSMC 3nm+ 工藝',
        timeline: '24-36 個月'
      },
      {
        phase: '長期（24月+）',
        action: '進入全球供應商認可清單（Qualified Vendor）',
        targetCustomers: '全球一線晶圓廠',
        timeline: '36+ 個月'
      }
    ]
  },

  // ==================== 保留現有的 DC & Battery 產品 ====================

  {
    id: 'al-pouch-film',
    productName: 'Al Pouch Film',
    group: 'batt',
    market: {
      currentSize: 'USD 12.5 億',
      futureSize: 'USD 27.7 億 (2032)',
      cagr: '13-15%',
      summary: '高端市場由日韓廠商壟斷，中國廠商加速追趕。電動車電池需求驅動增長。',
      shareBreakdown: [
        { segment: '日韓高端', share: '73%' },
        { segment: '中國中端', share: '27%' }
      ]
    },
    globalTop10: [
      {
        rank: 1,
        name: 'Tesla',
        country: '美國',
        mainUse: '電動車電池包裝',
        estimatedAnnualDemand: '5,000 噸',
        sentiment: 'hot',
        remarks: '全球電動車龍頭，需求穩定旺盛'
      },
      {
        rank: 2,
        name: 'BYD',
        country: '中國',
        mainUse: '動力電池、儲能電池',
        estimatedAnnualDemand: '4,200 噸',
        sentiment: 'hot',
        remarks: '全球出貨量第一，高速成長'
      },
      {
        rank: 3,
        name: 'Panasonic',
        country: '日本',
        mainUse: '高端鋰電池包裝',
        estimatedAnnualDemand: '2,800 噸',
        sentiment: 'growth',
        remarks: '技術標竿，毛利穩定'
      },
      {
        rank: 4,
        name: 'LG Energy Solution',
        country: '南韓',
        mainUse: '車用電池、儲能',
        estimatedAnnualDemand: '2,600 噸',
        sentiment: 'growth',
        remarks: '歐美市佔率高，客戶粘性強'
      },
      {
        rank: 5,
        name: 'CATL',
        country: '中國',
        mainUse: '動力電池、磷酸鐵鋰',
        estimatedAnnualDemand: '2,400 噸',
        sentiment: 'hot',
        remarks: '成本優勢明顯，份額快速擴張'
      },
      {
        rank: 6,
        name: 'Samsung SDI',
        country: '南韓',
        mainUse: '高端電動車電池',
        estimatedAnnualDemand: '1,800 噸',
        sentiment: 'stable',
        remarks: '客戶為高端車廠，品質要求嚴格'
      },
      {
        rank: 7,
        name: 'Northvolt',
        country: '瑞典',
        mainUse: '歐洲電池製造',
        estimatedAnnualDemand: '1,200 噸',
        sentiment: 'growth',
        remarks: '新興廠商，歐洲支持政策利好'
      },
      {
        rank: 8,
        name: 'SK Innovation',
        country: '南韓',
        mainUse: '車用、儲能電池',
        estimatedAnnualDemand: '1,000 噸',
        sentiment: 'stable',
        remarks: '品質穩定，客戶覆蓋全球'
      },
      {
        rank: 9,
        name: '寧德時代',
        country: '中國',
        mainUse: '乘用車、商用車電池',
        estimatedAnnualDemand: '900 噸',
        sentiment: 'hot',
        remarks: '全球份額第二，技術進步快'
      },
      {
        rank: 10,
        name: 'Hitachi',
        country: '日本',
        mainUse: '混合動力、儲能',
        estimatedAnnualDemand: '600 噸',
        sentiment: 'stable',
        remarks: '混動領域領先，EV 轉型中'
      }
    ],
    taiwanTop10: [
      {
        rank: 1,
        name: '台灣鋰電池廠（模擬）',
        productType: '中端鋰電池',
        estimatedUsage: '200 噸/年',
        difficulty: 3,
        importance: 5,
        remarks: '有供應鏈基礎，但技術有差距'
      },
      {
        rank: 2,
        name: '台灣電池組裝廠',
        productType: '組裝成品電池',
        estimatedUsage: '150 噸/年',
        difficulty: 2,
        importance: 4,
        remarks: '本地合作機會大'
      },
      {
        rank: 3,
        name: '台灣材料廠',
        productType: '電解質、正極材',
        estimatedUsage: '80 噸/年',
        difficulty: 4,
        importance: 4,
        remarks: '高端材料是瓶頸'
      },
      {
        rank: 4,
        name: '台灣車用零件廠',
        productType: '新能源車配件',
        estimatedUsage: '60 噸/年',
        difficulty: 2,
        importance: 3,
        remarks: '轉向 EV 供應鏈機會'
      },
      {
        rank: 5,
        name: '台灣儲能系統廠',
        productType: '家用/工業儲能',
        estimatedUsage: '40 噸/年',
        difficulty: 1,
        importance: 3,
        remarks: '新興應用領域，增速快'
      },
      {
        rank: 6,
        name: '台灣電子製造服務廠',
        productType: 'BMS、PCM 模組',
        estimatedUsage: '35 噸/年',
        difficulty: 3,
        importance: 2,
        remarks: '技術難度中等'
      },
      {
        rank: 7,
        name: '台灣檢測認證機構',
        productType: '電池測試',
        estimatedUsage: '20 噸/年',
        difficulty: 1,
        importance: 2,
        remarks: '支援服務角色'
      },
      {
        rank: 8,
        name: '台灣回收再利用廠',
        productType: '廢舊電池回收',
        estimatedUsage: '15 噸/年',
        difficulty: 2,
        importance: 2,
        remarks: '循環經濟新機遇'
      },
      {
        rank: 9,
        name: '台灣研發機構',
        productType: '新型電池研發',
        estimatedUsage: '10 噸/年',
        difficulty: 4,
        importance: 3,
        remarks: '技術合作機會'
      },
      {
        rank: 10,
        name: '台灣貿易商',
        productType: '進出口代理',
        estimatedUsage: '5 噸/年',
        difficulty: 1,
        importance: 1,
        remarks: '流通渠道角色'
      }
    ],
    strategy: {
      techSpecs: [
        {
          category: '厚度',
          spec: '50-200 μm',
          consumer: '50-80',
          automotive: '80-120',
          industrial: '100-150'
        },
        {
          category: '拉伸強度',
          spec: '≥60 MPa',
          consumer: '60-80',
          automotive: '80-100',
          industrial: '100-120'
        },
        {
          category: '阻隔性',
          spec: 'WVTR < 1g/m²·day',
          consumer: '2-5',
          automotive: '0.5-1',
          industrial: '0.2-0.5'
        },
        {
          category: '熱穩定',
          spec: '180°C+',
          consumer: '100-120',
          automotive: '150-180',
          industrial: '180-200'
        }
      ],
      entryPlan: {
        short: '短期（0-12月）：建立客戶認證體系，導入 2-3 家中型電池廠試用，完成品質驗證。',
        mid: '中期（12-24月）：完成日本、南韓廠商小批量供應合作，累積全球客戶案例，提升品牌認知。',
        long: '長期（24月+）：進入全球一線客戶供應鏈，實現規模化生產，毛利率提升至 35%+。'
      }
    },
    suppliers: [
      {
        type: '技術標竿',
        name: 'Toray（日本）',
        country: '日本',
        cpValue: '★★★☆☆',
        description: '全球領先，品質最優，但價格最高，適合高端應用。'
      },
      {
        type: '技術標竿',
        name: '住友化工',
        country: '日本',
        cpValue: '★★★☆☆',
        description: '日本頂級，技術穩定，客戶認可度高。'
      },
      {
        type: '中端競品',
        name: '中國某頭部廠商',
        country: '中國',
        cpValue: '★★★★☆',
        description: '價格優勢明顯（降幅 20-30%），品質接近日本，成為新選擇。'
      },
      {
        type: '中端競品',
        name: '台灣本地廠商',
        country: '台灣',
        cpValue: '★★★★☆',
        description: '距離近，响應快，成本可控，本地化優勢。'
      },
      {
        type: '合作評估',
        name: '韓國新興廠商',
        country: '南韓',
        cpValue: '★★★★☆',
        description: '技術進步快，客戶集中在大廠，合作難度中等。'
      },
      {
        type: '原料供應',
        name: '鋁箔原料廠（全球）',
        country: '多國',
        cpValue: '★★★★★',
        description: '鋁箔是主要成本，全球供應充足，競爭激烈，價格優勢突出。'
      }
    ],
    actionPlan: [
      {
        phase: '短期（0-12月）',
        action: '建立高低溫測試標準，通過 ISO、RoHS 認證',
        targetCustomers: '台灣電池廠 2-3 家',
        timeline: '3-6 個月'
      },
      {
        phase: '短期（0-12月）',
        action: '與中國頭部廠商建立採購談判',
        targetCustomers: 'BYD、CATL 等',
        timeline: '6-9 個月'
      },
      {
        phase: '中期（12-24月）',
        action: '完成歐美車廠小批量供應驗證',
        targetCustomers: 'Northvolt、Tesla 二級供應商',
        timeline: '12-18 個月'
      },
      {
        phase: '中期（12-24月）',
        action: '建立產能 1000 噸/年',
        targetCustomers: '亞洲客戶全覆蓋',
        timeline: '18-24 個月'
      },
      {
        phase: '長期（24月+）',
        action: '拓展高端客戶（Panasonic、LG 等）',
        targetCustomers: '全球一線電池廠',
        timeline: '24+ 個月'
      },
      {
        phase: '長期（24月+）',
        action: '研發新型複合膜，提升技術壁壘',
        targetCustomers: 'R&D 導向客戶',
        timeline: '長期'
      }
    ]
  },

  {
    id: 'ocp-rack-integration',
    productName: 'OCP Rack Integration',
    group: 'dc',
    market: {
      currentSize: 'USD 8.3 億',
      futureSize: 'USD 22.5 億 (2032)',
      cagr: '17-19%',
      summary: '開源數據中心標準 OCP 快速普及，驅動 Rack 集成產品需求。AI 浪潮加速高功率密度需求。',
      shareBreakdown: [
        { segment: '美國超大廠', share: '68%' },
        { segment: '中國雲廠商', share: '32%' }
      ]
    },
    globalTop10: [
      {
        rank: 1,
        name: 'Meta',
        country: '美國',
        mainUse: '開源 OCP Rack 標準製定',
        estimatedAnnualDemand: '50,000 套',
        sentiment: 'hot',
        remarks: 'OCP 聯盟主導者，標準設立者'
      },
      {
        rank: 2,
        name: 'Google',
        country: '美國',
        mainUse: 'AI 訓練數據中心',
        estimatedAnnualDemand: '40,000 套',
        sentiment: 'hot',
        remarks: 'AI 驅動增長，需求最旺'
      },
      {
        rank: 3,
        name: 'Amazon AWS',
        country: '美國',
        mainUse: '雲服務基礎設施',
        estimatedAnnualDemand: '35,000 套',
        sentiment: 'hot',
        remarks: '全球雲龍頭，穩定大量採購'
      },
      {
        rank: 4,
        name: '阿里巴巴',
        country: '中國',
        mainUse: 'AI 芯片、計算基礎設施',
        estimatedAnnualDemand: '28,000 套',
        sentiment: 'hot',
        remarks: '中國雲龍頭，自主研發投入大'
      },
      {
        rank: 5,
        name: 'Microsoft Azure',
        country: '美國',
        mainUse: 'AI 大模型訓練',
        estimatedAnnualDemand: '25,000 套',
        sentiment: 'hot',
        remarks: 'OpenAI 合作，AI 需求增長快'
      },
      {
        rank: 6,
        name: '騰訊',
        country: '中國',
        mainUse: '雲計算、AI 服務',
        estimatedAnnualDemand: '22,000 套',
        sentiment: 'hot',
        remarks: '文娛云、遊戲云 需求穩定'
      },
      {
        rank: 7,
        name: '百度',
        country: '中國',
        mainUse: '文心大模型訓練',
        estimatedAnnualDemand: '18,000 套',
        sentiment: 'growth',
        remarks: 'AI 芯片自主化戰略'
      },
      {
        rank: 8,
        name: 'Apple',
        country: '美國',
        mainUse: 'Apple Silicon 數據中心',
        estimatedAnnualDemand: '15,000 套',
        sentiment: 'growth',
        remarks: '專用芯片設計，OCP 改造'
      },
      {
        rank: 9,
        name: '京東',
        country: '中國',
        mainUse: '雲計算、物流中心',
        estimatedAnnualDemand: '12,000 套',
        sentiment: 'stable',
        remarks: '自建數據中心'
      },
      {
        rank: 10,
        name: 'ByteDance',
        country: '中國',
        mainUse: '推薦算法算力',
        estimatedAnnualDemand: '10,000 套',
        sentiment: 'growth',
        remarks: '短視頻/音樂等平台算力需求'
      }
    ],
    taiwanTop10: [
      {
        rank: 1,
        name: '台灣電子製造廠',
        productType: 'ODM/OEM Rack 組裝',
        estimatedUsage: '5,000 套/年',
        difficulty: 3,
        importance: 5,
        remarks: '直接客戶，合作成熟'
      },
      {
        rank: 2,
        name: '台灣機殼廠商',
        productType: 'Rack 機殼、散熱模組',
        estimatedUsage: '3,000 套/年',
        difficulty: 2,
        importance: 4,
        remarks: '供應鏈上遊，可直接切入'
      },
      {
        rank: 3,
        name: '台灣連接器廠商',
        productType: 'OCP 標準連接器',
        estimatedUsage: '2,000 套/年',
        difficulty: 3,
        importance: 4,
        remarks: '標準化程度高，競爭激烈'
      },
      {
        rank: 4,
        name: '台灣 IC 設計公司',
        productType: 'BMC、管理芯片',
        estimatedUsage: '1,500 套/年',
        difficulty: 4,
        importance: 3,
        remarks: '高技術門檻，機會有限'
      },
      {
        rank: 5,
        name: '台灣動力技術廠',
        productType: '電源供應模組',
        estimatedUsage: '1,200 套/年',
        difficulty: 3,
        importance: 3,
        remarks: '高功率密度要求增加'
      },
      {
        rank: 6,
        name: '台灣軟體/測試廠',
        productType: '韌體、測試驗證',
        estimatedUsage: '800 套/年',
        difficulty: 2,
        importance: 2,
        remarks: '服務型合作機會'
      },
      {
        rank: 7,
        name: '台灣鋁材廠商',
        productType: '散熱鋁製部件',
        estimatedUsage: '600 套/年',
        difficulty: 1,
        importance: 2,
        remarks: '基礎材料供應'
      },
      {
        rank: 8,
        name: '台灣物流集成商',
        productType: '組裝、測試、配送',
        estimatedUsage: '500 套/年',
        difficulty: 1,
        importance: 2,
        remarks: '價值鏈末端'
      },
      {
        rank: 9,
        name: '台灣設計諮詢公司',
        productType: 'OCP 架構設計',
        estimatedUsage: '300 套/年',
        difficulty: 4,
        importance: 2,
        remarks: '設計層合作，高技術'
      },
      {
        rank: 10,
        name: '台灣新創廠商',
        productType: '創新散熱或電源方案',
        estimatedUsage: '100 套/年',
        difficulty: 3,
        importance: 1,
        remarks: '試點機會，長期潛力'
      }
    ],
    strategy: {
      techSpecs: [
        {
          category: 'Rack 規格',
          spec: 'OCP 3.0',
          consumer: '標準',
          automotive: 'N/A',
          industrial: 'N/A'
        },
        {
          category: '功率密度',
          spec: '≥15 kW',
          consumer: '15-25',
          automotive: '25-35',
          industrial: '35-50'
        },
        {
          category: '散熱能力',
          spec: 'Liquid/Air',
          consumer: 'Air 冷',
          automotive: '混合',
          industrial: 'Liquid 冷'
        },
        {
          category: '管理模組',
          spec: 'BMC 2.0+',
          consumer: '基礎',
          automotive: '進階',
          industrial: '企業級'
        }
      ],
      entryPlan: {
        short: '短期（0-12月）：獲取 OCP 設計認證，進入台灣 ODM 廠商供應鏈，參與 1-2 個試點項目。',
        mid: '中期（12-24月）：完成中國大廠小批量供應合作，建立標準化方案集成體系。',
        long: '長期（24月+）：成為全球 OCP 認證核心供應商，參與標準演進，進入一線雲廠商直供。'
      }
    },
    suppliers: [
      {
        type: '技術標竿',
        name: 'Celestica（加拿大）',
        country: '加拿大',
        cpValue: '★★★☆☆',
        description: 'OCP 聯盟原始設備製造廠，技術最先進，規模最大。'
      },
      {
        type: '技術標竿',
        name: 'Quanta Services',
        country: '台灣',
        cpValue: '★★★★☆',
        description: '台灣最大 ODM 廠，OCP 認證齊全，客戶集中在超大廠。'
      },
      {
        type: '中端競品',
        name: '中國代工廠（浪潮等）',
        country: '中國',
        cpValue: '★★★★☆',
        description: '成本優勢 25%+，品質逐步提升，中國客戶傾斜。'
      },
      {
        type: '中端競品',
        name: '台灣其他 ODM 廠商',
        country: '台灣',
        cpValue: '★★★★☆',
        description: '成本競爭力增強，技術快速追趕。'
      },
      {
        type: '合作評估',
        name: '美國新創 Rack 設計廠',
        country: '美國',
        cpValue: '★★★★★',
        description: '創新方案，客戶認可度高，但規模小、產能限制。'
      },
      {
        type: '原料供應',
        name: '全球晶片廠（Intel、AMD、Nvidia）',
        country: '多國',
        cpValue: '★★★☆☆',
        description: '核心芯片供應受限，進入難度高。'
      }
    ],
    actionPlan: [
      {
        phase: '短期（0-12月）',
        action: '取得 OCP 官方設計認證證書',
        targetCustomers: '台灣 ODM 廠商',
        timeline: '3-6 個月'
      },
      {
        phase: '短期（0-12月）',
        action: '與 Quanta/Compal 等大廠建立技術評估',
        targetCustomers: '台灣 TOP 3 ODM',
        timeline: '6-9 個月'
      },
      {
        phase: '中期（12-24月）',
        action: '進入浪潮、新華三等中國大廠供應鏈',
        targetCustomers: '中國 Tier 1 廠商',
        timeline: '12-18 個月'
      },
      {
        phase: '中期（12-24月）',
        action: '建立標準化 Rack 集成解決方案（5 種規格）',
        targetCustomers: '所有客戶',
        timeline: '18-24 個月'
      },
      {
        phase: '長期（24月+）',
        action: '進入阿里、騰訊、百度一級供應鏈',
        targetCustomers: '中國超大廠直供',
        timeline: '24+ 個月'
      },
      {
        phase: '長期（24月+）',
        action: '研發液冷方案，進入高性能計算領域',
        targetCustomers: 'AI 芯片客戶',
        timeline: '長期'
      }
    ]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByGroup = (group: string): Product[] => {
  return products.filter(p => p.group === group);
};
