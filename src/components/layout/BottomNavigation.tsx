import React from 'react';

interface BottomNavigationProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ 
  activeTab = 'home',
  onTabChange 
}) => {
  const baseUrl = import.meta.env.BASE_URL;
  
  const handleTabClick = (tab: string) => {
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  const getButtonClass = (tab: string) => {
    const baseClass = "flex items-center gap-2.5 justify-center h-full flex-1 shrink basis-[0%] px-2.5 py-3 transition-colors focus:outline-none";
    return activeTab === tab 
      ? `${baseClass} opacity-100` 
      : `${baseClass} opacity-70`;
  };
  
  return (
    <nav className="bg-black w-full overflow-hidden">
      <div className="flex w-full items-stretch justify-between px-2">
        <button 
          onClick={() => handleTabClick('home')}
          className={getButtonClass('home')}
        >
          <img src={`${baseUrl}icons/icon-home.svg`} className="aspect-[1] object-contain w-6 self-stretch my-auto" alt="Home" />
        </button>
        <button 
          onClick={() => handleTabClick('explore')}
          className={getButtonClass('explore')}
        >
          <img src={`${baseUrl}icons/icon-search.svg`} className="aspect-[1] object-contain w-6 self-stretch my-auto" alt="Explore" />
        </button>
        <button 
          onClick={() => handleTabClick('subscriptions')}
          className={getButtonClass('subscriptions')}
        >
          <img src={`${baseUrl}icons/icon-subscriptions.svg`} className="aspect-[1] object-contain w-6 self-stretch my-auto" alt="Subscriptions" />
        </button>
        <button 
          onClick={() => handleTabClick('notifications')}
          className={getButtonClass('notifications')}
        >
          <img src={`${baseUrl}icons/icon-notifications.svg`} className="aspect-[1] object-contain w-6 self-stretch my-auto" alt="Notifications" />
        </button>
        <button 
          onClick={() => handleTabClick('work')}
          className={getButtonClass('work')}
        >
          <img src={`${baseUrl}icons/icon-work.svg`} className="aspect-[1] object-contain w-6 self-stretch my-auto" alt="Work" />
        </button>
      </div>
      <div className="flex w-full flex-col items-center justify-center px-[72px] py-2.5">
        <div className="bg-[rgba(93,93,93,1)] flex w-[108px] shrink-0 h-1 rounded-xl" />
      </div>
    </nav>
  );
};
