import { createStackNavigator } from "@react-navigation/stack";

import {
  CartScreen,
  EditProfileScreen,
  FavoriteOutfitsScreen,
  OutfitIdeasScreen,
  SettingsScreen,
  TransactionHistoryScreen,
} from "../screens";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="OutfitIdeas" component={OutfitIdeasScreen} />
      <Stack.Screen name="FavoriteOutfits" component={FavoriteOutfitsScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen
        name="TransactionHistory"
        component={TransactionHistoryScreen}
      />
      <Stack.Screen name="NotificationsSettings" component={SettingsScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
