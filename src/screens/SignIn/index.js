import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, InputField, Space} from '../../components';
import {COLORS} from '../../constants';

const SignIn = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.headerTitle}>Login</Text>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <InputField label="Email Address" placeholder="Type your email" />
          <Space height={20} />
          <InputField label="Password" placeholder="Type your password" />
          <Space height={16} />
          <Text style={styles.text1}>Forgot password?</Text>
          <Space height={24} />
          <Button labelBtn="Sign In" />
          <Space height={58} />
          <Text style={styles.text2}>Don’t have an account?</Text>
          <Space height={20} />
          <Button
            labelBtn="Sign Up"
            borderColor={COLORS.primary2}
            btnColor={COLORS.white}
            textColor={COLORS.primary2}
            borderBtn={1.5}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: COLORS.white},
  headerTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: COLORS.primary2,
    textAlign: 'center',
    marginTop: 36,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 28,
  },
  text1: {
    textAlign: 'right',
    fontFamily: 'Poppins-Regular',
    color: COLORS.gray,
  },
  text2: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.gray,
    textAlign: 'center',
  },
});
