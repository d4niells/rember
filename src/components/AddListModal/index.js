import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Container, ButtomDismiss} from './styles';
import {colors} from '~/styles/index';

export default function AddListModal({closeModal}) {
  return (
    <Container behavior="padding">
      <ButtomDismiss onPress={closeModal()}>
        <AntDesign name="close" color={colors.black} size={24} />
      </ButtomDismiss>
    </Container>
  );
}
