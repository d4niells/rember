import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
// Components
import TodoList from '~/components/TodoList';
import AddListModal from '~/components/AddListModal';
import Modal from '~/components/Modal';
import Section from '~/components/Section';
import PageScroll from '~/components/PageScroll';
// Services
import { documentSnapShot, getDocument } from '~/services/firestoreHelpers';
import db from '~/services/firebase';
// Styles
import {
  Container,
  Scroll,
  Header,
  Footer,
  Title,
  ContainerButtom,
  List,
  AddList,
  ContainerFlatlist,
} from './styles';
import { colors } from '~/styles/index';

export default function Home() {
  const userPath = useSelector((state) => state.user.path);

  const [visible, setVisible] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const userRef = getDocument(userPath);
    const query = db.collection('categories').where('user', '==', userRef);
    const unsubscribeCategory = documentSnapShot(query, (data) =>
      setCategories(data)
    );

    return unsubscribeCategory;
  }, [userPath]);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const renderList = (item) => {
    return <TodoList category={item} />;
  };

  return (
    <Container>
      <PageScroll>
        <Header>
          <Title>Welcome to Rember!</Title>
        </Header>

        <Footer>
          <ContainerButtom>
            <AddList onPress={() => toggleVisible()}>
              <AntDesign name="plus" size={20} color={colors.blue} />
            </AddList>
          </ContainerButtom>

          <Section title={'Categorias'}>
            <ContainerFlatlist>
              <List
                data={categories}
                keyExtractor={(item) => item.id}
                horizontal={true}
                decelerationRate={0}
                renderItem={({ item }) => renderList(item)}
              />
            </ContainerFlatlist>
          </Section>

          <Section title={'Hábitos'}>
            <ContainerFlatlist>
              <List
                data={categories}
                keyExtractor={(item) => item.id}
                horizontal={true}
                decelerationRate={0}
                renderItem={({ item }) => renderList(item)}
              />
            </ContainerFlatlist>
          </Section>
        </Footer>

        <Modal visible={visible} close={() => toggleVisible()}>
          <AddListModal closeModal={toggleVisible} />
        </Modal>
      </PageScroll>
    </Container>
  );
}
