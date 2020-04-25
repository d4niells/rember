import React, { useState } from 'react';

import TodoModal from '~/components/TodoModal';
import Modal from '~/components/Modal';
import { Container, Title, Progress, Count, SubTitle, Footer } from './styles';

export default function TodoList({ list }) {
  const [showListVisible, setShowListVisible] = useState(false);

  const completedCount = list.todos.filter((todo) => todo.completed).length;
  const remainingCount = list.todos.length - completedCount;

  const toggleListModal = () => {
    setShowListVisible(!showListVisible);
  };

  return (
    <>
      <Modal visible={showListVisible} close={() => toggleListModal()}>
        <TodoModal categoryData={list} closeModal={() => toggleListModal()} />
      </Modal>
      <Container background={list.color} onPress={() => toggleListModal()}>
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
    </>
  );
}
