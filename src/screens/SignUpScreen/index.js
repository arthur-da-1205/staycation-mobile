import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Button, Header, InputField, Space} from '../../components';
import {COLORS} from '../../constants';

const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title={'Create account'} />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <InputField label="Full Name" placeholder="Type your full name" />
          <Space height={20} />
          <InputField label="Email Address" placeholder="Type your email" />
          <Space height={20} />
          <InputField
            label="Password"
            placeholder="Type your password"
            secureTextEntry
          />
          <Space height={20} />
          <InputField
            label="Phone Number"
            placeholder="Type your phone number"
          />
          <Space height={24} />
          <Button labelBtn="Sign Up" />
          <Space height={20} />
          <View style={styles.textContent}>
            <Text style={styles.text1}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignInScreen');
              }}>
              <Text style={styles.text1}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: COLORS.white},
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 28,
  },
  textContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.primary2,
    marginRight: 4,
  },
  text2: {
    fontFamily: 'Poppins-Medium',
    color: COLORS.primary2,
  },
});
