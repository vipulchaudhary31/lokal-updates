import React, { useState } from 'react';

const districts = [
  { 
    id: 'bengaluru-urban', 
    name: 'बेंगलुरु शहरी',
    constituencies: ['येलहंका', 'हेब्बाल', 'पुलकेशी नगर', 'राजराजेश्वरी नगर']
  },
  { 
    id: 'bengaluru-rural', 
    name: 'बेंगलुरु ग्रामीण',
    constituencies: ['होसकोटे', 'देवनहल्ली', 'दोड्डबल्लापुर', 'नीलमंगल']
  },
  { 
    id: 'mysuru', 
    name: 'मैसूरु',
    constituencies: ['मैसूरु शहर', 'चामराजनगर', 'हरानगल', 'नंजनगूडु']
  },
  { 
    id: 'hubli-dharwad', 
    name: 'हुबली-धारवाड',
    constituencies: ['धारवाड', 'हुबली-धारवाड पूर्व', 'हुबली-धारवाड पश्चिम', 'कलगाची']
  },
];

const recommendedLocations = [
  { district: 'मैसूरु', constituency: 'चामराजनगर' },
  { district: 'बेंगलुरु शहरी', constituency: 'येलहंका' },
  { district: 'हुबली-धारवाड', constituency: 'धारवाड' },
];

interface LocationModalProps {
  open: boolean;
  onClose: () => void;
  onSelect: (location: string, constituency?: string) => void;
  selectedLocation: string;
  selectedConstituency?: string;
}

export const LocationModal: React.FC<LocationModalProps> = ({ 
  open, 
  onClose, 
  onSelect, 
  selectedLocation,
  selectedConstituency 
}) => {
  const [districtSearch, setDistrictSearch] = useState('');
  const [constituencySearch, setConstituencySearch] = useState('');

  React.useEffect(() => {
    if (open) {
      setDistrictSearch('');
      setConstituencySearch('');
    }
  }, [open]);

  if (!open) return null;

  const handleLocationSelect = (district: string, constituency: string) => {
    onSelect(district, constituency);
    onClose();
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md flex flex-col p-0 overflow-hidden animate-slide-in-right max-h-[70vh]">
        {/* Header */}
        <div className="flex flex-col p-4 pb-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">स्थान निवडा</h2>
            <button onClick={onClose} className="p-1">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* District Search Bar */}
          <div className="mb-3">
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 py-2 pl-4 pr-10 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="जिला शोधा"
                value={districtSearch}
                onChange={e => setDistrictSearch(e.target.value)}
              />
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>

          {/* Constituency Search Bar */}
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 py-2 pl-4 pr-10 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="निर्वाचन क्षेत्र शोधा"
                value={constituencySearch}
                onChange={e => setConstituencySearch(e.target.value)}
              />
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>

          {/* Recommended/Saved Locations */}
          <div className="mb-4">
            <div className="text-sm font-semibold mb-3 text-gray-700">शिफारस केलेली ठिकाणे</div>
            <div className="max-h-64 overflow-y-auto scrollbar-hide">
              <ul className="space-y-2">
                {recommendedLocations.map((loc, idx) => (
                  <li key={idx}>
                    <button
                      className="w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-100 flex flex-col items-start border border-gray-200"
                      onClick={() => handleLocationSelect(loc.district, loc.constituency)}
                    >
                      <span className="font-medium text-gray-900">{loc.district}</span>
                      <span className="text-sm text-gray-600">{loc.constituency}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 