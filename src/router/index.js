import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ApartmentScreen,
  ForgotPassword,
  ForgotPasswordScreen,
  HomeScreen,
  HotelScreen,
  ProfileScreen,
  SavedScreen,
  SignInScreen,
  SignUpScreen,
  SpalshScreen,
  StartScreen,
  TripsScreen,
  WelcomeScreenOne,
  WelcomeScreenThree,
  WelcomeScreenTwo,
} from '../screens';
import {BottomNavigator} from '../components';
import {COLORS} from '../constants';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Explore"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Trips"
        component={TripsScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
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
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
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
      />

      <Stack.Screen
        name="HotelScreen"
        component={HotelScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ApartmentScreen"
        component={ApartmentScreen}
        options={{
          headerShown: false,
        }}
      /> */}

      {/* Screen yang di jalankan */}
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
