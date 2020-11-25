import { createDrawerNavigator } from '@react-navigation/drawer';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import React from 'react';

import { DrawerContent } from '../components';
import { calendar } from '../config';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'OutfitIdeas';

  switch (routeName) {
    case 'OutfitIdeas':
      return 'News OutfitIdeas';
    case 'FavouriteOutfits':
      return 'Favourite';
    case 'EditProfile':
      return 'Profile';
    case 'TransactionHistory':
      return 'My TransactionHistory';
    case 'NotificationsSettings':
      return 'Settings';
  }
}

const { DRAWER_WIDTH } = calendar;

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="OutfitIdeas"
    drawerContent={(props) => <DrawerContent {...props} />}
    drawerStyle={{ width: DRAWER_WIDTH }}
    screenOptions={{ headerShown: false }}
  >
    <Drawer.Screen
      name="Main"
      component={MainNavigator}
      options={({ route }) => ({
        headerTitle: getHeaderTitle(route),
      })}
    />
    <Drawer.Screen name="Auth" component={AuthNavigator} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
