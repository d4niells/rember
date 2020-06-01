import React from 'react';

import { Container, Scroll } from './styles';

export default function PageScroll({ children }) {
  return (
    <Container>
      <Scroll>{children}</Scroll>
    </Container>
  );
}
