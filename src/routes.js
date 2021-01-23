import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { format } from 'date-fns';

import Header from '~/components/Header';

import Dashboard from '~/pages/Dashboard';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

export default function Routes() {
  const Stack = createStackNavigator();

  const { signed } = useSelector((state) => state.auth);

  const LoginStack = () => {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    );
  };

  const MainStack = () => {
    return (
      <Stack.Navigator
        headerMode="screen"
        screenOptions={{
          header: ({ scene, previous, navigation }) => (
            <Header scene={scene} previous={previous} navigation={navigation} />
          ),
        }}
      >
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: 'Hey, Daniel Oliveira',
            subtitle: format(new Date(), 'PP'),
          }}
        />
      </Stack.Navigator>
    );
  };

  return signed ? <MainStack /> : <LoginStack />;
}
