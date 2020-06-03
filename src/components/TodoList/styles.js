import styled from 'styled-components/native';
import { colors } from '~/styles/index';

export const Container = styled.TouchableHighlight.attrs({
  activeOpacity: 1,
  underlayColor: colors.underlayColorPrimary,
})`
  width: 170px;
  height: 160px;
  margin: 20px 20px 20px 0px; /* Some gutter */
  background-color: ${({ background }) => background};
  border-radius: 20px;
  padding: 30px 30px;
  box-shadow: 2px 0px 10px ${colors.boxShadow};
`;

export const Title = styled.Text`
  flex-wrap: wrap;
  font-size: 16px;
  font-weight: 700;
  color: ${colors.black};
  margin-top: 20px;
  margin-bottom: 8px;
`;

export const Progress = styled.View`
  align-items: flex-start;
  justify-content: space-between;
`;

export const SubTitle = styled.Text`
  font-size: 12px;
  color: ${colors.gray};
  font-weight: 700;
`;

export const Footer = styled.View`
  align-items: center;
`;
