import { createStackNavigator } from "@react-navigation/stack";

import {
  ForgotPasswordScreen,
  LoginScreen,
  OnBoardingScreen,
  PasswordChangedScreen,
  RegisterScreen,
  WelcomeScreen,
} from "../screens";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, presentation: "transparentModal" }}
  >
    <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    <Stack.Screen name="PasswordChanged" component={PasswordChangedScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
