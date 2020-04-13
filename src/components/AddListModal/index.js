import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import tempData from '~/services/tempData';
import {
  KeyboardAvoiding,
  ButtomDismiss,
  Content,
  Title,
  Input,
  ContainerSelect,
  SelectColor,
  Submit,
  Label,
} from './styles';
import {colors} from '~/styles/index';

export default function AddListModal({closeModal}) {
  const [name, setName] = useState('');
  const [color, setColor] = useState(colors.blue);
  const backgorundColors = [
    '#5CD859',
    '#24A6D9',
    '#595BD9',
    '#8022D9',
    '#D159D8',
    '#D85963',
    '#D88559',
  ];

  const renderColors = () => {
    return backgorundColors.map((color) => {
      return <SelectColor onPress={() => setColor(color)} backgorund={color} />;
    });
  };

  return (
    <KeyboardAvoiding behavior="padding">
      <ButtomDismiss onPress={closeModal()}>
        <AntDesign name="close" color={colors.black} size={24} />
      </ButtomDismiss>

      <Content>
        <Title>Create Todo List</Title>
        <Input placeholder={'List name?'} onChange={(text) => setName(text)} />
        <ContainerSelect>{renderColors()}</ContainerSelect>

        <Submit backgorund={color} onPress={() => createTodo()}>
          <Label>Create</Label>
        </Submit>
      </Content>
    </KeyboardAvoiding>
  );
}
