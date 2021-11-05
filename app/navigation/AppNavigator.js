import { createDrawerNavigator } from "@react-navigation/drawer";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { constants } from "../config";
import AuthNavigator from "./AuthNavigator";
import DrawerContent from "./drawer/DrawerContent";
import MainNavigator from "./MainNavigator";

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "OutfitIdeas";

  switch (routeName) {
    case "OutfitIdeas":
      return "News OutfitIdeas";
    case "FavouriteOutfits":
      return "Favourite";
    case "EditProfile":
      return "Profile";
    case "TransactionHistory":
      return "My TransactionHistory";
    case "NotificationsSettings":
      return "Settings";
  }
}

const { DRAWER_WIDTH } = constants;

const Drawer = createDrawerNavigator();

const AppNavigator = () => (
  <Drawer.Navigator
    initialRouteName="OutfitIdeas"
    drawerContent={(props) => <DrawerContent {...props} />}
    screenOptions={{
      headerShown: false,
      drawerType: "front",
      drawerStyle: {
        width: DRAWER_WIDTH,
      },
    }}
  >
    <Drawer.Screen name="Auth" component={AuthNavigator} />
    <Drawer.Screen
      name="Main"
      component={MainNavigator}
      options={({ route }) => ({
        headerTitle: getHeaderTitle(route),
      })}
    />
  </Drawer.Navigator>
);

export default AppNavigator;
