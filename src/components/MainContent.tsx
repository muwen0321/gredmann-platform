import React from 'react';
import { ProductReport } from './ProductReport';
import { products } from '../data/products';

interface MainContentProps {
  selectedProductId: string;
}

export const MainContent: React.FC<MainContentProps> = ({ selectedProductId }) => {
  const currentProduct = products.find(p => p.id === selectedProductId);

  if (!currentProduct) {
    return (
      <div className="main-content">
        <div className="content-area">
          <div className="placeholder-content">
            <div className="placeholder-icon">📦</div>
            <h2>情報建置中</h2>
            <p>請從左側選單選擇一個產品開始瀏覽。</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content">
      <ProductReport product={currentProduct} />
    </div>
  );
};
