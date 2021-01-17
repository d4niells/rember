import React from 'react';
import { Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Section from '~/components/Section';
import ButtonIcon from '~/components/ButtonIcon';

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
  CardTask,
  LeftContent,
  CenterContent,
  RightContent,
  TaskTitle,
  TaskDate,
  FilterIcon,
  MoreSettingIcon,
} from './styles';

export default function Dashboard() {
  const data = [
    {
      id: '1',
      title: 'Wireframing web design',
      date: '9am to 11am',
      color: '#ffb63a',
    },
    {
      id: '2',
      title: 'Hifi process design',
      date: '1pm to 3pm',
      color: '#3cf0d4',
    },
    {
      id: '3',
      title: 'Illustration sketch',
      date: '3pm to 5pm',
      color: '#c93aff',
    },
    {
      id: '4',
      title: 'Proptyping principle',
      date: '9am to 11am',
      color: '#567fff',
    },
  ];

  const handleMoreSettings = () => {
    console.log('Open more settings');
  };

  const handleOpenTaskDetails = (task) => {
    console.log('task opened', task);
  };

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
          <ButtonIcon onPress={handleMoreSettings}>
            <MoreSettingIcon />
          </ButtonIcon>
        </Right>
      </Header>

      <CardSearch>
        <InputSeach placeholder="Find task" />
        <FilterButton>
          <FilterIcon />
        </FilterButton>
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

      <Section title="Today task">
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => (
            <CardTask>
              <LeftContent color={item.color} />
              <CenterContent>
                <TaskTitle>{item.title}</TaskTitle>
                <TaskDate>{item.date}</TaskDate>
              </CenterContent>
              <RightContent onPress={() => handleOpenTaskDetails(item)}>
                <Text>More</Text>
              </RightContent>
            </CardTask>
          )}
        />
      </Section>
    </Container>
  );
}
