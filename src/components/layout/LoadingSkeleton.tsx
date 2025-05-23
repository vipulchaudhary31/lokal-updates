import React from 'react';

export const LoadingSkeleton: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-40 bg-white flex flex-col">
      {/* Status Bar Skeleton */}
      <div className="bg-gray-200 h-11 w-full animate-pulse" />
      
      {/* Header Skeleton */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="h-6 bg-gray-200 rounded w-24 animate-pulse" />
          <div className="h-8 bg-gray-200 rounded-full w-8 animate-pulse" />
        </div>
      </div>

      {/* Category Tabs Skeleton */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="h-8 bg-gray-200 rounded w-10 animate-pulse" />
          <div className="flex gap-2 overflow-hidden">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="h-8 bg-gray-200 rounded w-20 animate-pulse flex-shrink-0" />
            ))}
          </div>
        </div>
      </div>

      {/* News Feed Skeleton */}
      <div className="flex-1 p-4 space-y-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="border border-gray-200 rounded-lg p-4 animate-pulse">
            {/* Image Skeleton */}
            <div className="h-48 bg-gray-200 rounded-lg mb-3" />
            
            {/* Title Skeleton */}
            <div className="space-y-2 mb-3">
              <div className="h-5 bg-gray-200 rounded w-full" />
              <div className="h-5 bg-gray-200 rounded w-3/4" />
            </div>
            
            {/* Content Skeleton */}
            <div className="space-y-2 mb-3">
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-2/3" />
            </div>
            
            {/* Author and Time Skeleton */}
            <div className="flex items-center gap-2">
              <div className="h-4 bg-gray-200 rounded w-16" />
              <div className="h-4 bg-gray-200 rounded w-12" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation Skeleton */}
      <div className="border-t border-gray-200 p-2">
        <div className="flex justify-around">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="h-12 bg-gray-200 rounded w-12 animate-pulse" />
          ))}
        </div>
      </div>

      {/* Loading overlay with text */}
      <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
          <div className="text-gray-600 font-medium">स्थान अपडेट हो रहा है...</div>
        </div>
      </div>
    </div>
  );
}; 