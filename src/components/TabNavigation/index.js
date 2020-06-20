import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Label } from './styles';
import { colors } from '~/styles/index';

export default function TabNavigation({ children }) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      lazy={false}
      screenOptions={({ route }) => ({
        tabBarLabel: ({ focused }) => {
          if (route.name === 'Home') {
            return <Label>{(focused && 'Início') || null}</Label>;
          }

          if (route.name === 'Task') {
            return <Label>{(focused && 'Tarefas') || null}</Label>;
          }

          if (route.name === 'Explore') {
            return <Label>{(focused && 'Pesquisar') || null}</Label>;
          }

          if (route.name === 'Profile') {
            return <Label>{(focused && 'Perfil') || null}</Label>;
          }
        },
        tabBarIcon: ({ color }) => {
          if (route.name === 'Home') {
            return <Icon name="home" size={20} color={color} />;
          }

          if (route.name === 'Task') {
            return <Icon name="notebook" size={20} color={color} />;
          }

          if (route.name === 'Explore') {
            return <Icon name="magnifier" size={20} color={color} />;
          }

          if (route.name === 'Profile') {
            return <Icon name="user" size={20} color={color} />;
          }

          // You can return any component that you like here!
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.gray,
      }}
    >
      {children}
    </Tab.Navigator>
  );
}
