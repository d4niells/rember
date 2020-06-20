import styled from 'styled-components/native';
import { colors } from '~/styles/index';

export const Container = styled.View`
  flex: 1;
  margin: 12px 5px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.secondary,
  selectionColor: colors.primary,
})`
  height: 46px;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px;
  border-color: ${colors.secondary};
  color: ${colors.secondary};
`;
