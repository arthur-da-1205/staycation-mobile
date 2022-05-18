import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  CategoryScreen,
  DetailScreen,
  ForgotPassword,
  ForgotPasswordScreen,
  HomeScreen,
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
import EditProfileScreen from '../screens/EditProfileScreen';
import {
  BookingScreen,
  SuccessBookingScreen,
  TransferBankScreen,
} from '../screens/PaymentScreen';

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
      <Stack.Screen
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
        name="MainApp"
        component={MainApp}
        options={{
          headerShown: false,
          contentStyle: {backgroundColor: COLORS.white},
        }}
      />
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="BookingScreen"
        component={BookingScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="TransferBankScreen"
        component={TransferBankScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SuccessBookingScreen"
        component={SuccessBookingScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
