import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import {
  BoardingScreen,
  ForgotPasswordScreen,
  LoginScreen,
  PasswordChangedScreen,
  RegisterScreen,
  WelcomeScreen,
} from '../screens/auth';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Boarding" component={BoardingScreen} />
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    <Stack.Screen name="PasswordChanged" component={PasswordChangedScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
