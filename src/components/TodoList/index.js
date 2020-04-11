import React from 'react';

import {Container, Title} from './styles';

export default function TodoList({list}) {
  return (
    <Container background={list.color}>
      <Title>{list.name}</Title>
    </Container>
  );
}
