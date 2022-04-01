import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {
  ForgotPassword,
  SpalshScreen,
  StartScreen,
  SignIn,
  SignUp,
  WelcomeScreenOne,
  WelcomeScreenTwo,
  WelcomeScreenThree,
} from './screens';
import Router from './router';

const MainApp = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

const App = () => {
  return <MainApp />;
};

export default App;
