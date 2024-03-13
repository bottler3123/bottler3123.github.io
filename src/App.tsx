import React from 'react';
import MainPage from './pages/MainPage';
import PortfolioPage from './pages/PortfolioPage';
import PortfolioDetailPage from './pages/PortfolioDetailPage';
import backgroundDiv from './components/backgroundDiv';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '.';

function App() {
  const bgnum = useSelector((state : RootState) => state.background.number);

  return (
      <BrowserRouter>
        <div>
          {bgnum}
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/portfolioDetail" element={<PortfolioDetailPage />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
