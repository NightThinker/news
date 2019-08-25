import React from 'react';

import news from '../../data/news.json';
import { NewsStyle } from './NewsStyle';
import Card from '../../components/Card/Card';

function News() {
  return (
    <NewsStyle>
      {news.map((item) => (
        <Card />
        // <h1>{item.title}</h1>
      ))}
    </NewsStyle>
  );
}

export default News;
