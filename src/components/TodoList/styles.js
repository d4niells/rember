import styled from 'styled-components/native';
import { colors } from '~/styles/index';

export const Container = styled.TouchableOpacity.attrs({ activeOpacity: 0.9 })`
  flex: 1;
  min-height: 250px;
  margin: 8px 8px 8px 8px; /* Some gutter */
  background-color: ${({ background }) => background};
  border-radius: 20px;
  padding: 20px 0px;
`;

export const Title = styled.Text`
  flex-wrap: wrap;
  font-size: 18px;
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
