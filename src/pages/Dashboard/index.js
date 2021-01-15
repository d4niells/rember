import React from 'react';
import { Text } from 'react-native';

import {
  Container,
  Header,
  Left,
  Center,
  Right,
  ImageProfile,
  Date,
  UserName,
  CardSearch,
  InputSeach,
  FilterButton,
  CardResume,
  CardActive,
  CardOngoing,
  CardDone,
  CardResumeTitle,
  CardResumeSubtitle,
} from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Header>
        <Left>
          <ImageProfile />
        </Left>
        <Center>
          <Date>Mon, 12 January 2021</Date>
          <UserName>Hi, Daniel Oliveira</UserName>
        </Center>
        <Right>
          <Text>Daniel Oliveira</Text>
        </Right>
      </Header>
      <CardSearch>
        <InputSeach placeholder="Find task" />
        <FilterButton />
      </CardSearch>

      <CardResume>
        <CardActive active>
          <CardResumeTitle active>18</CardResumeTitle>
          <CardResumeSubtitle active>Active</CardResumeSubtitle>
        </CardActive>
        <CardOngoing>
          <CardResumeTitle>13</CardResumeTitle>
          <CardResumeSubtitle>Ongoing</CardResumeSubtitle>
        </CardOngoing>
        <CardDone>
          <CardResumeTitle>5</CardResumeTitle>
          <CardResumeSubtitle>Done</CardResumeSubtitle>
        </CardDone>
      </CardResume>
    </Container>
  );
}
