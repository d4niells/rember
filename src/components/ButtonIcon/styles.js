import styled from 'styled-components/native';

export const Container = styled.View``;

export const Button = styled.TouchableHighlight.attrs({
  underlayColor: 'rgba(221, 221, 221, 0.4)',
})`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 10px;
  border-radius: 100px;
`;
