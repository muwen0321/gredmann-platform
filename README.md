# Gredmann Market Intelligence Platform

高端市場情報展示平台，採用 editorial 設計風格，含前端密碼鎖保護。

## 功能特色

✨ **密碼保護** - SHA-256 前端驗證，sessionStorage 管理會話
✨ **專業設計** - 暖白背景、深金強調色，Editorial 風格
✨ **完整報告** - 6 個章節完整市場情報報告
✨ **響應式設計** - 桌面/平板/手機自適應，手機端漢堡菜單
✨ **快速導航** - 可展開的產品分類 Sidebar
✨ **繁體中文** - 全界面繁體中文

## 快速開始

### 1. 安裝依賴

```bash
cd gredmann-platform
npm install
```

### 2. 本地開發

```bash
npm run dev
```

然後在瀏覽器開啟 `http://localhost:3000`

**默認密碼**：`Zz!234567890`

### 3. 構建生產版本

```bash
npm run build
```

生產版本會在 `dist/` 目錄中生成。

## 部署到 Vercel

### 方式 1：使用 Vercel CLI

```bash
# 安裝 Vercel CLI（全局）
npm i -g vercel

# 部署
vercel
```

### 方式 2：GitHub + Vercel

1. **創建 GitHub 倉庫**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gredmann-platform.git
git push -u origin main
```

2. **連接 Vercel**
   - 訪問 [vercel.com](https://vercel.com)
   - 登錄/註冊
   - 點擊「New Project」
   - 選擇 GitHub 倉庫
   - 點擊「Deploy」

自動部署完成！每次 push 到 main 分支都會自動部署。

## 密碼驗證

- **密碼**：`Zz!234567890`
- **驗證方式**：SHA-256 hash（前端）
- **存儲**：sessionStorage（刷新頁面保留，關閉標籤頁清除）
- **安全性**：純前端驗證，適合 prototype 演示

## 項目結構

```
src/
├── components/         # React 組件
│   ├── PasswordPage.tsx      # 密碼驗證頁
│   ├── Sidebar.tsx            # 左側導航
│   ├── ProductReport.tsx      # 產品報告主體
│   ├── MainContent.tsx        # 右側主內容
│   └── MobileMenu.tsx         # 手機菜單
├── data/
│   └── products.ts            # Mock 產品數據
├── styles/
│   └── global.css             # 全局樣式
├── utils/
│   ├── auth.ts                # 密碼驗證邏輯
│   └── storage.ts             # SessionStorage 管理
├── types/
│   └── index.ts               # TypeScript 類型定義
└── App.tsx                # 主應用入口
```

## 色彩方案

| 用途 | 顏色 | Hex |
|------|------|-----|
| 背景 | 暖白 | #faf9f7 |
| 文字 | 深黑 | #1a1a1a |
| 強調 | 深金 | #c8a96e |
| 邊框 | 淡灰 | #e8e6e1 |
| Sidebar | 黑底 | #1a1a1a |

## 字體

- **英文/數字**：DM Sans（Google Fonts）
- **中文**：Noto Sans TC（Google Fonts）
- **數據表格**：DM Mono（Google Fonts）

## Mock 數據

目前包含 3 個完整產品示範：

1. **Al Pouch Film**（電池與其他）
2. **OCP Rack Integration**（DC 硬件）
3. **Photo Resist**（半導體）

其他產品顯示「情報建置中」placeholder。

## 產品報告章節結構

每個產品報告包含 6 個固定章節：

1. **市場概況** - 市場規模、CAGR、市佔率
2. **全球前十大客戶** - 景氣指標、需求量
3. **台灣前十大客戶** - 攻擊難度、重要性評分
4. **進攻策略與規格** - 技術規格對比、短中長期計劃
5. **CP 值供應商推薦** - 全球供應商評估（含中國廠商）
6. **行動建議摘要** - 分階段行動計劃

## 開發提示

### 添加新產品

編輯 `src/data/products.ts`，按照現有結構添加新 `Product` 對象：

```typescript
{
  id: 'new-product',
  productName: '新產品名稱',
  group: 'dc' | 'semi' | 'fpd' | 'batt',
  market: { ... },
  globalTop10: [ ... ],
  taiwanTop10: [ ... ],
  strategy: { ... },
  suppliers: [ ... ],
  actionPlan: [ ... ]
}
```

### 修改設計色彩

編輯 `src/styles/global.css` 中的 CSS 變數：

```css
:root {
  --color-bg: #faf9f7;
  --color-text: #1a1a1a;
  --color-accent: #c8a96e;
  /* ... */
}
```

### 修改密碼

編輯 `src/utils/auth.ts`：

```typescript
const CORRECT_PASSWORD = 'YOUR_NEW_PASSWORD';
```

## 瀏覽器支持

- Chrome/Edge 最新版
- Firefox 最新版
- Safari 最新版
- 手機瀏覽器（iOS Safari、Chrome）

## 許可證

© 2026 Gredmann Market Intelligence Platform

---

**需要幫助？** 檢查項目結構、確認 Node.js 版本（v16+），或參考上方快速開始步驟。
