import React, { useState } from 'react';
import SimpleLine from 'react-native-vector-icons/SimpleLineIcons';

// Styles
import { Container, Button, Card, Title, Icon, SubTitle } from './styles';
import { colors } from '~/styles/index';

export default function Feature({ category }) {
  return (
    <Container>
      <Button onPress={() => {}}>
        <Card background={colors.white}>
          <Icon>
            <SimpleLine color={colors.white} size={30} name={'pin'} />
          </Icon>
          <Title>Lembrete</Title>
          <SubTitle>7 lembretes</SubTitle>
        </Card>
      </Button>

      <Button onPress={() => {}}>
        <Card background={colors.white} onPress={() => {}}>
          <Icon>
            <SimpleLine color={colors.white} size={30} name={'bell'} />
          </Icon>
          <Title>Alarme</Title>
          <SubTitle> 2 alarmes</SubTitle>
        </Card>
      </Button>

      <Button onPress={() => {}}>
        <Card background={colors.white} onPress={() => {}}>
          <Icon>
            <SimpleLine color={colors.white} size={30} name={'speedometer'} />
          </Icon>
          <Title>Pomodoro</Title>
          <SubTitle> 1 pomodoro</SubTitle>
        </Card>
      </Button>

      <Button onPress={() => {}}>
        <Card background={colors.white} onPress={() => {}}>
          <Icon>
            <SimpleLine color={colors.white} size={30} name={'note'} />
          </Icon>
          <Title>Tarefa</Title>
          <SubTitle> 18 tarefas</SubTitle>
        </Card>
      </Button>
    </Container>
  );
}
