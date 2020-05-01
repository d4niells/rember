import React from 'react';
import '~/config/ReactotronConfig';
import Routes from '~/routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
