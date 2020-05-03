import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '~/pages/Home';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

const Stack = createStackNavigator();

const Routes = () => {
  const signed = useSelector((state) => state.auth.signed);
  const signout = useSelector((state) => state.auth.signout);

  return (
    <Stack.Navigator headerMode="none">
      {signed ? (
        <Stack.Screen name="Home" component={Home} />
      ) : (
        <>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              animationTypeForReplace: signout ? 'pop' : 'push',
            }}
          />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Routes;
