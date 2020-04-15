import styled from 'styled-components/native';
import {colors} from '~/styles/index';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ButtomDismiss = styled.TouchableOpacity`
  position: absolute;
  top: 64px;
  right: 32px;
`;

export const Header = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: flex-end;
  margin-left: 64px;
  border-bottom-width: 3px;
  border-bottom-color: ${(props) => props.color};
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: 800;
  color: ${colors.black};
`;

export const Subtitle = styled.Text`
  margin-top: 4px;
  margin-bottom: 16px;
  color: ${colors.gray};
  font-weight: 600;
`;

export const Section = styled.View``;
