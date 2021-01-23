import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';

const Routes = () => {
  const signed = useSelector((state) => state.auth.signed);
  const signout = useSelector((state) => state.auth.signout);

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      {signed ? (
        <Stack.Screen name="Dashboard" component={Dashboard} />
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
