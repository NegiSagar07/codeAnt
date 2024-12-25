import React from 'react';
import PieChart from './images/chart.svg'
import Icon from './images/icon.svg'
import Subtract from './images/Subtract.svg'

const StatisticsCard = () => {
  return (
    <div className="relative w-[720px] h-[960px] max-w-2xl p-4 ">
      <div className='w-[474px] h-[322px] mt-56 ml-20'>
        <div className="w-full bg-white rounded-3xl shadow-2xl">
          <div className="flex items-center gap-3 p-6">
            <img src={Icon} alt="CodeAnt AI Logo" className="w-8 h-8" />
            <h2 className="text-lg font-semibold text-gray-900">
              AI to Detect & Autofix Bad Code
            </h2>
          </div>
          <div className="w-[474px] h-0.5 bg-gray-300"></div>
          <div className="grid grid-cols-3 gap-4 p-6">
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">30+</div>
              <div className="text-sm text-gray-600">Language Support</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">10K+</div>
              <div className="text-sm text-gray-600">Developers</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">100K+</div>
              <div className="text-sm text-gray-600">Hours Saved</div>
            </div>
          </div>
        </div>

        <div className="w-[270px] h-[164px] bg-white rounded-3xl shadow-xl p-6 ml-56">
          <div className="items-center gap-4">
            <div className='flex justify-between'>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <img src={PieChart} alt="Pie Chart" className="w-12 h-12" />
              </div>
              <div className="text-sm text-gray-600 mb-1 grid grid-cols-1">
                <span className="text-blue-700 font-[900]">↑ 14%</span> 
                <span>This week</span>
              </div>
            </div>
            <div className="grid grid-cols-1 mt-4 items-baseline gap-1">
              <span className="text-[14px] font-[700] text-gray-800">Issues Fixed</span>
              <span className="text-[32px] font-[700] text-gray-900">500K+</span>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 left-0'>
        <img src={Subtract} alt="logo" className='w-[284px] h-[319px]'/>
      </div>
    </div>
  );
};

export default StatisticsCard;