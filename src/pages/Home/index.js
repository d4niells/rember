import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
// Components
import TodoList from '~/components/TodoList';
import AddListModal from '~/components/AddListModal';
import Modal from '~/components/Modal';
// Services
import { listCategories } from '~/services/categories';
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
    const categories = async () => {
      const data = await listCategories();
      setCategories(data);
    };

    categories();
  }, []);

  const renderList = (list) => {
    return <TodoList list={list} />;
  };

  console.tron.log(categories);

  return (
    <Container>
      <Modal visible={visible} close={() => toggleVisible()}>
        <AddListModal closeModal={() => toggleVisible} />
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
