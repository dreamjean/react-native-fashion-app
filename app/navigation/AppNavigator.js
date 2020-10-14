import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainNavigator from './MainNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
