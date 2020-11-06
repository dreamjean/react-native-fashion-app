import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { WelcomeScreen } from '../screens';

const Tab = createBottomTabNavigator();

const MainNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Welcome" component={WelcomeScreen} />
  </Tab.Navigator>
);

export default MainNavigator;
