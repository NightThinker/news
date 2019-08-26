import styled from 'styled-components';

import { Border } from '../../styles/Styles';

export const CardStyle = styled.li`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 20px 10px 15px;
  ${Border}
`;

export const TextStyle = styled.div`
  display: flex;
  height: 200px;
`;

export const DateStyle = styled.div`
  display: flex;
  margin-top: 10px;
`;
