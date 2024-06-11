import styled from 'styled-components';

export const ChoiceTitle = styled.h1`
  font-weight: bold;
  margin: 0;
`;

export const ChoiceSubtitle = styled.p`
  font-size: 12px;
  color: #9E9E9E;
  margin-top: 8px;
`;

export const ChoiceListContainer = styled.div`
  margin-top: 30px;
  background-color: #F5F9FF;
  border-radius: 10px;
  padding: 10px;
`;

export const ChoiceListItem = styled.div<{ selected?: boolean }>`
  font-size: 0.9rem;
  padding: 0 6%;
  box-sizing:border-box;
  width:100%;
  height:60px;
  background-color: ${({ selected }) => (selected ? '#E3F2FD' : 'transparent')};
  color: ${({ selected }) => (selected ? '#1976D2' : '#000')};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight:bold;
  &:hover {
    background-color: #E3F2FD;
  }
`;
