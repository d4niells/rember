import styled from 'styled-components/native';
import {colors} from '~/styles/index';

export const Container = styled.View`
  width: 200px;
  background-color: ${({background}) => background};
  padding: 30px 16px;
  border-radius: 6px;
  margin: 0px 12px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: ${colors.white};
  margin-bottom: 18px;
  text-align: center;
`;
