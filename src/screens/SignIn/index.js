import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {InputField, Space} from '../../components';
import {COLORS} from '../../constants';

const SignIn = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
      <Text style={{backgroundColor: COLORS.white}}>Log in</Text>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          paddingHorizontal: 24,
          paddingVertical: 28,
        }}>
        <InputField label="Email Address" placeholder="Type your email" />
        <Space height={20} />
        <InputField label="Email Address" placeholder="Type your email" />
        <Space height={16} />
        <Text style={{textAlign: 'right'}}>Forgot password?</Text>
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
