import React from 'react';
import { Container, Input } from './styles';

export default function TextInput({ errorText, ...props }) {
  return (
    <Container>
      <Input underlineColor="transparent" mode="outlined" {...props} />
    </Container>
  );
}
