import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ForgotPassword,
  Home,
  Profile,
  Saved,
  SignIn,
  SignUp,
  SpalshScreen,
  StartScreen,
  Trips,
  WelcomeScreenOne,
  WelcomeScreenThree,
  WelcomeScreenTwo,
} from '../screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Explore"
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Trips"
        component={Trips}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="SplashScreen"
        component={SpalshScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StartScreen"
        component={StartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WelcomeScreenOne"
        component={WelcomeScreenOne}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WelcomeScreenTwo"
        component={WelcomeScreenTwo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WelcomeScreenThree"
        component={WelcomeScreenThree}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
