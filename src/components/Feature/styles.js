import styled from 'styled-components/native';
import { colors } from '~/styles/index';

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})``;

export const Card = styled.View.attrs({
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
})`
  width: 170px;
  height: 160px;
  margin: 20px 20px 20px 10px;
  background-color: ${({ background }) => background};
  padding: 0px 0px 30px 0px;
  box-shadow: 2px 0px 10px ${colors.boxShadow};
`;

export const Title = styled.Text`
  flex-wrap: wrap;
  font-size: 16px;
  font-weight: 700;
  color: ${colors.black};
  margin-top: 20px;
  margin-bottom: 8px;
  padding: 0px 30px;
`;

export const Icon = styled.View.attrs({
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 0,
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
`;

export const SubTitle = styled.Text`
  font-size: 12px;
  color: ${colors.gray};
  font-weight: 700;
  padding: 0px 30px;
`;
