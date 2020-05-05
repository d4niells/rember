import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
// services
import { getDocument } from '~/services/firestoreHelpers';
import { createCategory } from '~/services/categories';
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
import { colors } from '~/styles/index';

export default function AddListModal({ closeModal }) {
  const userPath = useSelector((state) => state.user.path);

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
      return <SelectColor onPress={() => setColor(color)} background={color} />;
    });
  };

  const createTodo = async () => {
    const userRef = getDocument(userPath);
    await createCategory({ name, color, userRef });
    closeModal();
  };

  return (
    <KeyboardAvoiding behavior="padding">
      <ButtomDismiss onPress={() => closeModal()}>
        <AntDesign name="close" color={colors.black} size={24} />
      </ButtomDismiss>

      <Content>
        <Title>Create Todo List</Title>
        <Input
          background={color}
          placeholder={'List name?'}
          onChangeText={(text) => setName(text)}
        />
        <ContainerSelect>{renderColors()}</ContainerSelect>

        <Submit background={color} onPress={() => createTodo()}>
          <Label>Create</Label>
        </Submit>
      </Content>
    </KeyboardAvoiding>
  );
}
