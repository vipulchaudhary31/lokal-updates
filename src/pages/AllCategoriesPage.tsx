import React from 'react';

// All categories with their icons
const allCategories = [
  { name: 'खेळ', icon: '⚽', description: 'Sports News' },
  { name: 'राजकारण', icon: '🏛️', description: 'Political Updates' }, 
  { name: 'व्यापार', icon: '💼', description: 'Business News' },
  { name: 'तंत्रज्ञान', icon: '💻', description: 'Technology' },
  { name: 'आरोग्य', icon: '🏥', description: 'Health & Medical' },
  { name: 'शिक्षण', icon: '📚', description: 'Education' },
  { name: 'कृषी', icon: '🌾', description: 'Agriculture' },
  { name: 'पर्यावरण', icon: '🌱', description: 'Environment' },
  { name: 'संस्कृती', icon: '🎭', description: 'Culture' },
  { name: 'धर्म', icon: '🕉️', description: 'Religion' },
  { name: 'विज्ञान', icon: '🔬', description: 'Science' },
  { name: 'कला', icon: '🎨', description: 'Arts' },
  { name: 'संगीत', icon: '🎵', description: 'Music' },
  { name: 'चित्रपट', icon: '🎬', description: 'Movies' },
  { name: 'पुस्तके', icon: '📖', description: 'Books' },
  { name: 'प्रवास', icon: '✈️', description: 'Travel' },
  { name: 'अन्न', icon: '🍽️', description: 'Food' },
  { name: 'फॅशन', icon: '👗', description: 'Fashion' },
  { name: 'गाड्या', icon: '🚗', description: 'Automobiles' },
  { name: 'घर', icon: '🏠', description: 'Real Estate' },
];

interface AllCategoriesPageProps {
  onBack: () => void;
  onCategorySelect: (category: string) => void;
}

export const AllCategoriesPage: React.FC<AllCategoriesPageProps> = ({
  onBack,
  onCategorySelect
}) => {
  const handleCategoryClick = (categoryName: string) => {
    onCategorySelect(categoryName);
  };

  return (
    <div className="h-full bg-gray-50">
      {/* Categories Grid */}
      <div className="h-full overflow-y-auto scrollbar-hide">
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4">
            {allCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category.name)}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:scale-105 transition-all duration-200 active:scale-95"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-3 p-3 bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-tight">
                    {category.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
          
          {/* Bottom padding for scroll */}
          <div className="h-8"></div>
        </div>
      </div>
    </div>
  );
}; 