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
const getRecentSearches = (): {district: string, constituency?: string}[] => {
  try {
    const recent = localStorage.getItem('recentLocationSearches');
    return recent ? JSON.parse(recent) : [];
  } catch {
    return [];
  }
};

// Save to recent searches
const saveToRecentSearches = (district: string, constituency?: string) => {
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
  const [tempSelectedDistrict, setTempSelectedDistrict] = useState<string>('');
  const [tempSelectedConstituency, setTempSelectedConstituency] = useState<string>('');
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [locationError, setLocationError] = useState('');
  const [hasSelectedFromSearch, setHasSelectedFromSearch] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    if (open) {
      setLocationError('');
      // Pre-populate with current selections
      setTempSelectedDistrict(selectedLocation || '');
      setTempSelectedConstituency(selectedConstituency || '');
      // Set input field to show current district
      setSearch('');
      // Reset selection tracker when modal opens
      setHasSelectedFromSearch(false);
    }
  }, [open, selectedLocation, selectedConstituency]);

  if (!open) return null;

  const handleDistrictSelect = (district: string) => {
    setTempSelectedDistrict(district);
    setTempSelectedConstituency(''); // Clear constituency when changing district
    setSearch(''); // Clear search
    setHasSelectedFromSearch(true); // Mark that user made a new selection
  };

  const handleConstituencySelect = (constituency: string) => {
    setTempSelectedConstituency(constituency);
    // Don't set hasSelectedFromSearch for constituency selection - keep recent searches visible
  };

  const handleCurrentLocation = async () => {
    setIsLoadingLocation(true);
    setLocationError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Hardcoded to Nashik district and Malegaon constituency
      setTempSelectedDistrict('नाशिक');
      setTempSelectedConstituency('मालेगांव');
      setSearch('');
      // Don't set hasSelectedFromSearch for GPS - keep recent searches visible
    } catch (error) {
      setLocationError('स्थान प्राप्त करने में असमर्थ। कृपया मैन्युअल रूप से चुनें।');
    } finally {
      setIsLoadingLocation(false);
    }
  };

  const handleConfirm = () => {
    if (!tempSelectedDistrict) return;
    
    // Close modal immediately
    onClose();
    
    // Start loading after modal closes
    setTimeout(() => {
      onLoadingChange?.(true);
      saveToRecentSearches(tempSelectedDistrict, tempSelectedConstituency || undefined);
      
      // Simulate loading delay
      setTimeout(() => {
        onSelect(tempSelectedDistrict, tempSelectedConstituency || undefined);
        onLoadingChange?.(false);
      }, 1500);
    }, 100);
  };

  const handleRecentSelect = (recent: {district: string, constituency?: string}) => {
    setTempSelectedDistrict(recent.district);
    setTempSelectedConstituency(recent.constituency || '');
    setSearch('');
    // Don't set hasSelectedFromSearch for recent selection - keep recent searches visible
  };

  const handleClearDistrict = () => {
    setTempSelectedDistrict('');
    setTempSelectedConstituency('');
    setSearch('');
    // Don't set hasSelectedFromSearch for clearing - keep recent searches visible
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

  // Get search results based on current state
  const getSearchResults = () => {
    if (!search) return { districts: [], constituencies: [] };

    if (tempSelectedDistrict) {
      // If district is selected, search within its constituencies
      const selectedDistrictData = maharashtraDistricts.find(d => d.name === tempSelectedDistrict);
      const constituencies = selectedDistrictData ? 
        searchWithTranslation(search, selectedDistrictData.constituencies, selectedDistrictData.constituenciesEnglish) : [];
      return { districts: [], constituencies };
    } else {
      // If no district selected, search districts only
      const districts = maharashtraDistricts.filter(district => {
        const lowerSearch = search.toLowerCase();
        const marathiMatch = district.name.toLowerCase().includes(lowerSearch);
        const englishMatch = district.englishName.toLowerCase().includes(lowerSearch);
        return marathiMatch || englishMatch;
      });
      return { districts, constituencies: [] };
    }
  };

  const { districts: searchDistricts, constituencies: searchConstituencies } = getSearchResults();
  const selectedDistrictData = maharashtraDistricts.find(d => d.name === tempSelectedDistrict);
  const availableConstituencies = selectedDistrictData?.constituencies || [];
  const recentSearches = getRecentSearches();

  // Determine input placeholder and value
  const getInputConfig = () => {
    if (tempSelectedDistrict) {
      return {
        value: tempSelectedDistrict,
        placeholder: tempSelectedDistrict,
        readOnly: true
      };
    }
    return {
      value: search,
      placeholder: 'जिला खोजें...',
      readOnly: false
    };
  };

  const inputConfig = getInputConfig();

  // Show recent searches when: 
  // 1) Has recent searches AND 
  // 2) User hasn't selected from search results AND
  // 3) No search text entered (covers modal open, focused input, constituency changes, clearing input)
  const showRecentSearches = recentSearches.length > 0 && !hasSelectedFromSearch && !search;

  return (
    <div className="absolute top-0 left-0 w-full h-full z-50 flex items-end justify-center bg-black/40">
      <div className="bg-white rounded-t-2xl shadow-xl w-full flex flex-col overflow-hidden animate-slide-in-bottom h-[80vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-white border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">स्थान चुनें</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide">
          
          {/* Current Location Button - At the top */}
          <div className="p-4 bg-blue-50">
            <button
              onClick={handleCurrentLocation}
              disabled={isLoadingLocation}
              className="w-full flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-all duration-200 disabled:opacity-50"
            >
              <div className="flex items-center justify-center">
                {isLoadingLocation ? (
                  <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 25">
                    <path d="M12 23.4498C11.7167 23.4498 11.4792 23.354 11.2875 23.1623C11.0959 22.9706 11 22.7331 11 22.4498V21.4498C8.91672 21.2165 7.12922 20.354 5.63755 18.8623C4.14588 17.3706 3.28338 15.5831 3.05005 13.4998H2.05005C1.76672 13.4998 1.52922 13.404 1.33755 13.2123C1.14588 13.0206 1.05005 12.7831 1.05005 12.4998C1.05005 12.2165 1.14588 11.979 1.33755 11.7873C1.52922 11.5956 1.76672 11.4998 2.05005 11.4998H3.05005C3.28338 9.41647 4.14588 7.62897 5.63755 6.1373C7.12922 4.64564 8.91672 3.78314 11 3.5498V2.5498C11 2.26647 11.0959 2.02897 11.2875 1.8373C11.4792 1.64564 11.7167 1.5498 12 1.5498C12.2834 1.5498 12.5209 1.64564 12.7125 1.8373C12.9042 2.02897 13 2.26647 13 2.5498V3.5498C15.0834 3.78314 16.8709 4.64564 18.3625 6.1373C19.8542 7.62897 20.7167 9.41647 20.95 11.4998H21.95C22.2334 11.4998 22.4709 11.5956 22.6625 11.7873C22.8542 11.979 22.95 12.2165 22.95 12.4998C22.95 12.7831 22.8542 13.0206 22.6625 13.2123C22.4709 13.404 22.2334 13.4998 21.95 13.4998H20.95C20.7167 15.5831 19.8542 17.3706 18.3625 18.8623C16.8709 20.354 15.0834 21.2165 13 21.4498V22.4498C13 22.7331 12.9042 22.9706 12.7125 23.1623C12.5209 23.354 12.2834 23.4498 12 23.4498ZM12 19.4998C13.9334 19.4998 15.5834 18.8165 16.95 17.4498C18.3167 16.0831 19 14.4331 19 12.4998C19 10.5665 18.3167 8.91647 16.95 7.5498C15.5834 6.18314 13.9334 5.4998 12 5.4998C10.0667 5.4998 8.41672 6.18314 7.05005 7.5498C5.68338 8.91647 5.00005 10.5665 5.00005 12.4998C5.00005 14.4331 5.68338 16.0831 7.05005 17.4498C8.41672 18.8165 10.0667 19.4998 12 19.4998ZM12 16.4998C10.9 16.4998 9.95838 16.1081 9.17505 15.3248C8.39172 14.5415 8.00005 13.5998 8.00005 12.4998C8.00005 11.3998 8.39172 10.4581 9.17505 9.6748C9.95838 8.89147 10.9 8.4998 12 8.4998C13.1 8.4998 14.0417 8.89147 14.825 9.6748C15.6084 10.4581 16 11.3998 16 12.4998C16 13.5998 15.6084 14.5415 14.825 15.3248C14.0417 16.1081 13.1 16.4998 12 16.4998ZM12 14.4998C12.55 14.4998 13.0209 14.304 13.4125 13.9123C13.8042 13.5206 14 13.0498 14 12.4998C14 11.9498 13.8042 11.479 13.4125 11.0873C13.0209 10.6956 12.55 10.4998 12 10.4998C11.45 10.4998 10.9792 10.6956 10.5875 11.0873C10.1959 11.479 10 11.9498 10 12.4998C10 13.0498 10.1959 13.5206 10.5875 13.9123C10.9792 14.304 11.45 14.4998 12 14.4998Z" />
                  </svg>
                )}
              </div>
              <div className="text-left flex-1">
                <div className="font-medium text-blue-600">वर्तमान स्थान का उपयोग करें</div>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {locationError && (
              <div className="mt-3 p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="text-sm text-red-700 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  {locationError}
                </div>
              </div>
            )}
          </div>

          {/* OR Divider */}
          <div className="flex items-center justify-center py-4">
            <div className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium">or</div>
          </div>

          {/* Search Input */}
          <div className="px-4 pb-6">
            <div className="relative">
              <input
                type="text"
                className={`w-full rounded-xl border-2 py-4 pl-12 pr-12 text-base focus:outline-none focus:ring-0 transition-all ${
                  inputConfig.readOnly 
                    ? 'bg-blue-50 border-blue-200 text-blue-900 font-semibold' 
                    : 'border-gray-200 focus:border-blue-300 bg-white hover:border-gray-300'
                }`}
                placeholder={inputConfig.placeholder}
                value={inputConfig.value}
                readOnly={inputConfig.readOnly}
                onChange={e => !inputConfig.readOnly && setSearch(e.target.value)}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <svg className={`w-5 h-5 ${inputConfig.readOnly ? 'text-blue-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              {tempSelectedDistrict && (
                <button
                  onClick={handleClearDistrict}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-blue-100 transition-colors"
                >
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Constituency Chips - Show when district is selected */}
          {tempSelectedDistrict && availableConstituencies.length > 0 && (
            <div className="px-4 pb-6 border-b border-gray-100">
              <div className="mb-4">
                <span className="text-base font-semibold text-gray-800">निर्वाचन क्षेत्र</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium ml-3">वैकल्पिक</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {availableConstituencies.map((constituency, idx) => (
                  <button
                    key={idx}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
                      tempSelectedConstituency === constituency 
                        ? 'bg-blue-50 text-blue-700 border-blue-300' 
                        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => handleConstituencySelect(constituency)}
                  >
                    {constituency}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search Results or Content */}
          <div className="px-4 pb-4">
            {search && (searchDistricts.length > 0 || searchConstituencies.length > 0) ? (
              <>
                {/* Search Results */}
                <div className="space-y-2">
                  {/* District Search Results */}
                  {searchDistricts.length > 0 && (
                    <div className="space-y-2">
                      {searchDistricts.map((district) => (
                        <button
                          key={district.id}
                          className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                          onClick={() => handleDistrictSelect(district.name)}
                        >
                          <div className="flex items-center gap-3">
                            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M14.1001 1.90675C13.8454 1.64713 13.5224 1.4649 13.1685 1.38114C12.8145 1.29738 12.4441 1.3155 12.1001 1.43342L2.66674 4.58675C2.28628 4.71129 1.95387 4.95085 1.71538 5.27238C1.47689 5.5939 1.34408 5.98153 1.3353 6.38176C1.32652 6.78198 1.4422 7.17506 1.66636 7.50674C1.89052 7.83841 2.21211 8.09232 2.58674 8.23342L6.08007 9.56675C6.15962 9.59717 6.23205 9.64365 6.29284 9.7033C6.35363 9.76294 6.40148 9.83447 6.43341 9.91342L7.76674 13.4134C7.90246 13.7828 8.14875 14.1013 8.47205 14.3255C8.79535 14.5498 9.17994 14.669 9.57341 14.6668H9.62007C10.0208 14.6595 10.4091 14.527 10.7307 14.2879C11.0523 14.0488 11.291 13.715 11.4134 13.3334L14.5667 3.88675C14.6814 3.54605 14.6985 3.18005 14.616 2.83014C14.5336 2.48024 14.3548 2.16039 14.1001 1.90675ZM13.3334 3.46675L10.1467 12.9201C10.1097 13.0397 10.0354 13.1444 9.93466 13.2188C9.83389 13.2931 9.71198 13.3333 9.58674 13.3334C9.46224 13.3355 9.34007 13.2996 9.23647 13.2305C9.13287 13.1614 9.05274 13.0625 9.00674 12.9468L7.67341 9.44675C7.57674 9.19244 7.42767 8.9613 7.23586 8.76834C7.04405 8.57539 6.81381 8.42494 6.56007 8.32675L3.06007 6.99342C2.942 6.95016 2.84051 6.87089 2.76993 6.76681C2.69935 6.66274 2.66325 6.53912 2.66674 6.41342C2.66684 6.28818 2.70702 6.16627 2.78139 6.0655C2.85576 5.96474 2.96043 5.89042 3.08007 5.85342L12.5334 2.70009C12.6419 2.65585 12.761 2.644 12.8761 2.66597C12.9912 2.68794 13.0975 2.74279 13.1821 2.82388C13.2668 2.90497 13.3261 3.00884 13.3529 3.12293C13.3798 3.23702 13.373 3.35644 13.3334 3.46675Z" />
                            </svg>
                            <span className="font-medium text-gray-900">{district.name}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Constituency Search Results */}
                  {searchConstituencies.length > 0 && (
                    <div className="space-y-2">
                      {searchConstituencies.map((constituency, idx) => (
                        <button
                          key={idx}
                          className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                          onClick={() => handleConstituencySelect(constituency)}
                        >
                          <div className="flex items-center gap-3">
                            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M14.1001 1.90675C13.8454 1.64713 13.5224 1.4649 13.1685 1.38114C12.8145 1.29738 12.4441 1.3155 12.1001 1.43342L2.66674 4.58675C2.28628 4.71129 1.95387 4.95085 1.71538 5.27238C1.47689 5.5939 1.34408 5.98153 1.3353 6.38176C1.32652 6.78198 1.4422 7.17506 1.66636 7.50674C1.89052 7.83841 2.21211 8.09232 2.58674 8.23342L6.08007 9.56675C6.15962 9.59717 6.23205 9.64365 6.29284 9.7033C6.35363 9.76294 6.40148 9.83447 6.43341 9.91342L7.76674 13.4134C7.90246 13.7828 8.14875 14.1013 8.47205 14.3255C8.79535 14.5498 9.17994 14.669 9.57341 14.6668H9.62007C10.0208 14.6595 10.4091 14.527 10.7307 14.2879C11.0523 14.0488 11.291 13.715 11.4134 13.3334L14.5667 3.88675C14.6814 3.54605 14.6985 3.18005 14.616 2.83014C14.5336 2.48024 14.3548 2.16039 14.1001 1.90675ZM13.3334 3.46675L10.1467 12.9201C10.1097 13.0397 10.0354 13.1444 9.93466 13.2188C9.83389 13.2931 9.71198 13.3333 9.58674 13.3334C9.46224 13.3355 9.34007 13.2996 9.23647 13.2305C9.13287 13.1614 9.05274 13.0625 9.00674 12.9468L7.67341 9.44675C7.57674 9.19244 7.42767 8.9613 7.23586 8.76834C7.04405 8.57539 6.81381 8.42494 6.56007 8.32675L3.06007 6.99342C2.942 6.95016 2.84051 6.87089 2.76993 6.76681C2.69935 6.66274 2.66325 6.53912 2.66674 6.41342C2.66684 6.28818 2.70702 6.16627 2.78139 6.0655C2.85576 5.96474 2.96043 5.89042 3.08007 5.85342L12.5334 2.70009C12.6419 2.65585 12.761 2.644 12.8761 2.66597C12.9912 2.68794 13.0975 2.74279 13.1821 2.82388C13.2668 2.90497 13.3261 3.00884 13.3529 3.12293C13.3798 3.23702 13.373 3.35644 13.3334 3.46675Z" />
                            </svg>
                            <div>
                              <div className="font-medium text-gray-900">{constituency}</div>
                              <div className="text-sm text-gray-500">{tempSelectedDistrict}</div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Show Recent Searches below search results if available */}
                {showRecentSearches && (
                  <div className="pt-6 border-t border-gray-100 mt-6">
                    <div className="mb-4">
                      <span className="text-base font-semibold text-gray-800">हाल की खोजें</span>
                    </div>
                    <div className="space-y-2">
                      {recentSearches.slice(0, 3).map((recent, idx) => (
                        <button
                          key={idx}
                          className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                          onClick={() => handleRecentSelect(recent)}
                        >
                          <div className="flex items-center gap-3">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                              <div className="text-gray-900">{recent.district}</div>
                              {recent.constituency && (
                                <div className="text-sm text-gray-500">{recent.constituency}</div>
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : search && searchDistricts.length === 0 && searchConstituencies.length === 0 ? (
              <>
                {/* No Search Results */}
                <div className="text-center py-12">
                  <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                  <div className="text-gray-500 font-medium">कोई परिणाम नहीं मिला</div>
                  <div className="text-sm text-gray-400 mt-1">कुछ और खोजने का प्रयास करें</div>
                </div>
                
                {/* Show Recent Searches below no results message if available */}
                {showRecentSearches && (
                  <div className="pt-6 border-t border-gray-100">
                    <div className="mb-4">
                      <span className="text-base font-semibold text-gray-800">हाल की खोजें</span>
                    </div>
                    <div className="space-y-2">
                      {recentSearches.slice(0, 3).map((recent, idx) => (
                        <button
                          key={idx}
                          className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                          onClick={() => handleRecentSelect(recent)}
                        >
                          <div className="flex items-center gap-3">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                              <div className="text-gray-900">{recent.district}</div>
                              {recent.constituency && (
                                <div className="text-sm text-gray-500">{recent.constituency}</div>
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : showRecentSearches ? (
              <div className="pt-6">
                <div className="mb-4">
                  <span className="text-base font-semibold text-gray-800">हाल की खोजें</span>
                </div>
                <div className="space-y-2">
                  {recentSearches.slice(0, 3).map((recent, idx) => (
                    <button
                      key={idx}
                      className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                      onClick={() => handleRecentSelect(recent)}
                    >
                      <div className="flex items-center gap-3">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <div className="text-gray-900">{recent.district}</div>
                          {recent.constituency && (
                            <div className="text-sm text-gray-500">{recent.constituency}</div>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Footer with Confirm Button */}
        <div className="p-4 bg-white border-t border-gray-100">
          <button
            onClick={handleConfirm}
            disabled={!tempSelectedDistrict}
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold text-base hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200"
          >
            {tempSelectedDistrict 
              ? `${tempSelectedDistrict}${tempSelectedConstituency ? `, ${tempSelectedConstituency}` : ''} चुनें` 
              : 'जिला चुनें'
            }
          </button>
        </div>
      </div>
    </div>
  );
}; 