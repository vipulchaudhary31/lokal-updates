import React, { useState, useEffect } from 'react';
import { NewsArticle } from './NewsArticle';
import { getImageForCategory } from '@/services/imageService';

interface NewsData {
  id: string;
  title: string;
  content: string;
  author: string;
  timeAgo: string;
  imageUrl: string;
}

interface NewsFeedProps {
  activeCategory: string;
  selectedCategory?: string;
}

// Sample news data for different categories
const newsDatabase: Record<string, Omit<NewsData, 'imageUrl'>[]> = {
  'माझी बातमी': [
    {
      id: '1',
      title: 'अमरावती: शिवसेनेचा महावितरण कंपनीला कठोर आणि गंभीर इशारा',
      content: 'सरस्वती नगर व आजूबाजूच्या परिसरात वारंवार वीज पुरवठा खंडित होत असलेले नागरिक परिषद झाले असून परिसरातील नागरिकांनी शिवसेनेच्या नेतृत्वात महाराष्ट्र राज्य विद्युत वितरण कंपनीच्या केंद्रप्रमुखांना निवेदन देण्यात आले. परिसरात अनेकदा वीज पुरवठा खंडित होत असल्याने नागरिकांनी तीव्र संताप व्यक्त करून, ही समस्या तात्काळ निघाली काढण्याची मागणी दिलेली निवेदनातून करण्यात आली आहे. समस्या निकाली न निघाल्यास तीव्र आंदोलन छेडणार असल्याचा इशारा देखील यावेळी देण्यात आला.',
      author: 'Srinivasalu Reddy',
      timeAgo: '20 mins ago'
    }
  ],
  'कर्नाटक': [
    {
      id: '2',
      title: 'बेंगलुरु में मेट्रो सेवा में सुधार, नई लाइनों का विस्तार',
      content: 'कर्नाटक की राजधानी बेंगलुरु में मेट्रो रेल सेवा का विस्तार किया जा रहा है। नई लाइनों के साथ यात्रियों को बेहतर कनेक्टिविटी मिलेगी।',
      author: 'Karnataka News',
      timeAgo: '1 hour ago'
    }
  ],
  'राष्ट्रीय': [
    {
      id: '3',
      title: 'भारत में डिजिटल इंडिया अभियान को मिली नई गति',
      content: 'राष्ट्रीय स्तर पर डिजिटल इंडिया अभियान के तहत नई योजनाओं का शुभारंभ किया गया है। इससे ग्रामीण क्षेत्रों में भी तकनीकी सुविधाओं का विस्तार होगा।',
      author: 'National Bureau',
      timeAgo: '2 hours ago'
    }
  ],
  'व्हिडिओ': [
    {
      id: '4',
      title: 'मराठी चित्रपट उद्योगात नवीन तंत्रज्ञानाचा वापर',
      content: 'मराठी चित्रपट निर्मात्यांनी नवीन व्हिडिओ तंत्रज्ञानाचा वापर करून चित्रपटांची गुणवत्ता वाढवली आहे।',
      author: 'Film Industry',
      timeAgo: '3 hours ago'
    }
  ],
  'मनोरंजन': [
    {
      id: '5',
      title: 'बॉलीवुड स्टार्स का नया प्रोजेक्ट जल्द ही रिलीज़',
      content: 'बॉलीवुड के मशहूर अभिनेताओं का नया फिल्म प्रोजेक्ट जल्द ही सिनेमाघरों में रिलीज़ होने वाला है।',
      author: 'Entertainment Desk',
      timeAgo: '4 hours ago'
    }
  ],
  'जीवनशैली': [
    {
      id: '6',
      title: 'स्वस्थ जीवनशैली के लिए योग और व्यायाम की महत्ता',
      content: 'स्वास्थ्य विशेषज्ञों के अनुसार नियमित योग और व्यायाम से जीवनशैली में सकारात्मक बदलाव आ सकते हैं।',
      author: 'Health Expert',
      timeAgo: '5 hours ago'
    }
  ]
};

export const NewsFeed: React.FC<NewsFeedProps> = ({ activeCategory, selectedCategory }) => {
  const [newsData, setNewsData] = useState<NewsData[]>([]);
  const [loading, setLoading] = useState(true);

  // Determine which category to show content for
  const currentCategory = selectedCategory || getActiveCategoryName(activeCategory);

  useEffect(() => {
    const loadNewsForCategory = async () => {
      setLoading(true);
      
      try {
        // Get news data for the category or use default
        const rawNewsData = newsDatabase[currentCategory] || newsDatabase['माझी बातमी'] || [];
        
        // If no specific news data exists, create generic news with different images
        let newsToShow = rawNewsData;
        if (rawNewsData.length === 0) {
          newsToShow = [{
            id: Date.now().toString(),
            title: `${currentCategory} संबंधित ताज्या बातम्या`,
            content: `${currentCategory} विभागातील महत्वाच्या घडामोडींची माहिती येथे उपलब्ध आहे. या विषयावरील सर्वाधिक वाचल्या जाणाऱ्या बातम्या आणि अद्यतने येथे वाचा.`,
            author: 'News Desk',
            timeAgo: 'अभी'
          }];
        }

        // Fetch images for each news item
        const newsWithImages = await Promise.all(
          newsToShow.map(async (news) => {
            const imageUrl = await getImageForCategory(currentCategory);
            return {
              ...news,
              imageUrl
            };
          })
        );

        setNewsData(newsWithImages);
      } catch (error) {
        console.error('Error loading news data:', error);
        // Fallback to default news
        const defaultImage = await getImageForCategory('माझी बातमी');
        setNewsData([{
          id: '1',
          title: 'अमरावती: शिवसेनेचा महावितरण कंपनीला कठोर आणि गंभीर इशारा',
          content: 'सरस्वती नगर व आजूबाजूच्या परिसरात वारंवार वीज पुरवठा खंडित होत असलेले नागरिक परिषद झाले असून परिसरातील नागरिकांनी शिवसेनेच्या नेतृत्वात महाराष्ट्र राज्य विद्युत वितरण कंपनीच्या केंद्रप्रमुखांना निवेदन देण्यात आले.',
          author: 'Srinivasalu Reddy',
          timeAgo: '20 mins ago',
          imageUrl: defaultImage
        }]);
      } finally {
        setLoading(false);
      }
    };

    loadNewsForCategory();
  }, [currentCategory]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">Loading news...</div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {newsData.map((news) => (
        <NewsArticle
          key={news.id}
          imageUrl={news.imageUrl}
          title={news.title}
          content={news.content}
          author={news.author}
          timeAgo={news.timeAgo}
        />
      ))}
    </div>
  );
};

// Helper function to get category name from active tab
const getActiveCategoryName = (activeTab: string | number): string => {
  const categoryMap: Record<string, string> = {
    '1': 'माझी बातमी',
    '2': 'कर्नाटक',
    '3': 'राष्ट्रीय',
    '4': 'व्हिडिओ',
    '5': 'मनोरंजन',
    '6': 'जीवनशैली'
  };
  
  return categoryMap[activeTab.toString()] || 'माझी बातमी';
}; 