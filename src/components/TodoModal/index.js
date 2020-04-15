import React, {useState} from 'react';
import {FlatList} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '~/styles/index';
import {
  Container,
  ButtomDismiss,
  Header,
  Title,
  Subtitle,
  Section,
} from './styles';

export default function TodoModal({list, closeModal}) {
  const [name, setName] = useState(list.name);
  const [color, setColor] = useState(list.color);
  const [todos, setTodos] = useState(list.todos);

  const taskCount = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;

  const renderTodos = (item) => {
    return <Title>{item.title}</Title>;
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

      <Section>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.title}
          renderItem={({item}) => renderTodos(item)}
        />
      </Section>
    </Container>
  );
}
