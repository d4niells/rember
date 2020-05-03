import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { colors } from '~/styles/index';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  padding: 0 15px;
  background-color: ${colors.background};
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.View`
  width: 160px;
  height: 160px;
  align-self: center;
  border-radius: 100px;
  background-color: ${colors.primary};
  justify-content: center;
  align-items: center;
`;

export const LogoName = styled.Text`
  color: ${colors.white};
  font-weight: 800;
  font-size: 20px;
`;

export const Body = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const Link = styled.TouchableOpacity``;

export const FieldsForm = styled.View`
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  color: ${colors.secondary};
`;

export const LabelLink = styled.Text`
  font-weight: bold;
  color: ${colors.primary};
`;

export const Footer = styled.View`
  flex-direction: row;
  margin-top: 30px;
`;
