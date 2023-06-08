import styled from 'styled-components';

export const ShopPageSection = styled.section`
  margin: 0;
  padding: 0;
  displey: flex;
  width: 100%;
`;

export const Wrap = styled.div`
  width: 100%;
  displey: flex;
`;
export const Column = styled.div`
  width: 100%;
  displey: flex;
`;

export const Title = styled.h2``;

export const List = styled.ul`
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: 100%;
  padding: 10px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const ProductScreen = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 20px;
  border: none;
  background-color: transparent;
  border-radius: 10px;
  border: 2px solid #1f85cf;
  color: #131313;

  &:hover,
  &:focus,
  &:active {
    background-color: #1f85cf;
  }
`;
