import React from 'react';

import { Container, Title } from './styles';

export default function Section({ title, color, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}
