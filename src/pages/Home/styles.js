import styled from 'styled-components/native';
import { colors } from '~/styles/index';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
`;

export const Header = styled.View`
  height: 300px;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.View.attrs({
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
})`
  flex: 1;
  background-color: ${colors.white};
  box-shadow: 5px 5px 20px ${colors.blackPrimary};
  padding-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: 800;
  color: ${colors.white};
  padding: 0px 20px;
`;

export const ContainerButtom = styled.View`
  margin: 30px 0px;
  justify-content: center;
  align-items: center;
`;

export const List = styled.FlatList.attrs({
  paddingHorizontal: 20,
})``;

export const AddList = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${colors.blue};
  padding: 10px;
  border-radius: 5px;
`;

export const ContainerFlatlist = styled.View``;
