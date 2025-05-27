import React, { useState } from 'react';
import { StatusBar } from './StatusBar';
import { CategoryTabs } from './CategoryTabs';
import { BottomNavigation } from './BottomNavigation';
import { LocationModal } from './LocationModal';
import { CategoriesModal } from './CategoriesModal';
import { LoadingSkeleton } from './LoadingSkeleton';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [categoriesModalOpen, setCategoriesModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>('नागपूर');
  const [selectedConstituency, setSelectedConstituency] = useState<string>('कामठी');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('1'); // Default to first tab
  const [previousActiveCategory, setPreviousActiveCategory] = useState<string>('1'); // Track previous state
  const [isLocationLoading, setIsLocationLoading] = useState(false);

  const handleLocationSelect = (location: string, constituency?: string) => {
    setSelectedLocation(location);
    setSelectedConstituency(constituency || '');
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setActiveCategory('category'); // Set active category to indicate category is selected
    setCategoriesModalOpen(false); // Close the modal when category is selected
  };

  const handleTabChange = (tabId: string) => {
    // Store previous active category before changing (but not for categories modal)
    if (tabId !== 'categories') {
      setPreviousActiveCategory(activeCategory);
    }
    setActiveCategory(tabId);
    // Clear selected category when switching to main tabs (but not when opening categories modal)
    if (selectedCategory && tabId !== 'categories') {
      setSelectedCategory('');
    }
  };

  const handleLoadingChange = (loading: boolean) => {
    setIsLocationLoading(loading);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-black rounded-[40px] p-3 shadow-xl max-w-[390px] mx-auto">
        <div className="bg-white max-w-[360px] overflow-hidden rounded-[32px] relative">
          {/* Loading Skeleton Overlay */}
          {isLocationLoading && <LoadingSkeleton />}
          
          <header className="bg-[rgba(25,29,28,1)] w-full rounded-t-[32px]">
            <StatusBar />
            <CategoryTabs
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              selectedConstituency={selectedConstituency}
              openLocationModal={() => setLocationModalOpen(true)}
              openCategoriesModal={() => setCategoriesModalOpen(true)}
              selectedCategory={selectedCategory}
              activeCategory={activeCategory}
              onTabChange={handleTabChange}
            />
          </header>
          <main>
            {React.Children.map(children, child => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, { 
                  activeCategory, 
                  selectedCategory,
                  selectedLocation,
                  selectedConstituency 
                } as any);
              }
              return child;
            })}
          </main>
          <footer>
            <BottomNavigation />
          </footer>
          <LocationModal
            open={locationModalOpen}
            onClose={() => setLocationModalOpen(false)}
            onSelect={handleLocationSelect}
            selectedLocation={selectedLocation}
            selectedConstituency={selectedConstituency}
            onLoadingChange={handleLoadingChange}
          />
          <CategoriesModal
            open={categoriesModalOpen}
            onClose={() => {
              setCategoriesModalOpen(false);
            }}
            onSelect={handleCategorySelect}
          />
        </div>
      </div>
    </div>
  );
};
