import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import {
  EditProfileScreen,
  FavouriteOutfitsScreen,
  NotificationsSettingsScreen,
  OutfitIdeasScreen,
  TransactionHistoryScreen,
} from '../screens';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="OutfitIdeas" component={OutfitIdeasScreen} />
      <Stack.Screen name="FavouriteOutfits" component={FavouriteOutfitsScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen} />
      <Stack.Screen name="NotificationsSettings" component={NotificationsSettingsScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
