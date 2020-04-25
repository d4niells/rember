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
  z-index: 10;
  right: 32px;
`;

export const Section = styled.View`
  flex: 1;
  align-self: stretch;
`;

export const Header = styled(Section)`
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

export const ContainerTasks = styled.View`
  flex: 3;
`;

export const ConatinerTodo = styled.View`
  padding: 16px 0px;
  flex-direction: row;
  align-items: center;
`;

export const Checkout = styled.TouchableOpacity`
  width: 32px;
`;

export const TodoTitle = styled.Text`
  color: ${(props) => (props.completed ? colors.gray : colors.black)};
  font-weight: 700;
  text-decoration-line: ${(props) =>
    props.completed ? 'line-through' : ' none'}
  font-size: 16px;
`;

export const ContainerInput = styled.KeyboardAvoidingView`
  flex: 1;
  align-self: stretch;
  padding: 0px 32px;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  border-width: 1px;
  border-color: ${(props) => props.backgorund};
  border-radius: 6px;
  height: 48px;
  margin-right: 8px;
  padding: 0px 8px;
  font-size: 16px;
`;

export const Submit = styled.TouchableOpacity`
  padding: 16px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgorund};
`;