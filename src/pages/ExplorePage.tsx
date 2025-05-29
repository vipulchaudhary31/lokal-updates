import React from 'react';

interface ExplorePageProps {
  selectedLocation?: string;
  selectedConstituency?: string;
  onLocationClick: () => void;
  onCategorySelect: (category: string) => void;
}

export const ExplorePage: React.FC<ExplorePageProps> = ({
  selectedLocation = 'नागपूर',
  selectedConstituency = 'कामठी',
  onLocationClick,
  onCategorySelect
}) => {
  const baseUrl = import.meta.env.BASE_URL;

  const handleCategoryClick = (categoryName: string) => {
    onCategorySelect(categoryName);
  };

  // Categories for the all categories section
  const allCategories = [
    { name: 'जिल्हा बातम्या', icon: '🏛️', description: 'District News' },
    { name: 'विधानसभा बातम्या', icon: '🗳️', description: 'Constituency News' },
    { name: 'व्हायरल बातम्या', icon: '📱', description: 'Viral News' },
    { name: 'खेळ', icon: '⚽', description: 'Sports News' },
    { name: 'राजकारण', icon: '🏛️', description: 'Political Updates' },
    { name: 'व्यापार', icon: '💼', description: 'Business News' },
    { name: 'तंत्रज्ञान', icon: '💻', description: 'Technology' },
    { name: 'आरोग्य', icon: '🏥', description: 'Health & Medical' },
    { name: 'शिक्षण', icon: '📚', description: 'Education' },
    { name: 'कृषी', icon: '🌾', description: 'Agriculture' },
    { name: 'पर्यावरण', icon: '🌱', description: 'Environment' },
    { name: 'संस्कृती', icon: '🎭', description: 'Culture' },
  ];

  // Trending topics data
  const trendingTopics = [
    { tag: '#TelanganaElections', stories: 17, image: '/api/placeholder/300/200' },
    { tag: '#MaharashtraElections', stories: 12, image: '/api/placeholder/300/200' },
    { tag: '#FarmersProtest', stories: 8, image: '/api/placeholder/300/200' },
  ];

  return (
    <div className="h-full bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100 px-4 py-3 flex-shrink-0">
        <div className="flex items-center justify-between">
          {/* Location Section */}
          <button
            onClick={onLocationClick}
            className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 hover:bg-gray-200 transition-colors focus:outline-none"
          >
            <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <div className="text-left">
              <div className="text-sm font-semibold text-gray-900">{selectedLocation}</div>
              {selectedConstituency && (
                <div className="text-xs text-gray-600">{selectedConstituency}</div>
              )}
            </div>
            <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Profile and Settings */}
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="p-4 space-y-6">
          
          {/* News Section - PhonePe Style */}
          <section className="bg-white rounded-2xl p-4 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">News</h2>
            <div className="flex justify-between gap-4">
              <button className="flex flex-col items-center flex-1 focus:outline-none">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 hover:bg-blue-200 transition-colors">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-900 text-center">Read News</span>
              </button>
              <button className="flex flex-col items-center flex-1 focus:outline-none">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3 hover:bg-green-200 transition-colors">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-900 text-center">Submit News</span>
              </button>
              <button className="flex flex-col items-center flex-1 focus:outline-none">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-3 hover:bg-red-200 transition-colors">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-900 text-center">Non News</span>
              </button>
              <button className="flex flex-col items-center flex-1 focus:outline-none">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-3 hover:bg-purple-200 transition-colors">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-900 text-center">Prajawani</span>
              </button>
            </div>
          </section>

          {/* Categories Grid - PhonePe Style */}
          <section>
            <div className="grid grid-cols-2 gap-4">
              {/* Matrimony */}
              <button className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 focus:outline-none">
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">💑</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Matrimony</h3>
                  <p className="text-sm text-gray-500">Find your life partner</p>
                </div>
              </button>

              {/* Buy & Sell */}
              <button className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 focus:outline-none">
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🛒</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Buy & Sell</h3>
                  <p className="text-sm text-gray-500">Trade with locals</p>
                </div>
              </button>

              {/* Jobs - Spanning full width */}
              <button className="col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 focus:outline-none">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mr-6">
                    <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H6a2 2 0 00-2-2V4m8 0H8m8 0v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6m8 0V4a2 2 0 00-2-2H6a2 2 0 00-2 2v2" />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Jobs</h3>
                    <p className="text-sm text-gray-500">Find opportunities in your area</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                      New
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </section>

          {/* Trending Topics */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Trending Topics</h2>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
              {trendingTopics.map((topic, index) => (
                <div key={index} className="flex-shrink-0 w-64">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                    <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600 relative">
                      <div className="absolute inset-0 bg-black/30"></div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="bg-black/50 rounded-full px-2 py-1 mb-2 w-fit">
                          <span className="text-white text-xs font-medium">{topic.stories} stories</span>
                        </div>
                        <h3 className="text-white font-bold text-lg">{topic.tag}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* All Categories */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-4">All Categories</h2>
            <div className="grid grid-cols-2 gap-4">
              {allCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryClick(category.name)}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:scale-105 transition-all duration-200 active:scale-95 focus:outline-none"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="text-3xl mb-2 p-2 bg-gray-50 rounded-full w-12 h-12 flex items-center justify-center">
                      {category.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">
                      {category.name}
                    </h3>
                    <p className="text-xs text-gray-500 leading-tight">
                      {category.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Bottom padding for navigation */}
          <div className="h-4"></div>
        </div>
      </div>
    </div>
  );
}; 