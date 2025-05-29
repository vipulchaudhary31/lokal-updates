import React from 'react';
import { NewsFeed } from '../components/news/NewsFeed';

interface CategoryPageProps {
  categoryName: string;
  onBack: () => void;
  selectedLocation?: string;
  selectedConstituency?: string;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  categoryName,
  onBack,
  selectedLocation,
  selectedConstituency
}) => {
  return (
    <div className="h-full bg-gray-50 flex flex-col">
      {/* Simple Navigation Bar */}
      <div className="bg-white border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center gap-3 px-4 py-3">
            <button 
              onClick={onBack}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-lg font-semibold text-gray-900">{categoryName}</h1>
          </div>
        </div>

      {/* News Feed */}
      <main className="flex-1 overflow-y-auto">
        <NewsFeed 
          activeCategory="category"
          selectedCategory={categoryName}
          selectedLocation={selectedLocation}
          selectedConstituency={selectedConstituency}
        />
      </main>
    </div>
  );
}; 