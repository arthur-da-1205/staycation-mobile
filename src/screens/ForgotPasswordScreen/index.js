import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, InputField} from '../../components';

const ForgotPasswordScreen = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.header}>
        <Text style={styles.forgotPassText}>FORGOT PASSWORD</Text>
        <Icon name="lock" size={80} />
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{textAlign: 'center'}}>
          Enter your email below to receive your password reset instructions
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <InputField iconName="email-outline" placeholder="Your email" />
        <Button labelBtn="Send Email" />
      </View>

      <View style={styles.footer}>
        <View style={styles.backTextContainer}>
          <TouchableOpacity>
            <Text style={styles.signInText}>I remember the password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  header: {flex: 1, alignItems: 'center'},
  forgotPassText: {
    fontFamily: 'Poppins-Medium',
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {flex: 2, justifyContent: 'center'},
  footer: {flex: 1, alignItems: 'center'},
  backTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: {fontFamily: 'Poppins-Regular'},
  signInText: {fontFamily: 'Poppins-Regular', textDecorationLine: 'underline'},
});
