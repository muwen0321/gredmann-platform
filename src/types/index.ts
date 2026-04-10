export interface MarketMetrics {
  currentSize: string;
  futureSize: string;
  cagr: string;
  summary: string;
  shareBreakdown: Array<{ segment: string; share: string }>;
}

export interface GlobalCustomer {
  rank: number;
  name: string;
  country: string;
  mainUse: string;
  estimatedAnnualDemand: string;
  sentiment: 'hot' | 'growth' | 'stable' | 'warning' | 'decline';
  remarks: string;
}

export interface TaiwanCustomer {
  rank: number;
  name: string;
  productType: string;
  estimatedUsage: string;
  difficulty: number; // 1-5 stars
  importance: number; // 1-5 stars
  remarks: string;
}

export interface TechSpec {
  category: string;
  spec: string;
  consumer: string;
  automotive: string;
  industrial: string;
}

export interface Strategy {
  techSpecs: TechSpec[];
  entryPlan: {
    short: string;
    mid: string;
    long: string;
  };
}

export interface Supplier {
  type: string;
  name: string;
  country: string;
  cpValue: string;
  description: string;
}

export interface ActionItem {
  phase: string;
  action: string;
  targetCustomers: string;
  timeline: string;
}

export interface Product {
  id: string;
  productName: string;
  group: 'dc' | 'semi' | 'fpd' | 'batt';
  market: MarketMetrics;
  globalTop10: GlobalCustomer[];
  taiwanTop10: TaiwanCustomer[];
  strategy: Strategy;
  suppliers: Supplier[];
  actionPlan: ActionItem[];
  lastUpdated?: string;
}

export interface ProductGroup {
  id: string;
  name: string;
  icon: string;
  products: Product[];
}
