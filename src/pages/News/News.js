import React, { useState } from 'react';

import newsData from '../../data/news.json';
import { NewsStyle, ContainerStyle } from './NewsStyle';
import Card from '../../components/Card/Card';
import Button from '../../components/UI/Button/Button';

function News() {
  const [count, setCount] = useState(2);
  const [news, setNews] = useState(newsData.slice(0, 2));
  console.log('TCL: News -> news', news);

  const LoadMore = () => {
    console.log('test');
    // console.log('TCL: LoadMore -> count', count);
    setCount(count + 2);
    // console.log('TCL: LoadMore -> count', count);
    setNews(newsData.slice(0, count + 2));
    console.log('TCL: LoadMore -> news', news);
  };
  return (
    <ContainerStyle>
      <NewsStyle>
        {news.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </NewsStyle>
      <Button onClick={LoadMore}>Load More</Button>
    </ContainerStyle>
  );
}

export default News;
