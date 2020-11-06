import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import { DrawerContent } from '../components/drawer';
// import AuthNavigator from './AuthNavigator';
import { calendar } from '../config';
import { HomeScreen, OutfitIdeasScreen } from '../screens';

const { DRAWER_WIDTH } = calendar;

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerStyle={{ width: DRAWER_WIDTH }}
    drawerContent={(props) => <DrawerContent {...props} />}
  >
    <Drawer.Screen
      name="Home"
      component={HomeScreen}
      options={{
        drawerLabel: () => null,
        title: null,
        drawerIcon: () => null,
      }}
    />
    <Drawer.Screen name="OutfitIdea" component={OutfitIdeasScreen} />
    {/* <Drawer.Screen name="Auth" component={AuthNavigator} /> */}
  </Drawer.Navigator>
);

export default DrawerNavigator;
