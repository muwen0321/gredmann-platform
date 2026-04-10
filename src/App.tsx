import React, { useState, useEffect } from 'react';
import { PasswordPage } from './components/PasswordPage';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { MobileMenu } from './components/MobileMenu';
import { isAuthenticated } from './utils/auth';
import { getSelectedProduct, setSelectedProduct } from './utils/storage';
import './styles/global.css';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(getSelectedProduct());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication on mount
    const authenticated = isAuthenticated();
    setIsAuth(authenticated);
    setIsLoading(false);
  }, []);

  const handleAuthSuccess = () => {
    setIsAuth(true);
  };

  const handleProductSelect = (productId: string) => {
    setSelectedProductId(productId);
    setSelectedProduct(productId);
  };

  if (isLoading) {
    return null;
  }

  if (!isAuth) {
    return <PasswordPage onSuccess={handleAuthSuccess} />;
  }

  return (
    <>
      <Sidebar selectedProductId={selectedProductId} onProductSelect={handleProductSelect} />
      <MobileMenu selectedProductId={selectedProductId} onProductSelect={handleProductSelect} />
      <MainContent selectedProductId={selectedProductId} onProductSelect={handleProductSelect} />
    </>
  );
}

export default App;
