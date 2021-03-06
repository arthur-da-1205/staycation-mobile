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

const SignInScreen = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title={'Login'} />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <InputField label="Email Address" placeholder="Type your email" />
          <Space height={20} />
          <InputField label="Password" placeholder="Type your password" />
          <Space height={16} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgotPasswordScreen');
            }}>
            <Text style={styles.text1}>Forgot Password?</Text>
          </TouchableOpacity>
          <Space height={24} />
          <Button
            labelBtn="Sign In"
            onPress={() => navigation.navigate('MainApp')}
          />
          <Space height={58} />
          <Text style={styles.text2}>Don’t have an account?</Text>
          <Space height={20} />
          <Button
            labelBtn="Sign Up"
            borderColor={COLORS.primary2}
            btnColor={COLORS.white}
            textColor={COLORS.primary2}
            borderBtn={1.5}
            onPress={() => navigation.navigate('SignUpScreen')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: COLORS.white},
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
