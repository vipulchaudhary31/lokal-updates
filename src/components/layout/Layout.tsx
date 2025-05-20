
import React from 'react';
import { StatusBar } from './StatusBar';
import { CategoryTabs } from './CategoryTabs';
import { BottomNavigation } from './BottomNavigation';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-black rounded-[40px] p-3 shadow-xl max-w-[390px] mx-auto">
        <div className="bg-white max-w-[360px] overflow-hidden rounded-[32px]">
          <header className="bg-[rgba(25,29,28,1)] w-full rounded-t-[32px]">
            <StatusBar />
            <CategoryTabs />
          </header>
          <main>
            {children}
          </main>
          <footer>
            <BottomNavigation />
          </footer>
        </div>
      </div>
    </div>
  );
};
