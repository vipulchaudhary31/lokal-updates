import React, { useState, useEffect } from 'react';

// Maharashtra districts with their constituencies
const maharashtraDistricts = [
  { 
    id: 'mumbai-city', 
    name: 'मुंबई शहर',
    englishName: 'mumbai city',
    constituencies: ['मुंबई दक्षिण', 'मुंबई उत्तर', 'मुंबई पूर्व', 'मुंबई पश्चिम', 'मुंबई मध्य', 'मुंबई उत्तर पूर्व'],
    constituenciesEnglish: ['mumbai south', 'mumbai north', 'mumbai east', 'mumbai west', 'mumbai central', 'mumbai north east']
  },
  { 
    id: 'mumbai-suburban', 
    name: 'मुंबई उपनगर',
    englishName: 'mumbai suburban',
    constituencies: ['अंधेरी पूर्व', 'अंधेरी पश्चिम', 'बांद्रा पूर्व', 'बांद्रा पश्चिम', 'बोरीवली', 'मलाड पश्चिम'],
    constituenciesEnglish: ['andheri east', 'andheri west', 'bandra east', 'bandra west', 'borivali', 'malad west']
  },
  { 
    id: 'pune', 
    name: 'पुणे',
    englishName: 'pune',
    constituencies: ['पुणे शहर', 'हडपसर', 'खडकी', 'शिवाजीनगर', 'कस्बा पेठ', 'पर्वती'],
    constituenciesEnglish: ['pune city', 'hadapsar', 'khadki', 'shivajinagar', 'kasba peth', 'parvati']
  },
  { 
    id: 'nagpur', 
    name: 'नागपूर',
    englishName: 'nagpur',
    constituencies: ['नागपूर पूर्व', 'नागपूर पश्चिम', 'नागपूर मध्य', 'नागपूर उत्तर', 'नागपूर दक्षिण', 'कामठी'],
    constituenciesEnglish: ['nagpur east', 'nagpur west', 'nagpur central', 'nagpur north', 'nagpur south', 'kamthi']
  },
  { 
    id: 'nashik', 
    name: 'नाशिक',
    englishName: 'nashik',
    constituencies: ['नाशिक पूर्व', 'नाशिक पश्चिम', 'देवलाली', 'इगतपुरी', 'बागलान', 'मालेगांव'],
    constituenciesEnglish: ['nashik east', 'nashik west', 'deolali', 'igatpuri', 'baglan', 'malegaon']
  },
  { 
    id: 'aurangabad', 
    name: 'औरंगाबाद',
    englishName: 'aurangabad',
    constituencies: ['औरंगाबाद पूर्व', 'औरंगाबाद पश्चिम', 'औरंगाबाद मध्य', 'कन्नड', 'फुलंब्री', 'गंगापुर'],
    constituenciesEnglish: ['aurangabad east', 'aurangabad west', 'aurangabad central', 'kannad', 'phulambri', 'gangapur']
  },
  { 
    id: 'thane', 
    name: 'ठाणे',
    englishName: 'thane',
    constituencies: ['ठाणे शहर', 'कोपरी-पछपाखाडी', 'ओवला-माजिवडा', 'मुंब्रा-कल्वा', 'भिवंडी पूर्व', 'भिवंडी पश्चिम'],
    constituenciesEnglish: ['thane city', 'kopri-pachpakhadi', 'owla-majiwada', 'mumbra-kalwa', 'bhiwandi east', 'bhiwandi west']
  },
  { 
    id: 'solapur', 
    name: 'सोलापूर',
    englishName: 'solapur',
    constituencies: ['सोलापूर शहर पूर्व', 'सोलापूर शहर पश्चिम', 'सोलापूर शहर मध्य', 'सोलापूर उत्तर', 'सोलापूर दक्षिण', 'अक्कलकोट'],
    constituenciesEnglish: ['solapur city east', 'solapur city west', 'solapur city central', 'solapur north', 'solapur south', 'akkalkot']
  },
  { 
    id: 'kolhapur', 
    name: 'कोल्हापूर',
    englishName: 'kolhapur',
    constituencies: ['कोल्हापूर उत्तर', 'कोल्हापूर दक्षिण', 'राधानगरी', 'कागल', 'हतकणंगले', 'शिरोळ'],
    constituenciesEnglish: ['kolhapur north', 'kolhapur south', 'radhanagari', 'kagal', 'hatkanangle', 'shirol']
  },
  { 
    id: 'ahmednagar', 
    name: 'अहमदनगर',
    englishName: 'ahmednagar',
    constituencies: ['अहमदनगर शहर', 'अहमदनगर पूर्व', 'अहमदनगर पश्चिम', 'कोपरगांव', 'श्रीगोंदा', 'कर्जत'],
    constituenciesEnglish: ['ahmednagar city', 'ahmednagar east', 'ahmednagar west', 'kopargaon', 'shrigonda', 'karjat']
  },
  { 
    id: 'sangli', 
    name: 'सांगली',
    englishName: 'sangli',
    constituencies: ['सांगली', 'मिरज', 'कावठेमहांकाळ', 'पलूस-कडेगांव', 'खानापूर', 'आटपाडी'],
    constituenciesEnglish: ['sangli', 'miraj', 'kavthemahankal', 'palus-kadegaon', 'khanapur', 'atpadi']
  },
  { 
    id: 'satara', 
    name: 'सातारा',
    englishName: 'satara',
    constituencies: ['सातारा', 'कराड उत्तर', 'कराड दक्षिण', 'पाटण', 'कोरेगांव', 'मान'],
    constituenciesEnglish: ['satara', 'karad north', 'karad south', 'patan', 'koregaon', 'man']
  },
  { 
    id: 'jalgaon', 
    name: 'जळगांव',
    englishName: 'jalgaon',
    constituencies: ['जळगांव शहर', 'जळगांव ग्रामीण', 'अमळनेर', 'एरंडोल', 'चोपडा', 'पाचोरा'],
    constituenciesEnglish: ['jalgaon city', 'jalgaon rural', 'amalner', 'erandol', 'chopda', 'pachora']
  },
  { 
    id: 'akola', 
    name: 'अकोला',
    englishName: 'akola',
    constituencies: ['अकोला पूर्व', 'अकोला पश्चिम', 'मुर्तिजापूर', 'अकोट', 'बालापूर', 'तेल्हारा'],
    constituenciesEnglish: ['akola east', 'akola west', 'murtizapur', 'akot', 'balapur', 'telhara']
  },
  { 
    id: 'latur', 
    name: 'लातूर',
    englishName: 'latur',
    constituencies: ['लातूर शहर', 'लातूर ग्रामीण', 'अहमदपूर', 'उदगीर', 'निलंगा', 'देवणी'],
    constituenciesEnglish: ['latur city', 'latur rural', 'ahmadpur', 'udgir', 'nilanga', 'devani']
  },
  { 
    id: 'dhule', 
    name: 'धुळे',
    englishName: 'dhule',
    constituencies: ['धुळे शहर', 'धुळे ग्रामीण', 'सिंदखेड राजा', 'शिरपूर', 'साक्री', 'अक्कलकुवा'],
    constituenciesEnglish: ['dhule city', 'dhule rural', 'sindkhed raja', 'shirpur', 'sakri', 'akkalkuwa']
  },
  { 
    id: 'nanded', 
    name: 'नांदेड',
    englishName: 'nanded',
    constituencies: ['नांदेड उत्तर', 'नांदेड दक्षिण', 'लोहा', 'नायगांव', 'देगलूर', 'बिलोली'],
    constituenciesEnglish: ['nanded north', 'nanded south', 'loha', 'naigaon', 'deglur', 'biloli']
  },
  { 
    id: 'jalna', 
    name: 'जालना',
    englishName: 'jalna',
    constituencies: ['जालना', 'बदनापूर', 'भोकरदन', 'परतुर', 'घनसावंगी', 'जाफ्राबाद'],
    constituenciesEnglish: ['jalna', 'badnapur', 'bhokardan', 'partur', 'ghansawangi', 'jafrabad']
  },
  { 
    id: 'osmanabad', 
    name: 'उस्मानाबाद',
    englishName: 'osmanabad',
    constituencies: ['उस्मानाबाद', 'तुळजापूर', 'परांडा', 'भूम', 'कलमनुरी', 'वाशी'],
    constituenciesEnglish: ['osmanabad', 'tuljapur', 'paranda', 'bhum', 'kalamnuri', 'vashi']
  },
  { 
    id: 'beed', 
    name: 'बीड',
    englishName: 'beed',
    constituencies: ['बीड', 'मजलगांव', 'परली', 'आष्टी', 'केज', 'गेवराई'],
    constituenciesEnglish: ['beed', 'majalgaon', 'parli', 'ashti', 'kej', 'gevrai']
  }
];

// Get recent searches from localStorage
const getRecentSearches = (): {district: string, constituency: string}[] => {
  try {
    const recent = localStorage.getItem('recentLocationSearches');
    return recent ? JSON.parse(recent) : [];
  } catch {
    return [];
  }
};

// Save to recent searches
const saveToRecentSearches = (district: string, constituency: string) => {
  try {
    const recent = getRecentSearches();
    const newSearch = { district, constituency };
    
    // Remove if already exists
    const filtered = recent.filter(item => 
      !(item.district === district && item.constituency === constituency)
    );
    
    // Add to beginning and limit to 5
    const updated = [newSearch, ...filtered].slice(0, 5);
    localStorage.setItem('recentLocationSearches', JSON.stringify(updated));
  } catch {
    // Ignore localStorage errors
  }
};

interface LocationModalProps {
  open: boolean;
  onClose: () => void;
  onSelect: (location: string, constituency?: string) => void;
  selectedLocation: string;
  selectedConstituency?: string;
  onLoadingChange?: (loading: boolean) => void;
}

export const LocationModal: React.FC<LocationModalProps> = ({ 
  open, 
  onClose, 
  onSelect, 
  selectedLocation,
  selectedConstituency,
  onLoadingChange 
}) => {
  const [search, setSearch] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState<typeof maharashtraDistricts[0] | null>(null);
  const [showConstituencies, setShowConstituencies] = useState(false);
  const [recentSearches, setRecentSearches] = useState<{district: string, constituency: string}[]>([]);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [locationError, setLocationError] = useState('');

  useEffect(() => {
    if (open) {
      setSearch('');
      setSelectedDistrict(null);
      setShowConstituencies(false);
      setLocationError('');
      setRecentSearches(getRecentSearches());
    }
  }, [open]);

  if (!open) return null;

  const handleDistrictSelect = (district: typeof maharashtraDistricts[0]) => {
    setSelectedDistrict(district);
    setShowConstituencies(true);
    setSearch('');
  };

  const handleConstituencySelect = (constituency: string) => {
    if (selectedDistrict) {
      // Close modal immediately
      onClose();
      
      // Start loading after modal closes
      setTimeout(() => {
        onLoadingChange?.(true);
        saveToRecentSearches(selectedDistrict.name, constituency);
        
        // Simulate loading delay
        setTimeout(() => {
          onSelect(selectedDistrict.name, constituency);
          onLoadingChange?.(false);
        }, 1500);
      }, 100);
    }
  };

  const handleRecentSelect = (recent: {district: string, constituency: string}) => {
    // Close modal immediately
    onClose();
    
    // Start loading after modal closes
    setTimeout(() => {
      onLoadingChange?.(true);
      saveToRecentSearches(recent.district, recent.constituency);
      
      // Simulate loading delay
      setTimeout(() => {
        onSelect(recent.district, recent.constituency);
        onLoadingChange?.(false);
      }, 1500);
    }, 100);
  };

  const handleCurrentLocation = async () => {
    setIsLoadingLocation(true);
    setLocationError('');

    try {
      // Keep showing the location chip loader for 1 second before closing modal
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Close modal
      onClose();
      
      // Start loading after modal closes
      setTimeout(() => {
        onLoadingChange?.(true);

        // Hardcoded to Nashik district and Malegaon constituency
        const nashikDistrict = maharashtraDistricts.find(d => d.id === 'nashik');
        if (!nashikDistrict) {
          throw new Error('District not found');
        }
        
        saveToRecentSearches(nashikDistrict.name, 'मालेगांव');
        
        // Simulate loading delay
        setTimeout(() => {
          onSelect(nashikDistrict.name, 'मालेगांव');
          onLoadingChange?.(false);
        }, 1500);
      }, 100);
      
    } catch (error) {
      setLocationError('स्थान प्राप्त करने में असमर्थ। कृपया मैन्युअल रूप से चुनें।');
    } finally {
      setIsLoadingLocation(false);
    }
  };

  const handleBack = () => {
    setShowConstituencies(false);
    setSelectedDistrict(null);
    setSearch('');
  };

  // Enhanced search with English to Marathi translation
  const searchWithTranslation = (searchTerm: string, items: string[], englishItems?: string[]) => {
    const lowerSearch = searchTerm.toLowerCase();
    return items.filter((item, index) => {
      const marathiMatch = item.toLowerCase().includes(lowerSearch);
      const englishMatch = englishItems && englishItems[index] && 
                          englishItems[index].toLowerCase().includes(lowerSearch);
      return marathiMatch || englishMatch;
    });
  };

  const filteredDistricts = maharashtraDistricts.filter(district => {
    const lowerSearch = search.toLowerCase();
    const marathiMatch = district.name.toLowerCase().includes(lowerSearch);
    const englishMatch = district.englishName.toLowerCase().includes(lowerSearch);
    return marathiMatch || englishMatch;
  });

  const filteredConstituencies = selectedDistrict ? 
    searchWithTranslation(search, selectedDistrict.constituencies, selectedDistrict.constituenciesEnglish) : [];

  const showSearchResults = search.length > 0;
  const hasCurrentSelection = selectedLocation && selectedConstituency;

  // Create combined recent searches with current selection at top
  const combinedRecentSearches = () => {
    const recent = [...recentSearches];
    if (hasCurrentSelection) {
      // Remove current selection from recent if it exists
      const filtered = recent.filter(item => 
        !(item.district === selectedLocation && item.constituency === selectedConstituency)
      );
      // Add current selection at the top
      return [{ district: selectedLocation, constituency: selectedConstituency }, ...filtered];
    }
    return recent;
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full z-50 flex items-end justify-center bg-black/40">
      <div className="bg-white rounded-t-2xl shadow-xl w-full flex flex-col overflow-hidden animate-slide-in-bottom h-[80vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          {showConstituencies ? (
            <div className="flex items-center gap-3">
              <button onClick={handleBack} className="p-1 rounded-full hover:bg-gray-100">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">निर्वाचन क्षेत्र चुनें</h2>
                <p className="text-sm text-gray-500">{selectedDistrict?.name}</p>
              </div>
            </div>
          ) : (
            <h2 className="text-lg font-semibold text-gray-900">स्थान चुनें</h2>
          )}
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide">
          {/* Search Bar */}
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={showConstituencies ? "निर्वाचन क्षेत्र खोजें..." : "जिला खोजें..."}
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            {showConstituencies ? (
              /* Constituency Selection Screen */
              <div className="p-4">
                {showSearchResults ? (
                  <>
                    {filteredConstituencies.length > 0 ? (
                      <div className="space-y-2">
                        {filteredConstituencies.map((constituency, idx) => (
                          <button
                            key={idx}
                            className="w-full text-left p-3 rounded-lg hover:bg-gray-100 border border-gray-200"
                            onClick={() => handleConstituencySelect(constituency)}
                          >
                            <span className="font-medium text-gray-900">{constituency}</span>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        कोई परिणाम नहीं मिला
                      </div>
                    )}
                  </>
                ) : (
                  <div className="space-y-2">
                    {selectedDistrict?.constituencies.map((constituency, idx) => (
                      <button
                        key={idx}
                        className="w-full text-left p-3 rounded-lg hover:bg-gray-100 border border-gray-200"
                        onClick={() => handleConstituencySelect(constituency)}
                      >
                        <span className="font-medium text-gray-900">{constituency}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              /* District Selection Screen */
              <div className="p-4">
                {/* Current Location Option - Always visible */}
                <button
                  onClick={handleCurrentLocation}
                  disabled={isLoadingLocation}
                  className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50 mb-4"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    {isLoadingLocation ? (
                      <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                      </svg>
                    )}
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-gray-900">वर्तमान स्थान का उपयोग करें</div>
                    <div className="text-sm text-gray-500">GPS से स्वचालित पहचान</div>
                  </div>
                </button>
                
                {locationError && (
                  <div className="mb-4 text-sm text-red-600">{locationError}</div>
                )}

                {showSearchResults ? (
                  <>
                    {filteredDistricts.length > 0 ? (
                      <div className="space-y-2">
                        {filteredDistricts.map((district) => (
                          <button
                            key={district.id}
                            className="w-full text-left p-3 rounded-lg hover:bg-gray-100 border border-gray-200 flex items-center justify-between"
                            onClick={() => handleDistrictSelect(district)}
                          >
                            <span className="font-medium text-gray-900">{district.name}</span>
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        कोई परिणाम नहीं मिला
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {/* Recent Searches (including current selection) */}
                    {combinedRecentSearches().length > 0 && (
                      <div>
                        <div className="text-sm font-semibold text-gray-700 mb-3">
                          {hasCurrentSelection ? 'हाल की खोजें' : 'हाल की खोजें'}
                        </div>
                        <div className="space-y-2">
                          {combinedRecentSearches().map((recent, idx) => (
                            <button
                              key={idx}
                              className="w-full text-left p-3 rounded-lg hover:bg-gray-100 border border-gray-200 flex items-center gap-3"
                              onClick={() => handleRecentSelect(recent)}
                            >
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                {idx === 0 && hasCurrentSelection ? (
                                  // Current location icon
                                  <>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </>
                                ) : (
                                  // Recent search icon
                                  <>
                                    <circle cx="12" cy="12" r="3" />
                                    <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" />
                                  </>
                                )}
                              </svg>
                              <div>
                                <div className="font-medium text-gray-900">{recent.district}</div>
                                <div className="text-sm text-gray-600">{recent.constituency}</div>
                              </div>
                              {idx === 0 && hasCurrentSelection && (
                                <div className="ml-auto">
                                  <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">वर्तमान</span>
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}; 