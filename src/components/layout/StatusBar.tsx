import React from 'react';

export const StatusBar = () => {
  return (
    <div className="flex min-h-[34px] w-full text-sm text-white font-normal whitespace-nowrap tracking-[0.25px] leading-none justify-center">
      <div className="flex min-w-60 min-h-[34px] w-full items-stretch justify-between flex-1 shrink basis-[0%] px-4">
        <div className="self-stretch w-32 gap-2 h-full">
          9:30
        </div>
      </div>
    </div>
  );
};
