import React, { useState } from 'react';
import { FlatList } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createNote } from '~/services/notes';

import { colors } from '~/styles/index';
import {
  Container,
  ButtomDismiss,
  Header,
  Title,
  Subtitle,
  ContainerTasks,
  ConatinerTodo,
  Checkout,
  TodoTitle,
  ContainerInput,
  Input,
  Submit,
} from './styles';

export default function TodoModal({ list, closeModal }) {
  const [name, setName] = useState(list.name);
  const [title, setTitle] = useState(null);
  const [color, setColor] = useState(list.color);
  const [todos, setTodos] = useState(list.todos);

  const taskCount = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;

  const handleAdd = async () => {
    await createNote(title);
  };

  const renderTodos = (item) => {
    const isCompleted = item.completed;
    return (
      <ConatinerTodo>
        <Checkout>
          <Ionicons
            name={isCompleted ? 'ios-square' : 'ios-square-outline'}
            color={colors.gray}
            size={24}
          />
        </Checkout>
        <TodoTitle completed={isCompleted}>{item.title}</TodoTitle>
      </ConatinerTodo>
    );
  };

  return (
    <Container>
      <ButtomDismiss onPress={closeModal}>
        <AntDesign name="close" color={colors.black} size={24} />
      </ButtomDismiss>

      <Header color={color}>
        <Title>{name}</Title>
        <Subtitle>
          {completed} of {taskCount} tasks
        </Subtitle>
      </Header>

      <ContainerTasks>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => renderTodos(item)}
          contentContainerStyle={{ paddingHorizontal: 32, paddingVertical: 32 }}
          showsVerticalScrollIndicator={false}
        />
      </ContainerTasks>
      <ContainerInput>
        <Input
          backgorund={color}
          placeholder={'Create a task?'}
          onChangeText={(text) => setTitle(text)}
        />
        <Submit backgorund={color} onPress={() => handleAdd()}>
          <AntDesign name="plus" color={colors.white} size={16} />
        </Submit>
      </ContainerInput>
    </Container>
  );
}
