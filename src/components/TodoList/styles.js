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

export const Progress = styled.View`
  align-items: center;
`;

export const Count = styled.Text`
  font-size: 40px;
  color: ${colors.white};
  font-weight: 200;
`;

export const SubTitle = styled.Text`
  font-size: 12px;
  color: ${colors.white};
  font-weight: 700;
`;

export const Footer = styled.View`
  align-items: center;
`;
