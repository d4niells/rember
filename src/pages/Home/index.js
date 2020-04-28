import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
// Components
import TodoList from '~/components/TodoList';
import AddListModal from '~/components/AddListModal';
import Modal from '~/components/Modal';
// Services
import { listCategories } from '~/services/categories';
import { documentSnapShot } from '~/services/firestoreHelpers';
import db from '~/services/firebase';
// Styles
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
import { colors } from '~/styles/index';

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [categories, setCategories] = useState([]);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    const query = db.collection('categories');
    const unsubscribeCategory = documentSnapShot(query, (data) =>
      setCategories(data)
    );

    return unsubscribeCategory;
  }, []);

  const renderList = (item) => {
    return <TodoList category={item} />;
  };

  return (
    <Container>
      <Modal visible={visible} close={() => toggleVisible()}>
        <AddListModal closeModal={toggleVisible} />
      </Modal>

      <Header>
        <Devider />
        <Title>
          Todo <Spam>lists</Spam>
        </Title>
        <Devider />
      </Header>

      <ContainerButtom>
        <AddList onPress={() => toggleVisible()}>
          <AntDesign name="plus" size={20} color={colors.blue} />
        </AddList>
        <Spam>Add list</Spam>
      </ContainerButtom>

      <ContainerFlatlist>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          renderItem={({ item }) => renderList(item)}
        />
      </ContainerFlatlist>
    </Container>
  );
}
