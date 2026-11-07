import React from 'react';
import { AppLayout } from './components/layout/AppLayout';
import { CryptoContextProvider } from './context/crypto-context';

const App: React.FC = () => (
  <CryptoContextProvider>
    <AppLayout />
  </CryptoContextProvider>
  
);

export default App;