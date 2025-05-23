import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { NewsFeed } from '@/components/news/NewsFeed';

interface IndexProps {
  activeCategory?: string;
  selectedCategory?: string;
}

const Index: React.FC<IndexProps> = ({ activeCategory = '1', selectedCategory }) => {
  return (
    <Layout>
      <NewsFeed 
        activeCategory={activeCategory}
        selectedCategory={selectedCategory}
      />
    </Layout>
  );
};

export default Index;
