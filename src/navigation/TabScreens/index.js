import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabNavigation from '~/components/TabNavigation';

import Home from '~/pages/Home';
import Task from '~/pages/Task';
import Explore from '~/pages/Explore';
import Profile from '~/pages/Profile';

export default function TabScreens() {
  const Tab = createBottomTabNavigator();

  return (
    <TabNavigation>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Task" component={Task} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Profile" component={Profile} />
    </TabNavigation>
  );
}
