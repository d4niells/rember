import React from 'react';
import {FlatList} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Container,
  Header,
  Devider,
  Title,
  Spam,
  ContainerButtom,
  AddList,
  ContainerFlatlist,
} from './styles';
import TodoList from '~/components/TodoList';
import tempData from '~/services/tempData';
import {colors} from '~/styles/index';

export default function Home() {
  return (
    <Container>
      <Header>
        <Devider />
        <Title>
          Todo <Spam>lists</Spam>
        </Title>
        <Devider />
      </Header>
      <ContainerButtom>
        <AddList>
          <AntDesign name="plus" size={20} color={colors.blue} />
        </AddList>
      </ContainerButtom>
      <ContainerFlatlist>
        <FlatList
          data={tempData}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          renderItem={({item}) => <TodoList list={item} />}
        />
      </ContainerFlatlist>
    </Container>
  );
}
