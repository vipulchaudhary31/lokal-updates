import React from 'react';

const categories = [
  { id: 1, name: 'माझी बातमी' },
  { id: 2, name: 'कर्नाटक' }, // Karnataka
  { id: 3, name: 'राष्ट्रीय' }, // National
  { id: 4, name: 'व्हिडिओ' },
  { id: 5, name: 'मनोरंजन' },
  { id: 6, name: 'जीवनशैली' },
];

interface CategoryTabsProps {
  selectedLocation: string;
  setSelectedLocation: (loc: string) => void;
  openLocationModal: () => void;
  selectedConstituency?: string;
  openCategoriesModal: () => void;
  selectedCategory?: string;
  activeCategory: string;
  onTabChange: (tabId: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ 
  selectedLocation, 
  setSelectedLocation, 
  openLocationModal,
  selectedConstituency,
  openCategoriesModal,
  selectedCategory,
  activeCategory,
  onTabChange
}) => {
  const handleTabClick = (id: number | string) => {
    onTabChange(id.toString());
  };

  return (
    <div className="flex w-full items-center">
      {/* Location Dropdown Button */}
      <button 
        onClick={openLocationModal}
        className="flex items-center gap-2 px-3 py-2 mr-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
      >
        <img src="/icons/icon-location.svg" alt="Location" className="w-4 h-4" />
        <div className="flex flex-col items-start">
          <span className="text-white text-xs font-medium leading-none">
            {selectedLocation || 'बेंगलुरु'}
          </span>
          {selectedConstituency && (
            <span className="text-white/60 text-xs leading-none">
              {selectedConstituency}
            </span>
          )}
        </div>
        <img src="/icons/icon-dropdown.svg" alt="Dropdown" className="w-3 h-3" />
      </button>

      {/* Category Tabs */}
      <nav className="overflow-x-auto scrollbar-hide flex min-h-12 w-full items-center gap-3 py-1.5 relative">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`self-stretch min-h-9 text-sm text-white font-${activeCategory === category.id.toString() ? 'semibold' : 'normal'} whitespace-nowrap text-center leading-none my-auto pt-0.5 px-2 rounded-[61px]`}
            onClick={() => handleTabClick(category.id)}
          >
            {category.name}
          </button>
        ))}
        <button 
          className="self-stretch flex min-h-9 items-center gap-1 justify-center my-auto pt-0.5 px-2 rounded-[61px]"
          onClick={openCategoriesModal}
        >
          <span className="text-white text-sm font-normal leading-none text-center self-stretch my-auto">
            {selectedCategory || 'सर्व श्रेणी'}
          </span>
          <div className="self-stretch flex items-center justify-center w-3 my-auto">
            <img src="/icons/icon-dropdown.svg" alt="Dropdown" className="w-3 h-3" />
          </div>
        </button>
      </nav>
    </div>
  );
};
