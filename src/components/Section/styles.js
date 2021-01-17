import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 45px;
`;

export const Title = styled.Text`
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.text.main};
`;
