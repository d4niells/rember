import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
// components
import Button from '~/components/Button';
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
  ListColors,
  Label,
} from './styles';
import background from '~/styles/background';
import { colors } from '~/styles/index';

export default function AddListModal({ closeModal }) {
  const userPath = useSelector((state) => state.user.path);

  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState(colors.blue);

  const renderColors = () => {
    return (
      <ListColors
        data={background}
        keyExtractor={(item) => item}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        renderItem={({ item }) => (
          <SelectColor onPress={() => setColor(item)} background={item} />
        )}
      />
    );
  };

  const createTodo = async () => {
    setLoading(true);
    const userRef = getDocument(userPath);
    await createCategory({ name, color, userRef });
    setLoading(false);
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

        <Button
          background={color}
          loading={loading}
          onPress={() => createTodo()}
        >
          <Label>Create</Label>
        </Button>
      </Content>
    </KeyboardAvoiding>
  );
}
