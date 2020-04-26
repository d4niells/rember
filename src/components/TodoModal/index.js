import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { create, update } from '~/services/notes';
import db from '~/services/firebase';
import { documentSnapShot } from '~/services/firestoreHelpers';
import { getDocument } from '~/services/firestoreHelpers';

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

export default function TodoModal({ categoryData, closeModal }) {
  const [title, setTitle] = useState(null);
  const [notes, setNotes] = useState([]);
  const [countCompleted, setCountCompleted] = useState(0);
  const taskCount = categoryData.todos.length;

  useEffect(() => {
    const categoryRef = getDocument(categoryData.path);
    const query = db.collection('notes').where('category', '==', categoryRef);
    const unsubscribeNotes = documentSnapShot(query, (data) => setNotes(data));

    return unsubscribeNotes;
  }, [categoryData]);

  useEffect(() => {
    const count = notes.filter((note) => note.completed).length;
    setCountCompleted(count);
  }, [notes]);

  const handleAdd = async () => {
    const categoryRef = getDocument(categoryData.path);
    await create({ title, categoryRef });

    setTitle(null);
  };

  const handleEdit = async (note) => {
    const noteRef = getDocument(note.path);

    const editedNote = { ...note, completed: !note.completed };
    await update(editedNote, noteRef);
  };

  const renderTodos = (item) => {
    return (
      <ConatinerTodo>
        <Checkout onPress={() => handleEdit(item)}>
          <Ionicons
            name={item.completed ? 'ios-square' : 'ios-square-outline'}
            color={colors.gray}
            size={24}
          />
        </Checkout>
        <TodoTitle completed={item.completed}>{item.name}</TodoTitle>
      </ConatinerTodo>
    );
  };

  return (
    <Container>
      <ButtomDismiss onPress={closeModal}>
        <AntDesign name="close" color={colors.black} size={24} />
      </ButtomDismiss>

      <Header color={categoryData.color}>
        <Title>{categoryData.name}</Title>
        <Subtitle>
          {countCompleted} of {taskCount} tasks
        </Subtitle>
      </Header>

      <ContainerTasks>
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => renderTodos(item)}
          contentContainerStyle={{ paddingHorizontal: 32, paddingVertical: 32 }}
          showsVerticalScrollIndicator={false}
        />
      </ContainerTasks>
      <ContainerInput>
        <Input
          backgorund={categoryData.color}
          placeholder={'Create a task?'}
          onChangeText={(text) => setTitle(text)}
          value={title}
        />
        <Submit backgorund={categoryData.color} onPress={() => handleAdd()}>
          <AntDesign name="plus" color={colors.white} size={16} />
        </Submit>
      </ContainerInput>
    </Container>
  );
}
