import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Container,
  Header,
  Devider,
  Title,
  Spam,
  ContainerButtom,
  AddList,
} from './styles';
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
    </Container>
  );
}
