import React from 'react';
import { StatusBar } from './StatusBar';
import { CategoryTabs } from './CategoryTabs';
import { BottomNavigation } from './BottomNavigation';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-white max-w-[360px] overflow-hidden">
      <header className="bg-[rgba(25,29,28,1)] w-full">
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
  );
};
