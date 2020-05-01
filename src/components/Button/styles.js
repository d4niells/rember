import styled from 'styled-components/native';
import { colors } from '~/styles/index';

export const LargeButton = styled.TouchableOpacity`
  width: 100%;
  height: 46px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
`;

export const Label = styled.Text`
  font-weight: bold;
  font-size: 15;
  color: ${colors.white};
`;
