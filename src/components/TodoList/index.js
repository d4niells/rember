import React, { useState, useEffect } from 'react';
// Components
import TodoModal from '~/components/TodoModal';
import Modal from '~/components/Modal';
// Styles
import { Container, Title, Progress, Count, SubTitle } from './styles';

export default function TodoList({ category }) {
  const [showListVisible, setShowListVisible] = useState(false);
  const countCompleted = category.todos.filter((todo) => todo.completed).length;
  const remainingCount = category.todos.length - countCompleted;

  useEffect(() => {}, [category]);

  const toggleListModal = () => {
    setShowListVisible(!showListVisible);
  };

  return (
    <>
      <Modal visible={showListVisible} close={() => toggleListModal()}>
        <TodoModal
          categoryData={category}
          closeModal={() => toggleListModal()}
        />
      </Modal>
      <Container background={category.color} onPress={() => toggleListModal()}>
        <Title>{category.name}</Title>
        <Progress>
          <Count>{remainingCount}</Count>
          <SubTitle>Remaining</SubTitle>
        </Progress>
        <Progress>
          <Count>{countCompleted}</Count>
          <SubTitle>Completed</SubTitle>
        </Progress>
      </Container>
    </>
  );
}
