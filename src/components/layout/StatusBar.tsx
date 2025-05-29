import React from 'react';
import { Signal, Wifi, Battery } from 'lucide-react';

export const StatusBar = () => {
  return (
    <div className="flex min-h-[34px] w-full text-sm text-white font-normal whitespace-nowrap tracking-[0.25px] leading-none justify-center">
      <div className="flex min-w-60 min-h-[34px] w-full items-center justify-between flex-1 shrink basis-[0%] px-8">
        <div className="flex items-center justify-start">
          <span className="text-xs font-medium">9:30</span>
        </div>
        <div className="flex items-center gap-3 justify-end">
          <Signal className="h-3 w-3 text-[#FFFFFF]" strokeWidth={1.5} />
          <Wifi className="h-3 w-3 text-[#FFFFFF]" strokeWidth={1.5} />
          <Battery className="h-3.5 w-3.5" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
};
