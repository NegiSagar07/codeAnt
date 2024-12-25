import React, { useState } from 'react';
import SelfHostedOptions from './SelfHostedOptions';
import LoginOptions from './LoginOptions';
import Icon from './images/icon.svg';

const Home = () => {
  const [activeTab, setActiveTab] = useState('saas');

  return (
    <>
      <div className="w-[408px] sm:w-[672px] mx-auto min-h-[602px] rounded-xl border-2 bg-white flex flex-col mt-20 md:mt-32">
        <div className="flex items-center justify-center pt-10">
          <img src={Icon} alt="logo" className="h-6 w-6 md:h-8 md:w-8 mr-2" />
          <p className="text-2xl md:text-[30px] font-[400]">CodeAnt AI</p>
        </div>
        <div className="py-4 md:py-6 mt-8 mb-4">
          <h1 className="text-2xl md:text-[32px] text-[#181d27] font-bold text-center">
            Welcome to CodeAnt AI
          </h1>
        </div>

        <div className="flex justify-center mb-10 h-12 md:h-14 text-gray-500 px-4">
          <button
            className={`px-4 md:px-8 py-2 rounded-md transition-colors w-full md:w-[311px] text-base md:text-[20px] font-[600] ${
              activeTab === 'saas'
                ? 'bg-[#1570ef] text-white'
                : 'bg-[#ffffff] border border-gray-300'
            }`}
            onClick={() => setActiveTab('saas')}
          >
            SAAS
          </button>
          <button
            className={`px-4 md:px-8 py-2 rounded-md transition-colors w-full md:w-[311px] text-base md:text-[20px] font-[600] ${
              activeTab === 'selfHosted'
                ? 'bg-[#1570ef] text-white'
                : 'bg-[#ffffff] border border-gray-300'
            }`}
            onClick={() => setActiveTab('selfHosted')}
          >
            Self Hosted
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 md:px-8">
          {activeTab === 'saas' ? <LoginOptions /> : <SelfHostedOptions />}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-6 md:mt-8 px-4 text-sm md:text-base text-center">
        <span>By signing up you agree to the</span>
        <span className="font-bold">Privacy Policy</span>
      </div>
    </>
  );
};

export default Home;