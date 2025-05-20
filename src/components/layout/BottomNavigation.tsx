import React from 'react';

export const BottomNavigation = () => {
  return (
    <nav className="bg-black w-full overflow-hidden">
      <div className="flex w-full items-stretch justify-between px-2">
        <button className="flex items-center gap-2.5 justify-center h-full flex-1 shrink basis-[0%] px-2.5 py-3">
          <img src="https://cdn.builder.io/api/v1/image/assets/8af8298d8b2744f5817fa7b6a5be0a71/1b274cd7131a41c528faa41cda40fe7c636b4df4?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6 self-stretch my-auto" alt="Home" />
        </button>
        <button className="flex items-center gap-2.5 justify-center h-full flex-1 shrink basis-[0%] px-2.5 py-3">
          <img src="https://cdn.builder.io/api/v1/image/assets/8af8298d8b2744f5817fa7b6a5be0a71/695aa62a1d90a8d945bb3936992b449b48c2255c?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6 self-stretch my-auto" alt="Search" />
        </button>
        <div className="flex w-[68px] shrink h-12 gap-2.5 flex-1 basis-5 py-3" />
        <div className="flex w-[69px] shrink h-12 gap-2.5 flex-1 basis-5 py-3" />
        <div className="flex w-[69px] shrink h-12 gap-2.5 flex-1 basis-5 py-3" />
      </div>
      <div className="flex w-full flex-col items-center justify-center px-[72px] py-2.5">
        <div className="bg-[rgba(93,93,93,1)] flex w-[108px] shrink-0 h-1 rounded-xl" />
      </div>
    </nav>
  );
};
