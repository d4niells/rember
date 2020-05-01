import React from 'react';
import { Container, Input, LabelError } from './styles';

export default function TextInput({ errorText, ...props }) {
  return (
    <Container>
      <Input underlineColor="transparent" mode="outlined" {...props} />
      {errorText ? <LabelError>{errorText}</LabelError> : null}
    </Container>
  );
}
