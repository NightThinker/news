import styled from 'styled-components';

export const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewsStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 45px;
  padding-bottom: 45px;
`;
