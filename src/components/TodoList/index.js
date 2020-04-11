import React from 'react';

import {Container, Title, Progress, Count, SubTitle, Footer} from './styles';

export default function TodoList({list}) {
  const completedCount = list.todos.filter((todo) => todo.completed).length;
  const remainingCount = list.todos.length - completedCount;

  return (
    <Container background={list.color}>
      <Title>{list.name}</Title>
      <Progress>
        <Count>{remainingCount}</Count>
        <SubTitle>Remaining</SubTitle>
      </Progress>
      <Progress>
        <Count>{completedCount}</Count>
        <SubTitle>Completed</SubTitle>
      </Progress>
    </Container>
  );
}
