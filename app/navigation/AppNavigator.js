import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import { DrawerContent } from '../components/main/drawer';
// import AuthNavigator from './AuthNavigator';
import { calendar } from '../config';
import {
  EditProfileScreen,
  FavouriteOutfitsScreen,
  NotificationsSettingsScreen,
  OutfitIdeasScreen,
  TransactionHistoryScreen,
} from '../screens';

const { DRAWER_WIDTH } = calendar;

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerStyle={{ width: DRAWER_WIDTH }}
    drawerContent={(props) => <DrawerContent {...props} />}
    screenOptions={{ headerShown: false }}
  >
    <Drawer.Screen name="OutfitIdeas" component={OutfitIdeasScreen} />
    <Drawer.Screen name="FavouriteOutfits" component={FavouriteOutfitsScreen} />
    <Drawer.Screen name="EditProfile" component={EditProfileScreen} />
    <Drawer.Screen name="TransactionHistory" component={TransactionHistoryScreen} />
    <Drawer.Screen name="NotificationsSettings" component={NotificationsSettingsScreen} />
    {/* <Drawer.Screen name="Auth" component={AuthNavigator} /> */}
  </Drawer.Navigator>
);

export default DrawerNavigator;
