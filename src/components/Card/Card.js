import React from 'react';

import { CardStyle, DateStyle, TextStyle } from './CardStyle';
import Text from '../UI/Text/Text';
import Img from '../UI/Img/Img';
import { FormatDate } from '../../utils/Date';

const card = (props) => (
  <CardStyle>
    <Text type="h1">{props.item.title}</Text>
    <Img src={props.item.image} />
    <TextStyle>
      <Text>{props.item.desc}</Text>
    </TextStyle>
    <DateStyle>
      <Text type="h5" color="Gray50Color">
        Updated: {FormatDate(props.item.date)}
      </Text>
    </DateStyle>
  </CardStyle>
);

export default card;
