import React from 'react';
import BackgroundDiv from './components/Background';
import MainPage from './pages/MainPage';
import PortfolioPage from './pages/PortfolioPage';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';

function App() {
  const pageState = useSelector((state: any) => state.page.pageState);

  return (
    <div>
      <BackgroundDiv></BackgroundDiv>
      <AnimatePresence mode='wait'>
        {pageState === "main" && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MainPage/>
          </motion.div>
        )}
        {pageState === "portfolio" && (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <PortfolioPage/>
          </motion.div>
        )}
        
      </AnimatePresence>
    </div>  
  );
}

export default App;
