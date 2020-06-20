import React from 'react';

import Section from '~/components/Section';
import PageScroll from '~/components/PageScroll';
import Feature from '~/components/Feature';

import { Container, Header, Footer, Title } from './styles';

export default function Explore() {
  return (
    <Container>
      <PageScroll>
        <Header>
          <Title>Pesquisar</Title>
        </Header>
      </PageScroll>
    </Container>
  );
}
