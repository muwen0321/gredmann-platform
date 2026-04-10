import React from 'react';
import { Product } from '../types';

interface ProductReportProps {
  product: Product;
}

const sentimentEmoji = {
  hot: '🔥',
  growth: '📈',
  stable: '➡️',
  warning: '⚠️',
  decline: '🔻',
};

export const ProductReport: React.FC<ProductReportProps> = ({ product }) => {
  return (
    <div className="content-area">
      {/* Title */}
      <h1>{product.productName}</h1>

      {/* Section 1: Market Overview */}
      <section>
        <h2>市場概況</h2>
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-label">全球市場規模（當年）</div>
            <div className="metric-value">{product.market.currentSize}</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">預估市場規模（2032）</div>
            <div className="metric-value">{product.market.futureSize}</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">年複合成長率 (CAGR)</div>
            <div className="metric-value">{product.market.cagr}</div>
          </div>
        </div>

        <p style={{ fontSize: '15px', lineHeight: '1.8', marginTop: '24px' }}>
          <strong>市場特徵：</strong> {product.market.summary}
        </p>

        <h3 style={{ marginTop: '24px', marginBottom: '12px' }}>主要供應商市佔分佈</h3>
        <table>
          <thead>
            <tr>
              <th style={{ width: '50%' }}>細分市場</th>
              <th style={{ width: '50%' }}>市佔率</th>
            </tr>
          </thead>
          <tbody>
            {product.market.shareBreakdown.map((item, idx) => (
              <tr key={idx}>
                <td>{item.segment}</td>
                <td className="data-mono">{item.share}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Section 2: Global Top 10 Customers */}
      <section>
        <h2>全球前十大目標客戶</h2>
        <table>
          <thead>
            <tr>
              <th style={{ width: '8%' }}>排名</th>
              <th style={{ width: '18%' }}>客戶名稱</th>
              <th style={{ width: '14%' }}>國家/地區</th>
              <th style={{ width: '20%' }}>主力產品用途</th>
              <th style={{ width: '18%' }}>預估年需求量</th>
              <th style={{ width: '10%' }}>景氣指標</th>
              <th style={{ width: '12%' }}>現況/備註</th>
            </tr>
          </thead>
          <tbody>
            {product.globalTop10.map((customer) => (
              <tr key={customer.rank}>
                <td className="data-mono">{customer.rank}</td>
                <td>{customer.name}</td>
                <td>{customer.country}</td>
                <td>{customer.mainUse}</td>
                <td className="data-mono">{customer.estimatedAnnualDemand}</td>
                <td style={{ textAlign: 'center' }}>
                  {sentimentEmoji[customer.sentiment]} {customer.sentiment}
                </td>
                <td style={{ fontSize: '13px' }}>{customer.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Section 3: Taiwan Top 10 Customers */}
      <section>
        <h2>台灣前十大目標客戶（重點攻擊清單）</h2>
        <table>
          <thead>
            <tr>
              <th style={{ width: '8%' }}>排名</th>
              <th style={{ width: '18%' }}>客戶名稱</th>
              <th style={{ width: '16%' }}>產品類型</th>
              <th style={{ width: '16%' }}>預估用量</th>
              <th style={{ width: '14%' }}>攻擊難度 (★)</th>
              <th style={{ width: '12%' }}>重要性 (⭐)</th>
              <th style={{ width: '16%' }}>備註</th>
            </tr>
          </thead>
          <tbody>
            {product.taiwanTop10.map((customer) => (
              <tr key={customer.rank}>
                <td className="data-mono">{customer.rank}</td>
                <td>{customer.name}</td>
                <td>{customer.productType}</td>
                <td className="data-mono">{customer.estimatedUsage}</td>
                <td style={{ textAlign: 'center' }}>
                  {'★'.repeat(customer.difficulty)}{' '}
                  {customer.difficulty}/5
                </td>
                <td style={{ textAlign: 'center' }}>
                  {'⭐'.repeat(customer.importance)}{' '}
                  {customer.importance}/5
                </td>
                <td style={{ fontSize: '13px' }}>{customer.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Section 4: Entry Strategy & Tech Specs */}
      <section>
        <h2>進攻策略與規格要求分析</h2>

        <h3 style={{ marginTop: '24px', marginBottom: '12px' }}>關鍵規格要求對照表</h3>
        <table>
          <thead>
            <tr>
              <th style={{ width: '18%' }}>規格項目</th>
              <th style={{ width: '18%' }}>標準</th>
              <th style={{ width: '18%' }}>消費級</th>
              <th style={{ width: '18%' }}>汽車/工業級</th>
              <th style={{ width: '28%' }}>工業級</th>
            </tr>
          </thead>
          <tbody>
            {product.strategy.techSpecs.map((spec, idx) => (
              <tr key={idx}>
                <td className="data-mono">{spec.category}</td>
                <td className="data-mono" style={{ fontSize: '13px' }}>{spec.spec}</td>
                <td className="data-mono" style={{ fontSize: '13px' }}>{spec.consumer}</td>
                <td className="data-mono" style={{ fontSize: '13px' }}>{spec.automotive}</td>
                <td className="data-mono" style={{ fontSize: '13px' }}>{spec.industrial}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={{ marginTop: '24px', marginBottom: '12px' }}>切入策略建議</h3>
        <div style={{
          backgroundColor: '#fff',
          padding: '16px',
          border: '1px solid #e8e6e1',
          borderRadius: '4px',
          marginBottom: '16px',
        }}>
          <p style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#c8a96e' }}>短期（0-12月）</strong>
            <br />
            {product.strategy.entryPlan.short}
          </p>
          <p style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#c8a96e' }}>中期（12-24月）</strong>
            <br />
            {product.strategy.entryPlan.mid}
          </p>
          <p>
            <strong style={{ color: '#c8a96e' }}>長期（24月+）</strong>
            <br />
            {product.strategy.entryPlan.long}
          </p>
        </div>
      </section>

      {/* Section 5: CP Value Suppliers */}
      <section>
        <h2>CP 值供應商推薦（全球，含中國）</h2>
        <table>
          <thead>
            <tr>
              <th style={{ width: '14%' }}>類型</th>
              <th style={{ width: '18%' }}>廠商名稱</th>
              <th style={{ width: '14%' }}>國家</th>
              <th style={{ width: '14%' }}>CP值</th>
              <th style={{ width: '40%' }}>說明</th>
            </tr>
          </thead>
          <tbody>
            {product.suppliers.map((supplier, idx) => (
              <tr key={idx}>
                <td style={{ fontSize: '13px' }}>{supplier.type}</td>
                <td>{supplier.name}</td>
                <td>{supplier.country}</td>
                <td style={{ textAlign: 'center' }} className="data-mono">
                  {supplier.cpValue}
                </td>
                <td style={{ fontSize: '13px' }}>{supplier.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Section 6: Action Plan */}
      <section>
        <h2>行動建議摘要</h2>
        <table>
          <thead>
            <tr>
              <th style={{ width: '16%' }}>階段</th>
              <th style={{ width: '32%' }}>行動</th>
              <th style={{ width: '26%' }}>目標客戶</th>
              <th style={{ width: '26%' }}>時程</th>
            </tr>
          </thead>
          <tbody>
            {product.actionPlan.map((item, idx) => (
              <tr key={idx}>
                <td style={{ fontWeight: 600, fontSize: '13px' }}>{item.phase}</td>
                <td>{item.action}</td>
                <td>{item.targetCustomers}</td>
                <td className="data-mono" style={{ fontSize: '13px' }}>
                  {item.timeline}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Footer */}
      <div className="report-footer">
        <p>
          最後更新：{product.lastUpdated || new Date().toLocaleDateString('zh-TW')}
        </p>
        <p>
          本報告將定期更新，客戶排名依最新產業資訊動態調整。
        </p>
      </div>
    </div>
  );
};
