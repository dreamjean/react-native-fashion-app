import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  BoardingScreen,
  ForgotPasswordScreen,
  LoginScreen,
  PasswordChangedScreen,
  RegisterScreen,
  WelcomeScreen,
} from '../screens';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Boarding" component={BoardingScreen} />
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    <Stack.Screen name="PasswordChanged" component={PasswordChangedScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
