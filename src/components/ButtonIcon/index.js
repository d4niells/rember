import React from 'react';

import { Container, Button } from './styles';

export default function ButtonIcon({ children, ...props }) {
  return (
    <Container>
      <Button {...props}>{children}</Button>
    </Container>
  );
}
