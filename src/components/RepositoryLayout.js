import React, { useState } from 'react';
import { Search, RefreshCw, Plus, LogOut, Settings, Cloud, Book, HelpCircle, Phone, ChevronDown, Menu, X } from 'lucide-react';
import Logo from './images/icon.svg'

const RepositoryLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const repositories = [
    { name: 'design-system', type: 'Public', language: 'React', size: '7320 KB', updated: '1 day ago' },
    { name: 'codeant-ci-app', type: 'Private', language: 'Javascript', size: '5871 KB', updated: '2 days ago' },
    { name: 'analytics-dashboard', type: 'Private', language: 'Python', size: '4521 KB', updated: '5 days ago' },
    { name: 'mobile-app', type: 'Public', language: 'Swift', size: '3096 KB', updated: '3 days ago' },
    { name: 'e-commerce-platform', type: 'Private', language: 'Java', size: '6210 KB', updated: '6 days ago' },
    { name: 'blog-website', type: 'Public', language: 'HTML/CSS', size: '1876 KB', updated: '4 days ago' },
    { name: 'social-network', type: 'Private', language: 'PHP', size: '5432 KB', updated: '7 days ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className='flex items-start'>
            <img src={Logo} alt="logo" className="h-6 w-6 md:h-8 md:w-8 mr-2" />
            <span className="text-xl font-semibold">CodeAnt AI</span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-600 hover:text-gray-900"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <nav className="px-4 py-2 space-y-2">
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-blue-600 bg-blue-50 rounded-lg">
              <Book className="h-5 w-5" />
              <span>Repositories</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              <code className="h-5 w-5">&lt;/&gt;</code>
              <span>AI Code Review</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              <Cloud className="h-5 w-5" />
              <span>Cloud Security</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              <HelpCircle className="h-5 w-5" />
              <span>How to Use</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              <Phone className="h-5 w-5" />
              <span>Support</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </nav>
        </div>
      )}

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="w-64 h-screen bg-white border-r border-gray-200 hidden md:block min-h-screen">
          <div className="p-4">
            <div className="h-8 mb-4">
              <div className="flex items-center">
                <img src={Logo} alt="logo" className="h-6 w-6 md:h-8 md:w-8 mr-2" /> 
                <span className="text-2xl font-[400]">CodeAnt AI</span>
              </div>
            </div>
            
            <nav className="flex flex-col justify-between space-y-2 h-screen">
              <div className="space-y-2">
                <button className="w-full flex items-center space-x-3 px-4 py-2 text-blue-600 bg-blue-50 rounded-lg">
                  <Book className="h-5 w-5" />
                  <span>Repositories</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <code className="h-5 w-5 flex-shrink-0 whitespace-nowrap">&lt;/&gt;</code>
                  <span>AI Code Review</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <Cloud className="h-5 w-5" />
                  <span>Cloud Security</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <HelpCircle className="h-5 w-5" />
                  <span>How to Use</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </button>
              </div>

              <div className="mt-auto space-y-2">
                <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <Phone className="h-5 w-5" />
                  <span>Support</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg pb-24">
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </div>
            </nav>

          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className='flex justify-between'>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">Repositories</h1>
                  <p className="text-gray-500">33 total repositories</p>
                </div>
              </div>

              {/* Action buttons */}
              <div>
                <div className="flex sm:flex-row gap-4 mb-6">
                  <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    <RefreshCw className="h-5 w-5 mr-2" />
                    Refresh All
                  </button>
                  <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-5 w-5 mr-2" />
                    Add Repository
                  </button>
                </div>
              </div>
            </div>

            {/* Search bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Repositories"
                  className="w-96 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Repository list */}
            <div className="space-y-4">
              {repositories.map((repo) => (
                <div key={repo.name} className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-medium text-gray-900">{repo.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          repo.type === 'Public' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {repo.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center mt-2 text-sm text-gray-500 gap-4">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
                          <span>{repo.language}</span>
                        </div>
                        <span>{repo.size}</span>
                        <span>Updated {repo.updated}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RepositoryLayout;