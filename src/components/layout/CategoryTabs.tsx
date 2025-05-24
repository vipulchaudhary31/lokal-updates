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
  openCategoriesModal: () => void;
  selectedCategory: string;
  activeCategory: string;
  onTabChange: (id: string) => void;
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
  const baseUrl = import.meta.env.BASE_URL;
  
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
        <img src={`${baseUrl}icons/icon-location.svg`} alt="Location" className="w-4 h-4" />
        <img src={`${baseUrl}icons/icon-dropdown.svg`} alt="Dropdown" className="w-3 h-3" />
      </button>

      {/* Category Tabs */}
      <nav className="overflow-x-auto scrollbar-hide flex min-h-12 w-full items-center gap-3 py-1.5 relative">
        {/* First category: माझी बातमी */}
        <button
          key={categories[0].id}
          className={`self-stretch min-h-9 text-sm text-white font-${activeCategory === categories[0].id.toString() ? 'semibold' : 'normal'} whitespace-nowrap text-center leading-none my-auto pt-0.5 px-2 rounded-[61px]`}
          onClick={() => handleTabClick(categories[0].id)}
        >
          {categories[0].name}
        </button>

        {/* District Category - Only show if location is selected */}
        {selectedLocation && selectedLocation !== 'बेंगलुरु' && (
          <button
            key="district"
            className={`self-stretch min-h-9 text-sm text-white font-${activeCategory === 'district' ? 'semibold' : 'normal'} whitespace-nowrap text-center leading-none my-auto pt-0.5 px-2 rounded-[61px]`}
            onClick={() => handleTabClick('district')}
          >
            {selectedLocation}
          </button>
        )}

        {/* Constituency Category - Only show if constituency is selected */}
        {selectedConstituency && (
          <button
            key="constituency"
            className={`self-stretch min-h-9 text-sm text-white font-${activeCategory === 'constituency' ? 'semibold' : 'normal'} whitespace-nowrap text-center leading-none my-auto pt-0.5 px-2 rounded-[61px]`}
            onClick={() => handleTabClick('constituency')}
          >
            {selectedConstituency}
          </button>
        )}

        {/* Rest of the categories (starting from index 1) */}
        {categories.slice(1).map((category) => (
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
            <img src={`${baseUrl}icons/icon-dropdown.svg`} alt="Dropdown" className="w-3 h-3" />
          </div>
        </button>
      </nav>
    </div>
  );
};
