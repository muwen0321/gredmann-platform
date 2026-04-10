import React, { useState } from 'react';
import { products } from '../data/products';

interface SidebarProps {
  selectedProductId: string;
  onProductSelect: (id: string) => void;
}

const productGroups = [
  {
    id: 'dc',
    name: 'DC Hardware',
    icon: '⚡',
  },
  {
    id: 'semi',
    name: 'Semiconductor',
    icon: '◈',
  },
  {
    id: 'fpd',
    name: 'FPD / Display',
    icon: '▣',
  },
  {
    id: 'batt',
    name: 'Battery & Others',
    icon: '⬡',
  },
];

const groupProducts = {
  dc: [
    'OCP Rack Integration',
    'MGX Bare Rack',
    'AOC / DAC Cable',
    'Power I/O Cable',
    'Power Shelf',
    'CDU / Liquid Cooling',
    'UQD',
    'AI Server (Asus/Gigabyte/SMC)',
  ],
  semi: [
    'Si Prime Wafer',
    'Si Test Wafer',
    'Si Reclaim Wafer',
    'SiC & GaN Wafer',
    'Special Gas (Semi)',
    'Bulk Chemical (Semi)',
    'Photo Resist',
    'Precursors',
    'CMP Materials & Parts',
    'Glass Wafer',
    'Coolant',
    'Filter & Pump (Semi)',
    'Wafer Carrier & RFID',
    'APC',
    'Special Chemical',
  ],
  fpd: [
    'Color PR (RGB)',
    'PSPI for FPD',
    'Liquid Crystal',
    'Etchant & Developer',
    'FPD Chemical',
    'Driver IC (COF/COG/Tcon/PM)',
    'Module & OpenCell',
    'Mask (OLED/Micro OLED)',
    'Filter & Pump (FPD)',
  ],
  batt: [
    'Al Pouch Film',
    'Secondary Battery Material',
    'PET Film',
    'FEP Tube',
    'Liquid Metal / TIM',
    'Fluorinated Compounds',
    'Thermal Coating (Y2O3)',
    'Antistatic Additive',
    'PEMFC (PEM/MEA/BPP)',
    'Hydrogen Storage Alloy',
  ],
};

export const Sidebar: React.FC<SidebarProps> = ({ selectedProductId, onProductSelect }) => {
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set(['batt']));

  const toggleGroup = (groupId: string) => {
    const newExpanded = new Set(expandedGroups);
    if (newExpanded.has(groupId)) {
      newExpanded.delete(groupId);
    } else {
      newExpanded.add(groupId);
    }
    setExpandedGroups(newExpanded);
  };

  const getProductIdFromName = (name: string): string | null => {
    const product = products.find(p => p.productName === name);
    return product?.id || null;
  };

  const isProductAvailable = (name: string): boolean => {
    return getProductIdFromName(name) !== null;
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-main">GREDMANN</div>
        <div className="sidebar-logo-sub">Market Intelligence</div>
      </div>

      {productGroups.map((group) => (
        <div key={group.id} className="product-group">
          <div
            className="group-header"
            onClick={() => toggleGroup(group.id)}
          >
            <div className="group-title">
              <span>{group.icon}</span>
              {group.name}
            </div>
            <div className={`group-toggle ${expandedGroups.has(group.id) ? 'expanded' : ''}`}>
              ▼
            </div>
          </div>

          <div className={`product-list ${expandedGroups.has(group.id) ? 'expanded' : ''}`}>
            {(groupProducts[group.id as keyof typeof groupProducts] || []).map((productName) => {
              const productId = getProductIdFromName(productName);
              const isAvailable = isProductAvailable(productName);

              return (
                <div
                  key={productName}
                  className={`product-item ${selectedProductId === productId ? 'active' : ''}`}
                  onClick={() => {
                    if (isAvailable && productId) {
                      onProductSelect(productId);
                    }
                  }}
                  style={{
                    opacity: isAvailable ? 1 : 0.5,
                    cursor: isAvailable ? 'pointer' : 'default',
                  }}
                  title={!isAvailable ? '情報建置中' : ''}
                >
                  {productName}
                  {!isAvailable && <span style={{ fontSize: '0.75rem', marginLeft: '4px' }}>(建置中)</span>}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </aside>
  );
};
