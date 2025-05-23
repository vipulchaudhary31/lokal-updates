const UNSPLASH_ACCESS_KEY = 'K0rGJQ9dX8y_GxQdDqhKgAm6CkJ4WqaHzCQN9KZfqYw'; // Demo key

interface UnsplashImage {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
}

// Category mapping to search terms for Unsplash
const categorySearchMap: Record<string, string> = {
  'कर्नाटक': 'Karnataka India temple',
  'राष्ट्रीय': 'India national news government',
  'व्हिडिओ': 'video production camera',
  'मनोरंजन': 'entertainment bollywood movies',
  'जीवनशैली': 'lifestyle wellness yoga',
  'खेळ': 'sports cricket football India',
  'राजकारण': 'politics government India',
  'व्यापार': 'business finance India',
  'तंत्रज्ञान': 'technology computer innovation',
  'आरोग्य': 'health medical wellness',
  'शिक्षण': 'education school college India',
  'कृषी': 'agriculture farming India',
  'पर्यावरण': 'environment nature conservation',
  'संस्कृती': 'culture tradition India',
  'धर्म': 'religion temple spirituality India',
  'विज्ञान': 'science research technology',
  'कला': 'art painting sculpture India',
  'संगीत': 'music instruments classical India',
  'चित्रपट': 'cinema movies bollywood India',
  'पुस्तके': 'books reading library education'
};

// Cache for images to avoid repeated API calls
const imageCache = new Map<string, string>();

// Fallback images for each category (static backup)
const fallbackImages: Record<string, string> = {
  'माझी बातमी': 'https://cdn.builder.io/api/v1/image/assets/8af8298d8b2744f5817fa7b6a5be0a71/41c8dc8f6981d4564d29165ee8fb545bb211fbb4?placeholderIfAbsent=true',
  'कर्नाटक': 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=360&h=240&fit=crop',
  'राष्ट्रीय': 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=360&h=240&fit=crop',
  'व्हिडिओ': 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=360&h=240&fit=crop',
  'मनोरंजन': 'https://images.unsplash.com/photo-1489599904568-87455baf04f1?w=360&h=240&fit=crop',
  'जीवनशैली': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=360&h=240&fit=crop',
  'खेळ': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=360&h=240&fit=crop',
  'राजकारण': 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=360&h=240&fit=crop',
  'व्यापार': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=360&h=240&fit=crop',
  'तंत्रज्ञान': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=360&h=240&fit=crop',
  'आरोग्य': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=360&h=240&fit=crop',
  'शिक्षण': 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=360&h=240&fit=crop',
  'कृषी': 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=360&h=240&fit=crop',
  'पर्यावरण': 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=360&h=240&fit=crop',
  'संस्कृती': 'https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=360&h=240&fit=crop',
  'धर्म': 'https://images.unsplash.com/photo-1544967082-d9759a6c890e?w=360&h=240&fit=crop',
  'विज्ञान': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=360&h=240&fit=crop',
  'कला': 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=360&h=240&fit=crop',
  'संगीत': 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=360&h=240&fit=crop',
  'चित्रपट': 'https://images.unsplash.com/photo-1489599904568-87455baf04f1?w=360&h=240&fit=crop',
  'पुस्तके': 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=360&h=240&fit=crop',
  'default': 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=360&h=240&fit=crop'
};

export const getImageForCategory = async (category: string): Promise<string> => {
  // Return static image for माझी बातमी
  if (category === 'माझी बातमी') {
    return fallbackImages['माझी बातमी'];
  }

  // Check cache first
  if (imageCache.has(category)) {
    return imageCache.get(category)!;
  }

  try {
    const searchTerm = categorySearchMap[category] || 'news general';
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchTerm)}&per_page=1&orientation=landscape&client_id=${UNSPLASH_ACCESS_KEY}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch from Unsplash');
    }

    const data = await response.json();
    
    if (data.results && data.results.length > 0) {
      const image: UnsplashImage = data.results[0];
      const imageUrl = `${image.urls.regular}&w=360&h=240&fit=crop`;
      
      // Cache the image URL
      imageCache.set(category, imageUrl);
      
      return imageUrl;
    } else {
      // No results found, use fallback
      const fallbackUrl = fallbackImages[category] || fallbackImages.default;
      imageCache.set(category, fallbackUrl);
      return fallbackUrl;
    }
  } catch (error) {
    console.error('Error fetching image for category:', category, error);
    
    // Use fallback image
    const fallbackUrl = fallbackImages[category] || fallbackImages.default;
    imageCache.set(category, fallbackUrl);
    return fallbackUrl;
  }
};

// Preload images for better performance
export const preloadCategoryImages = async () => {
  const categories = Object.keys(categorySearchMap);
  const imagePromises = categories.map(category => getImageForCategory(category));
  
  try {
    await Promise.all(imagePromises);
    console.log('Category images preloaded successfully');
  } catch (error) {
    console.error('Error preloading images:', error);
  }
};

// Get multiple images for a category (for variety)
export const getImagesForCategory = async (category: string, count: number = 3): Promise<string[]> => {
  if (category === 'माझी बातमी') {
    return [fallbackImages['माझी बातमी']];
  }

  try {
    const searchTerm = categorySearchMap[category] || 'news general';
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchTerm)}&per_page=${count}&orientation=landscape&client_id=${UNSPLASH_ACCESS_KEY}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch from Unsplash');
    }

    const data = await response.json();
    
    if (data.results && data.results.length > 0) {
      return data.results.map((image: UnsplashImage) => 
        `${image.urls.regular}&w=360&h=240&fit=crop`
      );
    } else {
      return [fallbackImages[category] || fallbackImages.default];
    }
  } catch (error) {
    console.error('Error fetching images for category:', category, error);
    return [fallbackImages[category] || fallbackImages.default];
  }
}; 