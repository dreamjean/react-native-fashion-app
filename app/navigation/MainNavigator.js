import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import {
  // EditProfileScreen,
  FavouriteOutfitsScreen,
  // NotificationsSettingsScreen,
  OutfitIdeasScreen,
  TransactionHistoryScreen,
} from '../screens';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator headerMode="none">
      <Tab.Screen name="OutfitIdeas" component={OutfitIdeasScreen} />
      <Tab.Screen name="FavouriteOutfits" component={FavouriteOutfitsScreen} />
      <Tab.Screen name="TransactionHistory" component={TransactionHistoryScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
