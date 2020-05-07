import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { colors } from '~/styles/index';

export const KeyboardAvoiding = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ButtomDismiss = styled.TouchableOpacity`
  position: absolute;
  top: 64px;
  right: 32px;
`;

export const Content = styled.View`
  align-self: stretch;
  margin: 0px 32px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: 800;
  color: ${colors.black};
  align-self: center;
  margin-bottom: 16px;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-color: ${(props) => props.background};
  border-radius: 6px;
  height: 50px;
  margin-top: 8px;
  padding: 0px 16px;
  font-size: 18px;
`;

export const ContainerSelect = styled.View`
  margin: 15px 0px;
  flex-direction: row;
`;

export const ListColors = styled.FlatList``;

export const SelectColor = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 6px;
  background-color: ${(props) => props.background};
  margin: 0px 5px;
`;

export const Submit = styled.TouchableOpacity`
  margin-top: 24px;
  height: 50px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.background};
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.white};
`;
