import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  KeyboardAvoiding,
  ButtomDismiss,
  Content,
  Title,
  Input,
  Submit,
  Label,
} from './styles';
import {colors} from '~/styles/index';

export default function AddListModal({closeModal}) {
  return (
    <KeyboardAvoiding behavior="padding">
      <ButtomDismiss onPress={closeModal()}>
        <AntDesign name="close" color={colors.black} size={24} />
      </ButtomDismiss>

      <Content>
        <Title>Create Todo List</Title>
        <Input placeholder={'List name?'} />
        <Submit>
          <Label>Create</Label>
        </Submit>
      </Content>
    </KeyboardAvoiding>
  );
}
