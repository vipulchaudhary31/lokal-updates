import React, { useState } from 'react';

// Categories with appropriate icons
const allCategories = [
  { name: 'खेळ', icon: '⚽' },
  { name: 'राजकारण', icon: '🏛️' }, 
  { name: 'व्यापार', icon: '💼' },
  { name: 'तंत्रज्ञान', icon: '💻' },
  { name: 'आरोग्य', icon: '🏥' },
  { name: 'शिक्षण', icon: '📚' },
  { name: 'कृषी', icon: '🌾' },
  { name: 'पर्यावरण', icon: '🌱' },
  { name: 'संस्कृती', icon: '🎭' },
  { name: 'धर्म', icon: '🕉️' },
  { name: 'विज्ञान', icon: '🔬' },
  { name: 'कला', icon: '🎨' },
  { name: 'संगीत', icon: '🎵' },
  { name: 'चित्रपट', icon: '🎬' },
  { name: 'पुस्तके', icon: '📖' }
];

interface CategoriesModalProps {
  open: boolean;
  onClose: () => void;
  onSelect: (category: string) => void;
}

export const CategoriesModal: React.FC<CategoriesModalProps> = ({ 
  open, 
  onClose, 
  onSelect
}) => {
  const [search, setSearch] = useState('');

  React.useEffect(() => {
    if (open) {
      setSearch('');
    }
  }, [open]);

  if (!open) return null;

  const filteredCategories = allCategories.filter(category =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCategorySelect = (category: string) => {
    onSelect(category);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full z-50 flex items-end justify-center bg-black/40">
      <div className="bg-white rounded-t-2xl shadow-xl w-full flex flex-col overflow-hidden animate-slide-in-bottom h-[80vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-white border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">श्रेणी निवडा</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide">
          
          {/* Search Input */}
          <div className="px-4 py-6">
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-xl border-2 border-gray-200 py-4 pl-12 pr-4 text-base focus:outline-none focus:ring-0 focus:border-blue-300 bg-white hover:border-gray-300 transition-all"
                placeholder="श्रेणी शोधा..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
            </div>
          </div>

          {/* Categories List */}
          <div className="px-4 pb-4">
            {filteredCategories.length > 0 ? (
              <div className="space-y-2">
                {filteredCategories.map((category, idx) => (
                  <button
                    key={idx}
                    className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                    onClick={() => handleCategorySelect(category.name)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{category.icon}</div>
                      <span className="font-medium text-gray-900">{category.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <div className="text-gray-500 font-medium">कोई परिणाम नहीं मिला</div>
                <div className="text-sm text-gray-400 mt-1">कुछ और खोजने का प्रयास करें</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}; 