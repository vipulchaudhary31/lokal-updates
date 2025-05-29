import React, { useState } from 'react';
import { StatusBar } from './StatusBar';
import { CategoryTabs } from './CategoryTabs';
import { BottomNavigation } from './BottomNavigation';
import { LocationModal } from './LocationModal';
import { LoadingSkeleton } from './LoadingSkeleton';
import { CategoryPage } from '../../pages/CategoryPage';
import { AllCategoriesPage } from '../../pages/AllCategoriesPage';
import { ExplorePage } from '../../pages/ExplorePage';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>('नागपूर');
  const [selectedConstituency, setSelectedConstituency] = useState<string>('कामठी');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('1'); // Default to first tab
  const [previousActiveCategory, setPreviousActiveCategory] = useState<string>('1'); // Track previous state
  const [isLocationLoading, setIsLocationLoading] = useState(false);
  
  // New state for navigation
  const [currentView, setCurrentView] = useState<'home' | 'category' | 'allCategories' | 'explore'>('home');
  const [selectedCategoryFromAllCategories, setSelectedCategoryFromAllCategories] = useState<string>('');
  const [activeBottomTab, setActiveBottomTab] = useState<string>('home');

  const handleLocationSelect = (location: string, constituency?: string) => {
    setSelectedLocation(location);
    setSelectedConstituency(constituency || '');
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentView('category');
  };

  const handleTabChange = (tabId: string) => {
    // Store previous active category before changing
      setPreviousActiveCategory(activeCategory);
    setActiveCategory(tabId);
    
    // Handle different tab changes
    if (tabId === 'allCategories') {
      setCurrentView('allCategories');
    } else {
      // Clear selected category when switching to main tabs
      if (selectedCategory) {
        setSelectedCategory('');
      }
      setCurrentView('home');
    }
  };

  const handleBottomTabChange = (tab: string) => {
    setActiveBottomTab(tab);
    
    if (tab === 'home') {
      setCurrentView('home');
      // Reset category selection when going back to home
      setSelectedCategory('');
      setSelectedCategoryFromAllCategories('');
    } else if (tab === 'explore') {
      setCurrentView('explore');
    }
    // Add other tab handlers as needed
  };

  const handleLoadingChange = (loading: boolean) => {
    setIsLocationLoading(loading);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setActiveCategory(previousActiveCategory); // Restore previous active category
    setSelectedCategory('');
    setSelectedCategoryFromAllCategories('');
    setActiveBottomTab('home');
  };

  const handleCategoryFromAllCategories = (category: string) => {
    setSelectedCategoryFromAllCategories(category);
    setSelectedCategory(category);
    setCurrentView('category');
  };

  // Render different views based on current state
  const renderContent = () => {
    if (currentView === 'explore') {
      return (
        <ExplorePage
          selectedLocation={selectedLocation}
          selectedConstituency={selectedConstituency}
          onLocationClick={() => setLocationModalOpen(true)}
          onCategorySelect={handleCategorySelect}
        />
      );
    }
    
    if (currentView === 'allCategories') {
      return (
        <AllCategoriesPage
          onBack={handleBackToHome}
          onCategorySelect={handleCategoryFromAllCategories}
        />
      );
    }
    
    if (currentView === 'category' && selectedCategory) {
    return (
            <CategoryPage 
          categoryName={selectedCategory}
              onBack={handleBackToHome}
              selectedLocation={selectedLocation}
              selectedConstituency={selectedConstituency}
            />
      );
    }
    
    // Default home view
    return React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { 
          activeCategory, 
          selectedCategory,
          selectedLocation,
          selectedConstituency 
        } as any);
  }
      return child;
    });
  };

  // Check if we should show the header (hide only when viewing a specific category page or explore page)
  const showHeader = currentView !== 'category' && currentView !== 'explore';

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white p-4">
      <div className="bg-black rounded-[40px] p-3 shadow-xl max-w-[390px] mx-auto">
        <div className="bg-white max-w-[360px] h-[780px] overflow-hidden rounded-[32px] relative">
          {/* Loading Skeleton Overlay */}
          {isLocationLoading && <LoadingSkeleton />}
          
          {/* Header - Hide only when viewing a specific category page or explore page */}
          {showHeader && (
          <header className="bg-[rgba(25,29,28,1)] w-full rounded-t-[32px]">
            <StatusBar />
            <CategoryTabs
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              selectedConstituency={selectedConstituency}
              openLocationModal={() => setLocationModalOpen(true)}
              selectedCategory={selectedCategory}
              activeCategory={activeCategory}
              onTabChange={handleTabChange}
            />
          </header>
          )}
          <main className={showHeader ? '' : 'h-full pb-20'}>
            {renderContent()}
          </main>
          <footer className="absolute bottom-0 left-0 right-0">
            <BottomNavigation 
              activeTab={activeBottomTab}
              onTabChange={handleBottomTabChange}
            />
          </footer>
          
          <LocationModal
            open={locationModalOpen}
            onClose={() => setLocationModalOpen(false)}
            onSelect={handleLocationSelect}
            selectedLocation={selectedLocation}
            selectedConstituency={selectedConstituency}
            onLoadingChange={handleLoadingChange}
          />
        </div>
      </div>
    </div>
  );
};
