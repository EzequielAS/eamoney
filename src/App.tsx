import { useState } from 'react'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal'

import { GlobalStyle } from './global'
import { TransactionsProvider } from './hooks/UseTransactions';


export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
        onRequestClose={handleCloseNewTransactionModal} 
        isOpen={isNewTransactionModalOpen}/>
      <GlobalStyle />

    </TransactionsProvider>
  );
}

