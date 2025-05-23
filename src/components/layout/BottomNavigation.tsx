import React from 'react';

export const BottomNavigation = () => {
  const baseUrl = import.meta.env.BASE_URL;
  
  return (
    <nav className="bg-black w-full overflow-hidden">
      <div className="flex w-full items-stretch justify-between px-2">
        <button className="flex items-center gap-2.5 justify-center h-full flex-1 shrink basis-[0%] px-2.5 py-3">
          <img src={`${baseUrl}icons/icon-home.svg`} className="aspect-[1] object-contain w-6 self-stretch my-auto" alt="Home" />
        </button>
        <button className="flex items-center gap-2.5 justify-center h-full flex-1 shrink basis-[0%] px-2.5 py-3">
          <img src={`${baseUrl}icons/icon-search.svg`} className="aspect-[1] object-contain w-6 self-stretch my-auto" alt="Search" />
        </button>
        <button className="flex items-center gap-2.5 justify-center h-full flex-1 shrink basis-[0%] px-2.5 py-3">
          <img src={`${baseUrl}icons/icon-subscriptions.svg`} className="aspect-[1] object-contain w-6 self-stretch my-auto" alt="Subscriptions" />
        </button>
        <button className="flex items-center gap-2.5 justify-center h-full flex-1 shrink basis-[0%] px-2.5 py-3">
          <img src={`${baseUrl}icons/icon-notifications.svg`} className="aspect-[1] object-contain w-6 self-stretch my-auto" alt="Notifications" />
        </button>
        <button className="flex items-center gap-2.5 justify-center h-full flex-1 shrink basis-[0%] px-2.5 py-3">
          <img src={`${baseUrl}icons/icon-work.svg`} className="aspect-[1] object-contain w-6 self-stretch my-auto" alt="Work" />
        </button>
      </div>
      <div className="flex w-full flex-col items-center justify-center px-[72px] py-2.5">
        <div className="bg-[rgba(93,93,93,1)] flex w-[108px] shrink-0 h-1 rounded-xl" />
      </div>
    </nav>
  );
};
