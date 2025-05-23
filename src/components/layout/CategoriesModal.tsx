import React, { useState } from 'react';

const allCategories = [
  'खेळ',
  'राजकारण', 
  'व्यापार',
  'तंत्रज्ञान',
  'आरोग्य',
  'शिक्षण',
  'कृषी',
  'पर्यावरण',
  'संस्कृती',
  'धर्म',
  'विज्ञान',
  'कला',
  'संगीत',
  'चित्रपट',
  'पुस्तके'
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
    category.toLowerCase().includes(search.toLowerCase())
  );

  const handleCategorySelect = (category: string) => {
    onSelect(category);
    onClose();
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md flex flex-col p-0 overflow-hidden animate-slide-in-right max-h-[70vh]">
        {/* Header */}
        <div className="flex flex-col p-4 pb-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">श्रेणी निवडा</h2>
            <button onClick={onClose} className="p-1">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 py-2 pl-4 pr-10 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="श्रेणी शोधा"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>

          {/* Categories List */}
          <div className="mb-4">
            <div className="text-sm font-semibold mb-3 text-gray-700">सर्व श्रेणी</div>
            <div className="max-h-64 overflow-y-auto scrollbar-hide">
              <ul className="space-y-2">
                {filteredCategories.map((category, idx) => (
                  <li key={idx}>
                    <button
                      className="w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-100 border border-gray-200"
                      onClick={() => handleCategorySelect(category)}
                    >
                      <span className="font-medium text-gray-900">{category}</span>
                    </button>
                  </li>
                ))}
                {filteredCategories.length === 0 && (
                  <li className="text-gray-400 px-4 py-2">श्रेणी सापडली नाही</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 