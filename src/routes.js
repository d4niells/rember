import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '~/pages/Home';
import SignIn from '~/pages/SignIn';

const userAUthenticated = true;
const isSignout = false;

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator>
    {userAUthenticated ? (
      // No token found, user isn't signed in
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: 'Sign in',
          animationTypeForReplace: isSignout ? 'pop' : 'push',
        }}
      />
    ) : (
      <Stack.Screen name="Home" component={Home} />
    )}
  </Stack.Navigator>
);

export default Routes;
