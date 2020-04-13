import React from 'react';

import {Container} from './styles';

export default function Modal({children, visible, close}) {
  return (
    <Container animationType="slide" visible={visible} onRequestClose={close}>
      {children}
    </Container>
  );
}
