import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Swipeable } from 'react-native-gesture-handler';

import db from '~/services/firebase';
import { create, update } from '~/services/notes';
import { getDocument } from '~/services/firestoreHelpers';
import { documentSnapShot } from '~/services/firestoreHelpers';

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
  DeleteButton,
  AnimatedView,
  AnimatedText,
} from './styles';

export default function TodoModal({ categoryData, closeModal }) {
  const userPath = useSelector((state) => state.user.path);

  const [title, setTitle] = useState(null);
  const [notes, setNotes] = useState([]);
  const [countCompleted, setCountCompleted] = useState(0);
  const taskCount = categoryData.todos.length;

  useEffect(() => {
    const categoryRef = getDocument(categoryData.path);
    const userRef = getDocument(userPath);

    const query = db
      .collection('notes')
      .where('category', '==', categoryRef)
      .where('user', '==', userRef)
      .where('actived', '==', true);

    const unsubscribeNotes = documentSnapShot(query, (data) => setNotes(data));

    return unsubscribeNotes;
  }, [categoryData, userPath]);

  useEffect(() => {
    const count = notes.filter((note) => note.completed).length;
    setCountCompleted(count);
  }, [notes]);

  const handleAdd = async () => {
    const categoryRef = getDocument(categoryData.path);
    const userRef = getDocument(userPath);

    await create({ title, categoryRef, userRef });

    setTitle(null);
  };

  const handleEdit = async (note) => {
    const noteRef = getDocument(note.path);

    const editedNote = { ...note, completed: !note.completed };
    await update(editedNote, noteRef);
  };

  const handleDelete = async (note) => {
    const noteRef = getDocument(note.path);

    const deletedNote = { ...note, actived: false };
    await update(deletedNote, noteRef);
  };

  const renderTodos = (item) => {
    return (
      <Swipeable renderRightActions={(_, dragX) => rightActions(dragX, item)}>
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
      </Swipeable>
    );
  };

  const rightActions = (dragX, item) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0.9],
      extrapolate: 'clamp',
    });

    const opacity = dragX.interpolate({
      inputRange: [-100, -20, 0],
      outputRange: [1, 0.9, 0],
      extrapolate: 'clamp',
    });
    return (
      <AnimatedView style={{ opacity: opacity }}>
        <DeleteButton onPress={() => handleDelete(item)}>
          <AnimatedText style={{ transform: [{ scale }] }}>Delete</AnimatedText>
        </DeleteButton>
      </AnimatedView>
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
