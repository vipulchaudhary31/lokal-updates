import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { NewsArticle } from '@/components/news/NewsArticle';

const Index = () => {
  return (
    <Layout>
      <NewsArticle
        imageUrl="https://cdn.builder.io/api/v1/image/assets/8af8298d8b2744f5817fa7b6a5be0a71/41c8dc8f6981d4564d29165ee8fb545bb211fbb4?placeholderIfAbsent=true"
        title="अमरावती: शिवसेनेचा महावितरण कंपनीला कठोर आणि गंभीर इशारा"
        content="सरस्वती नगर व आजूबाजूच्या परिसरात वारंवार वीज पुरवठा खंडित होत असलेले नागरिक परिषद झाले असून परिसरातील नागरिकांनी शिवसेनेच्या नेतृत्वात महाराष्ट्र राज्य विद्युत वितरण कंपनीच्या केंद्रप्रमुखांना निवेदन देण्यात आले. परिसरात अनेकदा वीज पुरवठा खंडित होत असल्याने नागरिकांनी तीव्र संताप व्यक्त करून, ही समस्या तात्काळ निघाली काढण्याची मागणी दिलेली निवेदनातून करण्यात आली आहे. समस्या निकाली न निघाल्यास तीव्र आंदोलन छेडणार असल्याचा इशारा देखील यावेळी देण्यात आला."
        author="Srinivasalu Reddy"
        timeAgo="20 mins ago"
      />
    </Layout>
  );
};

export default Index;
