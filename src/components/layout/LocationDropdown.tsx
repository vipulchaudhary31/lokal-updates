import React from 'react';

interface LocationDropdownProps {
  selectedLocation: string;
  onDropdownClick: () => void;
}

export const LocationDropdown: React.FC<LocationDropdownProps> = ({ selectedLocation, onDropdownClick }) => {
  return (
    <div
      className="absolute left-full top-1/2 -translate-y-1/2 ml-2 animate-slide-in-right bg-white text-black rounded-lg shadow px-3 py-1 cursor-pointer z-10"
      onClick={onDropdownClick}
      style={{ minWidth: 90 }}
    >
      <span className="font-medium">{selectedLocation}</span>
      <svg className="inline ml-1 w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}; 