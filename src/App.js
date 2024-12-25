import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StatisticsCard from './components/StatisticsCard';
import Home from './components/Home';
import RepositoryLayout from './components/RepositoryLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="min-h-screen w-full flex justify-center items-start bg-[#fafafa]">
              <div className="sm:h-[960px] sm:w-[1440px]">
                <div className="h-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
                    <div className="hidden sm:block bg-white p-6">
                      <StatisticsCard />
                    </div>
                    <div className="h-[888px] w-full sm:h-[960px] sm:w-[720px] p-6 sm:bg-[#e9eaeb]">
                      <Home />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          } 
        />
        <Route path="/repositories" element={<RepositoryLayout />} />
      </Routes>
    </Router>
  );
};

export default App;