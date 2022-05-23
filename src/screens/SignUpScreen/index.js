import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Button, Header, InputField, Space} from '../../components';
import {COLORS} from '../../constants';

const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignUp = () => {
    if (email === '' || password === '' || name === '' || phone === '') {
      console.log('isi bro');
    } else {
      console.log([email, password, name, phone]);
      // console.log();
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <View style={styles.page}>
      <Header title={'Create account'} />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <InputField
            label="Full Name"
            placeholder="Type your full name"
            value={name}
            onChangeText={value => setName(value)}
          />
          <Space height={20} />
          <InputField
            label="Email Address"
            placeholder="Type your email"
            value={email}
            onChangeText={v => setEmail(v)}
          />
          <Space height={20} />
          <InputField
            label="Password"
            placeholder="Type your password"
            value={password}
            onChangeText={v => setPassword(v)}
            secureTextEntry
          />
          <Space height={20} />
          <InputField
            label="Phone Number"
            placeholder="Type your phone number"
            value={phone}
            onChangeText={v => setPhone(v)}
          />
          <Space height={24} />
          <Button labelBtn="Sign Up" onPress={handleSignUp} />
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
