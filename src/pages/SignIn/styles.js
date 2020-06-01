import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { colors } from '~/styles/index';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  background-color: ${colors.primary};
`;

export const Header = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.View.attrs({
  borderTopRightRadius: 30,
  borderTopLeftRadius: 30,
})`
  flex: 2.5;
  justify-content: center;
  background-color: ${colors.white};
  padding: 0px 15px;
  box-shadow: 5px 5px 20px ${colors.blackPrimary};
`;

export const Footer = styled.View`
  padding: 40px 0px;
  flex-direction: row;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  align-self: center;
  width: 180px;
  height: 180px;
`;

export const Form = styled.View``;

export const Link = styled.TouchableOpacity``;

export const Label = styled.Text`
  color: ${colors.secondary};
`;

export const LabelLink = styled.Text`
  font-weight: bold;
  color: ${colors.primary};
`;

export const ForgotPassword = styled.View`
  width: 100%;
  align-items: flex-end;
  margin-bottom: 24px;
`;
