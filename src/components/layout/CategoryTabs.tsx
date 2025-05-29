import React from 'react';

const categories = [
  { id: 1, name: 'माझी बातमी' },
  { id: 2, name: 'महाराष्ट्र' }, // Karnataka
  { id: 3, name: 'राष्ट्रीय' }, // National
  { id: 4, name: 'व्हिडिओ' },
  { id: 5, name: 'मनोरंजन' },
  { id: 6, name: 'जीवनशैली' },
];

interface CategoryTabsProps {
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
  openLocationModal: () => void;
  selectedConstituency: string;
  selectedCategory: string;
  activeCategory: string;
  onTabChange: (id: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ 
  selectedLocation, 
  setSelectedLocation, 
  openLocationModal,
  selectedConstituency,
  selectedCategory,
  activeCategory,
  onTabChange
}) => {
  const baseUrl = import.meta.env.BASE_URL;
  
  const handleTabClick = (id: number | string) => {
    onTabChange(id.toString());
  };

  const handleAllCategoriesClick = () => {
    // Navigate to all categories page instead of opening modal
    onTabChange('allCategories');
  };

  return (
    <div className="flex w-full items-center">
      {/* Location Dropdown Button */}
      <button 
        onClick={openLocationModal}
        className="flex items-center gap-1 px-3 py-1.5 mr-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200"
      >
        <img src={`${baseUrl}icons/icon-location.svg`} alt="Location" className="w-4 h-4" />
        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Category Tabs */}
      <nav className="overflow-x-auto scrollbar-hide flex min-h-12 w-full items-center gap-3 py-1.5 relative">
        {/* First category: माझी बातमी */}
        <button
          key={categories[0].id}
          className={`self-stretch min-h-9 text-sm text-white ${activeCategory === categories[0].id.toString() ? 'font-semibold' : 'font-normal'} whitespace-nowrap text-center leading-none my-auto pt-0.5 px-2 rounded-[61px]`}
          onClick={() => handleTabClick(categories[0].id)}
        >
          {categories[0].name}
        </button>

        {/* District Category - Only show if location is selected and not default */}
        {selectedLocation && selectedLocation !== 'बेंगलुरु' && selectedLocation !== '' && (
          <button
            key="district"
            className={`self-stretch min-h-9 text-sm text-white ${activeCategory === 'district' ? 'font-semibold' : 'font-normal'} whitespace-nowrap text-center leading-none my-auto pt-0.5 px-2 rounded-[61px]`}
            onClick={() => handleTabClick('district')}
          >
            {selectedLocation}
          </button>
        )}

        {/* Constituency Category - Only show if constituency is actually selected and not empty */}
        {selectedConstituency && selectedConstituency !== '' && (
          <button
            key="constituency"
            className={`self-stretch min-h-9 text-sm text-white ${activeCategory === 'constituency' ? 'font-semibold' : 'font-normal'} whitespace-nowrap text-center leading-none my-auto pt-0.5 px-2 rounded-[61px]`}
            onClick={() => handleTabClick('constituency')}
          >
            {selectedConstituency}
          </button>
        )}

        {/* Rest of the categories (starting from index 1) */}
        {categories.slice(1).map((category) => (
          <button
            key={category.id}
            className={`self-stretch min-h-9 text-sm text-white ${activeCategory === category.id.toString() ? 'font-semibold' : 'font-normal'} whitespace-nowrap text-center leading-none my-auto pt-0.5 px-2 rounded-[61px]`}
            onClick={() => handleTabClick(category.id)}
          >
            {category.name}
          </button>
        ))}

        {/* All Categories Button - Simple button without dropdown */}
        <button 
          className={`self-stretch min-h-9 text-sm text-white ${activeCategory === 'allCategories' ? 'font-semibold' : 'font-normal'} whitespace-nowrap text-center leading-none my-auto pt-0.5 px-2 rounded-[61px]`}
          onClick={handleAllCategoriesClick}
        >
          सर्व श्रेणी
        </button>
      </nav>
    </div>
  );
};
