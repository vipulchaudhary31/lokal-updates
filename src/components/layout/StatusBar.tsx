
import React from 'react';
import { SignalHigh, WifiHigh, BatteryFull } from 'lucide-react';

export const StatusBar = () => {
  return (
    <div className="flex min-h-[34px] w-full text-sm text-white font-normal whitespace-nowrap tracking-[0.25px] leading-none justify-center">
      <div className="flex min-w-60 min-h-[34px] w-full items-center justify-between flex-1 shrink basis-[0%] px-4">
        <div className="flex items-center justify-start w-32">
          <span className="text-sm">9:30</span>
        </div>
        <div className="flex items-center gap-2 justify-end">
          <SignalHigh className="h-3.5 w-3.5" />
          <WifiHigh className="h-3.5 w-3.5" />
          <BatteryFull className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};
