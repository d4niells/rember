import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
// Components
import TodoModal from '~/components/TodoModal';
import Modal from '~/components/Modal';
// Styles
import { Container, Title, Progress, SubTitle } from './styles';
import { colors } from '~/styles/index';

export default function TodoList({ category }) {
  const [showListVisible, setShowListVisible] = useState(false);
  const taskCounter = category.todos.length;

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
      <Container background={colors.white} onPress={() => toggleListModal()}>
        <Progress>
          <Icon color={category.color} size={30} name={'notebook'} />
          <Title>{category.name}</Title>
          <SubTitle>{taskCounter} Tarefas</SubTitle>
        </Progress>
      </Container>
    </>
  );
}
